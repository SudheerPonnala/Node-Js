var querystring = require('querystring');

function home(response){
	console.log("Executing 'home' handler")
	var htmlFile = `
	<html>
	<head>
	</head>
	<body>
		<form action="/review" method="post">
			<textarea name="text" rows="20" cols="50"></textarea>
			<input type="submit" value="Submit Text"/>
		</form>
	</body>
	</html>
	`;
	response.writeHead(200,{'content-type':'text/html'});
	response.write(htmlFile);
	response.end();
}

function review(response, reviewData){
	console.log("Executing 'review' handler");
	response.writeHead(200,{'content-type':'text/plain'});
	response.write("your review is : "+querystring.parse(reviewData).text);
	response.end();
}

exports.home = home;
exports.review = review;