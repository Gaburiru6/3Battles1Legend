const canvas = document.getElementById('gameMenuCanvas');
const ctx = canvas.getContext('2d');

// Ajustar o canvas para ocupar a tela inteira
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Propriedades dos botões
const buttonWidth = 250;
const buttonHeight = 70;

const buttons = [
    { text: "Jogar", x: (canvas.width - buttonWidth) / 2, y: canvas.height / 2 - 100, width: buttonWidth, height: buttonHeight, isHovered: false },
    { text: "Sair", x: (canvas.width - buttonWidth) / 2, y: canvas.height / 2 + 20, width: buttonWidth, height: buttonHeight, isHovered: false }
];

// Carregar a imagem de fundo
const backgroundImage = new Image();
backgroundImage.src = 'BackGroundMenu.webp'; // Substitua pelo caminho correto da sua imagem

// Função para desenhar o título do jogo com contorno
function drawTitle() {
    ctx.font = "80px 'MedievalSharp', sans-serif"; // Fonte do título
    ctx.fillStyle = '#f4a460'; // Cor do texto
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Desenha o contorno
    ctx.lineWidth = 5; // Largura do contorno
    ctx.strokeStyle = 'black'; // Cor do contorno
    ctx.strokeText("Três batalhas, uma lenda", canvas.width / 2, 150); // Desenha o contorno

    // Desenha o texto principal
    ctx.fillText("Três batalhas, uma lenda", canvas.width / 2, 150); // Desenha o texto em si
}

// Função para desenhar os botões
function drawButtons() {
    buttons.forEach(button => {
        if (button.isHovered) {
            ctx.fillStyle = '#f39c12'; // Cor quando o botão é hover
        } else {
            ctx.fillStyle = 'black'; // Cor verde floresta padrão
        }
        ctx.fillRect(button.x, button.y, button.width, button.height);

        ctx.fillStyle = 'white';
        ctx.font = "34px 'MedievalSharp', sans-serif"; // Usando a mesma fonte do título
        ctx.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
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
    // Desenha a imagem de fundo (espalha ela por toda a tela)
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

// Função que atualiza a animação do menu
function updateMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela
    
    drawBackground(); // Desenha o fundo
    drawTitle();
    drawButtons();
}

// Função que lida com os cliques do mouse
canvas.addEventListener('click', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    buttons.forEach(button => {
        if (button.isHovered) {
            if (button.text === "Jogar") {
                window.location.href = 'jogo.html'; // Ultilizar isso para ir a tela do jogo
                // alert("Iniciar o jogo..."); -Teste para ver se o botão está funcionando
            } else if (button.text === "Sair") {
                // alert("Saindo..."); -Teste para ver se o botão está funcionando
                window.close();
            }
        }
    });
});

// Função que lida com o movimento do mouse
canvas.addEventListener('mousemove', (e) => {
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
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateMenu(); // Atualiza a tela quando a janela for redimensionada
});
