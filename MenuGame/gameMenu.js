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

// Estado atual da tela
let currentScreen = "menu"; // Pode ser "menu", "victory", "defeat" ou "game"

// Imagens de fundo
const backgroundImage = new Image();
backgroundImage.src = './MenuGame/BackGroundMenu.png';

const gameoverImage = new Image();
gameoverImage.src = './Finais/finalDerrota.png';

const victoryImage = new Image();
victoryImage.src = './Finais/finalVitoria.png';

// Funções genéricas de desenho
function drawBackground(image) {
    ctxM.drawImage(image, 0, 0, canvasM.width, canvasM.height);
}

function drawCenteredText(text, yPosition) {
    ctxM.font = "80px 'MedievalSharp', sans-serif";
    ctxM.fillStyle = '#f4a460';
    ctxM.textAlign = 'center';
    ctxM.textBaseline = 'middle';

    ctxM.lineWidth = 5;
    ctxM.strokeStyle = 'black';
    ctxM.strokeText(text, canvasM.width / 2, yPosition);

    ctxM.fillText(text, canvasM.width / 2, yPosition);
}

// Função para desenhar os botões
function drawButtons() {
    buttons.forEach(button => {
        ctxM.fillStyle = button.isHovered ? '#f39c12' : 'black';
        ctxM.fillRect(button.x, button.y, button.width, button.height);

        ctxM.fillStyle = 'white';
        ctxM.font = "50px 'MedievalSharp', sans-serif";
        ctxM.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
    });
}

// Função para verificar se o mouse está sobre um botão
function checkHover(x, y) {
    buttons.forEach(button => {
        button.isHovered = x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height;
    });
}

// Função para atualizar o menu
function updateMenu() {
    ctxM.clearRect(0, 0, canvasM.width, canvasM.height);

    if (currentScreen === "menu") {
        drawBackground(backgroundImage);
        drawCenteredText("Três batalhas, uma lenda", 150);
        drawButtons();
    } else if (currentScreen === "defeat") {
        drawBackground(gameoverImage);
        drawCenteredText("Oh não, você foi derrotado", canvasM.height / 2);
    } else if (currentScreen === "victory") {
        drawBackground(victoryImage);
        drawCenteredText("Parabéns, você salvou a vila", canvasM.height / 2);
    }
}

// Eventos de clique no canvas
canvasM.addEventListener('click', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    if (currentScreen === "menu") {
        buttons.forEach(button => {
            if (button.isHovered) {
                if (button.text === "Jogar") {
                    canvasM.style.display = 'none';
                    currentScreen = "game"; // Aqui você inicia o jogo
                } else if (button.text === "Sair") {
                    window.close();
                }
            }
        });
    } else if (currentScreen === "defeat" || currentScreen === "victory") {
        currentScreen = "menu"; // Retorna ao menu principal
        updateMenu();
    }
});

// Eventos de movimento do mouse
canvasM.addEventListener('mousemove', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    checkHover(mouseX, mouseY);
    updateMenu();
});
// Lógica de vitória e derrota
function checkGameState(vida, inimigoMorto1,inimigoMorto2,inimigoMorto3) {
    if (vida == 0) {
        currentScreen = "defeat";
        if (canvasM.style.display !== 'block') {
            canvasM.style.display = 'block'; // Certifique-se de mostrar o canvas
        }
        updateMenu(); // Atualiza o menu com a tela de derrota
    } else if (inimigoMorto1 && inimigoMorto2 && inimigoMorto3) {
        currentScreen = "victory";
        if (canvasM.style.display !== 'block') {
            canvasM.style.display = 'block'; // Certifique-se de mostrar o canvas
        }
        updateMenu(); // Atualiza o menu com a tela de vitória
    }
}

// Inicializa o menu
backgroundImage.onload = () => {
    updateMenu();
};