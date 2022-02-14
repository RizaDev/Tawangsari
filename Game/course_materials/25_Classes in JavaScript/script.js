// Classes in JavaScript
class Student {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log('Hello ' + this.name);
    }
}
// Usage:
const student = new Student('Kevin');
student.sayHello();


// Class is a kind of a function
console.log(typeof Student);
console.log(Object.getOwnPropertyNames(Student.prototype));


// Behind the scene - Same without class
function Student2(name) {
    this.name = name;
}
Student2.prototype.sayHello = function () {
    console.log('Hello ' + this.name);
}
const student2 = new Student2('Joe');
student2.sayHello();


