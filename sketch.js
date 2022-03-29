
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world 
var ball  
var groundObj,fence1,fence2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    groundObj = new Rectangle(400,690,20,800)
    fence1 = new Rectangle(700,630,100,15)
	fence2 = new Rectangle(570,630,100,15)
	Engine.run(engine);
    var balls_option = {
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2,
	}
	ball = Bodies.circle(10,10,15,balls_option)
	World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.visibility()
  fence1.visibility()
  fence2.visibility()
  drawSprites();
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15,15)
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:45,y:-33})
	}
}


