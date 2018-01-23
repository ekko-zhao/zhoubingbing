
import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <p>app-root</p>
        <button>button</button>
    `
})
export class AppComponent {
    constructor() {
        var subject = new Rx.ReplaySubject(3); // buffer 3 values for ne w subscribers ，注:缓存了三个值。
        subject.subscribe({ next: (v) => console.log('observerA: ' + v) });
        subject.next(1);
        subject.next(2);
        subject.next(3);
        subject.next(4);

        subject.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });

        subject.next(5);

    }
}
