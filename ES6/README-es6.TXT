
// 对象的解构---------------------------------------------------------------------------------------------------
# 数组
	适用于 var let const
		var [a, b, c] = [1,2,3];
		var [a,  , c] = [1,2,3];
		var [a, b, c] = [1, ,3]; // b = undefined
		var [a, [b], c] = [1, [4, 5], 3]; // b = 4
		var [a, ...b] = [1,2,3,4] // b = [2,3,4]

	对于set 结构， 也可以使用数据的解构赋值
		let [x,y,z] = nwe Set(['a','b','c']);

	只要某种数据结构具有 Iterator 接口， 都可以采用数组形式的结构赋值
	function* fibs(){
		var a = 0;
		var b= 0;
		while(true){
			yield a;
			[a,b] = [b, a+b]
		}
	}
	var [a, b, c, d, e, f] = fibs(); //f = 5

	默认值 严格等于 undefined时才会等于 默认值
	var [a=1,b=2,c] = [null,2,3]; // a=null

	var [a=1] = [undefined]; // a=1
	var [a=b, b=2] = [1,2]; // 报错 b 在 a 后申明

# 对象
	var {foo:foo, bar:bar} = {foo:'aaa', bar:'bbb'}
	简写
	var {foo, bar} = {foo:'aaa', bar:'bbb'}

	var {foo: alias, bar} = {foo:'aaa', bar:'bbb'} // alias = 'aaa';  foo => error

	let foo;
	({ foo } = { foo: 1 });
	// foo=1 ;
	// 如果没有 () 报错, { foo } = { foo: 1 }， JavaScripr 理解成一个代码块， 从而发生语法错误， 只有不降大括号写在首行


	var obj={
		p:[
			'hello',
			{y:'world'}
		]
	}

	var {p:[x,{y}]} // 此时p 为模式，不会被赋值。 x='hello', y='world'

	如果解构模式是嵌套的对象，而且子对象所在的父属性不存在 则报错
	var {foo:{bar}} = {baz:'baz'}

	默认值 严格等于 undefined时才会等于 默认值
	var {x=3} = {x:undefined}


	例如-------------
	let { log, sin, cos } = Math; // 这样使用起来会方便很多

# 字符串的解构赋值
	const [a,b,c,d,e] = 'hello';

	let {length：len} = 'hello'
	类似数组的对象都有length 属性，

#如果=号左边是 数字 布尔值 时会先转换为对象
 let {toString:s} = 123; // s = Number.prototype.toString
 let {toString:s} = true; // s = Boolean.prototype.toString

# 解构 可用于函数参数， 用法同上； 可以有默认值

# 圆括号的问题
	变量声明语句中不能使用圆括号
	var [(a)] = [1];
	var {x:(c)} = {}

	模式不能使用圆括号
	var {o:({p:p})} = {o:{p:2}};

	函数参数中不能使用圆括号

	一下正确编译
	let foo;
    [(foo)] = [3];

	({p:(d)} = {p:'d'})

# 用途
	交换变量的值
	[x,y] = [y,x]

	一个函数返回多个值
	function abc(){
		return [a,b,c]
	}
	let [a,b,c] = abc();

	或者返回一个对象

	用于定义函数参数 参数默认值， 提取JSON对象

	遍历 Map 结构
	var map = new Set();
	map.set('first','hello');
	map.set('second','world');
	for (let [key,value] of map){

	}

	获取模块的指定方法；
	const {a, b} = reqire('npm')


//函数的扩展 ---------------------------------------------------------------------------------------------------

#函数length 的属性
	...rest 参数不会计入 length 属性。 length 包括有默认值的参数
	var a = function (a, b, c=2, ...d) {} // a.length = 3;

#rest参数
	function(a, b, ...rest){} // rest是多余参数的集合， rest后面不能再有其它参数

# 扩展运算符 ...
	console.log(...[1,2,3]) // 1 2 3
	console.log(0, ...[1,2,3], 4) // 0 1 2 3 4

	var a = []
	a.push(...[1, 2, 3]);

