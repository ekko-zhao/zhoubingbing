import { Component, ViewChild , ElementRef} from '@angular/core';


//import { ListComponent } from './component/item.component';
import { ListItemComponent } from './item.component';

@Component({
	selector: 'list',
	template: `
		<form #editform="ngForm">
			<input type="text" name="name" [(ngModel)]="name" require>
			<input type="text" name="tel" [(ngModel)]="mobile" require>
			<button type="button" (click)="submit()">button</button>
		</form>
	`,
	
	styles: [
		`ul{ margin:30px 0; list-style:none}`,
		`li{margin-bottom:10px; border-bottom:1px #999 solid}`
	]
})
export class ListComponent {
	
	constructor(){
		
	}
	@ViewChild('editform') editform :ElementRef
	
	submit(){
		console.log( this.editform )
	}
}
