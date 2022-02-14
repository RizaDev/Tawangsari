// for...in
var myObject = {firstName:'Peter', lastName:'Smith', age:30}; 

for (var x in myObject){
    //console.log(x);
	console.log(myObject[x]);
}

// for...of
var myArray = ['Alan', 'Judy', 'Kevin']; 

for (var x of myArray){
	console.log(x);
}
