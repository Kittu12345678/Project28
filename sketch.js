
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, ground, dustbin, slingshot;

function preload(){

	

}
	


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	
	
	ball = new  Paper(120, 200, 10);
	ground = new Ground(600, );

	dustbin = new Dustbin(1000, 500, 125, 125);

	slingshot = new Chain(ball.body,{x:200, y:350});


	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  
  ball.display();
 
  dustbin.display();

  ground.display();

  slingshot.display();
  
  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



