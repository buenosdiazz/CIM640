var interfaceItems = [];
var brushSize = 10;

function setup(){
    createCanvas (400,400)

    interfaceItems.push(new interface(100,100,50,color(255,0,0)));
    interfaceItems.push(new interface(30,100,50,color(0,255,0)));
}

function draw (){
    fill(0);
    ellipse(mouseX,mouseY,brushSize,brushSize);

   interfaceItems[0].display();
    interfaceItems[1].display();
    //console.log(interfaceItems[0].check());
}

function mousePressed(){
    if(interfaceItems[0].check() == true){
        console.log("pressed red button");
        brushSize++;
    }

       if(interfaceItems[1].check() == true){
        console.log("pressed red button");
        brushSize--;
    }
}

function interface(tempX, tempY, tempBoxSize, tempColor){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill= tempColor;

    this.display= function(){
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize);
    }

    this.check = function(){
        if( mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y &&mouseY < (this.y + this.boxSize)){
           return true
           }
    }
}
