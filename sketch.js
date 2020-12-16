
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var rope;

var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
  roof1 = new roof(width/2,200,500,10);
  rope2=createSprite(390,340,2,270);
  rope3=createSprite(480,340,2,270);
  rope4=createSprite(570,340,2,270);
  rope5=createSprite(670,340,2,270);
  rope6=createSprite(750,340,2,270);


bobObject1 = new bob(width/3.1,500,500,10);
bobObject2 = new bob(width/2.1,500,500,10);
bobObject3 = new bob(width/2.5,500,500,10);
bobObject4 = new bob(width/1.8,500,500,10);
bobObject5 = new bob(width/1.6,500,500,10);

//rope1=new rope(bobObject1.body,roof1.body,2,0)



}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  //rope1.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}