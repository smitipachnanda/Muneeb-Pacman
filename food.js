function food(){

    
 for(i=85;i<1315;i = i + 15) {
    foodTop = createSprite(i,110,5,5)
    foodTop.shapeColor = "Red"
    
  }


  for(i=85;i<355;i = i + 15) {
    foodTop1 = createSprite(i,495,5,5)
    foodTop1.shapeColor = "Red"
  }
  for(i=395;i<655;i = i + 15) {
    foodTop2 = createSprite(i,495,5,5)
    foodTop2.shapeColor = "Red"
  }
  for(i=745;i<1005;i = i + 15) {
    foodTop3 = createSprite(i,495,5,5)
    foodTop3.shapeColor = "Red"
  }
  for(i=1050;i<1310;i = i + 15) {
    foodTop4 = createSprite(i,495,5,5)
    foodTop4.shapeColor = "Red"
  }
  for(i=110;i<220;i = i + 15) {
    foodTop5 = createSprite(85,i,5,5)
    foodTop5.shapeColor = "Red"
  }
  for(i=110;i<220;i = i + 15) {
    foodTop6 = createSprite(1315,i,5,5)
    foodTop6.shapeColor = "Red"
  }
  for(i=375;i<510;i = i + 15) {
    foodTop7 = createSprite(1320,i,5,5)
    foodTop7.shapeColor = "Red"
  }
  for(i=375;i<510;i = i + 15) {
    foodTop8 = createSprite(85,i,5,5)
    foodTop8.shapeColor = "Red"
  }
  for(i=470;i<490;i = i + 15) {
    foodTop9 = createSprite(340,i,5,5)
    foodTop9.shapeColor = "Red"
  }
  for(i=470;i<490;i = i + 15) {
    foodTop10 = createSprite(395,i,5,5)
    foodTop10.shapeColor = "Red"
  }
  for(i=470;i<490;i = i + 15) {
    foodTop11 = createSprite(1000,i,5,5)
    foodTop11.shapeColor = "Red"
  }
  for(i=470;i<490;i = i + 15) {
    foodTop12 = createSprite(1050,i,5,5)
    foodTop12.shapeColor = "Red"
  }
  for(i=1020;i<1050;i = i + 15) {
    foodTop13 = createSprite(i,470,5,5)
    foodTop13.shapeColor = "Red"
  }
  for(i=360;i<390;i = i + 15) {
    foodTop14 = createSprite(i,470,5,5)
    foodTop14.shapeColor = "Red"
  }
  for(i=100;i<150;i = i + 15) {
    foodTop = createSprite(i,375,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=100;i<150;i = i + 15) {
    foodTop = createSprite(i,450,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=100;i<150;i = i + 15) {
    foodTop = createSprite(i,155,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=1240;i<1315;i = i + 15) {
    foodTop = createSprite(i,215,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=1240;i<1315;i = i + 15) {
    foodTop = createSprite(i,375,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=100;i<150;i = i + 15) {
    foodTop = createSprite(i,450,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=100;i<150;i = i + 15) {
    foodTop = createSprite(i,155,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=100;i<150;i = i + 15) {
    foodTop = createSprite(i,215,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=1240;i<1315;i = i + 15) {
    foodTop = createSprite(i,155,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=1240;i<1315;i = i + 15) {
    foodTop = createSprite(i,450,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=170;i<205;i = i + 15) {
    foodTop = createSprite(145,i,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=390;i<445;i = i + 15) {
    foodTop = createSprite(145,i,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=170;i<205;i = i + 15) {
    foodTop = createSprite(1240,i,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=390;i<445;i = i + 15) {
    foodTop = createSprite(1240,i,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=130;i<490;i = i + 15) {
    foodTop = createSprite(545,i,5,5)
    foodTop.shapeColor = "Red"
  }
  for(i=130;i<490;i = i + 15) {
    foodTop = createSprite(905,i,5,5)
    foodTop.shapeColor = "Red"
  }

  foodGroup1.add(foodTop1)
  foodGroup2.add(foodTop2)
  foodGroup3.add(foodTop3)
  foodGroup4.add(foodTop4)
  foodGroup5.add(foodTop5)
  /*foodGroup.add(foodTop6)
  foodGroup.add(foodTop7)
  foodGroup.add(foodTop8)
  foodGroup.add(foodTop9)
  foodGroup.add(foodTop10)*/

  pacman.depth = foodGroup1+1

}