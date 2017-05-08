import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';


//var emitter = new events.EventEmitter();

/*@Component ({
	selector: "list-item",
	template: `
		<div class ="contact-info">
			<label class="contact-name">{{contact.name}}</label>
			<span class="contact-tel">{{contact.telNum}}</span>
		</div>
	`
})
export class ListItemComponent implements OnInit{
	ngOnInit(){
		console.log( JSON.stringify(this.contact) );
	}
	@Input() contact:any = {}
	
}*/
@Component ({
	selector: "list-item",
	template: `
		<div>
			<label>{{contact.name}}</label>
			<span>{{contact.telNum}}</span>
		</div>
	`
})
export class ListItemComponent implements OnInit{
	name: string = 'bingbing'
	ngOnInit(){
		//console.log( JSON.stringify(this.contact) );
	}
	@Input() contact:any = {}
	
	listen(){
		//this.contact.name = 'test';
		console.log(this)
		//console.log(this.name);
	}

}












