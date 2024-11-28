// const miner = new Image();
// miner.src = "npc/npc_actions.png";

// const larguraminer = miner.width/2;
// const alturaminer = miner.height/12;
// const miner_x = (canvas.width/2)+50;
// const miner_y = (canvas.height/2);
// let frameminer = 0;

// function drawminer() {
//     miner.onload = function() {
//         ctxsprite.drawImage(miner, larguraminer, 0, larguraminer, alturaminer, miner_x, miner_y , larguraminer*2, alturaminer*2);
//     }
// }

// function mineranimate(){
//     ctxsprite.clearRect(miner_x, miner_y, larguraminer*1.7,alturaminer*1.5);
//     ctxsprite.drawImage(miner, larguraminer * frameminer, alturaminer*0, larguraminer, alturaminer, miner_x, miner_y, larguraminer*2, alturaminer*2);
//     frameminer++;
//     if(frameminer == 2){
//         frameminer = 0;

//     }
// }
// drawminer();
// let minerInterval = setInterval(mineranimate, 300);