import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component ({
	//selector: "list-item",
	template: `
		<p>RouterChild2Component</p>
	`
	
})
export class RouterChild2Component{
	
	constructor( private _activatedRoute:ActivatedRoute){
		console.log('RouterChild2Component')
		console.log(_activatedRoute)
	}
	
}












