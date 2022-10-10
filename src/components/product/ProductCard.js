import React from "react";
import { Link } from "gatsby";
import { Image } from "~/components/ui-components";

export const ProductCard = ({ product }) => {
  const {
    title,
    priceRangeV2: {
      maxVariantPrice: { amount: maxPrice },
      minVariantPrice: { amount: minPrice, currencyCode: currency },
    },
    media,
    handle,
  } = product;

  const price = maxPrice === minPrice ? `${minPrice}` : `from ${minPrice}`;
  return (
    <div className="border product-card">
      <Link to={`/${handle}`} key={handle}>
        <div className="product-card__image">
          <Image img={media[0].image} />
        </div>
        <div className="p-4 text-center lowercase product-card__info ">
          <h3 className="font-bold">{title}</h3>
          <div className="lowercase product-card__price">
            {price}
            {currency}
          </div>
        </div>
      </Link>
    </div>
  );
};
