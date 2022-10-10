const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
      },
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  });
};

const createCollections = require("./utils/createCollections");

exports.createPages = async ({ actions, graphql }) => {
  await createCollections({ actions, graphql });
};
