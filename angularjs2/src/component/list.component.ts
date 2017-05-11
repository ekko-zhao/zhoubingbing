import { Component, ViewChild , ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { ListComponent } from './component/item.component';
//import { ListItemComponent } from './item.component';



@Component({
	selector: 'list',
	template: `
		<form [formGroup]="editform">
			<input type="text" formGroupName="firstname" [formControl]="firstname2">
			<p>{{firstname2.value}}</p>
			<button type="button" (click)="submit(editform)">button</button>
		</form>
	`,
	
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
	
	
	submit(c:object){
		console.log(c)
	}
}
