import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-component',
	template: `
		<!--<header></header>
		<list></list>
		<footer></footer>-->
		<my-animation></my-animation>
		<main>
			<router-outlet></router-outlet>
			<!--<a routerLink="header">header</a>
			<a routerLink="footer">footer</a>-->
			<a [routerLink]="['/header',122]" [queryParams]="{limit:5}">header</a>
			<a [routerLink]="['/footer']" >footer</a>
			<a [routerLink]="['/delay']" >delay</a>


			<p>----------------------------------------------------------------------------</p>
			<a [routerLink]="['/header',123]">header</a>
		</main>
	`
})
export class AppComponent{
	constructor(public _router:Router, private _activatedRoute:ActivatedRoute){
		setTimeout(function(){
			//_router.navigate(['/header/233',{s:'2017-05-24'},'child2',{s:'2017-05-24'}]);
			//_router.navigate(['/header', '233', 'child2', {s:'2017-05-24'} ], {queryParams:{limit:5}});
			
			//, {outlets:{aux:['view']}}
			//_router.navigateByUrl('/footer');
		},2000)
	}
	ngOnInit(){
		console.log('AppComponent ngOnInit');
	}
}