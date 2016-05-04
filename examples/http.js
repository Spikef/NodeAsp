var http = require('http');

http.createServer(function(req, res) {
    console.log(req.query.a);
});


//console.log(HTTP.get('http://api.webkits.cn'));