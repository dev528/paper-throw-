
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var baseground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paperball= new paper(20,680,25)
 baseground= new ground(400,690,50,800)
dustbin= new Dustbin(680,770,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paperball.display();
 baseground.dispaly();
 dustbin.display();
}

function keypressed(){
	if (keycode===UP_ARROW){
		Matter.body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
	}

}
