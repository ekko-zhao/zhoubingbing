
# Install Karma:
	npm install karma --save-dev

# Install plugins that your project needs:
	npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev


	//全局安装 karma-cli
	npm install -g karma-cli

	
# 生成karma.conf.js
	cmd: karma init
	
	//package.json
	{
        "script":{
            "test": "karma start karma.conf.js"
        },
        "devDependencies": {
            "jasmine": "^2.6.0",
            "jasmine-core": "^2.6.2",
            "karma": "^1.7.0",
            "karma-chrome-launcher": "^2.1.1",
            "karma-jasmine": "^1.1.0"
        }
    }
	
	$ karma start my.conf.js // 指定配置文件名称 
	karma start my.conf.js --log-level debug --single-run  // 覆盖配置文件配置
	

# Run Karma:
	node ./node_modules/karma/bin/karma start
	
	
module.exports = function(config) {
	config.set({
		autoWatch: Boolean
		// CLI: --auto-watch, --no-auto-watch  启用或禁用监视文件并执行测试
		
		browsers: Array 
		// CLI: --browsers Chrome,Firefox, --no-browsers
		Possible Values:
			Chrome (launcher requires karma-chrome-launcher plugin)
			ChromeCanary (launcher requires karma-chrome-launcher plugin)
			PhantomJS (launcher requires karma-phantomjs-launcher plugin)
			Firefox (launcher requires karma-firefox-launcher plugin)
			Opera (launcher requires karma-opera-launcher plugin)
			IE (launcher requires karma-ie-launcher plugin)
			Safari (launcher requires karma-safari-launcher plugin)
		
		colors
		// CLI: --colors, --no-colors  在输出中启用或禁用颜色
		
		
		exclude: Array 
		// 从加载文件中排除的文件/模式列表
		
		files: Array
		// 在浏览器中加载的文件/模式列表
		
		frameworks: Array
		// 您希望使用的测试框架列表  you will set this to ['jasmine'], ['mocha'] or ['qunit']...
		
		hostname: String
		// Default: 'localhost'
		
		plugins: Array
		// Default: []
		这与中间件相同，只是这些中间件将在业力自己的中间件之前运行
		
		port
		// Default: 9876
		--port 9876
		
	})
}



// API 文档---------------------------------------------------------------------------------------

#配置文件
	最简单的方式是使用命令行创建文件， $ karma init
	该文件可以是 JavaScript, CoffeeScript, or TypeScript and is loaded as a regular Node.js module
	
	./karma.conf.js
	./karma.conf.coffee
	./karma.conf.ts
	
	/*
		// karma.conf.js
			module.exports = function(config) {
			  config.set({
				basePath: '../..',
				frameworks: ['jasmine'],
				//...
			  });
			};
		
		# karma.conf.coffee
			module.exports = (config) ->
			  config.set
				basePath: '../..'
				frameworks: ['jasmine']
				# ...
		
		// karma.conf.ts
			module.exports = (config) => {
			  config.set({
				basePath: '../..',
				frameworks: ['jasmine'],
				//...
			  });
			}
	*/
	
# 文件匹配
	exclude
	files:[]
	/*
		pattern: String
			No Default.
			
		type: String	// css | html | js | dart | module
			Default. Will attempt to determine type based on file extension. If that fails, defaults to js.
			
		watched: Boolean
			Default. true
			
		included: Boolean
			Default. true
			
		served: Boolean
			Default. true
			
		nocache: Boolean
			Default. false
			
		// Complete example
		{pattern: 'compiled/app.js.map', included: false, served: true, watched: false, nocache: true}
		
	*/
	
	preprocessors
		Examples:
			**/*.js
			**/!(jquery).js
			**/(foo|bar).js
# 配置选项
	autoWatch: Boolean				// 监听匹配文件改动时， 是否执行测试
		Default: true
		CLI: --auto-watch, --no-auto-watch
	
	autoWatchBatchDelay: Number		// 改动文件后，尝试批处理 进行测试
		Default: 250

	basePath: String				// 被用于解析路径, 明确files and exclude. 如果是相对路径 则依赖__dirname
		Default: ''
	
	browserDisconnectTimeout: Number		
		Default: 2000				// karma与浏览器的断开是正常的，karma 会在设置的时间后重新连接

	browserConsoleLogOptions: Object
		Default: {level: "debug", format: "%b %T: %m", terminal: true}
		{
		  level:  string,		
		  format: string,		// %b, %t, %T, and %m 分别对应 浏览器字符串、 小写、大写 和 log message
		  path:   string,		// 输出文件的路径
		  terminal: boolean		// 表示 log 是否被写在 终端
		}
	
	browserDisconnectTolerance: Number	// 被允许的不连接的数量
		Default: 0

	browserNoActivityTimeout: Number	// 从浏览器 多久 没有得到信息后，断开连接
		Default: 10000			


	browsers: Array
		Default: []
		CLI: --browsers Chrome,Firefox, --no-browsers
			Chrome (launcher requires karma-chrome-launcher plugin)
			ChromeCanary (launcher requires karma-chrome-launcher plugin)
			PhantomJS (launcher requires karma-phantomjs-launcher plugin)
			Firefox (launcher requires karma-firefox-launcher plugin)
			Opera (launcher requires karma-opera-launcher plugin)
			IE (launcher requires karma-ie-launcher plugin)
			Safari (launcher requires karma-safari-launcher plugin)
	
	captureTimeout: Number
		Default: 60000
	

	colors：Boolean					// 是否允许在控制台输出 有颜色区分
		Default: true
		CLI: --colors, --no-colors
		
	concurrency: Number
		Default: Infinity

	crossOriginAttribute: Boolean	
		Default: true
	
	
	...






































































