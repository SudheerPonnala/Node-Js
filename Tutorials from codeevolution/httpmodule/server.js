var http = require('http');
http.createServer(function(req, res){
	res.end("Hello this is my first node server....");
}).listen(8080,function(){
		console.log("server listening");
});