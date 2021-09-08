var nameplate, bg;
var pacman, pacmanLeftImg,pacmanRightImg,pacmanUpImg,pacmanDownImg;
var pacmanwhole,pacmanhalf,pacmansemihalf;

var wallGroup

var foodGroup1, foodGroup2, foodGroup3, foodGroup4,foodGroup5

var boundryGroup

function preload(){
nameplate = loadImage("Name Plate 2.png")
pacmanLeftImg = loadAnimation("PacmanAll.png","PacmanLeftImg1.png","PacmanLeftImg2.png","PacmanLeftImg1.png")
pacmanRightImg = loadAnimation("PacmanAll.png","PacmanRightImg1.png","PacmanRightImg2.png","PacmanRightImg1.png")
pacmanUpImg = loadAnimation("PacmanAll.png","PacmanUpImg1.png","PacmanUpImg2.png","PacmanUpImg1.png")
pacmanDownImg = loadAnimation("PacmanAll.png","PacmanDownImg1.png","PacmanDownImg2.png","PacmanDownImg1.png")
pacmanwhole = loadAnimation("PacmanAll.png")
pacmanhalf = loadAnimation("PacmanLeftImg2.png")
pacmansemihalf = loadAnimation("PacmanLeftImg1.png")

}

function setup() {
  createCanvas(1500,800);
  bg = createSprite(700, 300, 50, 50);
  bg.addImage (nameplate)
  bg.scale = 0.8

  pacman = createSprite(695,490,40,40)
  pacman.addAnimation("pacmanwhole",pacmanwhole)
  pacman.addAnimation("pacmanLeftImg",pacmanLeftImg)
  pacman.addAnimation("pacmanRightImg",pacmanRightImg)
  pacman.addAnimation("pacmanUpImg",pacmanUpImg)
  pacman.addAnimation("pacmanDownImg",pacmanDownImg)
  pacman.scale = 0.13

  wallGroup = new Group()

  boundryGroup = new Group()

  foodGroup1 = new Group()
  foodGroup2 = new Group()
  foodGroup3 = new Group()
  foodGroup4 = new Group()
  foodGroup5 = new Group()


  boundry()
  food()
  walls()

}

function draw() {
  background(180);  

  

  console.log (displayHeight)

  if (keyDown(RIGHT_ARROW)){
  pacman.x = pacman.x + 4
  pacman.changeAnimation("pacmanRightImg",pacmanRightImg)
  }
  if (keyDown(LEFT_ARROW)){
  pacman.x = pacman.x - 4
  pacman.changeAnimation("pacmanLeftImg",pacmanLeftImg)
  }
  if (keyDown(UP_ARROW)){
  pacman.y = pacman.y - 4
  pacman.changeAnimation("pacmanUpImg",pacmanUpImg)
  }
  if (keyDown(DOWN_ARROW)){
  pacman.y = pacman.y + 4
  pacman.changeAnimation("pacmanDownImg",pacmanDownImg)
  }
  

 // wallGroup.setVisibleEach(false)
 
pacman.collide(wallGroup)
pacman.collide(boundryGroup)



for(var i=0; i< foodGroup1.length;i++){
  if(foodGroup1.get(i).isTouching(pacman)){
    foodGroup1.get(i).destroy()
  }
}




  
  drawSprites();

  fill("Red")
 text(mouseX + ', ' + mouseY,mouseX,mouseY)
  

}
/*if (fruitGroup.get(i).isTouching(players)) {
  fruitGroup.get(i).destroy();
   player.score = player.score + 1*/



