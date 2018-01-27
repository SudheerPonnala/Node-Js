var http = require('http');
var uri = require('url');


function startServer(router, handle){
	function onRequest(request, response){
		var reviewData = '';
		var pathname = uri.parse(request.url).pathname;
		console.log("request received for..."+pathname);
		request.setEncoding("utf8");
		request.addListener("data",function(chunk){
			console.log("nee...");
			reviewData += chunk;
		});

		request.addListener('end',function(){
			console.log("naa...");
			router(handle, pathname, response, reviewData);
		});
	}

	http.createServer(onRequest).listen(9999);

	console.log("server started...");
}

exports.startServer = startServer;