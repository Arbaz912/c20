function setup() { 
  createCanvas(800,400); 
  
  fixedRect = createSprite(200,150,50,100); 
  movingRect = createSprite(800,100,100,50);
  movingRect.velocityX=-3; 
  movingRect.shapeColor = "green"; 
  fixedRect.shapeColor = "green"; 
  fixedRect.debug = true;
   movingRect.debug = true;
   } 
   
function draw() { 
  background(0); 
    
    
  console.log(movingRect.x-fixedRect.x);
     
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){ 
      movingRect.shapeColor = "red"; 
      fixedRect.shapeColor = "red";
      movingRect.velocityX *= -1
     }else{
            movingRect.shapeColor = "green"; 
            fixedRect.shapeColor = "green";
          
          }
    


      drawSprites();
}