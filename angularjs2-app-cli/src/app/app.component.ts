import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styles: []
})

export class AppComponent {
	constructor() { }
	name: String = 'bingbing'

	//alert 提示模态框
	@ViewChild(AlertComponent) private alertComponent: AlertComponent;
	alert(msg: String) {
		this.alertComponent.showModal(msg);
	}

}

/*
	获取对 AppComponent 组件的引用
	child.component
	import { AppComponent } from '../../app.component';

	constructor(private _appComponent: AppComponent) { }

*/