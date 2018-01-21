
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
        interface Shape {
            color: string;
        }

        interface Square extends Shape {
            sideLength: number;
        }

        let square: Square = {
            color: '',
            sideLength: 12
        };

        /* square.color = "blue";
        square.sideLength = 10; */
    }
}
