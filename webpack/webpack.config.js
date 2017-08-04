var webpack = require('webpack');
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ETP = require("extract-text-webpack-plugin");
var extractCSS = new ETP('./css/style.css');


module.exports = {
    plugins: [
        extractCSS,
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html'
        })
    ],
    entry: './src/index.js',
    output: {
        //path: path.resolve(__dirname, 'dist'),
        path: __dirname + '/dist',
        filename: 'bundle.js',

        //publicPath: "./"
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                /* use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ] */
                usess: extractCSS.extract({
					fallback: 'style-loader',
					use: 'css-loader!less-loader?sourceMap'
				})
            }
        ]
    }

}
