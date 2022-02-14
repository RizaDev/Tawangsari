// Prototype Chain

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Student.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

let john = new Student('John', 'Smith', 20);
let kate = new Student('Kate', 'Parker', 19);

console.log(john.fullName());
console.log(kate.fullName());

console.log(john);

// Prototype Chain in practice
console.log(john.hasOwnProperty('age'));