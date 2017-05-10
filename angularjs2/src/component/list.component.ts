import { Component, ViewChild , ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { ListComponent } from './component/item.component';
//import { ListItemComponent } from './item.component';

const EMAIL_REGEXP = new RegExp("[a-z0-9]+@[a-x0-9].com");
const TEL_REGEXP = new RegExp("1[0-9]{10}");
function validateFirstName(c: FormControl) {
	return ( EMAIL_REGEXP.test(c.value) || TEL_REGEXP.test(c.value) ) ? null : {
		firstName:{
			valid:false,
			errorMsg:'用户名必须是手机号或者邮箱地址'
		}
	}
}

@Component({
	selector: 'list',
	template: `
		<p>{{sex | sexReform }}</p>
		<p>{{json | json}}</p>
	`,
	
	styles: [
		`ul{ margin:30px 0; list-style:none}`,
		`li{margin-bottom:10px; border-bottom:1px #999 solid}`
	]
})
export class ListComponent {
	name:number = 23.118
	sex:string = 'male'
	constructor(){
		setTimeout(()=>{
			this.json.age=12
		},2000)
	}
	getData(){
		return new Date();
	}
	json = {age:23, school:'xuexiao'}
}
