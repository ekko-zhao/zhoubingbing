import { Component, ViewChild } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <p>app-root</p>
        <button>button</button>
    `
})

export class AppComponent {
    constructor() { }
    ngOnInit() {
        function loggingIdentity<T>(arg: T): T {
            console.log(23)
            console.log(arg)
            return arg;
        }



        var el = Rx.Observable.fromEvent(document.querySelector('button'), 'click', true, loggingIdentity);
        el.subscribe(x => {
            console.log(x)
        });
    }
}
// loggingIdentity<string>('bingbing')
