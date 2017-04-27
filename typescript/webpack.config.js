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
			title: 'typejs',
			//hash: true, // css js path?[hash]
			filename: 'index.html',
			//template:__dirname+'/src/tpl/login.html',
			//inject: true | 'head' | 'body' |false ,//当传递true或“body”时，所有javascript资源将放置在body元素的底部。 'head'将脚本放置在head元素中
			//favicon: path,
			//minify: { removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true,} | false Pass a html-minifier options object to minify the output.
			//cache
			//chunks:['main','user','common.js']   // 这个模板对应上面那个节点
		}),
		/*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })*/

		    
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
	//entry: ['./src/js/entry.js'],
	entry: ['./src/js/entry.ts'],
	output: {
		path: __dirname,
		filename: './build/js/bundle.js',
		//publicPath: "./"
	},
	//“path”仅仅告诉Webpack结果存储在哪里，然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
	devServer: {
		inline: true,
		port: 3000
	},

	module: {
		loaders: [
			/*{
				test: /\.css$/,
				loader: extractCSS.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}, {
				test: /\.less$/,
				loader: extractCSS.extract({
					fallback: 'style-loader',
					use: 'css-loader!less-loader'
				})
			},*/
			/*
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader?sourceMap" },
			{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			*/
			/*{
				test: /\.js$/,
				loader: 'jsx-loader?harmony',
				exclude: '/node_modules/'
			},*/
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: '/node_modules/'
			},
			/*{
				test: /\.ts$/,
				loader: 'typescript-loader',
				exclude: '/node_modules/'
			}, *//*{
				test: /\.html$/,
				loader: 'html-loader'
			},*/
			//{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=20480'},
			/*{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=[path][name].[ext]'
			},*/

			//{ test: require.resolve("./src/js/tool/swipe.js"),  loader: "exports?swipe"}


			//babal-loader使用”presets“配置项来标识如何将ES6语法转成ES5以及如何转换React的JSX成js文件。 //.babelrc file
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
			/*
				query: {  presets: ['react', 'es2015']  } //或者添加 query 
			*/

		]
	},

	resolve: {
		//extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
	//devtool: 'source-map'
}
