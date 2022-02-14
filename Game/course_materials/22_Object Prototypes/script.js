// Object Prototypes

function Student(firstName, lastName, age)  
{  
  this.firstName = firstName;  
  this.lastName = lastName;
  this.age = age;
  this.fullName = function(){
    return this.firstName + " " + this.lastName;  
  };
}  

let john = new Student('John', 'Smith', 20);
let kate = new Student('Kate', 'Parker', 19);

console.log(john.fullName());
console.log(kate.fullName());

console.log(john);
console.log(kate);

//Prototype solution
/* function Student(firstName, lastName, age) {
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
console.log(Student.prototype);

console.log(john.__proto__ === Student.prototype); //true
//The property of john is the prototype property of the Student function constructor */