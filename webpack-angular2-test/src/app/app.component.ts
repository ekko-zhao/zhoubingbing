
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
        var ob = Rx.Observable.of('1000',Rx.Scheduler.async);
        console.log('111')
        ob.subscribe(
            x => console.log(x)
        )
        console.log('222')
    }
}
