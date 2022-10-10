import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const Image = ({ img, loading = "lazy", ...props }) => {
  return (
    <GatsbyImage
      loading={loading}
      image={img?.gatsbyImageData}
      alt={img.altText}
      {...props}
    />
  );
};
