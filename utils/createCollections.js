const { paginate } = require(`gatsby-awesome-pagination`);
const path = require(`path`);
module.exports = async ({ actions, graphql }) => {
  const template = path.resolve(`src/templates/Collection.js`);
  const { createPage } = actions;
  const collectionsQuery = await graphql(`
    query collectionsQuery {
      allShopifyCollection {
        nodes {
          handle
          productsCount
          products {
            id
          }
        }
      }
    }
  `);
  const collections = collectionsQuery.data.allShopifyCollection.nodes;

  return Promise.all(
    collections
      .filter((collection) => collection.productsCount > 0)
      .map((collection) =>
        paginate({
          createPage,
          pathPrefix: `/collections/${collection.handle}`,
          component: template,
          items: collection.products,
          itemsPerPage: 10,
          context: {
            handle: collection.handle,
          },
        })
      )
  );
};
