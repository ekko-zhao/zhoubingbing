import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	//selector: 'header',
	template: `<h3 id='HeaderComponent'>header{{id}}</h3>
				<router-outlet></router-outlet>
				`,
	styles: [
		`h3{border-bottom:1px #333 solid; color:red;}`,
		`h3{ text-align:center}`
	]
})
export class HeaderComponent implements OnInit, OnDestroy{
	private sub: any;
	name: string = 'bingbing'
	id: string = '0'
	constructor( private _activatedRoute:ActivatedRoute){
		this.sub = _activatedRoute.params.subscribe(parames =>{
			this.id = parames.id
			console.log(this.id)
		})
		
		//console.log(_activatedRoute.params)
	}
	
	ngOnInit(){
		console.log('HeaderComponent ngOnInit');
		console.log(document.getElementById('HeaderComponent'));
		console.log(this._activatedRoute);
	}
	ngOnDestroy(){
		console.log('HeaderComponent ngOnDestroy');
		this.sub.unsubscribe()
	}
}