// Functions 
// Function declaration (function statement)
function sayHello(name) { 
    console.log('Hello ' + name + '!');
}
sayHello('Kevin');

// Function with return value 
function multiplication(a1, a2) { // Function declaration
    return (a1 * a2);
}
var result = multiplication(10, 3); 
console.log(result);

// Function variable scope
//console.log(countryName); // error - code here can NOT use countryName
function myFunction() {
    var countryName = "USA";
    console.log(countryName); // code here CAN use countryName
}
//console.log(countryName); // error - code here can NOT use countryName
myFunction();

// Function expression
var getRectArea = function(width, height) {
    return width * height;
}
console.log(getRectArea(4,5));


