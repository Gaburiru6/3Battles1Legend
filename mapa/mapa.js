const coliMap = [];

for(let i=0; i < colisao.length; i+= 70){
    coliMap.push(colisao.slice(i,70+i)); // coloca o map de colisao como array a cada 70 numeros
}

const bordas = [];

coliMap.forEach((row,i) =>{//cada linha sendo id I
    row.forEach((symbol,j) =>{// cada numero na linha, ou seja as colunas de id J
        if(symbol === 1)//se o numero for de colisao
        bordas.push(
        new Borda({
            posicao:{
                x: j*Borda.width + offset.x,//coloca as colisoes no local certo e um do lado do outro
                y: i*Borda.height + offset.y,// assim cada uma tem seu x e y
            } 
        }));
    })
})

const map = new Image();//cria a constante da imagem
map.src = 'mapa.png'//pega a imagem


const foreImg = new Image();//cria a constante da imagem
foreImg.src= 'foreground.png'//pega a imagem

map.onload =() => {
    ctx.drawImage(map,-1280,-600);//desenha a imagem na tela 
}

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    },
    image: foreImg,
})