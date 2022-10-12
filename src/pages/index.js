import React from "react";
import Layout from "~/components/Layout";
import { graphql } from "gatsby";
import {
  useStoryblokState,
  StoryblokComponent,
  storyblokEditable,
} from "gatsby-source-storyblok";

const HomePage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  console.log("story", story);

  const components = story.content.body?.map((blok) => (
    <StoryblokComponent blok={blok} key={blok._uid} />
  ));
  return (
    <Layout>
      <div>
        <div {...storyblokEditable(story.content)}>{components}</div>
      </div>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    storyblokEntry(full_slug: { eq: "home" }) {
      name
      content
      full_slug
      slug
      uuid
      id
      internalId
    }
  }
`;
