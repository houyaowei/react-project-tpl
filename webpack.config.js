const path = require("path");
const webpack = require("webpack");
const HTMLWebpachPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    resolve : {
        extensions : ['*', '.js', '.jsx', '.json']
    },
    devtool: 'cheap-module-eval-source-map',
    entry : [
        path.resolve(__dirname ,'app/index.js')
    ],  

    output: {
        path: __dirname + "/dist",
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
		contentBase: __dirname + "/dist",
		compress: true,
  		port: 9000
    },
    
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('dev'),
        //     __DEV__: true
        // }),
        // new CleanWebpackPlugin(['dist']),
		new HTMLWebpachPlugin({
            title: "hc-portal-fe",
            template : "./app/assets/index.html",
            files : {
                //  css : ["./app/assets/css/bootstrap.min.css"]
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
			name: 'duplication'
        }),
        new CopyWebpackPlugin([
            {
              from: 'app/assets/images',
              to: 'images'
            },
            {
              from: 'app/assets/index.html',
              to: 'index.html'
            },
            {
              from: 'app/assets/css/bootstrap.min.css',
              to: 'css/bootstrap.min.css'
            },
            {
              from: 'app/assets/css/normalize.css',
              to: 'css/normalize.css'
            }
          ]),
          new ExtractTextPlugin("styles.css")
    ],
    module : {
        rules : [
            {
                test : /\.(png|jpg|svg|jpeg)$/,
                use : [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['react',"es2015","stage-0"]
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader", 
                query:{
                    presets:['react',"es2015"]
                }
            },
            {
                test: /\.(otf|ttf|eot|woff|woff2)$/i,
                loader: 'url?name=[path][name].[ext]'
            }
        ]
    }
}
