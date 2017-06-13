
//方法装饰器--------------------------------------------------------------------------------------------
function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>){
	let origin = descriptor.value;
	descriptor.value = function(...agrs:any[]){
		console.log("agrs" + JSON.stringify(agrs));
		let result = origin.apply(this, agrs);
		console.log("The result- " + result);
		return result;
	}
	
	return descriptor;
}

class TestClass{
	@log
	testMethod(args: any){
		return "logMsg " + args;
	}
}

var a = new TestClass();
a.testMethod({"first":"zhou", "second":"bingbing"});

//类装饰器--------------------------------------------------------------------------------------------
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
		//return new constructor();
	}
	let f: any = (...args) => {
		console.log('seletor: ' + component.seletor);
		console.log('template: ' + component.template);
		console.log(`person: ${origin.name}(${JSON.stringify(args)})`);
		return construct(origin, args);
	}
	f.prototype = origin.prototype;
	return f;
}

let p = new Person('angular','JS');

//参数装饰器---------------------------------------------------------------------------------
function inject(target: any, propertyKey: string, parameterIndex: number){
	console.log(target)
	console.log(propertyKey)
	console.log(parameterIndex)
}

class UserService {
	login(age: number, @inject name:string){
		
	}
}

//属性装饰器---------------------------------------------------------------------------------
()(target: any, propertyKey: string){
	
}














