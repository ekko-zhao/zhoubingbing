import { Component, ViewChild } from '@angular/core';
@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        var obj = {
            name: 'zhoubingbinf',
            getname: function() {
                console.log(this)
            }
        }

       var a =  obj.getname.bind({age:23})

        console.log('===============================')
        console.log(a())
        console.log('===============================')
    }
}

