
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
    fill("pink");
    ellipse(posX, posY,100,100);
    fill("blue");
    rect(posX- 25, posY+10,50,20);
    fill ("#FFF");
    ellipse(posX-10, posY-15, 10, 40);
    ellipse(posX+10, posY-15, 10, 40);
    fill(0);
    ellipse(posX-10, posY-10, 10, 10);
    ellipse(posX+10, posY-10, 10, 10);
    stroke("blue");
    strokeWeight(20);
    point(posX +10, posY+10);
    nofill();
    arc(posX, posY, 100, 100, PI, TWO_PI);

}

