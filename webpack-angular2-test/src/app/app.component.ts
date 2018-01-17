import { Component } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        console.log(Rx.Observable);
    }
}
