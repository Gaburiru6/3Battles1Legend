const canvas = document.getElementById("mapa");
const ctx = canvas.getContext("2d") ;

canvas.width = 1240; //largura canva (3720 mapa completo)
canvas.height = 720; //altura canva  (2160 mapa completo)
canvas.style.backgroundColor = "darkgray";

const coliMap = [];

for(let i=0; i < colisao.length; i+= 70){
    coliMap.push(colisao.slice(i,70+i)); // coloca o map de colisao como array a cada 70 numeros
}

const bordas = [];

coliMap.forEach((row,i) =>{//cada linha sendo id I
    row.forEach((symbol,j) =>{// cada numero na linha, ou seja as colunas de id J
        if(symbol === 1)//se o numero for de colisao
        bordas.push(new Borda({
            position:{
                x: j*Borda.width,//coloca as colisoes no local certo e um do lado do outro
                y: i*Borda.height,// assim cada uma tem seu x e y
            } 
        }));
    })
})

const map = new Image();//cria a constante da imagem
map.src = './mapa/mapa.png'//pega a imagem

const foreImg = new Image();//cria a constante da imagem
foreImg.src= './mapa/foreground.png'//pega a imagem

map.onload =() => {
    ctx.drawImage(map,-1280,-600);//desenha a imagem na tela 
}
/*
const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    },
    image: foreImg,
})
    */