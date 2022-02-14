// Events and Event Handler

//onclick
function sayHello() {
    alert('Hello JS World!');
}
document.getElementById("myBtn").onclick = sayHello;

//onchange
function toUpper() {
    let x = document.getElementById("myInput");
    x.value = x.value.toUpperCase();
}
document.getElementById("myInput").onchange = toUpper;

//onkeydown
function keyDetection() {
    alert('You have pressed a key inside textarea!');
}
document.getElementById("myText").onkeydown = keyDetection;

//addEventListener() method
document.getElementById("myBtn2").addEventListener("click", sayHello);

//addEventListener() with anonymous function
document.getElementById("myBtn3").addEventListener("click", function () {
    alert('Hello JS World with addEventListener() and anonymous function!');
}); 

