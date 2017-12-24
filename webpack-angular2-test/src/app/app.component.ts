import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        var a = [1,2];
        a[Symbol.iterator]
        //  console.log(a['']())

        /*
            console.log('===============================')
        console.log(obj)

            console.log('===============================')
         */
    }
}
