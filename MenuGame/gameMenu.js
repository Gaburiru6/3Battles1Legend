const canvasM = document.getElementById('gameMenuCanvas');
const ctxM = canvasM.getContext("2d")
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

// Função para desenhar o título do jogo com contorno
function drawTitle() {
    ctxM.font = "80px 'MedievalSharp', sans-serif"; // Fonte do título
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
        // Se o botão estiver com o hover, aumenta o tamanho da fonte
        const fontSize = button.isHovered ? 60 : 50; // Tamanho maior quando o mouse está sobre o botão

        ctxM.fillStyle = 'white'; // Cor do texto (branco)
        ctxM.font = `${fontSize}px 'MedievalSharp', sans-serif`; // Ajusta o tamanho da fonte
        ctxM.textAlign = 'center';
        ctxM.textBaseline = 'middle';

        // Desenha o contorno do texto
        ctxM.lineWidth = 5; // Largura do contorno
        ctxM.strokeStyle = 'black'; // Cor do contorno
        ctxM.strokeText(button.text, button.x + button.width / 2, button.y + button.height / 2);

        // Desenha o texto principal
        ctxM.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
    });
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

                updateCutsc()
                //alert("Iniciar o jogo..."); //-Teste para ver se o botão está funcionando
            } else if (button.text === "Sair") {
                // alert("Saindo..."); -Teste para ver se o botão está funcionando
                window.close();
            }
        }
    });
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
    updateMenu(); // Chama a função que desenha o menu depois da imagem carregar
};

// Ajusta o tamanho do canvas ao redimensionar a janela
// window.addEventListener('resize', () => {
//     canvasM.width = window.innerWidth;
//     canvasM.height = window.innerHeight;
//     updateMenu(); // Atualiza a tela quando a janela for redimensionada
// });
