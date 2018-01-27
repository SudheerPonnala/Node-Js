var fs = require('fs');

var readstream = fs.createReadStream('../fsmodule/myfile.txt');
var data = '';
readstream.setEncoding('UTF8');
readstream.on('data',function(chunk){
	data+=chunk;
});
readstream.on('end',function(){
	console.log("read data: ",data);
});


var writedata = 'Hello Sudheer...';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(writedata,'UTF8');
writeStream.end();
writeStream.on('finish',function(){
	console.log("write completed...");
});