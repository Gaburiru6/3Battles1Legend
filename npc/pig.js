const pig = new Image();
pig.src = "npc/pig.png";

let frame = 0;
const largura = 32;
const altura = 32;
let framepig = 0;

function drawPig() {
    pig.onload = function() {
        ctx.drawImage(pig, largura, 0, largura, altura, (canvas.width/2) -50, (canvas.height/2) + -220, largura*3, altura*3);
    }
}

function piganimate(){
    //console.log("desenhando pig");
    ctx.clearRect((canvas.width/2) -50, (canvas.height/2)-205,largura*3,altura*2);
    ctx.drawImage(pig, largura * frame, 0, largura, altura, (canvas.width/2) -50, (canvas.height/2) -220, largura*3, altura*3);
    framepig++;
    if(framepig == 2){
        framepig = 1;
    }
}

let pigInterval = setInterval(piganimate, 250);
//drawPig();