
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
        console.log(Rx.Observable);
    }
}
// loggingIdentity<string>('bingbing')
