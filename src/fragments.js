import { graphql } from "gatsby";
export const fragments = graphql`
  fragment ProductCardFragment on ShopifyProduct {
    title
    handle
    shopifyId
    id
    featuredImage {
      src
      altText
    }
    media {
      ... on ShopifyMediaImage {
        id
        image {
          gatsbyImageData
          altText
        }
      }
    }
    priceRangeV2 {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants {
      shopifyId
      id
    }
  }
`;
