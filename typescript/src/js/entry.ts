
//import * as c from'./hello.ts';






@Component({
	seletor: 'person',
	template: 'person.html'
})
class Person{
	constructor(public firstName: string, public secondName: string){
		
	};
	methods():void{
		
	}
}

function Component(component){
	return (target:any) => {
		return componentClass(target, component);
	}
}

function componentClass(target:any, component){
	var origin = target;
	//console.log(constructor);
	function construct( constructor, args){
		let c: any = function(){
			return constructor.apply(this, args);
		};
		c.prototype = constructor.prototype;
		return new c();
	}
	let f: any = (...args) => {
		console.log('seletor: ' + component.seletor);
		console.log('template: ' + component.template);
		console.log(`person: ${origin.name}(${JSON.stringify(args)})`);
		return construct(origin, args);
		//return new target;
	}
	f.prototype = origin.prototype;
	return f;
}

let p = new Person('angular','JS');

console.log(p)














