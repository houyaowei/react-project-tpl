const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//考虑fast-sass-loader代替sass-loader

module.exports = {
  resolve: {
    alias: {
      "@images": path.join(__dirname, "../app/assets/images")
    },
    extensions: [".ts", ".js"]
  },
  entry: [path.resolve(__dirname, "../app/index.js")],
  output: {
    path: path.resolve(__dirname + "/../dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true,
          //     localIdentName: "[name]__[local]-[hash:base64:5]"
          //   }
          // },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory=true",
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
