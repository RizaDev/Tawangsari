// Call and Apply

// call() method
const student = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const student1 = {
    firstName: "Kevin",
    lastName: "Smith"
}
const student2 = {
    firstName: "Judy",
    lastName: "Black"
}
console.log(student.fullName.call(student1)); // result: 'Kevin Smith' 
console.log(student.fullName.call(student2)); // result: 'Judy Black'    

// call() method with argument
const studentWithArg = {
    fullName: function (age, university) {
        return this.firstName + " " + this.lastName + ", " + age + ", " + university;
    }
}
console.log(studentWithArg.fullName.call(student1, 21, 'MIT')); //'Kevin Smith, 21, MIT'

// apply() method
console.log(studentWithArg.fullName.apply(student1, [21, 'MIT'])); //'Kevin Smith, 21, MIT'