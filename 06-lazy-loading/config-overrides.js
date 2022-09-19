const { override, addWebpackPlugin } = require('customize-cra');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
// const path = require('path');

module.exports = override(
  addWebpackPlugin(new HTMLInlineCSSWebpackPlugin())
);
