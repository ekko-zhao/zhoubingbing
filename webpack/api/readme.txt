
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

		// 多入口，模块单一引用，单一文件输出
		output: {
			path: __dirname + '/dist',
			filename: 'src/build/[name].bundle.js',
		}

		// 多入口，模块单一引用，分文件输出
		output: {
			path: __dirname + '/dist',
			filename: 'src/build/bundle.js',
		}

		// 单一入口，模块单一引用
		entry: './src/index.js',
		output: {
			path: __dirname + '/dist',
			filename: 'src/build/bundle.js',
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


		/*
			chunkFilename: "[name].min.js"
			什么场景需要呢？我们项目就遇到过，在按需加载（异步）模块的时候，这样的文件是没有被列在entry中的，如使用CommonJS的方式异步加载模块：
			require.ensure(["modules/tips.jsx"], function(require) {
		    var a = require("modules/tips.jsx");
		    	// ...
			}, 'tips');
			异步加载的模块是要以文件形式加载哦，所以这时生成的文件名是以chunkname配置的，生成出的文件名就是tips.min.js。
			（require.ensure() API的第三个参数是给这个模块命名，否则 chunkFilename: "[name].min.js" 中的 [name] 是一个自动分配的、可读性很差的id

			output.chunkLoadTimeout
			// Number of milliseconds before chunk request expires, defaults to 120 000. This option is supported since webpack 2.6.0.


			output.devtoolLineToLine
			能给所有或者指定模块设置为行到行的map模式。行到行map模式用一个简单的 sourcecMap , 在这个sourceMap 中每行生成的文件映射到同一行的源文件。这是一个性能优化。只有当你需要更好的性能或者你确定输入的行和生成 的行匹配，你再这么做。
			true 使它对所有module有效（不推荐）。
			一个对象{test，include,exclude} 同module.loaders 很像，对指定的文件设置有效。


		*/

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


	},
	resolve: {
		alias: {
			jquery: "jquery/src/jquery"
		}
	}
}


// 缓存技术 ----------------------------------------------------

hash是compilation对象计算所得，而不是具体的项目文件计算所得。所以以上配置的编译输出文件，所有的文件名都会使用相同的hash指纹。
chunkhash 是根据具体模块文件的内容计算所得的hash值，所以某个文件的改动只会影响它本身的hash指纹，不会影响其他文件。


output: {
	filename: '[name].[chunkhash:8].js',
    path: __dirname + '/build'
}


// hash应用场景
	hash可以作为版本控制的一环，将其作为编译输出文件夹的名称统一管理
	output: {
		filename: '/dest/[hash]/[name].js'
	}


// contenthash
	extract-text-webpack-plugin提供了另外一种hash值：contenthash

/* webpack.config.js */
	// 用 [chunkhash] 命名的好处是 不用每个文件 chunkhash 都会改变
	entry: './src/index.js',
	output: {
	      filename: '[name].[chunkhash].js',
	      path: path.resolve(__dirname, 'dist')
	}

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		})
	]


// 给点击事件传递 参数----------------------------------------------------

	import Print from './print';
	element.onClick = Print.bind(null, 'Hello webpack!');

// 向模块中添加 $变量 ----------------------------------------------------

 require('imports-loader?$=jquery!./jqGreen');

    rules: [
        {
            test: require.resolve("some-module"),
            use: "imports-loader?this=>window"
        }
    ]


















