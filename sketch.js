var level = 0;
var portal
var player
function preload()
{ playerImage = loadImage("blob-removebg-preview.png")
	
}

function setup() {
	createCanvas(900, 900);

platform1 = createSprite(700,500,200,10)
platform2 = createSprite(500,600,100,10)
platform3 = createSprite(300,700,200,10)
platform4 = createSprite(100,800,100,10)

portal = createSprite(860,300,70,70)
portal.shapeColor = "blue"
player.addImage(blob-removebg-preview.png)






  
}


function draw() {
  background(0);
  
  drawSprites();
 
}



