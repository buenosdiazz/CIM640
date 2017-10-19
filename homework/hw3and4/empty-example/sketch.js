
var posX = 0;
var posY = 0; 
var bgColor;
var bgImage, bgImage2;
var bgChange, bgChange2;
var currentBgImage;
var hitZoneX= 100;
var hitZoneY= 100; 
var hitZoneX2= 500;
var hitZoneY2= 100; 
var hitZoneX3= 350;
var hitZoneY3= 100; 
var lights;
var light2;


function preload(){
    bgImage= loadImage("assets/igloo.jpg");
    bgImage2= loadImage("assets/winter.jpg")
    lights = loadImage("assets/northernlights.png")
    light2= loadImage("assets/light2.png")
    snow= loadImage("assets/snow.png")
    
}

function setup(){
    createCanvas(700,500);
    bgColor= color(125,121,232);
    posX = width/2;
    posY = height/2;
    
    bgChange=  createButton("Winter");
    bgChange.position(100,500);
    bgChange.mousePressed(changeBgFunction);
    currentBgImage= bgImage;
    
    bgChange2 = createButton("Igloo");
    bgChange2.position(0,500);
    bgChange2.mousePressed(changeBgFunction2);
    currentBgImage =bgImage2
}


function draw(){  
    background(bgColor);
    image(currentBgImage, 0,0, 700,500)
    
    console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
    centerX= mouseX ;
    centerY= mouseY;

    
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
    
    noFill();
    stroke("blue");
  strokeWeight(4);

 
    
     var hitZoneDist = dist(hitZoneX, hitZoneY, mouseX, mouseY);
    console.log("hit zone dist" + hitZoneDist);
    strokeWeight(1);
    ellipse(hitZoneX, hitZoneY,10,10);
    
    if(hitZoneDist <=10){
        console.log("we are super in the zone");
        image(lights,0,0);
    }
    
    var hitZoneDist2 = dist(hitZoneX2, hitZoneY2, mouseX, mouseY);
    console.log("hit zone dist2" + hitZoneDist2);
    strokeWeight(1);
    ellipse(hitZoneX2, hitZoneY2,10,10);
    
    if(hitZoneDist2 <=10){
        console.log("we are super in the zone");
        image(light2,450,0);
    }
    
    var hitZoneDist3 = dist(hitZoneX3, hitZoneY3, mouseX, mouseY);
    console.log("hit zone dist3" + hitZoneDist3);
    strokeWeight(1);
    ellipse(hitZoneX3, hitZoneY3,10,10);
    
    if(hitZoneDist3 <=10){
        console.log("we are super in the zone");
        image(snow,0,-300);
    }
    
}


function changeBgFunction(){
    currentBgImage = bgImage2;
}

function changeBgFunction2(){
    currentBgImage = bgImage;
}
