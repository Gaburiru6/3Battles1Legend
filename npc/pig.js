// const pig = new Image();
// pig.src = "npc/pig.png";

// const largura = pig.width/2;
// const altura = pig.height/2;
// let framepig = 0;

// function drawPig() {
//     pig.onload = function() {
//         ctxsprite.drawImage(pig, largura, 0, largura, altura, (canvas.width/2) -50, (canvas.height/2) + -220, largura*2, altura*2);
//     }
// }

// function piganimate(){
//     ctxsprite.clearRect((canvas.width/2) +30, (canvas.height/2)-190,largura*2,altura*2);
//     ctxsprite.drawImage(pig, largura * framepig, 0, largura, altura, (canvas.width/2) +30, (canvas.height/2) -190, largura*2, altura*2);
//     ctxsprite.clearRect((canvas.width/2) -80, (canvas.height/2)-205,largura*2,altura*2);
//     ctxsprite.drawImage(pig, largura * framepig, 0, largura, altura, (canvas.width/2) -80, (canvas.height/2) -205, largura*2.5, altura*2.5);
//     framepig++;
//     if(framepig == 2){
//         framepig = 0;

//     }
// }

// drawPig();
// let pigInterval = setInterval(piganimate, 300);
// //drawPig();