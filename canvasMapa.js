// const canvas = document.getElementById("mapa");
// const ctx = canvas.getContext("2d");

// canvas.width = 1240; // Largura do canvas
// canvas.height = 720; // Altura do canvas
// canvas.style.backgroundColor = "darkgray";

// const coliMap = [];

// for (let i = 0; i < colisao.length; i += 70) {
//     coliMap.push(colisao.slice(i, 70 + i)); // Divide o mapa de colisão em blocos de 70
// }

// const bordas = [];
// offset = {
//     x: -1280,
//     y: -600
// };

// coliMap.forEach((row, i) => { // Cada linha sendo id I
//     row.forEach((symbol, j) => { // Cada número na linha, ou seja, as colunas de id J
//         if (symbol === 1) // Se o número for de colisão
//             bordas.push(
//                 new Borda({
//                     position: {
//                         x: j * Borda.width + offset.x, // Calcula posição x
//                         y: i * Borda.height + offset.y // Calcula posição y
//                     }
//                 })
//             );
//     });
// });

// const map = new Image(); // Cria a constante da imagem
// map.src = './mapa/mapa.png'; // Carrega a imagem do mapa

// const foreImg = new Image(); // Cria a constante da imagem
// foreImg.src = './mapa/foreground.png'; // Carrega a imagem do foreground

// const foreground = new Sprite({
//     position: {
//         x: offset.x,
//         y: offset.y
//     },
//     map: foreImg // Usa a imagem do foreground
// });
