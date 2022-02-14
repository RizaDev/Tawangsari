// Arrow Function

myFunction = function () {
    return 'Hello World';
} 
console.log(myFunction());

myFunction2 = () => {
	return 'Hello World 2';
} 
console.log(myFunction2());

myFunction3 = () => 'Hello World 3';
console.log(myFunction3());

// Arrow Function With Parameters
myFunction4 = (param) => 'Hello ' + param; 
console.log(myFunction4('World 4'));

myFunction5 = param => 'Hello ' + param; //you can skip the parentheses
console.log(myFunction5('World 5'));

// Arrow Function and this keyword

let student = { 
    name: 'Kevin', 
    arrowFunction:() => { ;
        console.log('Hello ' + this.name); // no 'this' binding here 
    }, 
    ordenaryFunction(){     
        console.log('Hello ' + this.name); // 'this' binding works here 
    }   
 }; 
student.arrowFunction(); 
student.ordenaryFunction(); 
