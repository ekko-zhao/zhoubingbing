var webpack = require('webpack');
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ETP = require("extract-text-webpack-plugin");
var extractCSS = new ETP('./css/style.css');

const CleanWebpackPlugin = require('clean-webpack-plugin');

var options = {
    devtool: 'inline-source-map',
}



module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        /* new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }), */
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        })

    ],
    entry: './src/index.js',
    output: {
        //path: path.resolve(__dirname, 'dist'),
        path: __dirname + '/dist',
        filename: 'bundle.js',

        //publicPath: "./"
    },
    devtool: options.devtool,
    devServer: {
        hot: true,
        hotOnly: true,

        inline: true,
        port: 3000,
        compress: true,
        overlay: true
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
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader?sourceMap'
                })
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    }

}
