// Camvas utk draw game
const canvas = document.getElementById('ufoCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 750;

// Canvas otomatis resizing
function resize(){
    const height = window.innerHeight-20;
    // Kalkulasi skala yang tepat
    const ratio = canvas.width / canvas.height;
    const width = height*ratio;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

}
window.addEventListener('load', resize, false);


// Dasar" Game
function GameBasics(canvas){
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;

    // aktif field saat play
    this.playBoundaries = {
        top:150,
        bottom: 650,
        left:100,
        right:800
    };

    // initial nilai
    this.level = 1;
    this.score = 0;
    this.nyawa = 2; 

    // Game setting
    this.setting = {
        // settingan
        // FPS: 60 frame / sekon, artinya 1 frame baru di setiap 1/60 sekon
        updateSeconds: (1/60),
        // kecepatan gerak spaceship
        spaceshipSpeed: 700,
        // kecepatan bullet speed
        bulletSpeed: 130,
        // Kecepatan spaceship mengeluarkan peluru dari 1 peluru ke peluru berikutnya
        bulletMaxFrequency: 10,
        
        //number of UFO lines	
        ufoLines: 4, 
        //number of UFO columns	 
        ufoColumns: 6, 
        //speed of UFO 
        ufoSpeed: 200, 
        //that's how much the UFO sinks, value of sinking
        ufoSinkingValue: 100,

        //bomb falling speed
        bombSpeed: 75, 
        //bomb dropping frequency
        bombFrequency: 0.05,
        // poin per nilai ufo
        pointsPerUFO: 25,

    };

    // koleksi posisi yang berbeda, states pada game
    this.positionContainer = [];

    // simpan keys yang di pressed
    this.pressedKeys = {};


}

// Return posisi game state terkini. Sllau return top elemen dari positionContainer
GameBasics.prototype.presentPosition = function(){
    return this.positionContainer.length > 0 ? this.positionContainer[this.positionContainer.length -1]: null;
};

// Pindah ke posisi yang dituju
GameBasics.prototype.goToPosition = function(position){
    // jika posisi sudah ada,maka hapus posisi kontainer
    if(this.presentPosition()){
        this.positionContainer.length = 0;
    }
    // jika kosong, maka panggil
    if(position.entry){
        position.entry(play);
    }
    // Setting posisi terkini ke posisi kontainer
    this.positionContainer.push(position);
}

// Push posisi baru ke posisi kontainer
GameBasics.prototype.pushPosition = function(position){
    this.positionContainer.push(position);
}
// Pop posisi dari posisi kontainer
GameBasics.prototype.popPosition = function(){
    this.positionContainer.pop();
}
// Loop dari game
GameBasics.prototype.start = function(){
    // code
    setInterval(function(){
        gameLoop(play);
        // 1/60 * 1000 = 16,67ms
    }, this.setting.updateSeconds * 1000);
    //Go ke posisi opening
    this.goToPosition(new OpeningPosition());

    
};

// Notifies the game when a key is pressed
GameBasics.prototype.keyDown = function (keyboardCode) {
    // store the pressed key in 'pressedKeys'
    this.pressedKeys[keyboardCode] = true;
    //console.log(this.pressedKeys);
    //  it calls the present position's keyDown function
    if (this.presentPosition() && this.presentPosition().keyDown) {
      this.presentPosition().keyDown(this, keyboardCode);
    }
  };

//   Pemberitahuan pada game saat key di release
GameBasics.prototype.keyUp = function(keyboardCode){
    // hapus release key dari pressedKeys
    delete this.pressedKeys[keyboardCode];
  }


// Loop Game
function gameLoop(play){
    let presentPosition = play.presentPosition();

    if(presentPosition){
        // update
        if(presentPosition.update){
            presentPosition.update(play);
        }
        // draw
        if(presentPosition.draw){
            presentPosition.draw(play);
        }
    }
}

// events listening saat keyboards ditekan

window.addEventListener("keydown", function (e) {
    const keyboardCode = e.which || event.keyCode; // Use either which or keyCode, depending on browser support
    if (keyboardCode == 37 || keyboardCode == 39 || keyboardCode == 32) { e.preventDefault(); } //space/left/right (32/37/29)
    play.keyDown(keyboardCode);
  });
  
  window.addEventListener("keyup", function (e) {
    const keyboardCode = e.which || event.keyCode; // Use either which or keyCode, depending on browser support
    play.keyUp(keyboardCode);
  });

// Create Objek GameBasics
const play = new GameBasics(canvas);
play.sounds = new Sounds();
play.sounds.init();
play.start();

// udemy_gbr = new Image();
// udemy_gbr.src = 'images/udemy.png';

// udemy_gbr.onload= function(){
//     return ctx.drawImage(udemy_gbr, 080, 20)
// }


// ctx.fillStyle = 'green';
// ctx.fillRect(0,0,150,75);

// ctx.font = '38px Arial';
// ctx.fillStyle = 'red';
// ctx.fillText('UFO', 30, 130);
// ctx.strokeText('Hunter', 120,130);
