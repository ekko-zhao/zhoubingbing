# 安装
$ npm install --save-dev babel-cli

# 转码结果写入一个文件
$ babel example.js -o compiled.js

# 整个目录转码
babel src -d lib

# -s 参数生成source 


# ES2015转码规则
$ npm install --save-dev babel-preset-es2015
# react转码规则
$ npm install --save-dev babel-preset-react
# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3

.babelrc

{
	"presets": [
		'es2015'
	],
	"ignore": [
		'src/filename.js'
	],
	"env": {
		"production": {
			"plugins": []
		}
	},
	comments:false
}




#对于新的新的API：Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象 #需要安装
$ npm install --save babel-polyfill

import 'babel-polyfill';
// 或者
require('babel-polyfill');