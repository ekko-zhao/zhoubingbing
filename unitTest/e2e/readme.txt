install -g protractor
webdriver-manager update

webdriver-manager start
	/*
		新建protractor.config.js
		exports.config = {
			seleniumAddress: 'http://localhost:4444/wd/hub',
			specs: ['./e2e/e2etest.spec.js']
		}
	*/
protractor protractor.config.js