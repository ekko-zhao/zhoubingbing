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

＃设置环境变量 
#defaults to "development"

unix
BABEL_ENV=production

windows
SET BABEL_ENV=production

//es3 
foo.catch
out
foo["catch"]
npm install babel-plugin-transform-es3-member-expression-literals —-save-dev
"plugins": ["transform-es3-member-expression-literals"]


var foo = {
  catch: function () {}
};
Out
var foo = {
  "catch": function () {}
};

npm install babel-plugin-transform-es3-property-literals
"plugins": ["transform-es3-property-literals"]


.babelrc配置文件-----------------------------------------------
{
	"presets": [
		"es2015",
		"stage-0"
	],
	"ignore": [
		'src/filename.js'
	],
	"env": {
		"production": {
			"plugins": []
		}
	},
	comments:false,
	retainLines:false //是否保留行
}


# 对于新的新的API：Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象 #需要安装
	$ npm install --save babel-polyfill

	1.
	npm install babel-plugin-transform-runtime --save-dev
	plugins:["transform-runtime"]

	2.
	import 'babel-polyfill';
	// 或者
	require('babel-polyfill');


为了兼容像 IE8 这样的老版本浏览器，我们引入 es5-shim 作为 polyfill
同样的问题还包括 Object.create，上述问题可以再引入 es5-sham 解决.

<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-sham.min.js"></script>






