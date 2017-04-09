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


var Q = require('q');
var fs = require('fs');
var eq = require('EventProxy');
var events = require('events');
var connect = require('connect');

var step = require('step');
step(
	function readFile1(){
		fs.readFile('./src/txt/file1.txt','utf8', this.parallel());	
		fs.readFile('./src/txt/file2.txt','utf8', this.parallel());
	},
	function done(err, content1, content2){
		console.log(content1)
		console.log(content2)
	}
)


	








