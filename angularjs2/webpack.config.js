var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取所有的.css文件，合并它们的内容然后提取css内容到一个独立的”styles.css“里
var ETP = require("extract-text-webpack-plugin");
var ExtractTextPlugin = new ETP({
    filename: "[name].[chunkhash].css",
    // 如果是开发环境则可以忽略
    // disable: process.env.NODE_ENV !== 'production'
});
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/main.ts'],
    output: {
        path: __dirname,
        filename: '[name].bundle.js',
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        ExtractTextPlugin,
        // 如果没有该插件，在 devtool: 'inline-source-map' 的情况下 sourceMap 是有的
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        }),
        new HtmlWebpackPlugin({
            title: "angular2",
            filename: "./index.html",
            template: __dirname + "/src/tpl/index.html"
        }),
        //new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        //hot: true,
        inline: true,
        overlay: true,
        port: 3000,
        /* open: true,
        openPage: 'index.html' */
    },
    module: {
        rules: [
            {
                // 在组件中引入样式文件
                test: /\.css.less$/,
                use: [
                    'to-string-loader',
                    'css-loader?minimize=true',
                    'postcss-loader',
                    'less-loader'
                ]
            }, {
                test: /app\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true!postcss-loader!less-loader'
                })
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true!postcss-loader'
                })
            }, {
                test: /\.(gif|svg)$/,
                use: [
                    'file-loader?name=[path][name].[ext]'
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=[path][name].[ext]'
                ]
            }, {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=8192'
            }, {
                test: /\.html?$/,
                use: [
                    'html-loader'
                ]
            }, {
                test: /\.tsx?$/,
                use: [
                    //'ts-loader',
                    'awesome-typescript-loader',
                    'angular-router-loader',
                    'angular2-template-loader'
                ],
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
}
