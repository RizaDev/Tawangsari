// For loop
console.log(0);
console.log(1);
console.log(2);
console.log(3);

for (var i = 0; i < 4; i++) {
    console.log(i);
}

var names = ['James', 'Kate', 'Judy', 'Kevin'];

for (var index = 0; index < names.length; index++) {
    console.log(names[index]);
}

// while loop
var i = 0;
while (i <= 3) {
    console.log(i);
    i++;
}

// do while loop
var i = 0;
do {
    i += 10;
    console.log(i);
} while (i < 50);
