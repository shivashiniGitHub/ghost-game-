var ghost,ghostImage;

var door,doorImage,doorG;

var tower,towerImage;

var climber,climberImage,climberG;

function preload(){

towerImage = loadImage("tower.png");

ghostImage = loadImage("ghost-standing.png");
  
doorImage = loadImage("door.png"); 
 
climberImage = loadImage("climber.png");  
  
}
function setup(){

createCanvas(600,600);  
  
tower = createSprite(300,300,600,600);
tower.addImage("backgroundImage",towerImage);
tower.velocityY = 5;

ghost = createSprite(300,300,25,25);
ghost.addImage("ghosty",ghostImage);
ghost.scale = 0.5;
ghost.velocityY = 2;

doorG = new Group();
climberG = new Group();
}
function draw(){

background("black");  
  
if(tower.y>600){
tower.y = tower.width/2
   }

if(keyDown("space")){
ghost.velocityY = -3;
   }  

ghost.velocityY = ghost.velocityY + 0.5; 
  
if(keyDown("right")){
ghost.x = ghost.x + 3;
   }  
  
if(keyDown("left")){
ghost.x = ghost.x - 3;
   }
  
if(ghost.y>600){
   tower.velocityY = 0;
   ghost.destroy();
   doorG.setVelocityYEach(0);
   climberG.setVelocityYEach(0);
   doorG.destroyEach();
   climberG.destroyEach();
   }  
  
doors();  
  
drawSprites();

if(ghost.y>600){
 fill("red");
 textSize(50);
 text("GAME OVER",150,300)  
   
   }


}

function doors(){
if(frameCount%170 === 0){
door = createSprite(300,300,25,25) 
door.addImage("doorsImage",doorImage);
climber = createSprite(300,350,25,25);
climber.addImage("climbers",climberImage);
door.x = Math.round(random(100,500))
door.velocityY = 4;
climber.velocityY = 4;
climber.x = door.x;
door.lifetime = 150;
climber.lifetime = 150; 
doorG.add(door);
climberG.add(climber);
   }




}