
var posX = 0;
var posY = 0;  

function setup(){
    createCanvas(500,1000);
    background(125,121,232);
    posX = width/2;
    posY = height/2;
}


function draw(){  
    stroke(0);
    strokeWeight(.4);
    fill("black");
    ellipse(posX, posY,200,300);
    ellipse(posX-50, posY,200,100);
    ellipse(posX+50, posY,200,100);
    fill("white");
    ellipse(posX, posY+25,150,200);
    fill ("#FFF");
    ellipse(posX-10, posY-100, 20, 40);
    ellipse(posX+10, posY-100, 20, 40);
    fill(0);
    ellipse(posX-10, posY-100, 10, 10);
    ellipse(posX+10, posY-100, 10, 10);
    stroke("blue");
    fill("orange");
    triangle(posX-10,posY-90,posX+10,posY-90,posX,posY-30);
    arc(posX-50, posY+150,50,50, -PI, PI);
     arc(posX+50, posY+150,50,50, -PI, PI);
}

