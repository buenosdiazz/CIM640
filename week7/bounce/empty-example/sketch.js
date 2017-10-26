var posX= 250;
var posY= 0;
var upDown= false;

function setup(){
    createCanvas(500,500);
}

function draw(){
    background(255)
    ellipse(posX,posY,50,50);
    console.log(posY);

    if(posY <= 0){
        upDown = false;
    }

    if(posY >= height){
        upDown = true;
    }

    if (upDown == true){
        posY--;
    }

    if (upDown == false){
        posY++;
    }
}

