const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var g1;
var h1;
var s1;
var i1;
var r1;
var sa1, sa2, sa3, sa4, sa5, sa6, sa7, sa8;

function setup() {
	var canvas = createCanvas(1350, 400);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  g1 = new Ground(600, 400, 1500, 20);
	s1 = new Stone(650, 350, 50, 50);
	h1 = new Hammer(400, 200);
  i1 = new Iron(450,350);
  r1 = new Rubber(650, 100, 30);
  sa1 = new Sand(300, 100, 5);
  sa2 = new Sand(400, 100, 5);
  sa3 = new Sand(500, 100, 5);
  sa4 = new Sand(600, 100, 5);
  sa5 = new Sand(700, 100, 5);
  sa6 = new Sand(800, 100, 5);
  sa7 = new Sand(900, 100, 5);
  sa8 = new Sand(1000, 100, 5);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(254, 6, 130);
  Engine.update(engine);
  g1.display();
  h1.display();
  s1.display();
  //i1.display();
 // r1.display();
  //sa1.display();
  //sa2.display();
  //sa3.display();
  //sa4.display();
  //sa5.display();
  //sa6.display();
  //sa7.display();
  //sa8.display();
  
  drawSprites();
}