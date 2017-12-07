var interfaceItems = [];
var bg;
var posX = 0;
var posY = 0;

function setup(){
    bg = loadImage("assets/bg.jpg");
    createCanvas(1110, 700);

    interfaceItems.push(new interface(posX+166, posY+125,15,25,color(0,100,0)));
    interfaceItems.push(new interface(posX+573, posY+104,15,25,color(0,100,0)));
    interfaceItems.push(new interface(posX+76, posY+312,15,25,color(0,100,0)));
    interfaceItems.push(new interface(posX+470, posY+311,15,25,color(0,100,0)));
    interfaceItems.push(new interface(posX+947, posY+223,15,25,color(0,100,0)));
    interfaceItems.push(new interface(posX+411, posY+535,15,25,color(0,100,0)));
    interfaceItems.push(new interface(posX+847, posY+469,15,25,color(0,100,0)));

    interfaceItems.push(new interface(posX+265, posY+113,15,25,color(139,0,0)));
    interfaceItems.push(new interface(posX+689, posY+104,15,25,color(139,0,0)));
    interfaceItems.push(new interface(posX+177, posY+311,15,25,color(139,0,0)));
    interfaceItems.push(new interface(posX+573, posY+265,15,25,color(139,0,0)));
    interfaceItems.push(new interface(posX+144, posY+504,15,25,color(139,0,0)));
    interfaceItems.push(new interface(posX+505, posY+517,15,25,color(139,0,0)));
    interfaceItems.push(new interface(posX+974, posY+467,15,25,color(139,0,0)));

    interfaceItems.push(new interface(posX+357, posY+106,15,25,color(0,0,139)));
    interfaceItems.push(new interface(posX+793, posY+80,15,25,color(0,0,139)));
    interfaceItems.push(new interface(posX+274, posY+340,15,25,color(0,0,139)));
    interfaceItems.push(new interface(posX+688, posY+249,15,25,color(0,0,139)));
    interfaceItems.push(new interface(posX+244, posY+523,15,25,color(0,0,139)));
    interfaceItems.push(new interface(posX+629, posY+485,15,25,color(0,0,139)));

    interfaceItems.push(new interface(posX+464, posY+106,15,25,color(204,204,0)));
    interfaceItems.push(new interface(posX+905, posY+45,15,25,color(204,204,0)));
    interfaceItems.push(new interface(posX+357, posY+337,15,25,color(204,204,0)));
    interfaceItems.push(new interface(posX+813, posY+247,15,25,color(204,204,0)));
    interfaceItems.push(new interface(posX+311, posY+535,15,25,color(204,204,0)));
    interfaceItems.push(new interface(posX+728, posY+473,15,25,color(204,204,0)));
}

function draw() {
  background(bg);
    interfaceItems[0].display();
    interfaceItems[0].check();
    interfaceItems[1].display();
    interfaceItems[2].display();
    interfaceItems[3].display();
    interfaceItems[4].display();
    interfaceItems[5].display();
    interfaceItems[6].display();
    interfaceItems[7].display();
    interfaceItems[8].display();
    interfaceItems[9].display();
     interfaceItems[10].display();
     interfaceItems[11].display();
     interfaceItems[12].display();
     interfaceItems[13].display();
     interfaceItems[14].display();
     interfaceItems[15].display();
    interfaceItems[16].display();
    interfaceItems[17].display();
    interfaceItems[18].display();
    interfaceItems[19].display();
    interfaceItems[20].display();
     interfaceItems[21].display();
    interfaceItems[22].display();
     interfaceItems[23].display();
    interfaceItems[24].display();
    interfaceItems[25].display();




    /*
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
    ellipse(posX+947, posY+223,15,25);
    //U
     ellipse(posX+411, posY+535,15,25);
    //y
    ellipse(posX+847, posY+469,15,25);

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
    ellipse(posX+573, posY+265,15,25);
    //R
    ellipse(posX+144, posY+504,15,25);
    //V
     ellipse(posX+505, posY+517,15,25);
    //Z
     ellipse(posX+974, posY+467,15,25);

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
    ellipse(posX+688, posY+249,15,25);
    //S
     ellipse(posX+244, posY+523,15,25);
    //W
    ellipse(posX+629, posY+485,15,25);


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
    ellipse(posX+813, posY+247,15,25);
    //T
      ellipse(posX+311, posY+535,15,25);
    //X
    ellipse(posX+728, posY+473,15,25);
    */
}

function mousePressed(){
    if(interfaceItems[0].check() == true){
        console.log("pressed A");

    }

       if(interfaceItems[1].check() == true){
        console.log("pressed B");
    }
}




function interface(tempX, tempY, tempL, tempW, tempColor){
    this.x = tempX;
    this.y = tempY;
    this.l = tempL;
    this.w= tempW;
    this.setFill= tempColor;
    this.setStroke= tempColor;
    this.overlay = false;

    this.display= function(){
        fill(this.setFill);
        stroke(this.setStroke)
        ellipse(this.x, this.y, this.l, this.w);

        if(this.overlay == true){
          fill(127,200);
        ellipse(this.x, this.y, this.l, this.w);
        }
    }

      this.check = function(){
        if( mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y &&mouseY < (this.y + this.l)){ this.overlay = true;
           return true
           }
        else{
            this.overlay = false;
            return false;
        }
    }

}

