'use strict';

var Rx = require('rxjs/Rx');

Rx = Rx || Rx2;

console.log(Rx.Observable.prototype)
var a = Rx.Observable.of(1,2,3).filter(x => { 
	//x + '!!!';
	//console.log(x);
	return x === 2;
});
console.log(a);
a.subscribe(
	(e)=>{
		console.log(e);
	}
)
//console.log(Rx)