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
        this.name = 'zhoubingbing'
        /* var promise1 = new Promise(function (resolve, reject) {
            resolve('resolve1');
        })

        var promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(3)
                resolve('resolve2');
            }, 2000)
        })

        var f = function* () {
            var a = yield 1;
            console.log(a)
            console.log(55)
            yield promise2;
            console.log(66)
            return 'abc';
        }
        co(f).then(function (data) {
            console.log(data)
            console.log('resolve')
        }, function (data) {
            console.log(data)
            console.log('reject')
        }) */


        /* var a = objectentries(obj);
        console.log(a);
        console.log(a.next());
        console.log(a.next());
        console.log(a.next()); */
    }
}
