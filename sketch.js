
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var plane;
var block1,block2,block3;

function setup() {
	createCanvas(500, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var planeoptions={
    isStatic: true
	};
	plane = Bodies.rectangle(600,580,1200,2,planeoptions);
	World.add(world,plane);

	var block1options={
	restituion:0.5,
	friction:0.02,
	frictionAir:0,
	}
	block1 = Bodies.circle(220,10,10,block1options);
	World.add(world,block1);

	

	var block2options={
		restituion:0.7,
		friction:0.01,
		frictionAir:0.1,
		}
    
	block2 = Bodies.rectangle(110,50,10,10,block2options);
	World.add(world,block2);

	var block3options={
	    restituion:0.01,
		friction:1,
		frictionAir:0.3,

	}
	 
	block3 = Bodies.rectangle(350,50,10,10,block3options);
	World.add(world,block3);

	

	Engine.run(engine);
	fill("blue");
    rectMode(CENTER);
    ellipseMode(CENTER);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  rect(plane.position.x,plane.position.y,1200,2);
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,100,50);
  
  drawSprites();
 
}



