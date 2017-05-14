import { Component, ViewChild , ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { ListComponent } from './component/item.component';
//import { ListItemComponent } from './item.component';

import { BeautifulBackgroundDirective } from '../directive/beautifulBackground.directive';

@Component({
	selector: 'list',
	template: `
		<form [formGroup]="editform">
			<input type="text" formGroupName="firstname" [formControl]="firstname2">
			<p *myBeautifulBackground="b" >asas</p>
			<button type="button" (click)="submit(editform); color='blue'">button</button>
		</form>
	`,
	//directives: [ BeautifulBackgroundDirective ],
	styles: [
		`ul{ margin:30px 0; list-style:none}`,
		`li{margin-bottom:10px; border-bottom:1px #999 solid}`
	]
})
export class ListComponent {
	editform: FormGroup ;
	constructor(){
		this.editform = new FormGroup({
			firstname: new FormControl('')
		})
	}
	firstname2: FormControl = new FormControl();
	
	color:string = "red";
	submit(c:object){
		console.log(c)
	}
	b:boolean = false
}
