import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component ({
	//selector: "list-item",
	template: `
		<p>RouterChildComponent</p>
		<router-outlet></router-outlet>
		<router-outlet name="aux"></router-outlet>
	`
})
export class RouterChildComponent{
	
	constructor( private _activatedRoute:ActivatedRoute){
		console.log('RouterChildComponent')
		console.log(_activatedRoute)
	}
	
	
}












