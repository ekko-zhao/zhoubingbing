import { Component, ViewChild } from '@angular/core';

var co = require('co');
// var co = import('co');
// console.log(co)
@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    public names: string = 'zhoubingbign';
    public name() { };
    constructor() {

        class MyArray extends Array{}


         var a = new MyArray()
        console.log(a)
    }
}
