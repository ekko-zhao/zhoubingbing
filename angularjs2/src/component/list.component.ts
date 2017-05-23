import { Component, Injectable, Injector, ReflectiveInjector, OnInit, Optional, Host} from '@angular/core';

import { TestService } from '../services/test-service';

class ContactAppComponent{
	constructor(){
		
	}
	name:string ="bingbing"
}

@Component({
	selector: 'list',
	template: `
		<list-item></list-item>
		<p><button (click)="JSON()">button</button>
		`,
	styles: [ ],
	providers:[ContactAppComponent]
})
export class ListComponent{
	name:string = 'bingbing';
	constructor( @Optional() @Host()  protected a : TestService){
		
	}
	
	JSON(){
		this.name="zhoubb";
		console.log(1)
	}
}

