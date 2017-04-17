'use strict';
require('angular'); //引入angular
//require('angular-animate');
//require('angular-cookies');
require('angular-resource');
//require('angular-sanitize');
//require('angular-touch');
//require('angular-translate');
require('ngstorage');
//require('angular-ui-router');
//require('angular-ui-bootstrap');
//require('angular-ui-load');
//require('angular-ui-jq');
//require('oclazyload');

angular.module('app', [
	//'ngAnimate',
	//'ngCookies',
	'ngResource',
	//'ngSanitize',
	//'ngTouch',
	//'pascalprecht.translate',
	'ngStorage',
	//'ui.router',
	//'ui.bootstrap',
	//'ui.load',
	//'ui.jq',
	//'ui.validate',
	//'oc.lazyLoad'
]);

var app = angular.module('app').config(
	['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
		function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
			// lazy controller, directive and service
			app.controller = $controllerProvider.register;
			app.directive = $compileProvider.directive;
			app.filter = $filterProvider.register;
			app.factory = $provide.factory;
			app.service = $provide.service;
			app.constant = $provide.constant;
			app.value = $provide.value;
		}
	])
window.app = app;
require('../services/userService.js');
require('../services/propertyService.js');

require('../directives/ui-charValidate.js');
require('../directives/ui-validateCode.js');






























