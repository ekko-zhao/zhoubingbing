import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from '../services/shared.service';

import { ListComponent } from './list.component';


@Component ({
	selector: "list-item",
	template: `
		<p>{{_listComponent.name}}</p>
		<input type="text" [(ngModel)]="inputText">
		<button (click)="add()">button</button>
	`,
	//changeDetection: ChangeDetectionStrategy.Default,
	
})
export class ListItemComponent{
	name:string = this._listComponent.name
	constructor(private _listComponent:ListComponent){
		setTimeout(function(){
			
			console.log(_listComponent)
		},3000)
	}
	add(){
		
	}
	
}












