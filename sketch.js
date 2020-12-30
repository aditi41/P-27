
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (650,50,600,30);
	bob1 = new Bob (650,400,100);
	rope1 = new Rope (bob1.body, roof.body, 0, 0)
	bob2 = new Bob (550,400,100);
	rope2 = new Rope (bob2.body, roof.body, -100, 0)
	bob3 = new Bob (450,400,100);
	rope3 = new Rope (bob3.body, roof.body, -200, 0)
	bob4 = new Bob (750,400,100);
	rope4 = new Rope (bob4.body, roof.body, 100, 0)
	bob5 = new Bob (850,400,100);
	rope5 = new Rope (bob5.body, roof.body, 200, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  keyPressed();
  drawSprites();
 
}


function keyPressed() {
	if (keyDown("UP_ARROW")) {

	  Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-150,y:150});
  
	}
}

