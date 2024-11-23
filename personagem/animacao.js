const playerImage = new Image();//cria a constante da imagem
playerImage.src= './Cute_Fantasy_Free/Player/Player.png'//pega a imagem

map.src= '../mapa/mapa.png'//pega a imagem do mapa

const offset = {
    x: -1280,
    y: -600
} 

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    map: map
})

const keys = {
    w: {pressed: false},
    a: {pressed: false},
    s: {pressed: false},
    d: {pressed: false}
}
const testBorda = new Borda({
    position:{
        x:400,
        y:400
    }
})
const movables = [background, testBorda]

function animate() {

    window.requestAnimationFrame(animate)
    background.draw()
    //bordas.forEach(Borda =>{
    //    Borda.draw()
    //})
    testBorda.draw()
    
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

    if (keys.w.pressed && lastKey === 'w') {
        movables.forEach((movable)=>{
            movable.position.y += 5
        })
    } else if (keys.a.pressed && lastKey === 'a') {
        movables.forEach((movable)=>{
            movable.position.x += 5
        })
    } else if (keys.s.pressed && lastKey === 's') {
        movables.forEach((movable)=>{
            movable.position.y -= 5
        })
    } else if (keys.d.pressed && lastKey === 'd') {
        movables.forEach((movable)=>{
            movable.position.x -= 5
        })
    }
}
animate()
 