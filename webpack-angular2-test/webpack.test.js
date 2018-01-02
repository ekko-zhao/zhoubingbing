module.exports = {

	devtool: 'cheap-module-eval-soruce-map',

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},

	module: {
		loaders: [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader'
		}, {
			test: /\.html$/,
			loader: 'html-loader'
		}, /* {
			test: /\.(png|jpe?g|fig|svg|woff|woff2|ttf|eot|ico)$/,
			loader: 'null'
		}, {
			test: /\.css$/,
			loader: 'null'
		} */]
	}

}
