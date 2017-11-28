import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        var s = Symbol();
        var s2 = Symbol();
        var obj = {
            [s]: 'zhoubing',
            [s2]: 'zhangdan'
        }

        console.log('===============================')
        console.log(obj[s2])
        console.log('===============================')
    }
}

