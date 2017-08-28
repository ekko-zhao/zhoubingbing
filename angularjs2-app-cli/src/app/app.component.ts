import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})

export class AppComponent {
    constructor() {
        function* libs() {
            yield 10
        }
        var promise = new Promise((resolve, reject) => {
            throw new Error('test');
            //resolve('ok');
        })

        promise.then()
            .catch(function (e) { console.log(e) })
    }
}

/*
	获取对 AppComponent 组件的引用
	child.component
	import { AppComponent } from '../../app.component';

	constructor(private _appComponent: AppComponent) { }
ßß
*/
