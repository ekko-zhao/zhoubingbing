import { Component } from '@angular/core';
//import { Promise } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
const crypto = require('crypto')

@Component({
	//selector: 'footer',
	template: `<h3>footer</h3><button (click)="name='zhou'">buttom</button>`,
	styles: [
		`h3{border-top:1px #333 solid; color:red;}`,
		`h3{ text-align:center}`
	]
})
export class FooterComponent{
	name:string = 'zhoubingbing'
	constructor( private _activatedRoute:ActivatedRoute){
		
		var md5 = (str:string)=>{
			return crypto.createHash('md5')
			.update(str.toString())
			.digest('hex')
		}
		
		//console.log(md5('32232sdf'))
		/*console.log(1)
		console.log(_activatedRoute)
		console.log(2)*/
	}

}