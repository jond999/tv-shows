
var express = require('express');
var fs = require('fs');

var port = 8009;

var app = express();

app.get('/', function(req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

app.listen(port, function() {
	console.log('The server is running, ' +
		'open a browser at http://localhost:%s', port);
});
