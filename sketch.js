
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var leftwall

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


   
    ground = new Ground(700,600,1400,15);

	paper1 = new Paper(600,200,40);

	leftwall = new Dustbin(1100,500,40,40);

}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
 	ground.display();
  	paper1.display();
	leftwall.display();
	


  drawSprites();
 
 
}



