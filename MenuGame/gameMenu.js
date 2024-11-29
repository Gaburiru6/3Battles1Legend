const canvasM = document.getElementById('gameMenuCanvas');
const ctxM = canvasM.getContext("2d");
// Ajustar o canvas para ocupar a tela inteira
canvasM.width = 1240;
canvasM.height = 720;

// Propriedades dos botões
const buttonWidth = 150;
const buttonHeight = 70;

const buttons = [
    { text: "Jogar", x: (canvasM.width - buttonWidth) / 2, y: canvasM.height / 2 - 100, width: buttonWidth, height: buttonHeight, isHovered: false },
    { text: "Sair", x: (canvasM.width - buttonWidth) / 2, y: canvasM.height / 2 + 20, width: buttonWidth, height: buttonHeight, isHovered: false }
];

// Carregar a imagem de fundo
const backgroundImage = new Image();
backgroundImage.src = './MenuGame/BackGroundMenu.png';

// Música de fundo
const musicaFundo = new Audio('./audio/medievalMusic.mp3');
musicaFundo.loop = true;

// Verificar estado da música (mutada ou não) no localStorage
let musicaMutada = localStorage.getItem('musicaMutada') === 'true'; // Se estiver armazenado como 'true', a música começa mutada
musicaFundo.volume = musicaMutada ? 0 : 1; // Se for mutado, a música inicia no volume 0

// Função para tocar a música
function tocarMusicaFundo() {
    if (musicaFundo.paused) {
        musicaFundo.play().catch((error) => {
            console.error("Erro ao tentar tocar a música:", error);
        });
    }
}

// Função para desenhar o título do jogo com contorno
function drawTitle() {
    ctxM.font = "90px 'MedievalSharp', sans-serif"; // Fonte do título
    ctxM.fillStyle = '#f4a460'; // Cor do texto
    ctxM.textAlign = 'center';
    ctxM.textBaseline = 'middle';

    // Desenha o contorno
    ctxM.lineWidth = 5; // Largura do contorno
    ctxM.strokeStyle = 'black'; // Cor do contorno
    ctxM.strokeText("Três batalhas, uma lenda", canvasM.width / 2, 150); // Desenha o contorno

    // Desenha o texto principal
    ctxM.fillText("Três batalhas, uma lenda", canvasM.width / 2, 150); // Desenha o texto em si
}

// Função para desenhar os botões
function drawButtons() {
    buttons.forEach(button => {
        const increasedWidth = button.width * 1.2;
        const increasedHeight = button.height * 1.2;

        // Tamanho do botão quando o mouse está sobre ele
        const buttonWidthWithHover = button.isHovered ? increasedWidth * 1.1 : increasedWidth;
        const buttonHeightWithHover = button.isHovered ? increasedHeight * 1.1 : increasedHeight;

        const buttonXWithHover = (canvasM.width - buttonWidthWithHover) / 2;
        const buttonYWithHover = button.y - (buttonHeightWithHover - increasedHeight) / 2;

        const buttonColor = '#f4a460';

        ctxM.fillStyle = buttonColor;
        ctxM.strokeStyle = 'black';
        ctxM.lineWidth = 3;

        ctxM.beginPath();
        ctxM.moveTo(buttonXWithHover + 10, buttonYWithHover);
        ctxM.lineTo(buttonXWithHover + buttonWidthWithHover - 10, buttonYWithHover);
        ctxM.lineTo(buttonXWithHover + buttonWidthWithHover, buttonYWithHover + 10);
        ctxM.lineTo(buttonXWithHover + buttonWidthWithHover, buttonYWithHover + buttonHeightWithHover - 10);
        ctxM.lineTo(buttonXWithHover + buttonWidthWithHover - 10, buttonYWithHover + buttonHeightWithHover);
        ctxM.lineTo(buttonXWithHover + 10, buttonYWithHover + buttonHeightWithHover);
        ctxM.lineTo(buttonXWithHover, buttonYWithHover + buttonHeightWithHover - 10);
        ctxM.lineTo(buttonXWithHover, buttonYWithHover + 10);
        ctxM.closePath();
        ctxM.fill();
        ctxM.stroke();

        const fontSize = button.isHovered ? 60 : 50; // Tamanho maior quando o mouse está sobre o botão

        ctxM.fillStyle = 'white';
        ctxM.font = `${fontSize}px 'MedievalSharp', sans-serif`;
        ctxM.textAlign = 'center';
        ctxM.textBaseline = 'middle';

        // Desenha o contorno do texto
        ctxM.lineWidth = 5;
        ctxM.strokeStyle = 'black';
        ctxM.strokeText(button.text, buttonXWithHover + buttonWidthWithHover / 2, buttonYWithHover + buttonHeightWithHover / 2);

        // Desenha o texto principal
        ctxM.fillText(button.text, buttonXWithHover + buttonWidthWithHover / 2, buttonYWithHover + buttonHeightWithHover / 2);
    });
}

