
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

//Set——————————————————

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

































