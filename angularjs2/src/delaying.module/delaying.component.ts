import { Component } from '@angular/core';
@Component({
	template: `
		<p>delaying.component-ok<p>
	`
})
export class DelayingComponent{
	constructor(){
		console.log('DelayingComponent')
	}
}