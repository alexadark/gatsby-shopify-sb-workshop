import React from "react";
import Header from "./Header";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Hero from "~/components/storyblok/Hero";
import Text from "~/components/storyblok/Text";
import {
  ProductsGrid,
  CategoryGrid,
  SingleProduct,
} from "~/components/storyblok/shopify";

storyblokInit({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    text: Text,
    "category-grid": CategoryGrid,
    "products-grid": ProductsGrid,
    "single-product": SingleProduct,
  },
});

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
