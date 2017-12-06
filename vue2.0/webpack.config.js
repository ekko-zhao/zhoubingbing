// JavaScript Document

var webpack = require('webpack');

// 获取所有的.css文件，合并它们的内容然后提取css内容到一个独立的”styles.css“里
var ETP = require("extract-text-webpack-plugin");
var extractCSS = new ETP('./build/css/style/style.css');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    plugins: [
        // Extract to styles.css file
        //extractCSS,
        new HtmlWebpackPlugin({
            title: 'Vue test',
            //hash: true, // css js path?[hash]
            //filename: '/index.html',
            template: __dirname + '/src/index.html',
            //inject: true | 'head' | 'body' |false ,//当传递true或“body”时，所有javascript资源将放置在body元素的底部。 'head'将脚本放置在head元素中
            //favicon: path,
            //minify: {...} | false Pass a html-minifier options object to minify the output.
            //cache
            //chunks:['main','user','common.js']   // 这个模板对应上面那个节点
        }),

        /*new webpack.DefinePlugin({
        	'process.env': {
        		NODE_ENV: '"production"'
        	  }
        }),
        new webpack.HotModuleReplacementPlugin(),*/

        // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
        //new webpack.optimize.CommonsChunkPlugin('./build/js/common.js'),

                 /*new CommonsChunkPlugin("./src/build/js/admin-commons.js", ["./src/assets/js/ap1", "./src/assets/js/ap2"]),*/          //new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"]),

        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        }),*/

            
    ],
    //entry: '',

    /*
    entry: {
    	bundle:'./src/js/entry.js',
    	ap:'./src/js/entry2.js'
    },
    output: {
    	path: __dirname,
    	filename: 'src/build/js/[name].js',
    },
    */

    //如果你想添加多个彼此不互相依赖的文件，你可以使用数组格式的值
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: './build/bundle.js?v=[hash:8]',
        //publicPath: "/"
    },
    //“path”仅仅告诉Webpack结果存储在哪里，然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
    devServer: {
        inline: true,
        //progress:true,
        //hot:true,
        port: 3000,
        //content-base:'./build', //在build文件夹中去加载index.html，如果没有 　index.html文件，将会在浏览器中显示所有build目录下的文件和文件夹
    },

    //inline: true || --inline 刷新页面
    //inline: true, hot:true || --inline --hot  重新加载改变的部分，HRM失败则刷新页面
    /*"scripts": {
    	"dev": "webpack-dev-server --hot --inline"
    },*/

    module: {
        loaders: [

            /*{ test: /\.css$/, loader: extractCSS.extract( { fallback: 'style-loader', use: 'css-loader' } ) },
            { test: /\.less$/, loader: extractCSS.extract( { fallback: 'style-loader', use: 'css-loader!less-loader' } ) },*/

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!postcss-loader!less-loader?sourceMap"
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!css-loader!sass-loader?sourceMap'
            },

            //{ test: /\.js$/, loader: 'jsx-loader?harmony' , exclude: '/node_modules/' },
            //{ test: /\.html$/, loader: 'html-loader'},
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=20480'},
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            },

            //babal-loader使用”presets“配置项来标识如何将ES6语法转成ES5以及如何转换React的JSX成js文件。 //.babelrc file
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
            /*
            .babelrc文件 	query: {  presets: ['react', 'es2015']  } //或者添加 query
            */

        ]
    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            'vueRouter': 'vue-router/dist/vue-router.min.js',
            'vueResource': 'vue-resource/dist/vue-resource.min.js'
        }
    }


}
