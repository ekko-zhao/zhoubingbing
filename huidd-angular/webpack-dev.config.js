const webpack = require('webpack');
const env = require('./env.config');

// 读取同一目录下的 base config
const config = require('./webpack.config');
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.origin': JSON.stringify(env.origin)
    })
)
module.exports = config;
