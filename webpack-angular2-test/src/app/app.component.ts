import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        let someValue: any = "this is a string";
        let strLength: number = (<string>someValue).length;

        console.log(strLength)
    }
}
