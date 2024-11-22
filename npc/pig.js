const pig = new Image();
pig.src = "npc/pig.png";

let frame = 0;
const largura = 32;
const altura = 32;

function drawPig() {
    pig.onload = function() {
        console.log("Desenhando porco");
        console.log(canvas.width);
        console.log(canvas.height);
        ctx.drawImage(pig, largura * frame, 0, largura, altura, canvas.width/2, canvas.height/2, largura, altura);
        frame = (frame + 1) % 4;
    }
}

drawPig();