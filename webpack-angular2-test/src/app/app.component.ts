import { Component, ViewChild } from '@angular/core';

var co = require('co');
// var co = import('co');
// console.log(co)
@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        function decorate(target, name, descriptor) {
            var value = descriptor.value
            descriptor.value = function(){
                value.apply(target)
                //console.log(this)
            }
        }


        class foo {
            age = 23
            @decorate
            getname() {
                // console.log(this)
                alert(1)
                this.getfi()
            }
            getfi(){
                console.log('getfi')
            }
            constructor(){
            }
        }

        var a = new foo()
        a.getname()
        // a.getname = function(){}
    }
}
