
import { Component } from '@angular/core';
// import * as Rx from 'rxjs';
// import { TestFn } from '../dts/demo'
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    template: `
        <p>app-root</p>
        <button>button</button>
    `
})
export class AppComponent {

    constructor(private http: Http) {
        console.log(http)
    }
    ngOnInit() {
        let log: Log
    }
}
