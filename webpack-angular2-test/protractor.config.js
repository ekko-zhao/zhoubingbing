/* var Jasmine2HtmlReporter = require('./node_modules/protractor-jasmine2-html-reporter');
var report = require('./node_modules/jasmine-reporters'); */
exports.config = {
    // Selenium server 测试服务器接入地址
    SeleniumAddress: 'http://localhost:4444/wd/hub',
    // 测试服务器的配置信息
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome',
        'chromeOptions': {
            'args': ['incognito', 'disable-extensions', 'start-maximized']
        }
    }],
    // 需要运行的测试程序代码文件列表
    /* suites: {
        scan: 'tc/e2e/scan.js',
        app: 'tc/e2e/app.js',
        hppd: 'tc/e2e/hppd.js'
    }, */
    // 选择使用 jasmine 作为JavaScript语言的测试框架
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: false
    },
    specs: [
        '../e2e/e2etest.spec.js'
    ],
    useAllAngularAppRoots: true,
    //输出测试报告
    /* onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'report/e2e/',
                takeScreenshots: true, //是否截屏
                takeScreenshotsOnlyOnFailures: true //测试用例执行失败时才截屏
            })
        );
        jasmine.getEnv().addReporter(
            new report.JUnitXmlReporter({
                savePath: 'report/tc/e2e/',
                consolidateAll: false,
                filePrefix: '',
                package: 'E2E'
            })
        );
    } */
};
