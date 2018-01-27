var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle["/"] = handler.home;			// we can assign same handler for multiple urls
handle["/home"] = handler.home;		// we can assign same handler for multiple urls
handle["/review"] = handler.review;

server.startServer(router.route, handle);