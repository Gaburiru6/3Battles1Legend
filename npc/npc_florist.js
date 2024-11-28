// const florist = new Image();
// florist.src = "npc/npc_actions.png";

// const larguraflorist = florist.width/2;
// const alturaflorist = florist.height/12;
// const florist_x = (canvas.width/2)-90;
// const florist_y = (canvas.height/2);
// let frameflorist = 0;

// function drawflorist() {
//     florist.onload = function() {
//         ctxsprite.drawImage(florist, larguraflorist*0, alturaflorist*11, larguraflorist, alturaflorist, florist_x, florist_y , larguraflorist*2, alturaflorist*2);
//     }
// }

// function floristanimate(){
//     ctxsprite.clearRect(florist_x, florist_y,larguraflorist*1.7,alturaflorist*1.5);
//     ctxsprite.drawImage(florist, larguraflorist * frameflorist, alturaflorist*11, larguraflorist, alturaflorist, florist_x, florist_y, larguraflorist*2, alturaflorist*2);
//     frameflorist++;
//     if(frameflorist == 2){
//         frameflorist = 0;

//     }
// }
// drawflorist();
// let floristInterval = setInterval(floristanimate, 2500);