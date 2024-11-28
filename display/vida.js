const canvasItem = document.getElementById("canvasItens")
const ctxItem = canvasItem.getContext("2d")

let vida = 3

const coracaoVivo = new Image();
coracaoVivo.src = './display/coracao.png'; // Caminho da imagem do coração vivo

const coracaoMorto = new Image();
coracaoMorto.src = './display/coracao_morto.png'; // Caminho da imagem do coração morto

function desenharVida() {
    const espacoEntreCoracoes = 60; // Espaço entre os corações
    const tamanhoCoracao = 50; // Tamanho do coração

    for (let i = 0; i < 3; i++) { // Número máximo de corações (vidas)
        const coracaoX = 10 + i * espacoEntreCoracoes; // Posição horizontal
        const coracaoY = 10; // Posição vertical

        // Verifique se o coração é vivo ou morto
        if (i < vida) {
            ctxItem.drawImage(coracaoVivo, coracaoX, coracaoY, tamanhoCoracao, tamanhoCoracao);
        } else {
            ctxItem.drawImage(coracaoMorto, coracaoX, coracaoY, tamanhoCoracao, tamanhoCoracao);
        }
    }
}

function receberDano() {
    if (vida > 0) {
        vida--; // Reduz a vida do jogador
        desenharVida(); // Atualiza a visualização dos corações
    }
}

function restaurarVida() {
    if (vida < 5) {
        vida++; // Aumenta a vida do jogador
        desenharVida(); // Atualiza a visualização dos corações
    }
}

//desenha a vida, sem isso por algum motivo não funciona
setInterval(() => {
         desenharVida();
     }, 1000);


//teste se recebe dano
// setInterval(() => {
//     receberDano();
// }, 2000);