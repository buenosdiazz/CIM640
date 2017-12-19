var interfaceItems = [];
var bg;
var posX = 0;
var posY = 0;
var usermessage = "";

var onPrevMillis = 0;
//var offPrevMillis = 0;
var onInterval = 900;
//var offInterval = 1000;
var flipLights = false;

var letterCounter = 0;
var startMessage = false;
var lightCounter = 0;





function setup(){
    bg = loadImage("assets/bg.jpg");

    createCanvas(1110, 700);


//    var inp = createInput('');
//    //inp.input(myInputEvent);
//
//    button = createButton('click me');
//    button.position(19, 19);
//    button.mousePressed(changeBG);



    interfaceItems.push(new interface("a",posX+166, posY+125,15,25,color(0,100,0)));
    interfaceItems.push(new interface("e",posX+573, posY+104,15,25,color(0,100,0)));
    interfaceItems.push(new interface("i",posX+76, posY+312,15,25,color(0,100,0)));
    interfaceItems.push(new interface("m",posX+470, posY+311,15,25,color(0,100,0)));
    interfaceItems.push(new interface("q",posX+947, posY+223,15,25,color(0,100,0)));
    interfaceItems.push(new interface("u",posX+411, posY+535,15,25,color(0,100,0)));
    interfaceItems.push(new interface("y",posX+847, posY+469,15,25,color(0,100,0)));

    interfaceItems.push(new interface("b",posX+265, posY+113,15,25,color(139,0,0)));
    interfaceItems.push(new interface("f",posX+689, posY+104,15,25,color(139,0,0)));
    interfaceItems.push(new interface("j",posX+177, posY+311,15,25,color(139,0,0)));
    interfaceItems.push(new interface("n",posX+573, posY+265,15,25,color(139,0,0)));
    interfaceItems.push(new interface("r",posX+144, posY+504,15,25,color(139,0,0)));
    interfaceItems.push(new interface("v",posX+505, posY+517,15,25,color(139,0,0)));
    interfaceItems.push(new interface("z",posX+974, posY+467,15,25,color(139,0,0)));

    interfaceItems.push(new interface("c",posX+357, posY+106,15,25,color(0,0,139)));
    interfaceItems.push(new interface("g",posX+793, posY+80,15,25,color(0,0,139)));
    interfaceItems.push(new interface("k",posX+274, posY+340,15,25,color(0,0,139)));
    interfaceItems.push(new interface("o",posX+688, posY+249,15,25,color(0,0,139)));
    interfaceItems.push(new interface("s",posX+244, posY+523,15,25,color(0,0,139)));
    interfaceItems.push(new interface("w",posX+629, posY+485,15,25,color(0,0,139)));

    interfaceItems.push(new interface("d",posX+464, posY+106,15,25,color(204,204,0)));
    interfaceItems.push(new interface("h",posX+905, posY+45,15,25,color(204,204,0)));
    interfaceItems.push(new interface("l",posX+357, posY+337,15,25,color(204,204,0)));
    interfaceItems.push(new interface("p",posX+813, posY+247,15,25,color(204,204,0)));
    interfaceItems.push(new interface("t",posX+311, posY+535,15,25,color(204,204,0)));
    interfaceItems.push(new interface("x",posX+728, posY+473,15,25,color(204,204,0)));
}

function draw() {
  background(bg);
    interfaceItems[0].display();
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

    if(startMessage == true){
       if(millis()-onPrevMillis >= onInterval){
        onPrevMillis = millis();
           lightCounter++;
           if(lightCounter % 2 == 0){
              flipLights = false;
              }else{
                flipLights = true;
              }

           if(flipLights == true){

               for(var i=0; i < interfaceItems.length; i++){
                   if(usermessage[letterCounter] == interfaceItems[i].letter){
                      interfaceItems[i].overlay = true;
                      }
               }


           }else{
                for(var i=0; i < interfaceItems.length; i++){
                   if(usermessage[letterCounter] == interfaceItems[i].letter){
                      interfaceItems[i].overlay = false;
                      }
               }
                console.log(usermessage[letterCounter]);

               letterCounter++;
           }
           if(letterCounter >= usermessage.length){
               startMessage = false;
               letterCounter = 0;
           }
       }
    }



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




function interface(tempLetter,tempX, tempY, tempL, tempW, tempColor){
    this.x = tempX;
    this.y = tempY;
    this.l = tempL;
    this.w= tempW;
    this.setFill= tempColor;
    this.setStroke= tempColor;
    this.overlay = false;
    this.letter = tempLetter;
    this.img = loadImage("assets/bulb.png");

    this.display= function(){
        fill(this.setFill);
        stroke(this.setStroke)
        ellipse(this.x, this.y, this.l, this.w);

        if(this.overlay == true){
          image(this.img, this.x-100, this.y-70);
        }
    }

      this.check = function(){
        if( mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.l)){ this.overlay = true;
           return true
           }
        else{
            this.overlay = false;
            return false;
        }
    }

}

function sendMessage1(){
    usermessage = document.getElementById("message").value.toLowerCase();
    console.log(usermessage);
    startMessage = true;
    onPrevMillis = millis();

 }



