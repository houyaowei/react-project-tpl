const webpack = require("webpack");
const path = require("path");
const HTMLWebpachPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//考虑使用 ParallelUglifyPlugin
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const config = require("./config");

const prodWebpackconf = merge(baseWebpackConfig, {
  mode: "production",
  devtool: false,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "../node_modules"),
          name: "duplication",
          enforce: true
        }
      }
    }
  },
  plugins: [
    //按出现顺序排列模块。 经常引用的模块和块会设置较短的id，节省空间
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(["dist"]),
    // new UglifyJsPlugin({
    //   test: /\.js($|\?)/i,
    //   sourceMap: true,
    //   parallel: true,
    //   exclude: /node_modules/,
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false,
    //       drop_console: true
    //     }
    //   }
    // }),
    new HTMLWebpachPlugin({
      title: "hc-portal-fe",
      template: "./app/assets/index_prod.html"
    }),

    new CopyWebpackPlugin(config.copys),
    new MiniCssExtractPlugin({
      filename: "styles.[hash].css"
    })
  ]
});
module.exports = new Promise((resolve, reject) => {
  resolve(prodWebpackconf);
});
