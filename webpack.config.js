const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./lib/renderers/dom.js"],
    vendor: [
      "react",
      "react-dom",
      "prop-types",
      "axios",
      "lodash.debounce",
      "lodash.pickby",
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }],
  },
  resolve: {
    modules: [path.resolve("./lib"), path.resolve("./node_modules")],
  },
};
