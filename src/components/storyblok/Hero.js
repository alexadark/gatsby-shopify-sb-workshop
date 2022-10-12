import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const Hero = ({ blok }) => {
  const { headline, description, image } = blok;
  return (
    <div className="relative" key={blok._uid} {...storyblokEditable(blok)}>
      <img
        src={image.filename}
        alt={image.alt}
        className="object-cover w-full h-[400px]"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="container mx-auto">
          <h1 className="mb-3 font-bold text-7xl">{headline}</h1>
          <h3 className="max-w-2xl mx-auto text-2xl">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
