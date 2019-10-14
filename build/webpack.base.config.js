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
          },
          {
            loader: "image-webpack-loader",
            // 配置不同图片的质量
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // {   loader: "css-loader",   options: {     modules: true,     localIdentName:
          // "[name]__[local]-[hash:base64:5]"   } },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")({
                  browsers: ["last 2 versions", ">5%", "ios 7"]
                })
              ]
            }
          },

          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory=true",
        options: {
          presets: ["@babel/preset-react"]
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
