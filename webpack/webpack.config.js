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

    //entry: './src/index.js',
    entry: {
        index: './src/index.js',
        //lodash: 'lodash'
    },
    output: {
        //path: path.resolve(__dirname, 'dist'),
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        //publicPath: "./"
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            //chunks: ['common', 'index'],
        }),
        /* new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }), */

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.ProvidePlugin({
            _: 'lodash',
            partition: ['lodash', 'partition']
        }),

        /* new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
        The available options are:
            name: string
            names: string[]
            filename: string
            minChunks: number
            chunks: string[]
            children: boolean
            async: boolean
            minSize: number

        */
        /* new webpack.optimize.UglifyJsPlugin({
            sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        }) */

    ],
    //devtool: options.devtool,
    devServer: {
        hot: true,
        hotOnly: true,

        inline: true,
        port: 3000,
        //host: '10.7.30.221',
        compress: true,
        overlay: true,
        // open: true,
        // openPage: 'index.html'
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
            },
            /*
                imports-loader
                npm install --save-dev imports-loader
                向模块中添加 $变量
                require('imports-loader?$=jquery!./jqGreen');

                exports-loader
                npm install --save-dev exports-loader
                require('exports?window.Hello!./Hello.js');

                // Hello.js
                window.Hello = function(){
                    console.log('say hello.');
                }

            */
        ]
    },
    resolve: {
        alias: {
            _: "lodash"
        },
        extensions: [".tsx", ".ts", ".js"]
    }

}
