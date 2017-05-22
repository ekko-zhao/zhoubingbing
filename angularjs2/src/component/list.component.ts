import { Component, Injectable, Injector, ReflectiveInjector, OnInit, Optional, Host} from '@angular/core';

import { TestService } from '../services/test-service';

class ContactAppComponent{
	constructor(){
		
	}
	name:string ="bingbing"
}

@Component({
	selector: 'list',
	template: `<p><button (click)="JSON()">button</button>`,
	styles: [ ],
	providers:[ContactAppComponent]
})
export class ListComponent{
	constructor( @Optional() @Host()  protected a : TestService){
		console.log(this.a)
	}
	
	JSON(){
		
	}
}

