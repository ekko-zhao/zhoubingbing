'use strict';
/*
	在这里配置正则表达式
*/
app.service("RegExp", [
	function () {
		var o = {
			email:'',
			mobile:''
		}
		angular.extend(this, o);
	}
])