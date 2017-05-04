var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			title: "angular2",
			filename: "index.html",
			template: __dirname + "/src/tpl/index.html"
		}),
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
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
			test: /\.tsx?$/,
			loader: 'ts-loader',
			exclude: '/node_modules/'
		}]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	}
}
