var events = require('events');

var neweventemitter = new events.EventEmitter();

function bellring(){
	console.log("customer arrived...");
}

neweventemitter.on('bellringing',bellring);
neweventemitter.emit('bellringing');


neweventemitter.on('dooropened',function(msg){
	console.log(msg);
});
neweventemitter.emit('dooropened','welcome...');