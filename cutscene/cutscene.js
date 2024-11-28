const cutsc = document.getElementById('cutscene');
const ctxC = cutsc.getContext("2d")

// Ajustar o canvas para ocupar a tela inteira
cutsc.width = 1240;
cutsc.height = 720;

// Propriedades dos botões
const buttonWidth = 150;
const buttonHeight = 70;

const button = [
    { text: "Pular", x: (cutsc.width - buttonWidth) / 2, y: cutsc.height / 2 - 300, width: buttonWidth, height: buttonHeight, isHovered: false },
];

// Carregar a imagem de fundo
const cutsceneImg = new Image();
cutsceneImg.src = './cutscene/jardineiro.jpg';

function drawButtons() {
    button.forEach(button => {
        if (button.isHovered) {
            ctxC.fillStyle = '#f39c12'; // Cor quando o botão é hover
        } else {
            ctxC.fillStyle = 'black'; // Cor verde floresta padrão
        }
        ctxC.fillRect(button.x, button.y, button.width, button.height);

        ctxC.fillStyle = 'white';
        ctxC.font = "50px 'MedievalSharp', sans-serif"; // Usando a mesma fonte do título
        ctxC.fillText(button.text, button.x + button.width / 2 - 65, button.y + button.height / 2 + 15);
    });
}

function checkHover(x, y) {
    button.forEach(button => {
        button.isHovered = x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height;
    });
}

function drawBackground() {
    ctxC.drawImage(cutsceneImg, 0, 0, cutsc.width, cutsc.height);
}

function updateCutsc() {
    ctxC.clearRect(0, 0, cutsc.width, cutsc.height); // Limpa a tela
    
    drawBackground();
    drawButtons();
}

cutsc.addEventListener('click', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    button.forEach(button => {
        if (button.isHovered) {
            if (button.text === "Pular") {
                cutsc.style.display = 'none'; 

                // Mostra o canvas do jogo
                const canvasGame = document.getElementById('mapa');
                canvasGame.style.display = 'block'; // Exibe o canvas do jogo
                //alert("fim cutscene..."); //-Teste para ver se o botão está funcionando
            }
        }
    });
});

cutsc.addEventListener('mousemove', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    checkHover(mouseX, mouseY);
    updateCutsc(); // Atualiza a animação
});

// Inicializa o menu
cutsceneImg.onload = () => {
    updateCutsc(); // Chama a função que desenha o menu depois da imagem carregar
};

cutsceneImg.onerror = () => {
    console.error("Erro ao carregar a imagem.");
};
