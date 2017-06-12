'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var promise = new _promise2['default'](function (resolve, reject) {
	if (false) {
		resolve('ok');
	} else {
		reject('cansle');
	}
});
promise.then(function (data) {
	console.log(data);
}, function (data) {
	console.log(data);
});
