function printName(name){
	console.log(name);
}

printName("sudheer");




var printSurname = function(name){
	console.log(name);
}

function funwithParam(funasparam,value){
	funasparam(value);
};

funwithParam(printSurname,"ponnala");




function printAge(extraFunction,value){
	extraFunction(value);
}

printAge(function(age){console.log(age)},"28");

