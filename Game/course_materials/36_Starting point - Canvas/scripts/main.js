// Canvas drawing
const canvas = document.getElementById('ufoCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 150, 75); 

// Canvas text
ctx.font = "38px Arial";
ctx.fillStyle = 'red';
ctx.fillText("UFO", 30, 130); 
ctx.strokeText("Hunter", 120, 130); 

// Canvas image
/* udemy_image = new Image();    
udemy_image.src = "images/udemy.png";  */

/* udemy_image.onload = function() {
    return ctx.drawImage(udemy_image, 0, 0);
  }; */

// same with Arrow Function  
/* udemy_image.onload = () => {
  ctx.drawImage(udemy_image, 0, 0);
}; */