# 扩展符 ... 的运用
	// 合并数组
	es5: [1,2].concat(more)
	es6: [1,2, ...more]

	es6: [1,2,3].concat([4,5,6], [6,7,8])
	es6: [...[1,2,3], ...[4,5,6], ...[6,7,8]]

	// rest只能放在最后一位
	cosnt [first, ..rest] = [1,2,3,4]

# 代替数组apply 方法
	es5: function f(x,y,z)(){}
		var agrs = [0,1,2]
		f.apply(null, agrs);
	es6: f(...agrs);

# 把类似数组的对象转换成 真正的数组；
 var nodeList = document.querySelectorAll('div');
 var array = [...nodeList]

Map 和 Set 结构Generator 函数
	let map = new Map([
		[1, 'one'],
		[2, 'two'],
		[3, 'three']
	])
	let arr = [...map.keys()]; // [1,2,3];

	var go = function*(){
		yield 1;
		yield 2;
		yield 3;
	}
	let arr = [...go()]; // [1,2,3];

# name 属性
	console.log((new Function).name) // 'anonymous'

	function foo(){}
	foo.bind({}).name // 'bound foo'

	var a = function (){} // a.name = ''

# 箭头函数
	如果函数不需要参数 或 需要多个参数， 就需要用（）代表参数部分
	var f = () => 5; // var f = function(){ return 5;}
	var f = v => v; // var f = function(v){ return v;}

	var sum = (num1, num2) => num1+num2 // var sum = function(num1, num2){ return num1+num2;}

	箭头函数没有自己的 this , 所以不能用 apply call bind 方法
	function(x){
		(()=>this.x).bind({})
	}

# 函数绑定
	boo::bar 同等于 bar.bind(foo)
	foo::bar(...agrs) 同等于 bar.apply(foo, agrs);

	如果双冒号左边为空， 右边是一个对象的方法，则等于将该方法绑定在该对象上
	var method = obj:: obj.foo 同等于 var method = :: obj.foo



# 数组的扩展

	Array.from();
		把类似数组的对象转换成 真正的数组；
		var nodeList = document.querySelectorAll('div');
		var arr1 = Array.from(nodeList);

		能把只要有 length 属性的的对象转换成数组
		Array.from({ length:3 }); 	//["undefined", "undefined", "undefined"];
		rray.from('hello'); 		// ["h", "e", "l", "l", "o"];

		字符串 Set 都具有 Iterator 接口 都能转换成真正的数组
		let nameSet = new Set(['a', 'b']);

		from() 第二个参数类似于 Array.Map 方法
		var newArr = Array.from([1,2,3], x => x*x); 同等于 var newArr = [1,2,3].map(x => x*x);

		let spans = document.querySelectorAll('span');
		Array.from(spans, x => x*textContent); 取出所有span中的值

		将数组中为空的值转换为 0 或其它值
		Array.from([1, ,2,3, 4], x > x ||0);

	Array.of();
		可以代替 new Array();
		new Array(3); // []
		new Array(3); // [undefined, undefined, undefined]  参数只有一个的时候返回 长度的数组
		new Array(3,4,5); // [3,4,5]  只有参数不少于2个的时候才返回参数组成的数组

		Array.of(1,2, ,4); // 始终返回参数组成的数组

	数组实例的 copyWithin() 方法， 从数据内部中制定成员 替换到其它位置
		Array.prototype.copyWithin(target, start, end);
		target 	为要替换的开始位置
		start  	拿取替换原数据的开始位置 ,默认0； 可以为负数
		end		拿取替换原数据的结束位置 ，默认为数组的长度， 可以为负数
		获取长度为 end-start ，不包括end 当前位置

		[1,2,3,4,5,6]copyWithin(0,3,5); //[4,5,3,4,5,6]

	Array.prototype.find();
		接受一个回调函数作为参数 function(v, i, arr):boolean{}; 知道找到第一个返回true 的成员；然后返回该成员

	Array.prototype.find();
		接受一个回调函数作为参数 function(v, i, arr):boolean{}; 知道找到第一个返回true 的成员；然后返回该成员的位置， 找不到为 -1

	Array.prototype.fill();
		填充给定的数组，  第二个 第三个参数表示 填充的位置
		[1,2,3,4].fill(7) // [7,7,7,7]
		[1,2,3,4].fill(7,2,4) // [7,7,7,7]

	Array.prototype.keys();		// 对键名的遍历
	Array.prototype.values();	// 对键值的遍历
	Array.prototype.entries();	// 对键值对的遍历
	for(let index of [0, 1, 2].keys())
	for(let value of [0, 1, 2].values())
	for(let [index, value] of [0, 1, 2].entries())

	Array.prototype.includes(); // 返回一个布尔值 ， 第二个参数 是搜索的起始位置, 属于es7, 只有babel转码器支持
	
