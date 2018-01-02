Error.stackTraceLimit = Infinity;

//引入编译时所需的文件库
require('reflect-metadata');
require('zone.js/dist/zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

//打包文件名后缀为 spec.ts 的测试代码
var appContext = require.context('./src', true, /\.spec\.ts/ );
appContext.keys().forEach(appContext)

var testing = require('@angular/core/testing');
var testingBrowser = require('@angular/platform-browser-dynamic/testing');
testing.TestBed.initTestEnvironment(testingBrowser.BrowserDynamicTestingModule, testingBrowser.platformBrowserDynamicTesting())
