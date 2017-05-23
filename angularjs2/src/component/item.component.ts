import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from '../services/shared.service';

import { ListComponent } from './list.component';
import { Parent } from './parent';

@Component ({
	selector: "list-item",
	template: `
		<p>{{_parent.name}}</p>
		<input type="text" [(ngModel)]="inputText">
		<button (click)="add()">button</button>
	`,
	//changeDetection: ChangeDetectionStrategy.Default,
	
})
export class ListItemComponent{
	
	constructor(public _parent:Parent ){
		setTimeout(function(){
			
			console.log(_parent)
		},3000)
	}
	add(){
		
	}
	
}












