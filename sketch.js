
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400)
  
  monkey = createSprite(50,180,20,50) ; 
monkey.addAnimation("sprite_1.png,sprite_2.png,sprite_3.png,sprite_4.png,sprite_5.png,sprite_6.png,sprite_7.png,sprite_8.png",monkey_running);
 monkey.scale = 0.09; 

ground = createSprite(200,215,400,20);
spawnBanana();
spawnObstacles();

}




function draw() {
background(250);
 if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
 monkey.velocityY = monkey.velocityY + 0.8  
 
 }
  
  
   
   
   drawSprites(); 
}

function spawnBanana(){
  
if(frameCount  %  60 === 0){
  banana = createSprite(150,192,10,40);
banana.addImage("banana.png",bananaImage);
banana.scale = 0.09
 banana.VelocityX= -6
   }
}
function spawnObstacles(){
  
if(frameCount  %  60 === 0){
  obstacles = createSprite(200,192,10,40);
obstacles.addImage("obstacle.png",obstacleImage);
obstacles.scale = 0.09;
 obstacles.VelocityX= -6;
   }
}




