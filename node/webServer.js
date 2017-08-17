//var heapdump = require('heapdump');
var fs = require('fs');



var http = require('http');
var leakArray = [];
var leak = function () {
    leakArray.push("leak" + 'Math.randomssssss');
};



http.createServer(function (require, response) {
    leak();

    require.setEncoding('utf8');

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<head><meta charset="utf-8"/></head>');
    response.write('<h1>Node.js</h1>');
    response.write('<b>服务已启动...</b>');

    var buf = new Buffer('<p>Hello World</p>');
    response.end(buf);


    /* var reader = fs.createReadStream('api/readme.txt');
    var writer = fs.createWriteStream('api/readme2.txt');

    reader.pipe(writer); */


    //heapdump.writeSnapshot('/Users/lakala/personer/git/node/' + Date.now() + '.heapsnapshot');
}).listen(7070);
console.log('服务已启动!')
