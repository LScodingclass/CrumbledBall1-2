
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dust1, dust2, dust3, ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 450, 20, 20)
	ground = new Ground(width/2, 670, width, 20)
	dust1 = new Dustbin(1125, 620, 20, 100)
	dust2 = new Dustbin(1325, 620, 20, 100)
	dust3 = new Dustbin(1225, 645, 200, 20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 50, y: -50});
	}
}


