
import { Component } from '@angular/core';
import * as Rx from 'rxjs';
import { TestFn } from '../dts/demo'

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
        console.log(1)
        let test = new TestFn();
        test.method2('zhou')
    }
}
