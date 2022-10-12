import React from "react";
import Header from "./Header";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Hero from "~/components/storyblok/Hero";
import Text from "~/components/storyblok/Text";

storyblokInit({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    text: Text,
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
