var webpack = require('webpack');
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/app.ts',
    },
    output: {
        path: __dirname + '/dist',
        filename: process.env.NODE_ENV !== 'production' ? '[name].bundle.js' : '[name].bundle.js?v=[chunkhash]',
        publicPath: process.env.NODE_ENV !== 'production' ? '/' : './',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: __dirname + '/src/index.html',
            inject: true,
            chunks: ['polyfills', 'app']
        }),
        // 如果没有该插件，在 devtool: 'inline-source-map' 的情况下 sourceMap 是有的
        /*  new webpack.optimize.UglifyJsPlugin({
             sourceMap: false,
             compress: {
                 warnings: false,
             },
             output: {
                 comments: false,
             }
         }) */

    ],
    devServer: {
        inline: true,
        port: 3089,
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                // 'babel-loader',
                'awesome-typescript-loader'
            ],
            exclude: /node_modules/
        }
        ]
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
