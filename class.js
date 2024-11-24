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
        ctx.fillStyle = 'rgba(255,0,0,0.3)'
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

class Sprite{
    constructor({position, velocity, map, frames = {max: 1}, lines = {line: 1}}){
        this.position = position
        this.map = map
        this.frames = frames
        this.lines = lines

        this.map.onload = () => {
            this.width = this.map.width/this.frames.max 
            this.height = this.map.height/this.lines.line
        }
        
    }

    draw(){
        ctx.drawImage(
            this.map,                                           // A imagem a ser desenhada
            0,                                                  // Posição X inicial da fatia (crop) da imagem original
            0,                                                  // Posição Y inicial da fatia (crop) da imagem original
            this.map.width / this.frames.max,                   // Largura da fatia (crop) da imagem original
            this.map.height / this.lines.line,                              // Largura da fatia (crop) da imagem original
            this.position.x,          // Posição X onde a fatia será desenhada no canvas 
            this.position.y,       // Posição Y onde a fatia será desenhada no canvas
            this.map.width / this.frames.max,                                 // Largura da fatia no canvas (redimensionada)
            this.map.height / this.lines.line                             // Altura da fatia no canvas (redimensionada)
        );
    }
    
}

