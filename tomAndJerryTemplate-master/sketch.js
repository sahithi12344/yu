var mouse,mouseimg,mouseimg2,ball,b1,img4m,img3m,b3
var cat,catimg,catimg2,img2,img3
var garden,gardenimg

function preload() {
    //load the images here
catimg=loadImage("cat1.png")
gardenimg=loadImage("garden.png")
mouseimg=loadImage("mouse1.png")
  img4m=loadImage("mouse4.png")
  mouseimg2 = loadImage("mouse2.png")
  img3m = loadImage("mouse3.png")
  catimg2= loadImage("cat2.png")
  img3=loadImage("cat3.png")
  img2=loadImage("cat4.png")
}

function setup(){
createCanvas(1000,800);
    //create tom and jerry sprites here
  ball = createSprite(200,350,1000,10)
ball.visible=false
b3 = createSprite(200,200,1000,10)
  b3.visible=false
mouse = createSprite(200,200,50,50)

  mouse.addImage(mouseimg)
mouse.scale=0.1
cat = createSprite(200,780,770,710)
cat.addImage(catimg)
cat.scale=0.2
cat.velocityX=-3
b1 = createSprite(200,550,1800,10)
b1.visible=false
}

function draw() {

    background(gardenimg);
   edges= createEdgeSprites();
  cat.bounceOff(edges);
  ball.bounceOff(edges);
  mouse.bounceOff(edges);
  //Write condition here to evalute if tom and jerry c}
  if(keyDown("up_arrow")){
    mouse.y=mouse.y-3
  }
   if(keyDown("down_arrow")){
    mouse.y=mouse.y+3
  }
  if(keyDown("right_arrow")){
    mouse.x=mouse.x+3
  }
   if(keyDown("left_arrow")){
    mouse.x=mouse.x-3
  }
  
  if(mouse.isTouching(cat)){
    mouse.addImage(img3m)
    cat.addImage(img3)
    cat.velocityX=0
  }
  
  if(mouse.isTouching(b1)){ 
   mouse.addImage(img4m)
    cat.addImage(catimg2)
    cat.velocityX=3
}
  
  if(mouse.isTouching(ball)){
    mouse.addImage(mouseimg2)
cat.addImage(img2)
  }
  if(mouse.isTouching(b3)){
     mouse.addImage(mouseimg)
    cat.addImage(catimg)
  }
    drawSprites();
}