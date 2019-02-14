const path = require("path");
const webpack = require("webpack");

const config = {
  context: __dirname,
  entry: [
   "webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000", "./js/ClientApp.jsx"
  ],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
    hot: true,
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      /*   {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }, */
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
if (process.env.NODE_ENV === 'production') {
  config.entry="./js/ClientApp.jsx";
  config.devtool=false;
  config.plugins=[];
}

module.exports = config;
