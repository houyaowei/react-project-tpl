const path = require("path");
const webpack = require("webpack");
const HTMLWebpachPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "cheap-module-eval-source-map",
  entry: [path.resolve(__dirname, "app/index.js")],

  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: __dirname + "/dist",
    compress: true,
    port: 9035,
    proxy: [
      {
        context: ["/user", "/webuser"],
        target: "http://localhost:8081"
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      statsFilename: "../analysis/stats.json",
      analyzerMode: "disable",
      generateStatsFile: true,
      statsOptions: { source: false }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(['dist']),
    new HTMLWebpachPlugin({
      title: "hc-portal-fe",
      template: "./app/assets/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: "app/assets/images",
        to: "images"
      },
      {
        from: "app/assets/index.html",
        to: "index.html"
      },
      {
        from: "app/assets/css",
        to: "css"
      },
      {
        from: "app/assets/lib",
        to: "lib"
      },
      {
        from: "app/assets/locales",
        to: "locales"
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "styles.[hash].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "node_modules"),
          name: "duplication",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|jpeg|mp4)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // 'postcss-loader',
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/i,
        loader: "url?name=[path][name].[ext]"
      }
    ]
  }
};
