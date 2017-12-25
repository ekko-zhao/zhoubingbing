import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        function* objectentries() {
            let keys = Reflect.ownKeys(this);
            for (let key of keys) {
                yield [key, obj[key]];
            }
        }
        var obj: any = { name: 'zhangsan', age: 23 };
        obj[Symbol.iterator] = objectentries;

        for (let [key, value] of obj) {
            console.log(key, value)
        }


        /* var a = objectentries(obj);
        console.log(a);
        console.log(a.next());
        console.log(a.next());
        console.log(a.next()); */
    }
}