# 数组的空位
	es5是忽略 数组中的空位的，[3,4,,5,6] map filter each every some forEach等方法
	
	es6明确将空位转换成 undefined , Array.from([3,4,,5]);  [...[3,4,,5])]; copyWithin(); for ...of; 

# 数组的推导
	es7 支持，babel转码器支持
	var newArr = for(let elem of [1,2,3]) elem*2; // newArr = [2,4,6]
	可以替代 map filter 方法； 替代filter时 需要 if 条件判断

	
// 对象的扩展---------------------------------------------------------------------------------------------------	
# 属性的简洁表示法
	var foo = 'bar';
	var baz = {foo} // 同等于var baz = {'foo' :foo}
	
	function(){
		var x = 10;
		var y = 20;
		return {x,y}
	}
	
	var obj = {
		method,
		method(){
			
		},
		* generator(){
		}
	}
	
# 属性名表达式
	 var pro = 'name';
	var obj = {
		[pro]: 'zhangsan'
	}
	
# 访问器
	var obj = {
		_name: 'zhou',
		get name() {
			
			return this._name;
		},
		set name(n) {
			this._name = n;
		}
	}
	
# Object.is();
	用来比较俩个值是否严格相等， 与 === 的行为基本一直， 不同之处有俩个 
	+0 === -1 // true
	NaN === NaN // false
	
	Object.is(+0,-1)// false
	Object.is(NaN,NaN) // true

# Object.assign(target, source);
	将源对象的所有可枚举属性复制到目标对象
	属性名为Symbol 值得属性， 也会被复制

	使用：
	为对象添加属性；
	class(){
		constructor(x,y){this,{x,y}}
	}
	为对象添加方法
	Object.assign(SomeClass.prototype,{
		someMethod(){}
	})
	克隆对象 合并多个对象 为属性指定默认值
	Object.assign({},{foo:'baz'})
	Object.assign({},{foo:'baz'},{name:'zhangsan'})
	Object.assign(target,options)
	
# 属性的可枚举属性
	Object.getOwnPropertyDescript({foo:123}, 'foo');
	=>{
		value:123,
		writable:true,
		enumerable:true,
		configurable: true
	}

	
# ea6一共有6中方法 遍历对象的属性
	for ...in
	Object.keys(obj); // 返回自身可枚举的属性 不含继承 不含symbol
	Object.getOwnPropertyNames(obj) // 返回自身可枚举的属性 不含继承 不含symbol
	
	Object.getOwnPropertySymbols(obj) // 包含对象自身的所有Symbol属性
	
	Reflect.ownKeys(obj); // 返回自身的所有属性， 不管属性名是 Symbol 或字符串
	Reflect.enumerable(obj) // 返回一个 Iterator 对象， 遍历自身和继承的所有可枚举的属性 不含symbol


# __proto__ 属性， Object.setPrototypeOf(obj, prototype), Object.getPrototypeOf()
	
	Object.create(); 添加自身的 可枚举的属性到新对象中
	var o = Object.create(obj1.prototype, obj2.prototype)

	
