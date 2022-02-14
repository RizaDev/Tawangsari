// Array Methods

var myArray = ['Kevin', 'John', 'Kate', 'Judy'];
console.log(myArray);
myArray.pop();              // Removes the last element ('Judy') from myArray 
console.log(myArray);

var x = myArray.pop(); // The pop() method returns the value that was 'popped out'
console.log(myArray);
console.log(x); // the value of x is 'Kate'

myArray.push('Alan'); //The push() method adds a new element to an array (at the end)
console.log(myArray);

console.log(myArray.length); //The length method shows the size of the Array

myArray.sort(); //The sort() method sorts an array alphabetically
console.log(myArray);

myArray2 = [1980, 1999, 2010];
var myConcatArray = myArray.concat(myArray2); // The concat() method concatenating merging arrays
console.log(myConcatArray);