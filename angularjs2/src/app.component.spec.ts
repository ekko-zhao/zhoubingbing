import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-component',
	template: `
		<!--<header></header>
		<list></list>
		<footer></footer>-->
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
describe('angular component describe',function(){
	console.log(1)
	
	var tel = '15000939211';
	tel.replace(/(\d{3})(\d{4})(\d{4})/, function(m, m1, m2, m3){
		console.log(m)
		console.log(m1)
		console.log(m2)
		console.log(m3)
	})
	
	it('abc', function(){
		//expect(2).toBe(4);
	})
})
