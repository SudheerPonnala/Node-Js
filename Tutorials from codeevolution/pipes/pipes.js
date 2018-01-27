var fs = require('fs');

var readStream = fs.createReadStream('in.txt');
var writeStream = fs.createWriteStream('ou.txt');
readStream.pipe(writeStream);