//Symbol---------------------------------------------------------------------------------------------------
	var a = Symbol();
	var b = Symbol('foo');
	可以传递一个参数用于区分
	
	Symbol() != Symbol();
	Symbol('foo') != Symbol('foo');
	
	Symbol 可以转换为字符串
	b.toString(); // "Symbol(foo)"
	
	Symbol 可以转换为Boolean, 不能转换为Number
	Boolean(a); // true
	
# 作为属性名
	var mySymbol = Symbol();
	
	var a = {}; a[mySymbol] = 'hello'; // 不能使用a.mySymbol = 'hello'; 会被当字符串属性
	var a = {
		[mySymbol]: 'hello'
	}
	var a = {}; Object.defineProperty(a, mySymbol,{value: 'hello'})
	以上三种写法相同
	
# 作为属性函数
	let s = Symbol();
	let obj = {
		[s]:function(arg){}
	}
	简洁写法：
	let obj = {
		[s](agr){}
	}

# 消除魔术字
	对于在 上下文中多次出现的 字符串，便于日后维护， 可用 Symbol 替代
	
	var obj = {
		'symbol': Symbol()
	}
	function abc(str){
		switch(str){
			case(obj.symbol):
				...;
				break
			
		}
	}
	abc(obj.symbol) 

# 属性名的遍历
	作为属性名的Symbol 不会出现在 for in, for of循环中， 
	也不会被Object.keys Object.getOwnPropertyNames() 返回
	但它也不是私有属性 有一个Object.getOwnPropertySymbols() 方法返回一个数组

	var obj={
		[Symbol('a')]: 'hello',
		[Symbol('b')]: 'world',
		name: 'zhangsan'
	}
	var objectSymbol = Object.getOwnPropertySymbols(obj); // 只返回Symbol [ Symbol('a'), Symbol('b') ]
	
	Reflect.ownKeys(objectSymbol); // 返回所有自身属性 [ Symbol('a'), Symbol('b'), 'name' ]
	
	Symbol 用于 class 的属性名， 可以造成一种非私有的内部方法的效果 
	var sym = Symbol();
	class Abc{
		constructor(){
			this[sym] = 'sss'
		}
		static fnName(){}
	}
	
# Symbol.for & Symbol.keyFor()

	Symbol.for('a')===Symbol.for('a') //true

	let a = Symbol.for('s1');
	Symbol.keyFor(a) //s1

	let a = Symbol('s1');
	Symbol.keyFor(a) // undefined
	
	
