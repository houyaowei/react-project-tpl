const path = require("path");
const webpack = require("webpack");
const HTMLWebpachPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "cheap-module-eval-source-map",
  entry: ["./app/index.js"],

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/iotui/",
    filename: "[name].bundle.js"
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      parallel: true,
      exclude: /node_modules/,
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true
        }
      }
    }),
    new HTMLWebpachPlugin({
      title: "hc-portal-fe",
      template: "./app/assets/index_prod.html"
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/i,
        loader: "url?name=[path][name].[ext]"
      }
    ]
  }
};
