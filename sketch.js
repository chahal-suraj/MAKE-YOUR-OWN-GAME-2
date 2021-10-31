var fish,fishImg;
var shark,sharkImg;
var bgImg;
var bg;
var go,goImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sharkGroup;

function preload(){
  fishImg = loadImage("Imported piskel (15).gif");
  sharkImg = loadImage("Imported piskel (16).gif");
  bgImg = loadImage("Imported piskel (17).gif");
  goImg = loadImage("gameOver.png");
}
function setup() {
  createCanvas(600, 600);
  

  bg = createSprite(300,300);
  bg.addImage(bgImg);
  bg.scale = 3.2
  bg.velocityX = -2;
  

  fish = createSprite(100,200,20,20);
  fish.addImage(fishImg);
  fish.scale = 0.2;

  
  
  


  sharkGroup = createGroup();
  
}

function draw() {
  background(0);


 
  if(bg.x < 0){
    bg.x = bg.width/2;
  }

  if(keyCode === UP_ARROW){
    fish.y -= 2;
  }

  if(keyCode === DOWN_ARROW){
    fish.y += 2;
  }
  

  spawnshark()

  

  drawSprites();
}

   
function spawnshark() {
  if (frameCount % 200 === 0) {
    var shark = createSprite(600,120,40,10);
    shark.x = Math.round(random(800,1100));
    shark.y = Math.round(random(100,500));
    shark.addImage(sharkImg);
    shark.scale = 0.5;
    shark.velocityX = -3
    shark.lifetime = 800;
    sharkGroup.add(shark)
  }
}

