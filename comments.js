// Create web server

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  // Handle POST request
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', function () {
      // Write to file
      fs.appendFile('comments.txt', body + '\n', function (err) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Internal Server Error');
          return;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OK');
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
  }
}).listen(3000, '
