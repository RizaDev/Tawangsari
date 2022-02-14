// Let and Const

//var
function varTest() {
    var x = 100;
    if (true) {
        var x = 200;  // same variable
        console.log(x);  // 200
    }
    console.log(x);  // 200
}
varTest();

//let
function letTest() {
    let y = 5;
    if (true) {
        let y = 50;  // different variable
        console.log(y);  // 50
    }
    console.log(y);  // 5
}
letTest();

//var VS let
console.log(num); //undefined
var num = 7;
console.log(num);

/* console.log(num2); //error !!!  */
let num2=77;
console.log(num2);

//Redeclaring
var name = 'Alan';
var name = 'Peter'; //allowed
let name2 = 'Kate';
/* let name2 = 'Judy'; //NOT allowed - error */  
//Redeclaring a let variable with let, in the same scope, or in the same block, is not allowed

//let VS const
let year = 1980;
console.log(year);
year = 1999; //allowed
console.log(year); 

const day = 'monday'; 
console.log(day);
/* day = 'friday'; //NOT allowed
console.log(day); //error */

// const doesn’t imply immutability
const myArray = [1, 2, 3]
myArray.push(4) // this is allowed
console.log(myArray);
myArray = ['Kevin', 'Judy', 'Joe'] // TypeError: Assignment to constant variable.