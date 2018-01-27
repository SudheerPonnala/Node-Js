//exporting multiiple or whole file at a time
module.exports = {
	name: function(){
		console.log("sudheer");
	},
	surname: function(){
		console.log("ponnala");
	}
}


//exporting individually
function name(){
	console.log("sudheer");
}

function surname(){
	console.log("ponnala");
}
module.exports.first = name;
module.exports.second = surname;

// function hello(){
// //exporting individually
// function name1(){
// 	console.log("dileep");
// }

// function surname1(){
// 	console.log("ponnala");
// }
// }
// exports.hello = hello;

