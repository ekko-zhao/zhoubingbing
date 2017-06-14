var Rx = require('rxjs/Rx');

//import {Rx} from 'rxjs/Rx';

//var document = document || {}

var button = document.querySelector('body');
	Rx.Observable.fromEvent(button, 'click')
	  .throttleTime(1000)
	  .scan(count => count + 1, 0)
	  .subscribe(count => console.log(count));