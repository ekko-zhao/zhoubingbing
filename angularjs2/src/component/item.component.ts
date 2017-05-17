import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from '../services/shared.service';

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
		<input type="text" [(ngModel)]="inputText">
		<button (click)="add()">button</button>
	`,
	//changeDetection: ChangeDetectionStrategy.Default,
	
})
export class ListItemComponent{
	
	inputText:string = 'Testing data';

	constructor(private _sharedService: SharedService ){
		
	}
	add(){
		this._sharedService.append(this.inputText);
		console.log(this._sharedService)
	}
	
}












