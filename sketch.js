
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	bobObject1 = new ball(200,400,30);
   bobObject2 = new ball(230,400,30);
   bobObject3 = new ball(260,400,30);
   bobObject4 = new ball(290,400,30);
   bobObject5 = new ball(320,400,30);
   roof1=new roof(250,250,170,20);

   rope1=new Rope(bobObject1.body,roof1.body,-30*2,0);
   rope2=new Rope(bobObject2.body,roof1.body,-15*2,0);
   rope3=new Rope(bobObject3.body,roof1.body,-0*2,0);
   rope4=new Rope(bobObject4.body,roof1.body,15*2,0);
   rope5=new Rope(bobObject5.body,roof1.body,30*2,0);
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("cyan")
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
keyPressed();
  drawSprites();

}

function keyPressed()
{
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});
	}
}
