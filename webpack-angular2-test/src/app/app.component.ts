
import { Component } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
    selector: 'app-root',
    template: `
        <p>app-root</p>
        <button>button</button>
    `
})
export class AppComponent {
    constructor() {
        var clicks = Rx.Observable.fromEvent(document, 'click');
var buffered = clicks.bufferWhen(() =>
  Rx.Observable.interval(1000 + Math.random() * 4000)
);
buffered.subscribe(x => console.log(x));
    }
}
