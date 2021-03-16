var car, wall, speed, weight, deformation

function setup() {
  createCanvas(1600,400);
 car = createSprite(400,200,50,50)
 wall = createSprite(1200,200,60,300)
 wall.shapeColor = rgb(80,80,80)

 speed = random(55,90)
 weight = random(400,1500)
}

function draw() {
  background("black"); 
  car.velocityX = speed
   

if(car.x- wall.x <= car.width/2 + wall.width/2 &&
  wall.x- car.x <= car.width/2 + wall.width/2 &&
  car.y - wall.y <= car.height/2 + wall.height/2 &&
  wall.y - car.y <= car.height/2 + wall.height/2){
    deformation = 0.5*weight*speed*speed/22500
    car.velocityX = 0
  }
  if(deformation<100){
    car.shapeColor = "green"
  }
  if(deformation>100 && deformation<180){
    car.shapeColor = "yellow"
  }
  if(deformation>180){
    car.shapeColor = "red"
  }
  drawSprites();
}
