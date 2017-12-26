import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        function *abc(){
            while(true){
                yield 'a';
                console.log('a')
                yield 'b';
                console.log('b')
            }

        }
        var a= abc()
        a.next()
        a.next()
        a.next()
        a.next()

        /* var a = objectentries(obj);
        console.log(a);
        console.log(a.next());
        console.log(a.next());
        console.log(a.next()); */
    }
}
