import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';



@Component({
	selector: 'my-animation',
	template: `
		<button type="button" [@heroState]="state"  (@heroState.start)="animationStarted($event)" (click)="toggleState()">button-animate</button>
    `,
    // templateUrl:'a.html',
	animations: [
		trigger('heroState', [
			state('inactive', style({
				backgroundColor: '#eee',
				transform: 'scale(1)'
			})),
			state('active',   style({
				backgroundColor: '#cfd8dc',
				transform: 'scale(1.1)'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out')),

			transition('void => *', animate('100ms ease-out')),

			transition('* => void', animate('100ms ease-out'))
		])
	]
})
export class MyAnimation{
	state:string = 'active';
	toggleState(){
		if(this.state == "inactive" ){
			this.state = "active"
		}else{
			this.state = "inactive"
		}

	}
	animationStarted($event:any){
		console.log($event)
	}
}
