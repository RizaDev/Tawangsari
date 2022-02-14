// Musik/Nada Game

function Sounds(){
    this.muted = false;
}

Sounds.prototype.init = function(){
    // this.sound = new Audio();
    // this.sound.src = 'sounds/shot.mp3';
    // this.sound.setAttribute('preload', 'auto');

    // this.sound2 = new Audio();
    // this.sound2.src = 'sounds/ufoDeath.mp3';
    // this.sound2.setAttribute('preload', 'auto');

    // this.sound3 = new Audio();
    // this.sound3.src = 'sounds/explosion.mp3';
    // this.sound3.setAttribute('preload', 'auto');

    this.soundsSource = ["sounds/shot.mp3", "sounds/ufoDeath.mp3", "sounds/explosion.mp3"];
    this.allSounds = [];

    for (let i = 0; i < this.soundsSource.length; i++) {
        this.allSounds[i] = new Audio();
        this.allSounds[i].src = this.soundsSource[i];
        this.allSounds[i].setAttribute("preload", "auto");
    }

}

Sounds.prototype.playSound = function(soundName){
    // if(soundname == 'shot'){
    //     this.sound.play();
    //     this.sound.currentTime = 0;
    // }
    // if(soundname == 'ufoDeath'){
    //     this.sound.play();
    //     this.sound.currentTime = 0;
    // }
    // if(soundname == 'explosion'){
    //     this.sound.play();
    //     this.sound.currentTime = 0;
    // }

    if (this.muted === true) {
        return;
    }


    let soundNumber;
    switch (soundName) {
        case 'shot':
            soundNumber = 0;
            break;
        case 'ufoDeath':
            soundNumber = 1;
            break;
        case 'explosion':
            soundNumber = 2;
            break;
        default:
            break;
    }
    this.allSounds[soundNumber].play();
    this.allSounds[soundNumber].currentTime = 0;
}

Sounds.prototype.mute = function () {
    if (this.muted === false) {
        this.muted = true;
    } else {
        this.muted = false;
    }
};