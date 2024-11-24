const playerImage = new Image(); // Cria a constante da imagem
playerImage.src = './Cute_Fantasy_Free/Player/Player.png'; // Carrega a imagem do personagem

map.src = '../mapa/mapa.png'; // Carrega a imagem do mapa

offset = {
    x: -1280,
    y: -600
};

const keys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false }
};

const player = new Sprite({                    //criar animacoes
    position: {
        x: canvas.width / 2 - 192 / 6 / 2,
        y: canvas.height / 2 - 320 / 10 / 2,
    },
    map: playerImage,
    frames: {
        max: 6,
    },
    lines: {
        line: 10
    }

});

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    map: map
});

const movables = [background, ...bordas];

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x && // Colisão pela direita
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width && // Colisão pela esquerda
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height && // Colisão pela parte superior
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y // Colisão pela parte inferior
    );
}

function animate() {
    window.requestAnimationFrame(animate); // Chama a função novamente (loop de animação)
    background.draw(); // Desenha o fundo
    bordas.forEach(borda => {
        borda.draw();
    });

    player.draw(); // Desenha o personagem
    
    let movendo = true;

    // Movimento para cima (w)
    if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...borda,
                        position: {
                            x: borda.position.x,
                            y: borda.position.y + 5 // Tentando mover o personagem para cima
                        }
                    }
                })
            ) {
                movendo = false; // Se houver colisão, impede o movimento
                break;
            }
        }

        if (movendo) {
            movables.forEach((movable) => {
                movable.position.y += 5; // Movimenta para cima
            });
        }

    // Movimento para a esquerda (a)
    } else if (keys.a.pressed && lastKey === 'a') {
        player.movendo = true;
        //player.image = player.sprites.left;

        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...borda,
                        position: {
                            x: borda.position.x + 5,
                            y: borda.position.y
                        }
                    }
                })
            ) {
                movendo = false;
                break;
            }
        }

        if (movendo) {
            movables.forEach((movable) => {
                movable.position.x += 5; // Movimenta para a esquerda
            });
        }

    // Movimento para baixo (s)
    } else if (keys.s.pressed && lastKey === 's') {
        player.movendo = true;
        //player.image = player.sprites.down;

        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...borda,
                        position: {
                            x: borda.position.x,
                            y: borda.position.y - 5 // Tentando mover o personagem para baixo
                        }
                    }
                })
            ) {
                movendo = false;
                break;
            }
        }

        if (movendo) {
            movables.forEach((movable) => {
                movable.position.y -= 5; // Movimenta para baixo
            });
        }

    // Movimento para a direita (d)
    } else if (keys.d.pressed && lastKey === 'd') {
        player.movendo = true;
        //player.image = player.sprites.right;

        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...borda,
                        position: {
                            x: borda.position.x - 3,
                            y: borda.position.y
                        }
                    }
                })
            ) {
                movendo = false;
                break;
            }
        }

        if (movendo) {
            movables.forEach((movable) => {
                movable.position.x -= 5; // Movimenta para a direita
            });
        }
    }
}
animate();