# 内置的 Symbol 值

	Symbol.hasInstance
			对象的 Symbol.hasInstance 属性指定一个内部方法， 对象使用 instanceof 运算符时会调用这个方法， 判断该对象是否为某个构造函数的实例
			
		foo instanceof Foo
		// 同等于
		Foo[Symbol.hasInstance](foo);
		
		/*
			class MyClass {
				[Symbol.hasInstance](agr) {
					// 自定义返回值
					return agr instanceof Array;
				}
			}
			var foo: any = new MyClass();
			[] instanceof foo // true
			
		*/
		
	
	Symbol.species
		ymbol.species属性指向用来创建派生类对象的构造函数
		即：this.constructor[Symbol.species]属性存在就会使用这个属性创建对象实例。
		
		class Foo {
            static get [Symbol.species]() {
                console.log(222);
                return this;
            }
            spawn() {
                return new this.constructor[Symbol.species]();//不需要写死返回实例类型
            }
        }
		// 派生类
        class Bar extends Foo {
            static get [Symbol.species]() {
                console.log(111);
                return Foo;
            }
			//自定义需要返回的实例类型
        }

        var a = new Foo();

        var x = new Bar();
        var y = x.spawn();
	

	Symbol.search
		对象的 Symbol.search 属性指向一个方法， 当对象被 String.prototype.search() 方法调用时会返回该方法的返回值
		String.prototype.search(regexp);
		// 同等于
		regexp[Symbol.search](this);
		
		var a = /dq/[Symbol.search]('asdqdd'); // => 2
		
		/*
			// 讲解，  可以自己自定义返回值
			class MySearch {
				constructor(value) {
					this.value = value;
				}
				value;
				[Symbol.search](string) {
					console.log(string)
					return string.indexOf(this.value)
				}
			}
			MySearch 对象被 String.prototype.search() 方法调, 返回 Symbol.search 属性的返回值
			'foobar'.search(new MySearch('foo')); // =>0
			
		*/
	
	Symbol.split
		对象的 Symbol.split 属性指向一个方法， 当对象被 String.prototype.split() 方法调用时会返回该方法的返回值
		String.prototype.split(separator, limit);
		// 同等于
		separator[Symbol.split](this, limit)
		/a/[Symbol.split]('abc'); // ["","b",""]
	
	
	Symbol.replace
		String.prototype.replace(searchValue, replaceValue);
		// 同等于
		searchValue[Symbol.replace](this, replaceValue);
	
	Symbol.match
		regexp[Symbol.match](this);

	
	Symbol.iterator
		对象的 Symbol.iterator 属性指向其默认的遍历器方法， 即对象在进行 for...of 循环时ihui调用这个方法， 返回该对象的默认遍历器
		
		class Collection {
			*[Symbol.iterator](){
				let i = 0;
				while(this[i] !== undefined){
					yield this[i];
					i++;
				}
			}
		}
		let myCollection = new Collection();
		myCollection[0] = 1;
		myCollection[1] = 2;
		
		for(let v of myCollection){
			console.log(v)
		}
		// 1
		// 2
	
	Symbol.toPrimitive
	对象的Symbol.toPrimitive 属性指向一个方法，(一个对象可被转换为原始值) 对象被转换为原始类型的值时会调用这个方法。
	
	Number
	String
	Default
	
	let obj ={
		[Symbol.toPrimitive]:{
			switch(hint){
				case(unmber):
					return 10;
				case('string'):
					return 'str'
				case ('default'):
					return 'default';
				default:
				throw new Error();
				
			}
		}
	}
	
	
	Symbol.toStringTag
		class ValidatorClass {
            get [Symbol.toStringTag]() {
                return "Validator";
            }
        }
		
        var validator = new ValidatorClass();
        validator.toString(); // => [object Validator]
		
		或者
		var obj = {};
        Object.defineProperty(obj, Symbol.toStringTag, {
            get: function () {
                return "Validator";
            }
        })
        obj.toString(); // => [object Validator]
	
		/*		
			许多内置的 JavaScript 对象类型即便没有 toStringTag 属性，也能被 toString() 方法识别并返回特定的类型标签，比如：
			Object.prototype.toString.call('foo');     // "[object String]"
			Object.prototype.toString.call([1, 2]);    // "[object Array]"
			Object.prototype.toString.call(3);         // "[object Number]"
			Object.prototype.toString.call(true);      // "[object Boolean]"
			Object.prototype.toString.call(undefined); // "[object Undefined]"
			Object.prototype.toString.call(null);      // "[object Null]"
		*/
	
	Symbol.unscopables
	对象的 Symbol.unscopables 属性指向一个对象， 指定使用 with 关键字时哪些属性会被 with 环境排除
	Array.prototype[Symbol.unscopables]； // =>{copyWithin: true, entries: true, fill: true, find: true, findIndex: true}
	
