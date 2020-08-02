var paper1, ground1,paper_img,dustbin3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
  paper_img = loadImage("paper.png")
}

function setup() {
  createCanvas(1400, 700);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(650, 690, width, 30);
  
  dustbin1 = new dustbins(1115, 615, 20, 150);
  dustbin3 = new dustbins(1200, 680, 150, 20);
  dustbin2 = new dustbins(1285, 615, 20, 150);
  
  paper1 = Bodies.circle(215, 200, 40);
  World.add(world,paper1);
  
  slingshot = new Launcher(this.paper1,{x:215, y:200});

  
  Engine.run(engine);

}
function draw() {
 
  background(205);
 
  slingshot.display();
  ground1.display();
  dustbin3.display();
  drawSprites();
  
   imageMode(CENTER)
   image(paper_img,paper1.position.x,paper1.position.y,40,40)
  

}

function keyPressed() {
  if (keyCode===32) {
        slingshot.attach(this.paper1)
   // Matter.Body.applyForce(paper1, paper1.body.position, {x: 120,y: -120});
  }

}
function mouseDragged(){
  Matter.Body.setPosition(paper1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
