import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component ({
	//selector: "list-item",
	template: `
		<p>RouterCCViewComponent</p>
	`
	
})
export class RouterCCViewComponent{
	
	constructor( private _activatedRoute:ActivatedRoute){
		console.log('RouterCCViewComponent')
		console.log(_activatedRoute)
	}
	
}












