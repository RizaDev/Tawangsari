// Object Constructor

// Constructor function for Student objects
function Student(first, last, age, university) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.university = university;
  //this.nationality = 'English'; //add new property to an Object
}

// Create a Student object
let s1 = new Student('Kevin', 'Smith', 20, 'MIT');

// Display university
console.log('Kevin is studying at ' + s1.university + '.');

// Adding a Property to a Constructor
Student.nationality = 'German'; // You can NOT add a new property to a constructor function
console.log(s1.nationality); //undefined -> put line 9 into Student func: it's working!

// Adding a Method to a Constructor
function Car(brand, model, yearOfManufacture){
  this.brand = brand;
  this.model = model;
  this.yearOfManufacture = yearOfManufacture;
  this.carName = function () {
    return this.brand + " " + this.model;
  };
}
// Create a Car object
let car1 = new Car("Toyota", "Corolla", 2019);
// Display car name
console.log(car1.carName());
