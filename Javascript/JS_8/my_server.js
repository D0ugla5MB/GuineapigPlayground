
function globalAux(req){
    return require(req);
}

function runTestOption(funcOpt) {
    return funcOpt();
}

function runA() {
    const http = require('http');
    const test = require(".\\test_script.js");
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(test.test());
        res.write(req.url);
        res.end();
    }).listen(8080);
}

function runB() {
    var http = require('http');
    var fs = require('fs');

    http.createServer(function (req, res) {
        fs.readFile('main.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }).listen(8080);
}

function runC() {
    var http = require('http');
    var url = require('url');
    var fs = require('fs');

    http.createServer(function (req, res) {
        var q = url.parse(req.url, true);
        var filename = "." + q.pathname;
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }).listen(8080);
}

function runD(){
    const http = require('node:http');
    const server = http.createServer();

    server.on('request', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, world!');
    });
    server.listen(8000);
}

runTestOption(globalAux("./test_script").testA);