// Reflect ----------------------------------------------
	Reflect.getOwnPropertyDescript(target, name); 	// 同于 Object.getOwnPropertyDescript(name);
	Reflect.defineProperty(target, name, desc);		// 同于 Object.defineProperty(target, name, desc);
	Reflect.getOwnPropertyNames(target);			
	Reflect.setPrototypeOf(target, prototype);		// 同于 Object.setPrototypeOf(target, prototype); 设置 __proto__ 	
	Reflect.getPrototypeOf(target);
	Reflect.deletePrototype(target, prototype);     // 同于 delete target.prototype
	
	Reflect.freeze(target)							// 同于 Object.freeze(target) 完全冻结对象， 不能新增和删除 属性，不可以修改已有属性值
	Reflect.isFreezen(target)
	Reflect.seal(target)							// v Object.seal(target)	不能新增和删除 属性，可以修改已有属性值
	Reflect.isSealed(target)
	
	Reflect.has(target, name)						// name in target
	Reflect.hasOwn(target, name)
	Reflect.keys(target)
	
	Reflect.isExtensible(target)							// 同于 Object.isExtensible(target)， 判断一个对象是否可扩展 （即是否能够添加新的属性）。
	Reflect.preventExtensions(target)						// 同于 Object.preventExtensions(target) 方法阻止新属性添加到对象 
	
	Reflect.enumerate(target)								// 以废弃
	
	Reflect.set(target, propertyKey, value[, receiver])		// receiver 为 set函数中的 上下文(this),  如果 propertyKey 属性设置了赋值函数
	Reflect.get(target, propertyKey, value[, receiver])		// receiver 为 get函数中的 上下文(this),
	
	Reflect.apply(target, thisArgument, argumentsList)		// target函数调用时绑定的this对象。
	Reflect.apply(Math.floor, undefined, [1.75]); // 1
	Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]); // "hello"
	
	var obj = Reflect.construct(Foo, args[, newTarget]);
	var d = Reflect.construct(Date, [1776, 6, 4]);
	// target 被运行的目标函数
	// argumentsList 调用构造函数的数组或者伪数组
	// newTarget 该参数为构造函数， 参考 new.target 操作符，如果没有newTarget参数， 默认和target一样
	// 同于 var obj = new Foo(...args); 
	
	
	
// Set---------------------------------------------------------------------------------------------------
	类似与数组， 但是成员的值都是唯一的， 没有重复的值。 Set 本身是一个构造函数， 用来生成Set 数据结构
	
	Set { 's1', 's2'}

	var set = new Set();
	可以接受一个数组或类似数组的对象作为参数

	var set = new Set([1,2,2,3,3]); // {1,2,3}  去重

	Array.from(set) 				// [1,2,3]

	//方法
	size() 							// 返回长度
	add(value) 		: Set			// 返回set 本身
	delete(value) 	：Boolean
	has(value) 		：Boolean       // 判断有没有改成员 
	clear() 						// 清空 null

	//遍历操作
	keys() 							//返回一个键名的遍历器
	for( let i of set.keys() ){}

	values() 	// 返回一个键值的遍历器
	entries() 	// 返回一个键值对的遍历器
	forEach() 	// 使用回调函数遍历每个成员
	set.forEach(i => { })

	[…set] 返回一个数组
	//并集
	let union = new Set([…a, …b])

	//交集
	let intersect = new Set([…a].filter(x>= b.has(x)))

	//差集
	let interence = new Set([…a].filter(x>= !b.has(x)))

	
	
#WeakSet---------------------------------------------------------------------------------------------------

	与 Set 相似，不过成员只能是对象，因为没有size属性，不能遍历
	methods:
		add(value) 		：Set
		delete(value) 	：Boolean
		has(value) 		：Boolean 
		
	区别：
		WeakSet 的成员只能是对象，数组或类似数组的对象 是其它类型的值
		WeakSet 中的对象都是弱引用，垃圾回收机制不考虑 WeakSet 对该对象的引用。
		
		因为是弱引用类型， 无法保证成员的存在， 很有可能刚刚结束遍历，成员就取不到了
	
	
	
	
	
	
