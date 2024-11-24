const bordas = [];

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