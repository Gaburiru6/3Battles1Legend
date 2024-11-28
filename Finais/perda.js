// canvasM.style.display = 'block';
// // Ajustar o canvas para ocupar a tela inteira
// canvasM.width = 1240;
// canvasM.height = 720;

// // Carregar a imagem de fundo
// const backgroundImage = new Image();
// backgroundImage.src = './Finais/finalDerrota.png';

// if(o jogador perder){
//     // Função para desenhar o título do jogo com contorno
//     function drawTitle() {
//         ctxM.font = "80px 'MedievalSharp', sans-serif"; // Fonte do título
//         ctxM.fillStyle = '#f4a460'; // Cor do texto
//         ctxM.textAlign = 'center';
//         ctxM.textBaseline = 'middle';

//         // Desenha o contorno
//         ctxM.lineWidth = 5; // Largura do contorno
//         ctxM.strokeStyle = 'black'; // Cor do contorno
//         ctxM.strokeText("Oh não, você foi derrotado", canvasM.width / 2, 150); // Desenha o contorno

//         // Desenha o texto principal
//         ctxM.fillText("Oh não, você foi derrotado", canvasM.width / 2, 150); // Desenha o texto em si
//     }

//     // Função para desenhar o fundo da imagem
//     function drawBackground() {
//         ctxM.drawImage(backgroundImage, 0, 0, canvasM.width, canvasM.height);
//     }
// }