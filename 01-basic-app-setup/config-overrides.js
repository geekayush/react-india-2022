const { addWebpackPlugin, override } = require("customize-cra");
const webpack = require("webpack");

const config = override(
  addWebpackPlugin (
    new webpack.DefinePlugin({
      _isDev_ : process.env.DEV || false,
    })
  )
)

module.exports = {
  // webpack : config 
}
