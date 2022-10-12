import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
import { useStaticQuery, Link, graphql } from "gatsby";
import { ButtonAddToCart } from "~/components/shoppingCart";

const ALL_PRODUCTS_QUERY = graphql`
  query {
    allShopifyProduct(limit: 100) {
      nodes {
        id
        handle
        title
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants {
          shopifyId
        }
      }
    }
  }
`;

export const ProductsGrid = ({ blok }) => {
  const { headline, products } = blok;

  const data = useStaticQuery(ALL_PRODUCTS_QUERY);
  const allProducts = data.allShopifyProduct.nodes;

  return (
    <div
      key={blok._uid}
      {...storyblokEditable(blok)}
      className="container mx-auto"
    >
      <h1 className="mb-5 text-5xl font-bold text-center">{headline}</h1>
      <div className="grid gap-5 mb-10 md:grid-cols-3">
        {products.items?.map((sbProduct) => {
          const { name, image, id } = sbProduct;
          const product = allProducts.find((p) => p.title === name);
          const {
            handle,
            priceRangeV2: {
              maxVariantPrice: { amount: maxPrice },
              minVariantPrice: { amount: minPrice, currencyCode: currency },
            },
            variants,
          } = product;
          const price =
            maxPrice === minPrice ? `${minPrice}` : `from ${minPrice}`;

          return (
            <div className="border product-card">
              <Link to={`/${handle}`} key={id}>
                <div className="product-card__image">
                  <img src={image} />
                </div>
                <div className="p-4 text-center lowercase product-card__info ">
                  <h3 className="font-bold">{name}</h3>
                  <div className="lowercase product-card__price">
                    {price}
                    {currency}
                  </div>
                </div>
              </Link>
              <div className="flex justify-center mb-5">
                <ButtonAddToCart
                  variantId={variants[0].shopifyId}
                  className="btn"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
