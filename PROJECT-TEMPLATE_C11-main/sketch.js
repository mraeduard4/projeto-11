var sea, ship_swing, ship;
function preload(){

  ship_swing = loadAnimation("ship-1.png", "ship-2.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200, 200);
  sea = addImage("mar", sea);
  ship = createSprite(50, 100, 10, 10);
  ship = addAnimation("swing", ship_swing);
}

function draw() {
  background("blue");
    sea.velocityX = 2;
    if(sea.x < 0){
      sea.x = sea.width/2;
    }
    drawSprites();

 
}
