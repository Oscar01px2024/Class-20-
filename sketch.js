var rect,movingrect;

function setup() {
  createCanvas(800,400);
  
  rect = createSprite(200, 50, 50, 50);
  rect.shapeColor = "yellow";
  movingrect = createSprite(200,200,50,50);
  movingrect.shapeColor = "blue";
  movingrect.velocityY = -5;
  rect.velocityY = 5;

}

function draw() {
  background(0,0,0);  
  if(movingrect.x - rect.x <= movingrect.width/2 + rect.width/2&&
    rect.x - movingrect.x <= rect.width/2 + movingrect.width/2){
    movingrect.velocityX = movingrect.velocityX*(-1); 
    rect.velocityX = rect.velocityX*(-1);
  }
  if(movingrect.y - rect.y <= movingrect.height/2 + rect.height/2&&
    rect.y - movingrect.y <= rect.height/2 + movingrect.height/2){
    movingrect.velocityY = movingrect.velocityY*(-1); 
    rect.velocityY = rect.velocityY*(-1);
  }

    drawSprites();
}