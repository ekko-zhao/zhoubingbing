// JavaScript Document

var webpack = require('webpack');

// 获取所有的.css文件，合并它们的内容然后提取css内容到一个独立的”styles.css“里
var ETP = require("extract-text-webpack-plugin");
var extractCSS = new ETP('./build/css/style/style.css');

//npm install autoprefixer --save-dev
/*a {
    display: flex;
}*/
/*compiles to:*/
/*a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}*/


var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
	plugins: [
		// Extract to styles.css file
		extractCSS,
		new HtmlWebpackPlugin({
			title: 'My App',
			//hash: true, // css js path?[hash]
			filename: 'index.html',
			//template:__dirname+'/src/tpl/login.html',
			//inject: true | 'head' | 'body' |false ,//当传递true或“body”时，所有javascript资源将放置在body元素的底部。 'head'将脚本放置在head元素中
			//favicon: path,
			//minify: { removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true,} | false Pass a html-minifier options object to minify the output.
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
                warnings: env.production,
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
	entry: ['./src/js/entry.js'],
	output: {
		path: __dirname,
		filename: './build/js/bundle.js',
		//publicPath: "./"
	},
	//“path”仅仅告诉Webpack结果存储在哪里，然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
	devServer: {
		inline: true,
		//progress:true,
		//hot:true,
		port: 3000,
		//content-base:'./build', //在build文件夹中去加载index.html，如果没有 　index.html文件，将会在浏览器中显示所有build目录下的文件和文件夹
		/*proxy: {
			'/ajax': {
				target: ENV.url,
				changeOrigin: true,//本地会虚拟一个服务端接收你的请求并代你发送该请求
				secure: false,
				//pathRewrite: {'regExp' : '/path'}
			}
		}*/
	},

	//inline: true || --inline 刷新页面
	//inline: true, hot:true || --inline --hot  重新加载改变的部分，HRM失败则刷新页面
	/*"scripts": {
		"dev": "webpack-dev-server --hot --inline"
	},*/

	module: {
		loaders: [
			/*
			include:字符串或者数组，指包含的文件夹
			exclude：字符串或者数组，指排除的文件夹
			"-loader"其实是可以省略不写的，多个loader之间用“!”连接起来
			*/

			{
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
			},
			/*
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader?sourceMap" },
			{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			*/

			{
				test: /\.js$/,
				loader: 'jsx-loader?harmony',
				exclude: '/node_modules/'
			}, {
				test: /\.html$/,
				loader: 'html-loader'
			},

			//{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=20480'},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=[path][name].[ext]'
			},

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
		//查找module的话从这里开始查找
		//root: __dirname, //绝对路径
		//alias: {} 别名
		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
		//extensions: ['', '.js', '.json', '.scss'],

		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
	}


}

//npm install --save jquery babel-polyfill
//这里用 –save 而不是 –save-dev，　是因为这些库在执行时会用到。我们也安装了babel-polyfill 这样在一些老式浏览中可以用 ES2015了。
//import 'babel-polyfill';


/*
	大部分的loader接收普通的查询字符串(?key=value&key2=value2)和JSON对象（?{“key”:”value”,”key2”:”value2”}`）
	require("url-loader?mimetype=image/png!./file.png");
	{ test: /\.png$/, loader: "url-loader?mimetype=image/png" }
	webpack --module-bind "png=url-loader?mimetype=image/png"
*/



/*module.exports = {
  resolve: {
    alias: {
      js: path.join(__dirname, "src/scripts"),
      src: path.join(__dirname, "src/scripts"),
      styles: path.join(__dirname, "src/styles"),
      img: path.join(__dirname, "src/img")
    },
    root: [
      path.join(__dirname, "bower_components")
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
      )
  ]
}*/
