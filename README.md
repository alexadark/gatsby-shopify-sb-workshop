# Connect Storyblok

1. go to storyblok webiste, signup or login
2. Create a new space and get the preview token from settings/API-keys
3. add it to the .env file `GATSBY_STORYBLOK_ACCESS_TOKEN=your-token`
4. add the plugin to `gatsby-config.js`
5. stop the engine, and run `gatsby develop`, open [graphiql](http://localhost:8000/___graphql) and run this query:

```
query MyQuery {
  allStoryblokEntry {
    nodes {
      name
      full_slug
      content
    }
  }
}
```

6. add the development server to storyblok
   - go to settings/visual editor
   - add https://localhost:3010/ server as as the default environment
   - go to entry configuration and add '/' as real path
