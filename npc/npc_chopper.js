const chopper = new Image();
chopper.src = "npc/npc_actions.png";

const largurachopper = chopper.width/2;
const alturachopper = chopper.height/12;
const chopper_x = (canvas.width/2)-150;
const chopper_y = (canvas.height/2);
let framechopper = 0;

function drawchopper() {
    chopper.onload = function() {
        ctxsprite.drawImage(chopper, largurachopper, alturachopper*4, largurachopper, alturachopper, chopper_x, chopper_y, largurachopper*2, alturachopper*2);
    }
}

function chopperanimate(){
    ctxsprite.clearRect(chopper_x, chopper_y,largurachopper*1.3,alturachopper*2);
    ctxsprite.drawImage(chopper, largurachopper * framechopper, alturachopper*4, largurachopper, alturachopper, chopper_x, chopper_y, largurachopper*2, alturachopper*2);
    framechopper++;
    if(framechopper == 2){
        framechopper = 0;

    }
}
drawchopper();
let chopperInterval = setInterval(chopperanimate, 200);