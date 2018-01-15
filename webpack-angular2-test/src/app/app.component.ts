import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>app-root</p>'
})

export class AppComponent {
    constructor() {
        class Animal {
            public name: string;
            public constructor(theName: string) { this.name = theName; }
            public move(distanceInMeters: number) {
                console.log(`${this.name} moved ${distanceInMeters}m.`);
            }
        }




    }
}
