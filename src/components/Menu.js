import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyCollection {
        nodes {
          handle
          title
        }
      }
    }
  `);
  const collections = data.allShopifyCollection.nodes.filter(
    (item) => item.handle !== "frontpage"
  );
  return (
    <nav>
      <ul className="flex items-center justify-between space-x-2">
        {collections.map((collection) => (
          <li key={collection.handle}>
            <Link
              to={`/collections/${collection.handle}`}
              className="lowercase"
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
