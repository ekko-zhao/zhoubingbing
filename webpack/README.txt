
// 安装 ------------------------------------------------------------
    npm install --save-dev webpack
    npm install --save-dev webpack@<version>
    /*
        npm install --global webpack
    */

x/* package.json */	-----------------------------------------------------
{	
    "scripts": {
		"start": "webpack",
		/*
			config 默认配置文件为 根目录下的 webpack.config.js
			也可以通过 --config fileName.js 指定配置文件
		*/
        "dev": "webpack-dev-server --colors --progress"
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
			filename: 'src/build/[name].js',
		}
		
	*/
	
	// 编译输出
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		
		// 配置页面中 静态资源的请求路径
		publicPath: "./"
	},
	
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
		
	}
}


// html-webpack-plugin -----------------------------------------------------

	多个页面可以在 plugins 配置多个
	plugins:[
		new HtmlWebpackPlugin({}),
		new HtmlWebpackPlugin({})
	]

new HtmlWebpackPlugin({
	title: 'My App',
	
	// css js path?[hash]
	hash: true, 
	
	filename: 'index.html',
	/*
		或者指定 template
		template: __dirname+'/src/tpl/login.html',
	*/
	//当传递true或“body”时，所有javascript资源将放置在body元素的底部。 'head'将脚本放置在head元素中
	inject: true | 'head' | 'body' |false ,
	
	favicon: path,
	
	minify: { removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true,} | false Pass a html-minifier options object to minify the output.
	
	cache: boolean,
	
	// main 和 user 和 entry 的属性名相对应
	chunks:['main','user','common.js']
}),



// extract-text-webpack-plugin -----------------------------------------------------
	用于导出 css 文件
	
	// for webpack 2.0
	npm install --save-dev extract-text-webpack-plugin@2.1.2
	

	var ETP = require("extract-text-webpack-plugin");
	// 指定 css 输出路径， 路径相对于 output.path 内
	var extractCSS = new ETP('./css/style.css');

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


















