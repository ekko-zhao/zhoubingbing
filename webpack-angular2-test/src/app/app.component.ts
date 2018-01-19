
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
        /* var p = new Promise(function (resolve, reject) {
            reject('ok c');
        }) */

        /* var ob = Rx.Observable.interval(1000)
        ob.subscribe(
            x => console.log(x)
        ) */
        /* ob.subscribe(
            fromEventPattern(addHandler: function(handler: Function): any, removeHandler: function(handler: Function, signal?: any): void, selector: function(...args: any): T): Observable<T>
            x => console.log(x)
        ) */
    }
}
