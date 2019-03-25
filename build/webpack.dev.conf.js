const webpack = require("webpack");
const HTMLWebpachPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const baseWebpackConfig = require("./webpack.base.config");
const config = require("./config");
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: __dirname + "/dist",
    compress: true,
    port: PORT || config.dev.port,
    proxy: [
      {
        context: ["/user", "/webuser"],
        target: "http://localhost:8081"
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      statsFilename: "../../analysis/stats.json",
      analyzerMode: "disable",
      generateStatsFile: true,
      statsOptions: { source: false }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpachPlugin({
      title: "hc-portal-fe",
      template: "./app/assets/index.html"
    }),
    new CopyWebpackPlugin(config.copys),
    new MiniCssExtractPlugin({
      filename: "styles.[hash].css"
    })
  ]
});
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
