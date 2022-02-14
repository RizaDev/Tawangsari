// Hoisting
function myGirlFriend(name) {
    console.log("My girlfriend's name is " + name);
}
myGirlFriend("Judy");

myGirlFriend2("Judy");
function myGirlFriend2(name) {
    console.log("My girlfriend's name is " + name);
}

// JavaScript only hoists declarations, not initializations
var myGirlFriend3 = function(name) {
    console.log("My girlfriend's name is " + name);
}
myGirlFriend3("Kate");

/* myGirlFriend4("Kate");  // error !!!
var myGirlFriend4 = function(name) {
    console.log("My girlfriend's name is " + name);
} */

// With variables
console.log(x); // Returns undefined 
var x;
x = 33;

y = 22;
console.log(y); // Returns 22
var y;