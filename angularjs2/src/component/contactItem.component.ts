import { Component } from '@angular/core';
//declare var require: any
require('../css/style.less')
//let styles = require('../css/style.less')

@Component({
	selector: 'contact-item',
	template: `
		<form name="forms">
			<div>
				<input type="text" (ngModel)="name" (ngModelChange)="name=$event.target.value" />
				<p (click)="ck()">{{name}}</p>
				<p>{{mobile}}</p>
			</div>
		</form>
	`,
	//styles: [ require('../css/style.less') ]
	/*styles:[
		`
			p{color:blue}
			p:last-child{color:#000;}
		`
	],*/
	//styles: [ require('../css/style.css') ]
	
})
export class ContactItem{
	name: string = "lisi";
	mobile: string = '13820000000'
	ck(){
		//alert(1);
		//console.log(require)
	}
}
