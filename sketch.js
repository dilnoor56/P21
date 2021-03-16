var collider1,collider2,collider3,collider4,box,edge0,edge1,edge2,edge3
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
   collider1=createSprite(700,585,150,20)
   collider1.shapeColor="green"

   collider2=createSprite(500,585,150,20)
   collider2.shapeColor="brown"

   collider3=createSprite(300,585,150,20)
   collider3.shapeColor="yellow"

   
   collider4=createSprite(100,585,150,20)
   collider4.shapeColor="blue"
    //create box sprite and give velocity
box=createSprite(Math.round(random(400,100)),300,40,40)
box.shapeColor="white"
box.velocityY=2
box.velocityX=2

edge0=createSprite(0,300,20,600)
edge0.visible=false

edge1=createSprite(800,300,20,600)
edge1.visible=false

edge2=createSprite(400,0,780,20)
edge2.visible=false

edge3=createSprite(400,800,780,20)
box.visible=false
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    if(box.x<0){
        bounceOff(box,edge0)
    }
    if(box.x>800){
        bounceOff(box,edge1)
    }
   if(box.y<0){
       bounceOff(box,edge2)
   }
   if(box.y>800){
       bounceOff(box.edge3)
   }
     drawSprites()
    //add condition to check if box touching surface and make it box
    if(isTouching(box,collider2)){
        music.play()
        bounceOff(box,collider2)
        box.shapeColor = "brown";
      }else{
        
        box.shapeColor = "white";
      }

    if(isTouching(box,collider1)){
        music.play()
        bounceOff(box,collider1)
        box.shapeColor = "green";
      }else{
        box.shapeColor = "white";
      }
      
    if(isTouching(box,collider3)){
        box.x=300
        box.y=560
        box.velocityX=0
        box.velocityY=0
        bounceOff(box,collider3)
        box.shapeColor = "yellow";
      }else{
        
        box.shapeColor = "white";
      }
      
    if(isTouching(box,collider4)){
        music.play()
        bounceOff(box,collider4)
        box.shapeColor = "blue";
      }else{
        
        box.shapeColor = "white";
      }

}
function isTouching(movingRect,fixedRect){

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      return true;
  }
  else {
     return false;
  }
  }
 function bounceOff(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
            movingRect.velocityX=movingRect.velocityX*(-1)
            
        }
     if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
        && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
            movingRect.velocityY=movingRect.velocityY*(-1)
            
        }   
  }