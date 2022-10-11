import React from "react";
import { Link } from "gatsby";
import { Image } from "~/components/ui-components";
import { ButtonAddToCart } from "~/components/shoppingCart";

export const ProductCard = ({ product }) => {
  const { title, handle, variants, featuredImage } = product;

  return (
    <div className="border product-card">
      <Link to={`/${handle}`} key={handle}>
        <div className="product-card__image">
          <Image img={featuredImage} />
        </div>
        <div className="p-4 text-center lowercase product-card__info ">
          <h3 className="font-bold">{title}</h3>
          <div className="lowercase product-card__price">
            {variants[0].price}eur
          </div>
        </div>
      </Link>
      <div className="flex justify-center mb-5">
        <ButtonAddToCart variantId={variants[0].shopifyId} />
      </div>
    </div>
  );
};
