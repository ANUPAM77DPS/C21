function touch(a,b){
    if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && 
      b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2){
     return true
    }
    else{
     return false
    }
  }
  function Bounce(a,b){
    if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2)
  {
a.velocityX=a.velocityX*(-1)
b.velocityX=b.velocityX*(-1)
  }
  }
