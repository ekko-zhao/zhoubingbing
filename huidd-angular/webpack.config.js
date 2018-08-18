var webpack = require('webpack');
const path = require('path');

// 引入配置文件
const env = require('./env.config');

// 复制文件夹用
var TransferWebpackPlugin = require('transfer-webpack-plugin');

// 生成html 页面
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 生成样式文件
var ETP = require("extract-text-webpack-plugin");
var ExtractTextPlugin = new ETP({
    filename: "css/[name].[chunkhash].css",
    // 如果是开发环境则可以忽略
    // disable: process.env.NODE_ENV !== 'production'
});

// 自动删除 dist 目录
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 用于编译 tsconfig.json compilerOptions.paths
const {
    TsConfigPathsPlugin
} = require('awesome-typescript-loader');

module.exports = {
    // 入口文件
    entry: {
        commonCss: './src/commonCss',
        polyfills: './src/polyfills',
        // index: './src/entry/index/index.entry',
        login: './src/entry/login/login.entry',
        app: './src/entry/app/app.entry'
    },
    // 入口文件输出
    output: {
        path: __dirname + '/dist',
        // -bundle 不要使用 .bundle ,为了和服务端 springmvc url 冲突，导致js加载不正确
        filename: process.env.NODE_ENV !== 'production' ? '[name]-bundle.js' : 'js/[name]-bundle.js?v=[chunkhash]',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        process.env.NODE_ENV !== 'production' ? new webpack.HotModuleReplacementPlugin() : function () {},
        ExtractTextPlugin,
        // 通过 npm run * 命名 配置全局变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // 页面配置
        /* new HtmlWebpackPlugin({
            filename: './index.html',
            favicon: './src/assets/images/icon/favicon.ico',
            template: __dirname + '/src/entry/index/index.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'index'],
            chunksSortMode: 'manual'
        }), */
        new HtmlWebpackPlugin({
            filename: './app.html',
            favicon: './src/assets/images/icon/favicon.ico',
            template: __dirname + '/src/entry/app/app.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'app'],
            chunksSortMode: 'manual'
        }),
        new HtmlWebpackPlugin({
            filename: './login.html',
            favicon: './src/assets/images/icon/favicon.ico',
            template: __dirname + '/src/entry/login/login.html',
            inject: true,
            chunks: ['commonCss', 'polyfills', 'login'],
            chunksSortMode: 'manual'
        }),
        // 复制文件夹
        new TransferWebpackPlugin([{
            from: 'static',
            to: 'static'
        }, ], path.join(__dirname, 'src')),
        // 开发环境中压缩代码
        // 如果没有该插件，在 devtool: 'inline-source-map' 的情况下 sourceMap 是有的
        process.env.NODE_ENV === 'production' ? new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        }) : function () {}
    ],
    devServer: {
        hot: process.env.NODE_ENV !== 'production' ? true : false,
        // 自动刷新页面 false
        hotOnly: false,
        inline: true,
        host: env.host,
        port: env.port,
        compress: true,
        overlay: true,
        // 配置代理服务器 把指定的前缀的 url 代理到指定的服务器
        proxy: {
            "/api": {
                target: env.origin,
                changeOrigin: true,
                secure: false
            },
            "/local": {
                target: env.local,
                changeOrigin: true,
                secure: false
            }
        },
        // 自动打开页面
        open: true,
        // 打开指定页面
        openPage: 'login.html'
    },
    devtool: false,
    module: {
        rules: [
            // 组件样式文件 文件名称格式需要保持一致  *.css.less
            {
                test: /\.css.less$/,
                use: [
                    'to-string-loader',
                    'css-loader?minimize=true',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            // bootstrap.scss 4.1.1
            {
                test: /bootstrap\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true!postcss-loader!sass-loader'
                })
            },
            // bootstrap.less 3.3.7
            {
                test: /(?:app|bootstrap)\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true!postcss-loader!less-loader'
                })
            },
            // 普通的样式文件
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true!postcss-loader'
                })
            },
            // 加载图片
            {
                test: /\.(gif|svg|png|jpg)$/,
                use: [
                    'file-loader?name=images/[name][hash:8].[ext]'
                ]
            },
            // 加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=fonts/[name][hash:8].[ext]'
                ]
            },
            // 加载 html 页面
            {
                test: /\.html?$/,
                use: [
                    'html-loader'
                ]
            },
            // 加载 ts 文件
            {
                test: /\.tsx?$/,
                use: [
                    'awesome-typescript-loader',
                    'angular-router-loader',
                    'angular2-template-loader'
                ],
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        alias: {},
        // 省略文件后缀名
        extensions: [".tsx", ".ts", ".js"],
        plugins: [
            new TsConfigPathsPlugin({
                configFileName: "tsconfig.json",
                compiler: "typescript",
            })
        ]
    }
}
