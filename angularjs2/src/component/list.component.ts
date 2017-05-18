import { Component, Injectable, Injector, ReflectiveInjector} from '@angular/core';




class Hair {
	name: string = 'Hair'
}

class Head{
	name: string = 'header';
	//size: string;
	//, size: string
	/*constructor(public hair:Hair){
		//this.size = size;
	}*/
}

@Injectable()
class Robot{
	constructor(public head:Head){ }
}

//let robot = new Robot( new Head( new Hair(), '30m' ) )

//let injector = new Injector(...);
//let robot = injector.get(Robot);

//console.log(robot)
//console.log(ReflectiveInjector)


/*var injector =  ReflectiveInjector.resolveAndCreate([
	Robot,
	Head
])*/
//var a = new injector();
//console.log(injector)


@Component({
	selector: 'list',
	template: `<p><button (click)="JSON()">button</button>`,
	styles: [ ],
	providers:[Robot]
})
export class ListComponent {
	constructor(){
		//let injector = new Injector()
	}
	
	JSON(){
		//return '123'
	}
}

