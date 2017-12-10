var webpack = require('webpack');
const path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ETP = require("extract-text-webpack-plugin");
var ExtractTextPlugin = new ETP({
    filename: "[name].[chunkhash].css",
    // 如果是开发环境则可以忽略
    // disable: process.env.NODE_ENV !== 'production'
});

module.exports = {
    entry: {
        appcss: './src/appcss',
        polyfills: './src/polyfills',
        index: './src/app.test'
        // index: './src/app'
    },
    output: {
        path: __dirname + '/dist',
        filename: process.env.NODE_ENV !== 'production' ? '[name].bundle.js' : '[name].bundle.js?v=[chunkhash]',
        publicPath: process.env.NODE_ENV !== 'production' ? '/' : './',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        ExtractTextPlugin,
        process.env.NODE_ENV !== 'production' ? new webpack.HotModuleReplacementPlugin() : function() {},
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            // favicon: './src/favicon.ico',
            template: __dirname + '/src/app.html',
            inject: true,
            chunks: ['appcss', 'index'],
            chunksSortMode: 'manual'
        }),
        new TransferWebpackPlugin([{
            from: 'static',
            to: 'static'
        }, ], path.join(__dirname, 'src')),
        process.env.NODE_ENV === 'production' ? new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        }) : function() {}
    ],
    devServer: {
        hot: process.env.NODE_ENV !== 'production' ? true : false,
        // 自动刷新页面 false
        hotOnly: false,
        inline: true,
        host: 'localhost',
        port: 3088,
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
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: 'css-loader?minimize=true|import=true!postcss-loader'
                    use: [{
                        loader: 'css-loader',
                        options: {
                            // root: '../node_modules/onsenui/css/',
                            /* url: false,
                            import: false, */
                            // modules: true,
                            // importLoaders: 10
                            /* alias: {
                                "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                            } */
                        }
                    }]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true!postcss-loader!less-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true!postcss-loader!sass-loader'
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=[path][name].[ext]'
                ]
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader?limit=8192'
            }, {
                test: /\.html?$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            // typeScript
            /* {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            } */
        ]
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, './src'),
            'components': path.resolve(__dirname, './src/app/components'),
            'service': path.resolve(__dirname, './src/app/service'),
            'vue': 'vue/dist/vue.js',
            'vueRouter': 'vue-router/dist/vue-router.min.js',
            'vueResource': 'vue-resource/dist/vue-resource.min.js'
        },
        extensions: [".tsx", ".ts", ".js"]
    }
}
