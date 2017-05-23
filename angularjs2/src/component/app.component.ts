import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-component',
	template: `
		<!--<header></header>
		<list></list>
		<footer></footer>-->
		<main>
			<router-outlet></router-outlet>
			<p>122</p>
			<!--<a routerLink="header">header</a>
			<a routerLink="footer">footer</a>-->
			<a [routerLink]="['/header']" routerLinkActive="className">header</a>
			<a [routerLink]="['/footer']" routerLinkActive="className">footer</a>
			<p>122</p>
			
		</main>
	`
})
export class AppComponent{
	constructor(public _router:Router){
		setTimeout(function(){
			//_router.navigate(['/footer']);
			console.log(_router)
			//_router.navigateByUrl('/footer');
		},2000)
	}
}