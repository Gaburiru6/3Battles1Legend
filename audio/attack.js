// Definindo a variável do som de ataque
const attackSound = new Audio('./audio/ataqueMusic.mp3');

// Controle de volume (opcional)
attackSound.volume = 0.5; // Ajuste o volume de 0 a 1

// Função para tocar o som de ataque
function playAttackSound() {
    attackSound.play();
}
