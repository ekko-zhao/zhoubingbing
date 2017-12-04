import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        function someConstructor() {
            this.name = 'saf'
        }
        var result = Reflect.construct(Array, [], someConstructor);

        var a  = Reflect.getPrototypeOf(result); // 输出：someConstructor.prototype
        console.log(a)
        var b  = Array.isArray(result); // true
        console.log(b)
        /*
            console.log('===============================')
        console.log(obj)

            console.log('===============================')
         */
    }
}

