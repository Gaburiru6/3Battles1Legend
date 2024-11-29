const musicaFundo = new Audio('./audio/medievalMusic.mp3');
musicaFundo.loop = true;
musicaFundo.volume = 1;  // Som no máximo

// Função para tocar música de fundo
function tocarMusicaFundo() {
    musicaFundo.play().catch((error) => {
        console.error("Erro ao tentar tocar a música:", error);
    });
}

// Função para mutar/desmutar a música
function toggleMute() {
    if (musicaFundo.muted) {
        musicaFundo.muted = false;
        document.getElementById("muteButton").textContent = "Mutar";  // Altera para "Mutar"
    } else {
        musicaFundo.muted = true;
        document.getElementById("muteButton").textContent = "Desmutar";  // Altera para "Desmutar"
    }
}

// Evento de clique no body para começar a música
document.body.addEventListener('click', () => {
    tocarMusicaFundo();
});

// Evento de clique no botão para alternar o estado de áudio
document.getElementById("muteButton").addEventListener('click', () => {
    toggleMute();
});
