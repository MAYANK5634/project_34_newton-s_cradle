
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

    bobObject1 = new BOB(250,300);
	bobObject2 = new BOB(300,300);
	bobObject3 = new BOB(350,300);
	bobObject4 = new BOB(400,300);
	bobObject5 = new BOB(450,300)

	

	rope1 =  new ROPE(bobObject1.body,{x:250,y:100});
	World.add(world,rope1);

	rope2 =  new ROPE(bobObject2.body,{x:300,y:100});
	World.add(world,rope2);

	rope3 =  new ROPE(bobObject3.body,{x:350,y:100});
	World.add(world,rope3);

	rope4 =  new ROPE(bobObject4.body,{x:400,y:100});
	World.add(world,rope4);

	rope5 =  new ROPE(bobObject5.body,{x:450,y:100});
	World.add(world,rope5);
	var a = {
		density:1,
		frictionAir:0.005,
	  
	  }
	
	Engine.run(engine);
	ball = Bodies.circle(500,200,20,a);
	World.add(world,ball)
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-700,y:-45});

	}
}


