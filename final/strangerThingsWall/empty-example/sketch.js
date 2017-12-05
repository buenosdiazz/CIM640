var bg;
var posX = 0;
var posY = 0;

function setup(){
    bg = loadImage("assets/bg.jpg");
    createCanvas(1110, 700);

}

function draw() {
  background(bg);
    //green
    stroke(0,100,0);
    fill(0,100,0);
    //A
    ellipse(posX+166, posY+125,15,25);
    //E
    ellipse(posX+573, posY+104,15,25);
   //I
    ellipse(posX+76, posY+312,15,25);
    //M
    ellipse(posX+470, posY+311,15,25);
    //Q
    //U
    //y


    //red
    fill(139,0,0)
    stroke(139,0,0)
    //b
    ellipse(posX+265, posY+113,15,25);
    //F
    ellipse(posX+689, posY+104,15,25);
    //J
    ellipse(posX+177, posY+311,15,25);
    //N
    //R
    //V
    //Z



    //blue
    fill(0,0,139)
    stroke(0,0,139)
    //C
    ellipse(posX+357, posY+106,15,25);
    //G
     ellipse(posX+793, posY+80,15,25);
    //K
     ellipse(posX+274, posY+340,15,25);
    //O
    //S
    //W


    //yellow
    fill(204,204,0)
    stroke(204,204,0)
    //D
    ellipse(posX+464, posY+106,15,25);
    //H
    ellipse(posX+905, posY+45,15,25);
    //L
    ellipse(posX+357, posY+337,15,25);
    //P
    //T
    //X
}

