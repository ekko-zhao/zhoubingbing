import { Component, ViewChild } from '@angular/core';

var co = require('co');
// var co = import('co');
// console.log(co)
@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    public name: string;
    constructor() {
        var promise1 = new Promise((resolve, reject) => {
            setTimeout(function () {
                if (1) {
                    resolve('ok')
                } else {
                    reject('cansle')
                }
            }, 2000)
        })

        Promise.resolve('promise1').then(function(){
            console.log(2222)
        })

        /* var a = objectentries(obj);
        console.log(a);
        console.log(a.next());
        console.log(a.next());
        console.log(a.next()); */
    }
}
