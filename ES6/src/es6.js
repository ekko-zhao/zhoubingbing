var promise = new Promise((resolve,reject)=>{
	throw new Error('test');
	resolve('ok');
 })

promise.then()
.catch(function(e){ console.log(e)})
