# Create Collections

1- `yarn add gatsby-awesome-pagination`
2- Create templates/Collection.js
3- Create utils/createCollections.js
4- gatsby-node.js

```
const createCollections = require("./utils/createCollections");

exports.createPages = async ({ actions, graphql }) => {
await createCollections({ actions, graphql });
};
```
