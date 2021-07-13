var bg,sleep,brush,bath,drink,eat,gym, astronaut, move
function preload(){

  bg = loadImage ("iss.png")
  sleep = loadAnimation ("sleep.png")
  brush = loadAnimation ("brush.png")
  eat = loadAnimation ("eat1.png", "eat2.png")
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png")
  bath = loadAnimation("bath1.png", "bath2.png")
  move = loadAnimation ("move.png", "move1.png")
  drink = loadAnimation ("drink1.png", "drink2.png")
}

function setup() {


  createCanvas(800,400);
  astronaut = createSprite (400, 200, 50, 50);
  astronaut.addAnimation ("sleep", sleep)
  astronaut.scale = 0.1





}

function draw() {
  background(bg); 
  
  if (keyDown (UP_ARROW)) {
    astronaut.addAnimation ("brushing", brush)
    astronaut.changeAnimation ("brushing")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown (DOWN_ARROW)) {
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation ("gymming")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown (LEFT_ARROW)) {
    astronaut.addAnimation ("bathing", bath)
    astronaut.changeAnimation ("bathing")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown (RIGHT_ARROW)) {
astronaut.addAnimation ("eating", eat)
astronaut.changeAnimation("eating")
astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown ("M")){
    astronaut.addAnimation ("walking",move)
    astronaut.changeAnimation ("walking")

    astronaut.velocityX = 1
    astronaut.velocityY = 1
  }
  drawSprites();
}