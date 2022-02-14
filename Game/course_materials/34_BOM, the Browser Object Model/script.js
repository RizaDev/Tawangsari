// BOM, the Browser Object Model
console.log(document.getElementById("exParagraph"));
console.log(window.document.getElementById("exParagraph"));

// Screen parameters
document.getElementById("screenParagraph").innerHTML = 
"Screen width and height are " + screen.width + " * " + screen.height;

// Browser window parameters
document.getElementById("browserParagraph").innerHTML = 
"Browser window width and height are " + window.innerWidth + " * " 
+ window.innerHeight;

