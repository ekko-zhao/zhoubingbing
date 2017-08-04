＃npm install 后 webpack不是内部命令时 需要执行命令 npm link webpack 
//如果需要的话 npm link webpack-dev-server

//自动补全样式
npm install --save-dev postcss-loader autoprefixer
module.exports = {
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader",
                    /*
                        ?sourceMap=true

                        
                    */
                // 指定路径
                include: path.resolve(--dirname, 'src/styles'),

                // 排除路径
                exclude: '/node_modules/',



            }
        ]
    }
}

And create a postcss.config.js with:
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}