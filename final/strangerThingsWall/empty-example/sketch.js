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
    ellipse(posX+166, posY+125,15,25);
    ellipse(posX+573, posY+104,15,25);
    //red
    fill(139,0,0)
    stroke(139,0,0)
    ellipse(posX+265, posY+113,15,25);
    ellipse(posX+573, posY+104,15,25);
    //blue
    fill(0,0,139)
    stroke(0,0,139)
    ellipse(posX+357, posY+106,15,25);
    //yellow
    fill(204,204,0)
    stroke(204,204,0)
    ellipse(posX+464, posY+106,15,25);
}

