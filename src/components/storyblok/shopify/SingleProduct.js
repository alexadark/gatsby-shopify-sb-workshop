import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

export const SingleProduct = ({ blok }) => {
  const { _uid, headline, description, layout, product } = blok;
  const selectedProduct = product?.items && product?.items[0];
  const {
    image,
    name,
    description: productDescription,
  } = selectedProduct || {};
  console.log("selectedProduct", selectedProduct);
  return (
    <div
      key={_uid}
      {...storyblokEditable(blok)}
      className="container grid items-center gap-5 mx-auto my-10 sm:grid-cols-2"
    >
      <div className={`${layout && "order-2"} border `}>
        <img src={image} alt={`image for ${name}`} />
        <h3 className="pt-5 pb-2 text-xl font-bold text-center">{name}</h3>
        <p className="px-3 pb-3 text-center">{productDescription}</p>
      </div>
      <div>
        <h3 className="mb-5 text-4xl font-bold text-teal-600">{headline}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
