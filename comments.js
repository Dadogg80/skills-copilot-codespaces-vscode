// Create web server

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  console.log(path);
  switch (path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('hello world');
      res.end();
      break;
    case '/socket.html':
      fs.readFile(__dirname + path, function(err, data) {
        if (err) {
          return send404(res);
        }
        res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'});
        res.write(data, 'utf8');
        res.end();
      });
      break;
    default:
      send404(res);
  }
});

function send404(res) {
  res.writeHead(404);
  res.write('404');
  res.end();
}

server.listen(8080);
console.log('server running at http://localhost:8080/');