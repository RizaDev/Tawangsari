// Break
for (var i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

var persons = ['Kevin', 'Judy', 'Joe', "Kate"];
var wantedPerson = 'Judy';
for (var i = 0; i < persons.length; i++) {
    if (persons[i] === wantedPerson) {
        console.log('We found ' + wantedPerson + ' at the position number ' + (i + 1));
        break;
    }
}

// Continue
for (var i = 0; i < 4; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

var cars = ['Fiat', 'Mercedes', 'Ford', 'Toyota'];
console.log('Cars with four letters:');
for (var i = 0; i < cars.length; i++) {
    if (cars[i].length !== 4) {
        continue
    }
    console.log(cars[i]);
}