//Map---------------------------------------------------------------------------------------------------

	Map { 's1' => 's1value', 's2' => 's2value' }

	var map = new Map();
	可以接受 [[key1,value1],[key2,value2]] 作为参数
	
	如果Map 的键是一个简单类型的值（数字 字符串 布尔值）。则只要俩个值严格相等， Map就将其视为一个键， 包括 0和-0 ，NaN;
	如果是键为对象， 则只要是统一应引用，Map就将其视为一个键
 

	size() 返回长度
	set(key,value) Map
	get(key)
	delete(key) Boolean
	has(key) 判断有没有改成员 Boolean
	clear() 清空 null

	//遍历操作
	keys() //返回一个键名的遍历器
	for( let i of map.keys() ){}
	values() //返回一个键值的遍历器
	entries() //返回一个键值对的遍历器
	forEach() //使用回调函数遍历每个成员
	
	Map 转为数组
		[...map]
	
	Map 转为对象
		如果键都是为字符串， 则其可以转为对象
	
	for(let [k,v] of map){
		obj[k] = v;
	}
	
	
	对象 转为Map
		for(let k of Object.keys(obj) ){
			map.set(k, obj[k])
		}
	
	
	
	Map 转 json
		分两种情况， 1是Map 的键名都是字符串。只是可以转换为对象json. 和普通的对象转json 一致
		
		2是 Map的键名有非字符串时，这是可以选择转为数组json
			function mapToArrayJson( map ){
				return JSON.stringify([...map])
			}
	JSON 转 Map
		JSON.parse(str)
	
	
	
//WeakMap——————————————
.没有size属性
.没有遍历
.只能用对象作为键名
.键名是对象的弱引用，其对应的对象可能会被自动回收， 当被自动回收后，WeakMap自动移除对应的键值对


set(key,value) Map
get(key,value)
delete(key) Boolean
has(key) 判断有没有改成员 Boolean





// Iterator & for...of循环---------------------------------------------------------------------------------------------------
continue break return; 跳出循环

[...iterator] = [agr0,agr1]

数组和类似数组的对象，set,Map 3类数据结构具备Iterator接口
字符串也是类似数组的对象 具备Iterator接口

｛
    0:’a’,
    1:’b’,
    2:’c’,
    length:3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]
｝

//对象添加 Symbol.iterator
{
	name: ’name’,
    [Symbol.iterator](){
		var iterator ={
		    next: next
		}
		function next(){
		    return {value:any, done:Boolean}
		}
        return iterator;
    }
}
//构造函数添加 Symbol.iterator
var Obj(){ }
Obj.prototype[Symbol.iterator] = function(){
    var iterator ={
	next: next
    }
    function next(){
	return {value:any, done:Boolean}
    }
    return iterator;
}




// Generator---------------------------------------------------------------------------------------------------
function* flat(){
    yield 'hello';
	var agr =  yield 'world';

    return 'ending';
}
var f = flat();
f == f[Symbol.iterator]() //true

//next参数的传递————————————
f.next();
f.next('agr');
第一次传递的参数不能带有参数，传递的参数会 传递给 agr；(上一次 next()  的结果 )



//Generator.prototype.throw()————————————

var g = function* (){
	while(true){
		try{
			yield 12;
		}catch(e){
			if(e != 'a') throw e;
			console.log('内部捕获',e);
		}
	}
}

var i = g();
i.next();
try{
	i.throw('a');
	i.throw('b');
}catch(e){
	console.log('外部捕获',e);
}

//内部捕获 a
//外部捕获 b

.如果遍历器函数中没有部署try...catch代码块，抛出的错误直接被外部的代码块捕获。
.如果遍历器函数中没有部署try...catch代码块，抛出错误后终止遍历

//函数内部抛出的错误会被外部捕获，
function* g(){
    yield 1;
    throw new Error(‘generator an exception’);
    yield 2;
    yield 2;
}
g.next();
g.next(); //抛出异常


//Generator.prototype.return()————————————

function* g(){
    yield 1;
    yield 2;
    yield 3;
}
var a = g();
a.return(‘value’) //{value:’value’, done:true}

.如果函数内部署了try...finally代码块，那么return 方法会推迟到finally代码块中在执行

function* g(){
    try{
	yield 1;
	yield 2;
    }finally{
		yield 3;
		yield 4;
    }
}
var a = g();
a.return(5) //{value:3, done:false}
a.next(); //{value:4, done:false}
a.next(); //{value:5, done:true}


