var webpack = require('webpack');
const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ETP = require("extract-text-webpack-plugin");
var ExtractTextPlugin = new ETP({
    filename: "[name].[chunkhash].css",
    // 如果是开发环境则可以忽略
    // disable: process.env.NODE_ENV !== 'production'
});

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        adminLogin: './src/adminLogin.ts',
        admin: './src/admin.ts',
        app: './src/app.ts',
        login: './src/login.ts',
        forget: './src/forget.ts',
        register: './src/register.ts',
        commonCss: './src/commonCss',
        polyfills: './src/polyfills',
        'web-animations': './src/assets/js/web-animations.min',
        swipermincss: './node_modules/swiper/dist/css/swiper.min.css'
    },
    output: {
        path: __dirname + '/dist',
        filename: process.env.NODE_ENV !== 'production' ? '[name].bundle.js' : '[name].bundle.js?v=[chunkhash]',
        publicPath: process.env.NODE_ENV !== 'production' ? '/' : './',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        process.env.NODE_ENV !== 'production' ? new webpack.HotModuleReplacementPlugin() : function () { },
        ExtractTextPlugin,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            favicon: './src/favicon.ico',
            template: __dirname + '/src/login.html',
            inject: true,
            chunks: ['commonCss', 'swipermincss', 'polyfills', 'login']
        }),
        new HtmlWebpackPlugin({
            filename: './forget.html',
            favicon: './src/favicon.ico',
            template: __dirname + '/src/forget.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'forget']
        }),
        new HtmlWebpackPlugin({
            filename: './register.html',
            favicon: './src/favicon.ico',
            template: __dirname + '/src/register.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'register']
        }),
        new HtmlWebpackPlugin({
            filename: './app.html',
            favicon: './src/favicon.ico',
            template: __dirname + '/src/app.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'app'],
            //chunksSortMode: 'manual'
        }),
        new HtmlWebpackPlugin({
            filename: './adminLogin.html',
            favicon: './src/favicon.ico',
            template: __dirname + '/src/adminLogin.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'adminLogin']
        }),
        new HtmlWebpackPlugin({
            filename: './admin.html',
            favicon: './src/favicon.ico',
            template: __dirname + '/src/admin.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'admin']
        }),
        new TransferWebpackPlugin([
            { from: 'static', to: 'static' },
        ], path.join(__dirname, 'src')),
        // 如果没有该插件，在 devtool: 'inline-source-map' 的情况下 sourceMap 是有的
        process.env.NODE_ENV === 'production' ? new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        }) : function () { }

    ],
    devServer: {
        hot: process.env.NODE_ENV !== 'production' ? true : false,
        // 自动刷新页面 false
        // hotOnly: process.env.NODE_ENV !== 'production' ? true : false,
        inline: true,
        //host: '10.7.30.221',
        port: 3011,
        compress: true,
        overlay: true,
        proxy: {
            "/api": {
                target: "http://localhost:8071/bmmp4",
                changeOrigin: true,
                secure: false
                //pathRewrite: { "^/api": "" }
            }
        },
        open: true,
        openPage: 'index.html'
    },
    devtool: false, // 'options.devtool'
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
        alias: {
        },
        extensions: [".tsx", ".ts", ".js"],
        // 用于编译 tsconfig.json compilerOptions.paths
        plugins: [
            new TsConfigPathsPlugin({
                configFileName: "tsconfig.json",
                compiler: "typescript",
            })
        ]
    }
}
