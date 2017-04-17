'use strict';
app.service("UserService", ['$resource', '$cookieStore',
	function ($resource) {
		//提示语
		this.message = {
			error: '网络错误，请求数据失败!',
			saveError: '网络错误，保存数据失败!'
		};

		//公共页面地址 --------------------------------------------------------------------------------------------
		this.url = {};

		// $resource封装 --------------------------------------------------------------------------------------------
		//this.resource = function( url[, params] ) [, params] 可选
		this.resource = function (url, params) {
			var $this = this;
			params = params || {};
			return $resource(url, params, {
				get: {
					url: url,
					method: 'GET',
					params: {},
					isArray: false,
					transformResponse: function (data) {
						data = angular.isObject(data) ? data : angular.fromJson(data);
						return data;
					}
				},
				query: {
					url: url,
					method: 'GET',
					params: {},
					isArray: true,
					transformResponse: function (data) {
						data = angular.isObject(data) ? data : angular.fromJson(data);
						return data;

					}
				},
				post: {
					url: url,
					method: 'POST',
					params: {},
					isArray: false,
					transformResponse: function (data) {
						data = angular.isObject(data) ? data : angular.fromJson(data);
						return data;

					}
				},
				postForArray: {
					url: url,
					method: 'POST',
					params: {},
					isArray: true,
					transformResponse: function (data) {
						data = angular.isObject(data) ? data : angular.fromJson(data);
						return data;
					}
				}
			})
		};

		/*
	GET类型  方法体参数	(params || {}, success, error)  
	POST类型 方法体参数	(params || {}, payload || {}, success, error)


	// GET请求 期望返回得到 数据类型 {}
	UserService.resource('url').get({}, function(response){ }, function( error){});
	// GET请求 期望返回得到 数据类型 []
	UserService.resource('url').query({}, function(response){ }, function( error){});

	// POST请求 期望返回得到 数据类型 {}
	UserService.resource('url').post({}, {}, function(response){ }, function( error){});
	// POST请求 期望返回得到 数据类型 []
	UserService.resource('url').postForArray({}, {}, function(response){ }, function( error){});

	// POST 保存数据
	UserService.resource('url').save({}, {}, function(response){ }, function( error){});
	// POST 删除数据
	UserService.resource('url').delete({}, {}, function(response){ }, function( error){});
	*/

	}
])
