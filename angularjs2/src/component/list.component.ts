import { Component, Injectable, Injector, ReflectiveInjector, OnInit, Optional, Host} from '@angular/core';

import { TestService } from '../services/test-service';
import { Parent } from './parent';

@Component({
	selector: 'list',
	template: `
		<list-item></list-item>
		<p><button (click)="JSON()">button</button>
{{age}}
		`,
	styles: [ ],
	providers:[
		{provide:Parent, useClass: ListComponent}
	]
})
export class ListComponent implements Parent{
	name:string = 'bingbing';
	age:number = 23
	constructor(){
		console.log(1)
	}
	
	JSON(){
		this.name="zhoubb";
		this.age = 12
		console.log(1)
	}
}

