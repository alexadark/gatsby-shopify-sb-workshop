import React from "react";
import { graphql } from "gatsby";
import Layout from "~/components/Layout";
import { Image } from "~/components/ui-components/Image";
import { ButtonAddToCart } from "~/components/shoppingCart";

const ProductPage = ({ data }) => {
  const { title, description, variants, featuredImage } = data.shopifyProduct;

  return (
    <Layout>
      <div className="container items-center gap-10 mx-auto my-10 product md:flex">
        <div className="flex-1 product__image">
          <Image img={featuredImage} />
        </div>
        <div className="flex-1 product__info">
          <h1 className="mb-2 font-bold">{title}</h1>
          <div className="mb-2 font-bold product__price">
            {variants[0].price}eur
          </div>
          <div className="product__description">{description}</div>
          <div className="mt-5">
            <ButtonAddToCart variantId={variants[0].shopifyId} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

export const pageQuery = graphql`
  query ($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      description
      featuredImage {
        gatsbyImageData
      }
      variants {
        price
        shopifyId
      }
      featuredImage {
        src
        altText
      }
    }
  }
`;
