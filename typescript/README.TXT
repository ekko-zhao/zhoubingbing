npm install -g typescript
$ tsc

// 基础类型 --------------------------------------------------------------------------------------------

	boolean | number | string | number[] | [string, number] | Any
	
	
	
#string	
	模版字符串 ` `，它可以定义多行文本和内嵌表达式
	`
		Hello, my name is ${ name }.
		I'll be ${ age + 1 } years old next month.
	`






//方法装饰器--------------------------------------------------------------------------------------------

/*
	target 为 TestClass类实例，
	propertyKey 为 'testMethod' 方法名;
	descriptor 为 descriptor 描述 
	descriptor.value 可以重新定义 方法 testMethod； 如果有返回值将会作为 testMethod的返回值；
*/

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

/*
	参数 component 为类装饰器的 参数 { seletor: 'person', template: 'person.html' }
	target 为Person类的构造函数
	function(firstName, secondName){
		this.firstName = firstName;
		this.secondName = secondName;
	}
	function.prototype = {
		methods: () = {
		
		}
	}
*/
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
function fn()(target: any, propertyKey: string){
	
}

class Person{
	@aa 
	public name: string;
}












