// Object
var person = 'Kevin';//variable

//Object literal creating
var person1 = { name: 'Kevin', age: 25, country: 'Italy' };
console.log(person1);
//Objects are variables too. But objects can contain many values.

var person2 = {
    name: 'Joe',
    age: 35,
    country: 'Germany'
};

//Adding new properties
person2.job = "doctor"; 
console.log(person2);

//Deleting properties
delete person2.country;
console.log(person2);

//By creating instance of Object
var person3 = new Object();
person3.name = "Judy";
person3.age = 50;
person3.country = 'USA'
console.log(person3);

//Accessing Object Properties
console.log(person1.name);
console.log(person1["name"]);

//Object Methods (a function stored as a property)
var person4 = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 33,
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
};

console.log(person4.fullName());

//Objects are mutable: They are addressed by reference, not by value.
var x = person4;  // This will not create a copy of person4.
x.firstName = 'Alan'; // This will change both x.firstName and person4.firstName too
console.log(person4.fullName());
