var frameArray= [];
var counter = 0;
var interval =1000;
var prevMillis=0;

function setup(){
    createCanvas (500,500);
    frameArray[0]= loadImage("assests/Thatwasclose0.jpg");
    frameArray[1]= loadImage("assests/Thatwasclose1.jpg");
    frameArray[2]= loadImage("assests/Thatwasclose2.jpg");
    frameArray[3]= loadImage("assesets/Thatwasclose3.jpg");
}

function draw(){
    //frameRate(1);
    console.log(millis());
    image(frameArray[counter],0,0);
    if(millis() - prevMillis >= interval){
        prevMillis= millis();
        counter++;
    }

    counter++;
    if(counter == frameArray.length){
        counter = 0;
    }
}
