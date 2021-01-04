var A, B;

function setup() {
  createCanvas(800,400);
  A = createSprite(400, 200, 50, 50);

  B = createSprite(300,100,50,50);
}

function draw() {
  background(255,255,255);  

  B.x = World.mouseX;
  B.y = World.mouseY;

  console.log(A.x - B.x);

  if(B.x-A.x<B.width/2+A.width/2 && A.x-B.x<A.width/2+B.width/2 && A.y-B.y<A.height/2+B.height/2 && B.y-A.y< B.height/2+A.height/2){
    A.shapeColor = "red";
    B.shapeColor = "red";
  } 
  else{
    A.shapeColor = "grey";
    B.shapeColor = "grey";
  }


  drawSprites();
}