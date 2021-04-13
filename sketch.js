
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var boy, boyImg;
var girl, girlImg;

var engine, world;

function preload()
{
  getBgImg()
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
  
}


function setup() {
	createCanvas(1600, 800);
	


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(250, 630);
	boy.addImage(boyImg);  
	boy.scale =0.7;

	girl = createSprite(950, 630);
	girl.addImage(girlImg);  
	girl.scale =0.9;


	snow1 = new Snow(200,2,100,100)
	snow2 = new Snow(490,200,50,50)
	snow3 = new Snow(718,70,140,140)
	snow4 = new Snow(999,450,80,80)
	snow5 = new Snow(1250,670,100,100)
	snow6 = new Snow(1400,70,170,170)
	snow7 = new Snow(1599,18,90,90)


	snow8 = new Snow2(100,500,70,70)
	snow9 = new Snow2(310,70,100,100)
	snow10 = new Snow2(570,200,40,40)
	snow11 = new Snow2(610,3,150,150)
	snow12 = new Snow2(1000,699,85,85)
	snow13 = new Snow2(1200,150,100,100)
	snow14 = new Snow2(1470,7,75,75)
	


 Engine.run(engine)
	
  
}


function draw() {
  
	if (backgroundImg)
    background(backgroundImg);
	
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  
snow8.display();
snow9.display();
snow10.display();
snow11.display();
snow12.display();
snow13.display();
snow14.display();
	
drawSprites()
}

function getBgImg()
{
  backgroundImg = loadImage("snow2.jpg")
}
function keyPressed() {
	
	if (keyCode===RIGHT_ARROW)
{
    boy.x = boy.x+10;

}
else if (keyCode===LEFT_ARROW)
{
	boy.x = boy.x-10;
}
}