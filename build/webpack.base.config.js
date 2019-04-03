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
        test: /\.(png|jpg|svg|jpeg|mp4)$/,
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
          process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
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
