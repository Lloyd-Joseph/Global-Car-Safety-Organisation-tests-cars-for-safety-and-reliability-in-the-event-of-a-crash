var car , wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55  ,90);
  weight = random(400 , 1500);

  car = createSprite(50, 200, 100, 50);
  car.velocityX = speed;
  
  wall = createSprite(1500, 200, 60, height/2);
  
  console.log(0.5 * weight * speed * speed / 22500);
}

function draw() {
  background(255,255,255);  

  if(0.5 * weight * speed * speed / 22500 < 100 &&   Math.abs(car.x - wall.x) <=   car.width/2 + wall.width/2) {
  
  car.shapeColor = color(0, 255, 0);
  car.velocityX = 0;
  
  }
  
    if(0.5 * weight * speed * speed / 22500 > 100 && 0.5 * weight * speed * speed / 22500 < 180 &&   Math.abs(car.x - wall.x) <=   car.width/2 + wall.width/2) {
  
  car.shapeColor = color(230, 230, 0);
  car.velocityX = 0;
  
  }
  
     if(0.5 * weight * speed * speed / 22500 > 180 &&   Math.abs(car.x - wall.x) <=   car.width/2 + wall.width/2) {
  
  car.shapeColor = color(255, 0, 0);
  car.velocityX = 0;
  
  }

drawSprites();
}



















