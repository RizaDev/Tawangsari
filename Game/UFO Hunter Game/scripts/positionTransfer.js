// Transfer posisi
function TransferPosition(level){
    // code
    this.level = level;
    // this.num = 1;
    this.fontSize = 140;
    this.fontColor = 255;
}

TransferPosition.prototype.update = function(play){
    this.num++;
    // 2 sekon kemudia maka lanjut ke posisi inGame
    // 120 /2s = 60 FPS
    // if(this.num > 120){
    //     play.goToPosition(new InGamePosition(play.setting, this.level))
    // }

    this.fontSize -= 1;
    this.fontColor -= 1.5;
    if (this.fontSize < 1) {
        //  if the condition is met it will go to the InGamePosition
        play.goToPosition(new InGamePosition(play.setting, this.level));
    }
}


TransferPosition.prototype.draw = function(play) {
    ctx.clearRect(0, 0, play.width, play.height);
    // ctx.font="40px Comic Sans MS";
    ctx.font = this.fontSize + 'px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(255,'+this.fontColor+','+this.fontColor+',1)';
    ctx.fillText("Siap untuk mulai Level " + this.level, play.width / 2, play.height/2); 
}