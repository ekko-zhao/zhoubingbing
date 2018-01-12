import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        interface SearchFunc {
            (source: string, subString: string): boolean;
        }

        let mySearch: SearchFunc;
        mySearch = function (source: string, subString: string) {
            let result = source.search(subString);
            return result > -1;
        }




    }
}
