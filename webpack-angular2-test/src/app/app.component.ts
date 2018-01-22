
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
        var result = clicks.audit(ev => Rx.Observable.interval(1000));
        result.subscribe(x => console.log(x));
    }
}
