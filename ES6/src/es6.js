

let a = {
	0:'a',
	1:'b',
	2:'c',
	length:3,
	[Symbol.iterator]: Array.prototype[Symbol.iterator]
}
let b = a[Symbol.iterator]()
//console.log(...a[1])
/*for (let i of a){
	console.log(i)
}*/
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())