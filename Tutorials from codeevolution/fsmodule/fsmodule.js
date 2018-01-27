var fs = require('fs');

//Asynchronous reading
fs.readFile('myfile.txt',function(err,data){
	if(err){
		console.log("error occured....");
	}else{
		console.log("Asynchronous reading : ",data.toString());
	}
});


//Synchronous reading
var data = fs.readFileSync('myfile.txt');
console.log("Synchronous reading : ",data.toString());
console.log("this is the end...");