// Função para desenhar o botão de mutar/desmutar com animação de aumento
function drawMuteButton() {
    const buttonWidth = 150;
    const buttonHeight = 70;
    const buttonX = (canvasM.width - buttonWidth) / 2;
    const buttonY = canvasM.height - 150;

    // Redefine o tamanho do botão
    const increasedWidth = buttonWidth * 1.05;  // Tamanho do botão de 1.05
    const increasedHeight = buttonHeight * 1.05;  // Tamanho do botão de 1.05

    // Tamanho do botão de mutar/desmutar com hover
    const buttonWidthWithHover = musicaMutada ? increasedWidth * 1.1 : increasedWidth;
    const buttonHeightWithHover = musicaMutada ? increasedHeight * 1.1 : increasedHeight;

    const buttonXWithHover = (canvasM.width - buttonWidthWithHover) / 2;
    const buttonYWithHover = buttonY - (buttonHeightWithHover - increasedHeight) / 2;

    const buttonColor = '#f4a460';

    ctxM.fillStyle = buttonColor;
    ctxM.strokeStyle = 'black';
    ctxM.lineWidth = 3;

    ctxM.beginPath();
    ctxM.moveTo(buttonXWithHover + 10, buttonYWithHover);
    ctxM.lineTo(buttonXWithHover + buttonWidthWithHover - 10, buttonYWithHover);
    ctxM.lineTo(buttonXWithHover + buttonWidthWithHover, buttonYWithHover + 10);
    ctxM.lineTo(buttonXWithHover + buttonWidthWithHover, buttonYWithHover + buttonHeightWithHover - 10);
    ctxM.lineTo(buttonXWithHover + buttonWidthWithHover - 10, buttonYWithHover + buttonHeightWithHover);
    ctxM.lineTo(buttonXWithHover + 10, buttonYWithHover + buttonHeightWithHover);
    ctxM.lineTo(buttonXWithHover, buttonYWithHover + buttonHeightWithHover - 10);
    ctxM.lineTo(buttonXWithHover, buttonYWithHover + 10);
    ctxM.closePath();
    ctxM.fill();
    ctxM.stroke();

    const fontSize = 36;  // Alteração no tamanho da fonte para 36px

    ctxM.fillStyle = 'white';
    ctxM.font = `${fontSize}px 'MedievalSharp', sans-serif`;
    ctxM.textAlign = 'center';
    ctxM.textBaseline = 'middle';

    // Desenha o contorno do texto
    ctxM.lineWidth = 5;
    ctxM.strokeStyle = 'black';
    ctxM.strokeText(musicaMutada ? "Desmutar" : "Mutar", buttonXWithHover + buttonWidthWithHover / 2, buttonYWithHover + buttonHeightWithHover / 2);

    // Desenha o texto principal
    ctxM.fillText(musicaMutada ? "Desmutar" : "Mutar", buttonXWithHover + buttonWidthWithHover / 2, buttonYWithHover + buttonHeightWithHover / 2);
}

// Função para alternar entre mutar/desmutar
function toggleMute() {
    musicaMutada = !musicaMutada;
    musicaFundo.volume = musicaMutada ? 0 : 1; // Ajusta o volume
    localStorage.setItem('musicaMutada', musicaMutada); // Salva o estado no localStorage
}

// Função para verificar se o mouse está sobre um botão
function checkHover(x, y) {
    buttons.forEach(button => {
        button.isHovered = x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height;
    });
}

// Função para desenhar o fundo da imagem
function drawBackground() {
    ctxM.drawImage(backgroundImage, 0, 0, canvasM.width, canvasM.height);
}

// Função que atualiza a animação do menu
function updateMenu() {
    ctxM.clearRect(0, 0, canvasM.width, canvasM.height); // Limpa a tela
    
    drawBackground();
    drawTitle();
    drawButtons();
    drawMuteButton(); // Desenha o botão de mutar/desmutar
}

// Função que lida com os cliques do mouse
canvasM.addEventListener('click', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    buttons.forEach(button => {
        if (button.isHovered) {
            if (button.text === "Jogar") {
                canvasM.style.display = 'none'; 
                cutsc.style.display = 'block';
                updateCutsc();
            } else if (button.text === "Sair") {
                window.close();
            }
        }
    });

    // Verifica se o clique foi no botão de mutar/desmutar
    const muteButtonX = (canvasM.width - 150) / 2;
    const muteButtonY = canvasM.height - 150;
    if (mouseX > muteButtonX && mouseX < muteButtonX + 150 && mouseY > muteButtonY && mouseY < muteButtonY + 70) {
        toggleMute(); // Alterna entre mutar e desmutar
        updateMenu(); // Atualiza o menu
    }
});

// Função que lida com o movimento do mouse
canvasM.addEventListener('mousemove', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    checkHover(mouseX, mouseY);
    updateMenu(); // Atualiza a animação
});

// Inicializa o menu
backgroundImage.onload = () => {
    tocarMusicaFundo(); // Começa a música ao carregar a página
    updateMenu(); // Atualiza o menu
};