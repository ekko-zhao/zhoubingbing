npm install -g typescript
$ tsc

// 基础类型 --------------------------------------------------------------------------------------------

	boolean | number | string
	
	数组
		number[] 
		string[]
		[string]
		[string, number]
	
	数组泛型
		Array<number>
	
	元组 Tuple
		[string, number]
	
 	
# string	
	模版字符串 ` `，它可以定义多行文本和内嵌表达式
	`
		Hello, my name is ${ name }.
		I'll be ${ age + 1 } years old next month.
	`

# 枚举
	enum Color {Red, Green, Blue}
	let c: Color = Color.Green; // 0
		
	默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
	enum Color {Red = 1, Green = 2, Blue = 4}
	Color.Green === 2
	
	let colorName: string = Color[2];
	Color[2] === 'Green'
	
# any
	any
	let notSure: any = 4;
	
	any[]
	let list: any[] = [1, true, "free"];

# void

# undefined null
	默认情况下null和undefined是所有类型的子类型。
	就是说你可以把 null和undefined赋值给number类型的变量。
	
	当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
	也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
	
# never
	never类型表示的是那些永不存在的值的类型。
	例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
	变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
	
	never类型是任何类型的子类型，也可以赋值给任何类型；
	然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
	即使 any也不可以赋值给never。
	
	// 返回never的函数必须存在无法达到的终点
	function error(message: string): never {
		throw new Error(message);
	}
	
	// 推断的返回值类型为never
	function fail() {
		return error("Something failed");
	}
	
	// 返回never的函数必须存在无法达到的终点
	function infiniteLoop(): never {
		while (true) {
		}
	}
	
# 类型断言
	有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。
	通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
	它没有运行时的影响，只是在编译阶段起作用。 
	
	let someValue: any = "this is a string";
	let strLength: number = (<string>someValue).length;
	
	另一个为as语法
	let someValue: any = "this is a string";
	let strLength: number = (someValue as string).length;
	
//方法装饰器--------------------------------------------------------------------------------------------

/*
	target 为 TestClass 类实例，
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
		methods: () = { }
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
	login(age: number, @inject name:string){ }
}

//属性装饰器---------------------------------------------------------------------------------
function fn()(target: any, propertyKey: string){ }

class Person{
	@aa
	public name: string;
}












