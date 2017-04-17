// JavaScript Document

var webpack = require('webpack');

// 获取所有的.css文件，合并它们的内容然后提取css内容到一个独立的”styles.css“里
var ETP = require("extract-text-webpack-plugin");
//var extractCSS = new ETP('./build/css/style.css?v=[chunkhash:8]');
var extractCSS = new ETP({
	filename:'./build/css/style.css?v=[chunkhash:8]',
	allChunks:true
});

/*var OCAP = require('optimize-css-assets-webpack-plugin');
var OptimizeCssAssetsPlugin = new OCAP({
      assetNameRegExp:/\.minimized\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })*/



var HtmlWebpackPlugin = require('html-webpack-plugin');
/*var CompressionWebpackPlugin = require('compression-webpack-plugin');
var CWP = new CompressionWebpackPlugin({ //gzip 压缩
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp( '\\.(js|html)$' ),//压缩 js 与 css 
        threshold: 10240,
        minRatio: 0.8
    })*/

module.exports = { 
	plugins: [
		/*new webpack.DefinePlugin({
			'process.env': {
				//注意一个单引号一个双引号…… 这里是要将 "production" 替换到文件里面
				NODE_ENV: '"production"'
			}
		}),*/
		extractCSS,
		//OptimizeCssAssetsPlugin,
		new HtmlWebpackPlugin({
			title: 'angular test',
			//hash: true, // css js path?[hash]
			filename: './index.html',
			template:'./index.html',
			inject:'true',
			//inject: true | 'head' | 'body' |false ,//当传递true或“body”时，所有javascript资源将放置在body元素的底部。 'head'将脚本放置在head元素中
			//favicon: path,
			minify: {
				removeComments: true, //去注释
				collapseWhitespace: true, //压缩空格
				removeAttributeQuotes: true, //去除属性引用
				//minifyCSS: true,
				//minifyJS: true
			},
			//cache
			chunks:['bundle','index']   // 这个模板对应上面那个节点
		}),
		//CWP,
		/*new webpack.DefinePlugin({
			'process.env.NODE.ENV':"development"
		}),
		new webpack.HotModuleReplacementPlugin(),*/

		// 默认会把所有入口节点的公共代码提取出来,生成一个common.js
		//new webpack.optimize.CommonsChunkPlugin('./build/js/common.js'),

		         /*new CommonsChunkPlugin("./src/build/js/admin-commons.js", ["./src/assets/js/ap1", "./src/assets/js/ap2"]),*/          //new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"]),

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			}
		})  
	],
	//entry: '',
	entry: {
		bundle:'./src/js/entry.js',
		index:'./test/js/index.js'
	},
	output: {
		path: __dirname,
		filename: './build/js/[name].js?v=[chunkhash:8]',
	},

	//如果你想添加多个彼此不互相依赖的文件，你可以使用数组格式的值
	/*entry: ['./src/js/entry.js'],
	output: {
		path: __dirname,
		filename: './build/js/bundle.js?v=[hash:8]',
		//publicPath: "/"
	},*/
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

			{ test: /\.css$/, loader: extractCSS.extract( { fallback: 'style-loader', use: 'css-loader' } ) },
			{ test: /\.less$/, loader: extractCSS.extract( { fallback: 'style-loader', use: 'css-loader!less-loader' } ) },

			/*{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader?sourceMap"
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader?sourceMap'
			},*/
			//{ test: /\.js$/, loader: 'jsx-loader?harmony' , exclude: '/node_modules/' },
			//{ test: /\.html$/, loader: 'html-loader'},
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
		]
	},

	resolve: {
		alias: { }
	}

}
