// Array

//array literal
var myArray = ['Kevin', 'John', 'Kate', 'Judy'];
console.log(myArray);

var myArray2 = [
    'Kevin',
    'John',
    'Kate',
    'Judy'
];
console.log(myArray2);

//Array with new keyword 
var myArray3 = new Array('Kevin', 'John', 'Kate', 'Judy');
console.log(myArray3);
//same, but don't use it
//for simplicity, readability and execution speed, use the array literal method

//Access the Elements of an Array
console.log(myArray[0]);

//Changing an Array Element
myArray[0] = 'Peter';
console.log(myArray[0]);