//yield* 语句
function* foo(){

}
function* f(){
	// 调用 generator函数
	yield* foo();
}


// 在Generator 函数内部调用一个 Generator 函数， yield* generator();
//yield* 后面跟遍历器
.遍历嵌套数组的所有成员
function* iterTree(tree){
	if(Array.isArray(tree)){
		for(let i=0; i<tree.length; i++){
			yield* iterTree(tree[i]);
		}
	}else{
		yield tree;
	}
}

const tree = [ 'a',['b', 'c'],['d', 'e'] ]

for(let x of iterTree(tree)){
	console.log(x)
}





支持遍历器的成员 都可以跟在 yield* 后面
yield*  ['a', 'v', 'c'] //返回的是 iterator 对象



//作为对象属性的 Generator 函数
var o = {
	* g() {

	}
}
var o = {
	g:function*() {

	}
}

// 应用--------------------------------------
yield 语句是同步运行， 不是异步运行 ； 包括读取文件  ， 异步请求

function delay(t){
	var q = new Promise( (resolve,reject)=> {
		setTimeout(function(){
			resolve('ok')
		},t);

	});
	return q;
}

function* f(){
	yield delay(2000)
}
f().next().value.then(function (data) {
	console.log(data)
}, function (data) {
	console.log(data)
})

// 2秒后 ok


//Promise---------------------------------------------------------------------------------------------------


#Promise构造函数接受一个函数作为参数 该函数接受俩个参数 resolve 和 reject , resolve 和 reject 有JavaScript引擎提供，不用用户自己部署
var promise = new Promise((resolve,reject)=>{
	 if(false){
		 resolve('ok')
	 }else{
		 reject('cansle')
	 }
 })
promise.then(function(data){
	 console.log(data)
 },function(data){
	 console.log(data)
 })


＃resolve 可以接受一个 Promise实例对象以更改 该Promise状态
#resolve(promise1)

var promise1 = new Promise((resolve, reject) => {
	setTimeout(function () {
		if (false) {
			resolve('ok')
		} else {
			reject('cansle')
		}
	}, 3000)
})

var promise2 = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve(promise1)
	}, 1000)
})
promise2.then(function (data) {
	console.log(data)
}, function (data) {
	console.log(data)
})
//  输出 cansle


//Promise.prototype.then()———————
#Promise实例的then方法返回一个 新的 Promise实例（new Promise()） ,因此可以链式调用

promise.then(function(data){
	return promise3;
}, function(error){

})
#等待promise3状态改变（pending to resolved or rejected） 在执行下面代码
.then(function(data){}, function(error){})


//Promise.prototype.catch()———————
#在promise状态改变之前发生的异常捕获，若果在 promise状态改变之后发生 将在函数体外抛出异常
var promise = new Promise((resolve,reject)=>{
	throw new Error('test');
	resolve('ok');
 })

promise.then()
.catch(function(e){ console.log(e)})

//or
＃捕获2个promise 抛出的异常
promise.then()
.then()
.catch(function(e){ console.log(e)})

//or
＃捕获3个promise 抛出的异常
promise.then(function(){ return  promise})
.then()
.catch(function(e){ console.log(e)})

//Promise.all()———————
Promise.all() 的参数不一定是数组， 但必须有iterator 接口
var pall = Promise.all( [ p1, p2, p3, p4 ] )

pall.then(
	function(resolve){},
	//p1, p2, p3, p4 只要有一个 rejected， pall的状态都会变成 rejected
	function(reject){},
)
.catch(function(e){ console.log(e)})

//Promise.race()———————
#p1, p2, p3, p4 只要有一个状态 改变fulfilled， race的状态都会改变
var race = Promise.race( [ p1, p2, p3, p4 ] )

//Promise.reject()———————

Promise.reject() 返回一个 Promise实例 状态为 rejected,

Promise.reject(‘reject’)
同等于
new Promise(
	function(resolve, reject){  reject(‘reject’) }
)























































