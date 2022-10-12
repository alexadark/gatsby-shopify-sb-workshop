import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
import { useStaticQuery, Link, graphql } from "gatsby";
import { Image } from "~/components/ui-components";

export const CategoryGrid = ({ blok }) => {
  console.log("blok", blok);
  const { headline, categories } = blok;

  const ALL_COLLECTIONS_QUERY = graphql`
    query {
      allShopifyCollection(limit: 100) {
        nodes {
          handle
          id
          image {
            gatsbyImageData
          }
          title
        }
      }
    }
  `;
  const data = useStaticQuery(ALL_COLLECTIONS_QUERY);
  const allCollections = data.allShopifyCollection.nodes;
  return (
    <div
      className="container py-20 mx-auto "
      key={blok._uid}
      {...storyblokEditable(blok)}
    >
      <h2 className="mb-5 text-5xl font-bold text-center">{headline}</h2>
      <div className="justify-center gap-5 mx-auto md:flex">
        {categories.items?.map((sbCategory) => {
          const { name, id } = sbCategory;
          const collection = allCollections.find((c) => c.title === name);
          const { handle, image } = collection;

          return (
            <Link key={id} to={`/collections/${handle}`} className="flex-1">
              <div className="relative">
                {image && (
                  <Image img={image} className="aspect-square max-h-[600px]" />
                )}
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                  <h3 className="text-5xl font-bold text-white ">{name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
