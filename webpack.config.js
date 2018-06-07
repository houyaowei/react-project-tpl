const path = require("path");
const webpack = require("webpack");
const HTMLWebpachPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"]
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
    port: 9011
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(['dist']),
    new HTMLWebpachPlugin({
      title: "hc-portal-fe",
      template: "./app/assets/index.html",
      files: {
        //  css : ["./app/assets/css/bootstrap.min.css"]
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "duplication"
    // }),
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
      filename: 'styles.css',
    }),
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
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          // 'sass-loader',
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
