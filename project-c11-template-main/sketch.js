var sea, ship_swing, ship;
var seaImg

function preload(){

  ship_swing = loadAnimation("ship-1.png", "ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200, 200);
  sea.addImage(seaImg);
  ship = createSprite(200, 300, 10, 10);
  ship.addAnimation("swing", ship_swing);
  ship.scale = 0.2;
}

function draw(){
  background("blue");

  sea.velocityX = 2;
  
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
    
  drawSprites();
}
