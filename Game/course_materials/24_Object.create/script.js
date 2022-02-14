// Object.create

// Function constructor 
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Student.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

const john = new Student('John', 'Smith', 20);
console.log(john.fullName());
console.log(john);

// Object.create
const studentProto = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const kate = Object.create(studentProto); 
kate.firstName = 'Kate';
kate.lastName = 'Parker';
kate.age = 19;
console.log(kate.fullName());
console.log(kate);

// Object.create - use another object
const mike = Object.create(kate);
mike.firstName = 'Mike';
mike.lastName = 'Ferguson';
mike.age = 18;
console.log(mike.fullName());
console.log(mike);

// Object.create - with second parameter (properties object)
const kevin = Object.create(studentProto, {
    firstName: { value: 'Kevin'},
    lastName: { value: 'Black'},
    age: { value: 22}
});
console.log(kevin.fullName());
console.log(kevin);