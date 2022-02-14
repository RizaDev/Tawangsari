// JavaScript Scope

// Local scope
console.log("Local scope: ");
function myFunction() {
    var x = "variable declared inside function";  // x can only be used in myFunction
    console.log("Inside myFunction: " + x);
}
myFunction();
//console.log("Outside myFunction: " + x);  // Causes error


// Global scope
console.log("Global scope: ");
var y = "variable declared outside function";

function myFunction2() {
    console.log("Inside myFunction2: " + y); //code here CAN ALSO use y
}
myFunction2();
console.log("Outside myFunction2: " + y); //code here CAN use y

// Automatically Global scope
console.log("Auto: ");
function myFunction() {
    z = "variable that has not been declared inside function";  // global scope
    console.log("Inside myFunction: " + z);
}
myFunction();
console.log("Outside myFunction: " + z);  // global scope