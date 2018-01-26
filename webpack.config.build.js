const path = require("path");
const webpack = require("webpack");
const HTMLWebpachPlugin = require("html-webpack-plugin");
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
        //publicPath: '/',
        filename: '[name].bundle.js'
    },
    devServer: {
		contentBase: __dirname + "/dist",
		compress: true,
  		port: 9000
	},
    plugins : [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('prod'),
            __DEV__: true
        }),
        new CleanWebpackPlugin(['dist']),
		new HTMLWebpachPlugin({
			title: "hc-portal-fe"
        }),
        new webpack.optimize.CommonsChunkPlugin({
			name: 'duplication'
		})
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
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}
