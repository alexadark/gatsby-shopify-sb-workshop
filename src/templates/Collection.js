import React from "react";
import { graphql } from "gatsby";
import Layout from "~/components/Layout";

import { ProductCard } from "~/components/product";

const Collection = ({ data }) => {
  const { shopifyCollection } = data;
  const { title, description } = shopifyCollection;
  const products = data.allShopifyProduct.nodes;
  return (
    <Layout>
      <div className="container px-4 py-10 mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold ">{title}</h1>
          <div className="collection-description">{description}</div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.handle} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Collection;

export const pageQuery = graphql`
  query ($handle: String!, $limit: Int!, $skip: Int) {
    shopifyCollection(handle: { eq: $handle }) {
      title
      handle
      description
    }
    allShopifyProduct(
      filter: { collections: { elemMatch: { handle: { eq: $handle } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        handle
        featuredImage {
          gatsbyImageData
          altText
        }
        variants {
          price
          shopifyId
        }
      }
    }
  }
`;
