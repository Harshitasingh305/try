
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball1,ground,bas1,bas2,bas3,bin,binI;
function preload(){
binI=loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;
    bin=createSprite(650,600,5,5)
    bin.addImage(binI)
    bin.scale=0.4
	//Create the Bodies Here.
   ball1=new Ball(200,450,40)
   ground=new Ground(400,660,800,10)
   bas1=new Basket(580,600,30,115)
   bas2=new Basket(650,641,115,30)
   bas3=new Basket(720,600,30,115)

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
  ground.display()
  bas1.display()
  bas2.display()
  bas3.display()
 
 
}



function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-55});


}



}