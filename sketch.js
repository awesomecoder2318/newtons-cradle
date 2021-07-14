
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground=new Roof(400,100,1000,40)
bobObject1=new Bob()
bobObject2=new Bob()
bobObject3=new Bob()
bobObject4=new Bob()
bobObject5=new Bob()

rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0)
rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0)
rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0)
rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0)



	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
ground.display()
  drawSprites();
 
}



