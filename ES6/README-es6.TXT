
// 对象的解构-------------------------------------------------------------------
#数组
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

#对象
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

#字符串的解构赋值
	const [a,b,c,d,e] = 'hello';
	
	let {length：len} = 'hello'
	类似数组的对象都有length 属性， 

#如果=号左边是 数字 布尔值 时会先转换为对象
 let {toString:s} = 123; // s = Number.prototype.toString
 let {toString:s} = true; // s = Boolean.prototype.toString

#解构 可用于函数参数， 用法同上； 可以有默认值

#圆括号的问题
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

#用途
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


//函数的扩展 ——————————————————————————————————————————————————

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

#代替数组apply 方法
	es5: function f(x,y,z)(){}
		var agrs = [0,1,2]
		f.apply(null, agrs);
	es6: f(...agrs);
	
#把类似数组的对象转换成 真正的数组；
 var nodeList = document.querySelectorAll('div');
 var array = ...nodeList

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
	
#函数绑定
	boo::bar 同等于 bar.bind(foo)
	foo::bar(...agrs) 同等于 bar.apply(foo, agrs);
	
	如果双冒号左边为空， 右边是一个对象的方法，则等于将该方法绑定在该对象上
	var method = obj:: obj.foo 同等于 var method = :: obj.foo
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//Symbol——————————————————————————————————————————————————
var a = Symbol();
var b = Symbol(‘foo’);
可以传递一个参数用于区分 
Symbol() != Symbol();
Symbol(‘foo’) != Symbol(‘foo’);

作为属性名的Symbol 不会出现在 for in, for of循环中， 也不会被Object.keys Object.getOwnPropertyNames() 返回

但它也不是私有属性 有一个Object.getOwnPropertySymbols() 方法返回一个数组

var obj={
	[Symbol('a')]: 'hello',
	[Symbol('b')]: 'world'
}

var objectSymbol = Object.getOwnPropertySymbols(obj)


//Symbol.for & Symbol.keyFor()

Symbol.for('a')===Symbol.for('a') //true

let a = Symbol.for(‘s1’);
Symbol.keyFor(a) //s1

let a = Symbol(‘s1’);
Symbol.keyFor(a) // undefined

//Set——————————————————————————————————————————————————————————
Set { 's1', 's2'}

var set = new Set();
可以接受一个数组或类似数组的对象作为参数

var set = new Set([1,2,2,3,3]); //{1,2,3} 没有重复值 

Array.from(set) //[1,2,3]

//方法
size() 返回长度
add(value) Set
delete(value) Boolean 
has(value) 判断有没有改成员 Boolean
clear() 清空 null

//遍历操作
keys() //返回一个键名的遍历器
for( let i of set.keys() ){}

values() //返回一个键值的遍历器
entries() //返回一个键值对的遍历器
forEach() //使用回调函数遍历每个成员
set.forEach(i => { })

[…set] 返回一个数组
//并集
let union = new Set([…a, …b])

//交集
let intersect = new Set([…a].filter(x>= b.has(x)))

//差集
let interence = new Set([…a].filter(x>= !b.has(x)))

//WeakSet———————————
Set相似 不过成员只能是对象， 没有size属性， 不能遍历

//Map——————————————————————————————————————————————————————————

Map { 's1' => 's1value', 's2' => 's2value' }

var map = new Map();
可以接受 [[key1,value1],[key2,value2]] 作为参数

size() 返回长度
set(key,value) Map
delete(key) Boolean 
has(key) 判断有没有改成员 Boolean
clear() 清空 null

//遍历操作
keys() //返回一个键名的遍历器
for( let i of map.keys() ){}
values() //返回一个键值的遍历器
entries() //返回一个键值对的遍历器
forEach() //使用回调函数遍历每个成员


//WeakMap——————————————
.没有size属性
.没有遍历
.只能用对象作为键名
.键名是对象的弱引用，其对应的对象可能会被自动回收， 当被自动回收后，WeakMap自动移除对应的键值对


set(key,value) Map
delete(key) Boolean 
has(key) 判断有没有改成员 Boolean
clear() 清空 null

// Iterator & for...of循环——————————————————————————————————————————————————————————
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




// Generator——————————————————————————————————————————————————————————
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


//Promise——————————————————————————————
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























































