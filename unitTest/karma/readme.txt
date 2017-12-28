
# Install Karma:
	npm install karma --save-dev

# Install plugins that your project needs:
	npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev

	
/*
	//全局安装 karma-cli
	npm install -g karma-cli

	//生成karma.conf.js
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

*/

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
















































