const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  keyPressed();

  box1 = new Box(500,360,20,30);
  box2 = new Box(520,360,20,30);
  box3 = new Box(540,360,20,30);
  box4 = new Box(560,360,20,30);
  box5 = new Box(580,360,20,30);
  box6 = new Box(600,360,20,30);

  box7 = new Box(510,330,20,30);
  box8 = new Box(530,330,20,30);
  box9 = new Box(550,330,20,30);
  box10 = new Box(570,330,20,30);
  box11 = new Box(590,330,20,30);

  box12 = new Box(520,310,20,30);
  box13 = new Box(540,310,20,30);
  box14 = new Box(560,310,20,30);
  box15 = new Box(580,310,20,30);

  box16 = new Box(530,280,20,30);
  box17 = new Box(550,280,20,30);
  box18 = new Box(570,280,20,30);

  box22 = new Box(500,135,20,30);
  box23 = new Box(520,135,20,30);
  box24 = new Box(540,135,20,30);
  box25 = new Box(560,135,20,30);
  box26 = new Box(580,135,20,30);
  box27 = new Box(600,135,20,30);

  box28 = new Box(510,105,20,30);
  box29 = new Box(530,105,20,30);
  box30 = new Box(550,105,20,30);
  box31 = new Box(570,105,20,30);
  box32 = new Box(590,105,20,30);

  box33 = new Box(520,75,20,30);
  box34 = new Box(540,75,20,30);
  box35 = new Box(560,75,20,30);
  box36 = new Box(580,75,20,30);
  
  box37 = new Box(530,45,20,30);
  box38 = new Box(550,45,20,30);
  box39 = new Box(570,45,20,30);

  ball = new Polygon(200,200,50);

  sling = new Slingshot(ball.body,{x:200,y:200});

  ground = new Ground(400,390,800,20);

  platform = new Ground(550,160,200,20);
 
 Engine.run(engine);
}

function draw() {
  background(200); 

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score/200, width-600, 50)

  fill ("black");
  //text ("Something went, terrbily wrong and I can't figure out what",400,200);
  
  Engine.update(engine);
  stroke("red");
  box1.display();
  fill("black");
  box2.display();
  fill("black");
  box3.display();
  fill("black");
  box4.display();
  fill("black");
  box5.display();
  fill("black");
  box6.display();
  fill("black");

  box7.display();
  fill("black");
  box8.display();
  fill("black");
  box9.display();
  fill("black");
  box10.display();
  fill("black");
  box11.display();
  fill("black");

  box12.display();
  fill("black");
  box13.display();
  fill("black");
  box14.display();
  fill("black");
  box15.display();
  fill("black");

  box16.display();
  fill("black");
  box17.display();
  fill("black");
  box18.display();
  fill("black");

  box22.display();
  fill("black");
  box23.display();
  fill("black");
  box24.display();
  fill("black");
  box25.display();
  fill("black");
  box26.display();
  fill("black");
  box27.display();
  fill("black");

  box28.display();
  fill("black");
  box29.display();
  fill("black");
  box30.display();
  fill("black");
  box31.display();
  fill("black");
  box32.display();
  fill("black");

  box33.display();
  fill("black");
  box34.display();
  fill("black");
  box35.display();
  fill("black");
  box36.display();
  fill("black");

  box37.display();
  fill("black");
  box38.display();
  fill("black");
  box39.display();
  fill("black");

  ball.display(); 
  fill("yellow");
 
  sling.display();
  fill(6,255,1);

  ground.display();
  fill(6,255,1);

  platform.display();
  fill(6,255,1);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
  box33.score();
  box34.score();
  box35.score();
  box36.score();
  box37.score();
  box38.score();
  box39.score();
  

  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
  }
}