'use strict';

var Rx = require('rxjs/Rx');

var button = document.querySelector('body');
Rx.Observable.fromEvent(button, 'click').throttleTime(1000).scan(function (count) {
	return count + 1;
}, 0).subscribe(function (count) {
	return console.log(count);
});
