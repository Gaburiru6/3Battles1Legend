window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            player.currentDirection = 160; // Andar para cima
            player.movendo = true;
            break;
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            player.currentDirection = 127; // Andar para a esquerda
            player.movendo = true;
            break;
        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            player.currentDirection = 96; // Andar para baixo
            player.movendo = true;
            break;
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            player.currentDirection = 128; // Andar para a direita
            player.movendo = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
        case 'a':
        case 's':
        case 'd':
            keys[event.key].pressed = false;
            player.movendo = false; // Parar movimento ao soltar a tecla
            player.currentDirection = 0;
            break;
    }
});
