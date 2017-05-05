import { Component } from '@angular/core';
//declare var require: any
require('../css/style.less')

@Component({
	selector: 'contact-item',
	template: `
		<div>
			<p (click)="ck()">张三</p>
			<p>13800000000</p>
		</div>
	`,
	styles:[
		`
			p{color:blue}
			p:last-child{color:#000;}
		`
	],
	styleUrls: [ 'src/css/style.less' ]
	
})
export class ContactItem{
	ck(){
		//alert(1);
		//console.log(require)
	}
}
