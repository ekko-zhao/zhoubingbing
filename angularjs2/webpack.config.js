var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取所有的.css文件，合并它们的内容然后提取css内容到一个独立的”styles.css“里
var ETP = require("extract-text-webpack-plugin");
var extractCSS = new ETP('./build/css/style.css?v=[chunkhash:8]');

module.exports = {
	plugins: [
		extractCSS,
		new HtmlWebpackPlugin({
			title: "angular2",
			filename: "index.html",
			template: __dirname + "/src/tpl/index.html"
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
	entry: ['./src/main.ts'],
	output: {
		path: __dirname,
		filename: './build/js/bundle.js',
		//publicPath: "./"
	},
	devServer: {
		inline: true,
		port: 3000
	},
	module: {
		loaders: [{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			/*loaders: [{
				test: /\.css$/,
				loader: extractCSS.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},*/
			/*{
			test: /\.less$/,
			loader: extractCSS.extract({
				fallback: 'style-loader',
				use: 'css-loader!less-loader'
			})
		},*/
			{
				test: /\.less$/,
				loader: extractCSS.extract({
					fallback: 'to-string-loader',
					use: 'css-loader!less-loader'
				})
			}, /*{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: '/node_modules/'
			},*/{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader!angular-router-loader',
				//loaders: ['awesome-typescript-loader','angular-router-loader'],
				exclude: '/node_modules/'
			}, {
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	}
}
