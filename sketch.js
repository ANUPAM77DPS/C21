var a,b
function setup() {
  createCanvas(800,400);
  A=createSprite(400, 300, 50, 50);
  A.shapeColor="red"

  B=createSprite(700,200,50,50)
  B.shapeColor="red"
  B.velocityX=-3

  c=createSprite(600,300,50,50)
  c.shapeColor="red"
 d=createSprite(100,200,50,50)
  d.shapeColor="red"
d.velocityX=3
edge=createEdgeSprites()
}

function draw() {
  background("black");  
  drawSprites();
  A.x=mouseX
  A.y=mouseY
 if(touch(A,c)){
  A.shapeColor="white"
 c.shapeColor="white"
    
 }
 else{
  A.shapeColor="red"
  c.shapeColor="red"
 }
 Bounce(B,d)
 B.bounceOff(edge)
 d.bounceOff(edge)
}

