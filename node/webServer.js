var http = require('http');
//var emitter = require('emitter');


/*http.createServer(function (require, response) {

	var postData = '';
	require.setEncoding('utf8');

	require.on('data', function (chunk) {
		postData += chunk;
	})
	require.on('end', function () {
		response.end(postData);
	})

	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	response.write('<head><meta charset="utf-8"/></head>');
	response.write('<h1>Node.js</h1>');
	response.write('<b>服务已启动...</b>');
	response.end('<p>Hello World</p>');


}).listen(7070);
console.log('服务已启动!')*/

var EventProxy = require('EventProxy');

var proxy = new EventProxy.EventProxy();

/*proxy.all('a','b',function(){
	console.log('ab')	
})*/


console.log(EventProxy)	



