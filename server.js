var http = require("http");
var conf = require("./config.js");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Queue IP: " + conf.get('queue_ip') + "\n Queue Port: " + conf.get('queue_port') + "\nQueue Prefix: " + conf.get('queue_prefix'));
});

server.listen(conf.get('port'), conf.get('ip'), function(x) {
    var addr = server.address();
});
