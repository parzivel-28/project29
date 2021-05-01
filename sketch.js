const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var earth,platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var stone,slingshot;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world=engine.world;
    Engine.run(engine);
    earth = new Ground(600,390,1200,20);
    platform1=new Ground(375,250,210,30);
    platform2=new Ground(750,200,210,30);
    box1=new Box(320,210,60,60);
    box2=new Box(371,210,60,60);
    box3=new Box(422,210,60,60);
    box4=new Box(348,180,60,60);
    box5=new Box(400,180,60,60);
    box6=new Box(370,70,60,60);
    box7=new Box(695,150,60,60);
    box8=new Box(755,150,60,60);
    box9=new Box(815,150,60,60);
    box10=new Box(730,90,60,60);
    box11=new Box(790,90,60,60);
    box12=new Box(755,50,60,60);
    stone= new Stone(100,100,80,80);
    slingshot=new SlingShot(stone.body,{x:100,y:100});
}


function draw(){
    background("black");
    textSize(32)
   text("use the stone to distroy the pyramid",400,300)
    earth.display();
    platform1.display();
    platform2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    stone.display();
    slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

