import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        'hello'[Symbol.iterator]();

        for(let value of 'hello'){
            console.log(value)
        }

        /* class MySearch {
            constructor(value) {
                this.value = value;
            }
            value;
            [Symbol.search](string) {
                console.log(string)
                return string.indexOf(this.value)
            }
        } */

        console.log('===============================')
        /* console.log(new MySearch('foo'));
        console.log('foobar'.search(new MySearch('foo'))); */


        console.log('===============================')
    }
}

