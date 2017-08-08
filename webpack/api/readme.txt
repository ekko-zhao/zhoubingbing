
// 安装 ------------------------------------------------------------
    npm install --save-dev webpack
    npm install --save-dev webpack@<version>
    /*
        npm install --global webpack
    */

/* package.json */	-----------------------------------------------------
{	
    "scripts": {
		"start": "webpack",
		/*
			config 默认配置文件为 根目录下的 webpack.config.js
			也可以通过 --config fileName.js 指定配置文件
		*/
        "dev": "webpack-dev-server --colors --progress",
		
		/*
			// 构建 dist 目录
			"watch": "webpack",
			
			// 在文件发生改变时 自动的重新构建
			"watch": "webpack --watch",
			
		*/
		
		
    },
	"dependencies": {
        "webpack": "^3.4.1"
	},
}


/* webpack.config.js */ -----------------------------------------------------

var webpack = require('webpack');
const path = require('path');

module.exports = {
	plugins: [],
	
	/*
		默认首页为根目录下的index.html, 如果为默认 index, 需要在body 中 添加 <script src="./bundle.js"></script>
		
		可以通过 插件 html-webpack-plugin 来指定
		new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
		})
	*/
	
	
	// 入口文件
	entry: './src/index.js',
	/*
		如果你想添加多个彼此不互相依赖的文件，你可以使用数组格式的值
		entry: ['./src/entry.js','./src/entry2.js']
		
		
		// 为不同的页面 指定 js, 提供 HtmlWebpackPlugin.chunks['bundle', 'bundle2']
		entry: {
			bundle:'./src/entry.js',
			bundle2:'./src/entry2.js'
		},
		output: {
			path: __dirname + '/dist',
			filename: 'src/build/[name].bundle.js',
		}
		
		// index.html
		<head>
			<script src="./print.bundle.js"></script>
		</head>
	*/
	
	// 编译输出
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		
		// 配置页面中 静态资源的请求路径
		publicPath: "./",
		
		// sourceMap 名称
		sourceMapFilename: '[name].map'
	},
	
	// 使用源代码 maps , 追踪错误和警告到具体的代码行；  由于会大幅度的增加文件大小，所以只能在开发环境中使用
	devtool: 'inline-source-map',
	
	
	
	
	// 模块加载
	/*
		object { enforce?, exclude?, include?, issuer?, loader?, loaders?, oneOf?, options?, parser?, query?, resource?, resourceQuery?, compiler?, rules?, test?, use? }
	*/
	module{
		rules: [
            {
	            test: /\.less$/,
	            use: [
	                'style-loader',
	                'css-loader',
	                'less-loader'
				]
			},
			{}
		]
		/*
			也可以使用 loaders 配置模块加载
			loaders: [
				{
					test: /\.css$/, 
					loader: 'style-loader!css-loader'
				}
			]
		*/
		/*
			svg 加载图片
			{
				test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader'
				]
			}
			
			// js
			import Icon from './icon.png';
			var myIcon = new Image();
			myIcon.src = Icon;
			element.appendChild(myIcon);
			
			// css
			background: url('./icon.png');
		*/
		
		/*
			加载字体
			
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use:[
					'file-loader'
				]
			}
			
			// css
			@font-face {
				font-family: 'MyFont';
				src: url('./my-font.woff2') format('woff2'),
					 url('./my-font.woff') format('woff');
			}
			.hello {
				font-family: 'MyFont';
			}
			
		*/
		
		/*
			Data 加载
			npm install --save-dev csv-loader xml-loader
			
			{
				test: /\.(csv|tsv)$/,
				use: [
					'csv-loader'
				]
			},
				{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
			
			import Data from './data.xml';
		*/
		
		
	}
}

// 热替换 -----------------------------------------------------
	HMR并不打算在生产中使用，这意味着它只应该用于开发。
	它允许在运行时更新所有模块，而不需要 ‘完全’ 刷新。
	增强开发效率
	
webpack.config.js
	const webpack = require('webpack');
	devServer: {
		hot: true,
		hotOnly: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]

热替换 用于样式

rules: {
    test: /\.less$/,
	// 不能用于 extract-text-webpack-plugin 
    use: [
        'style-loader',
        'css-loader'
	] 
}

// webpack.optimize.UglifyJsPlugin ------------------------------------------

	var options = {
	    devtool: 'inline-source-map',
	}
	module.exports = {
		plugins:[
			// 如果没有该插件，在 devtool: 'inline-source-map' 的情况下 sourceMap 是有的
		    new webpack.optimize.UglifyJsPlugin({
				// 这里再次决定是否有 sourceMap
		    	sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
		    })
		]
		devtool: options.devtool
	}

	
// webpack.DefinePlugin -----------------------------------------------------
	plugins:[
		// 这里定义的 process.env.NODE_ENV 将会转变成 
			{
				process:{
					env:{
						NODE_ENV: 'production'
					}
				}
			}
			可以在 任何js 中访问
		new webpack.DefinePlugin({
	        'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
	/*
		除了在 plugins 中定义外 还可以在 CLI 中定义 
		"scripts": {
			"dev": "webpack-dev-server --define process.env.NODE_ENV=\"'production'\" "
		}
	*/
	
/* index.js */
	console.log(process.env.NODE_ENV)  => 'production'
	console.log(process) => object
	
	

// html-webpack-plugin -----------------------------------------------------

	多个页面可以在 plugins 配置多个
	plugins:[
		new HtmlWebpackPlugin({}),
		new HtmlWebpackPlugin({})
	]

new HtmlWebpackPlugin({
	title: 'My App',
	filename: 'index.html',
	/*
		或者指定 template
		template: __dirname+'/src/tpl/login.html',
	*/
	
	//当传递true或“body”时，所有javascript资源将放置在body元素的底部。 'head'将脚本放置在head元素中
	inject: true | 'head' | 'body' |false ,
	
	favicon: path,
	
	minify: { removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true,} | false Pass a html-minifier options object to minify the output.
	
	// css js path?[hash]
	hash: true, 
	
	
	cache: boolean,
	
	// main 和 user 和 entry 的属性名相对应
	chunks:['main','user','common.js']
	
	showErrors: true | false if true (default) errors details will be written into the HTML page.
	
	// 允许控制块在被包含到HTML之前应该如何排序。
	chunksSortMode: 'none' | 'auto' | 'dependency' |'manual' | {function} - default: 'auto'
}),



// extract-text-webpack-plugin -----------------------------------------------------
	用于导出 css 文件
	
	// for webpack 2.0
	npm install --save-dev extract-text-webpack-plugin@2.1.2
	

	var ETP = require("extract-text-webpack-plugin");
	// 指定 css 输出路径， 路径相对于 output.path 内
	var extractCSS = new ETP('./css/style.css');
	
	plugins: [
		extractCSS,
	]

	module: {
        rules: [
            {
				test: /\.less$/,
                usess: extractCSS.extract({
					fallback: 'style-loader',
					use: 'css-loader!less-loader'
				})
            }
        ]
	}

// 清除 ／dist 文件夹 -----------------------------------------------------

npm install clean-webpack-plugin --save-dev

/* webpack.config.js */
	const CleanWebpackPlugin = require('clean-webpack-plugin');
	
	plugins: [
		new CleanWebpackPlugin(['dist']),
	]













