const canvasJ = document.getElementById('gameMenuCanvas');
const ctxJ = canvasJ.getContext('2d');

class Borda {
    static width = 48
    static height = 48
    constructor ({position}){
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        ctx.fillStyle = 'rgba(255,0,0,0.6)'
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

class Sprite{
    constructor({position, velocity, map}){
        this.position = position
        this.map = map
    }

    draw(){
        ctx.drawImage(this.map,this.position.x,this.position.y)
        ctx.drawImage(playerImage,
            0,
            0,
            playerImage.width / 6,
            playerImage.height / 10,
            canvas.width / 2 - (playerImage.width / 6) / 2,
            canvas.height / 2 - (playerImage.height / 10) / 2,
            playerImage.width / 6,
            playerImage.height / 10
        );
    }
}

