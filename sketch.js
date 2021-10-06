const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var gameState = "x";

var turn = "X";

var box1V = null;
var box2V = null; 
var box3V = null;
var box4V = null;
var box5V = null; 
var box6V = null;
var box7V = null; 
var box8V = null;
var box9V = null;

var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var oneX, twoX, threeX, fourX, fiveX, sixX, sevenX, eightX, nineX;
var oneO, twoO, threeO, fourO, fiveO, sixO, sevenO, eightO, nineO;

function preload(){
  oneX = loadAnimation("x.png");
  oneO = loadAnimation("o.png");

  twoX = loadAnimation("x.png");
  twoO = loadAnimation("o.png");

  threeX = loadAnimation("x.png");
  threeO = loadAnimation("o.png");

  fourX = loadAnimation("x.png");
  fourO = loadAnimation("o.png");

  fiveX = loadAnimation("x.png");
  fiveO = loadAnimation("o.png");

  sixX = loadAnimation("x.png");
  sixO = loadAnimation("o.png");

  sevenX = loadAnimation("x.png");
  sevenO = loadAnimation("o.png");

  eightX = loadAnimation("x.png");
  eightO = loadAnimation("o.png");

  nineX = loadAnimation("x.png");
  nineO = loadAnimation("o.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  wall1 = new wall(190,40,300,5);
  wall2 = new wall(190,340,300,5);
  wall3 = new wall(40,190,5,300);
  wall4 = new wall(340,190,5,300);

  wall5 = new wall(190,140,300,5);
  wall6 = new wall(190,240,300,5);
  wall7 = new wall(140,190,5,300);
  wall8 = new wall(240,190,5,300);

  wall9 = new wall(40,40,5,5);
  wall10 = new wall(40,340,5,5);
  wall11 = new wall(340,340,5,5);
  wall12 = new wall(340,40,5,5);

  box1 = createSprite(90,90,200,200);
  box1.addAnimation("x", oneX);
  box1.addAnimation("o", oneO);
  box1.scale = 0.1;
  box1.visible = false;

  box2 = createSprite(90,190,200,200);
  box2.addAnimation("x", twoX);
  box2.addAnimation("o", twoO);
  box2.scale = 0.1;
  box2.visible = false;

  box3 = createSprite(90,290,200,200);
  box3.addAnimation("x", threeX);
  box3.addAnimation("o", threeO);
  box3.scale = 0.1;
  box3.visible = false;

  box4 = createSprite(190,90,200,200);
  box4.addAnimation("x", fourX);
  box4.addAnimation("o", fourO);
  box4.scale = 0.1;
  box4.visible = false;

  box5 = createSprite(190,190,200,200);
  box5.addAnimation("x", fiveX);
  box5.addAnimation("o", fiveO);
  box5.scale = 0.1;
  box5.visible = false;

  box6 = createSprite(190,290,200,200);
  box6.addAnimation("x", sixX);
  box6.addAnimation("o", sixO);
  box6.scale = 0.1;
  box6.visible = false;

  box7 = createSprite(290,90,200,200);
  box7.addAnimation("x", sevenX);
  box7.addAnimation("o", sevenO);
  box7.scale = 0.1;
  box7.visible = false;

  box8 = createSprite(290,190,200,200);
  box8.addAnimation("x", eightX);
  box8.addAnimation("o", eightO);
  box8.scale = 0.1;
  box8.visible = false;

  box9 = createSprite(290,290,200,200);
  box9.addAnimation("x", nineX);
  box9.addAnimation("o", nineO);
  box9.scale = 0.1;
  box9.visible = false;
}

function draw(){
  background("white");
  Engine.update(engine);

if(gameState === "x"){

  if(touches.length > 0 && box3V === null || mousePressedOver(box3) && box3V === null){
    box3.visible = true;
    gameState = "o";
    turn = "O";
    box3V = "x";
    touches = [];
  }

  if(touches.length > 0 && box1V === null || mousePressedOver(box1) && box1V === null){
    box1.visible = true;
    gameState = "o";
    turn = "O";
    box1V = "x";
    touches = [];
  }

  if(touches.length > 0 && box2V === null || mousePressedOver(box2) && box2V === null){
    box2.visible = true;
    gameState = "o";
    turn = "O";
    box2V = "x";
    touches = [];
  }

  if(touches.length > 0 && box4V === null || mousePressedOver(box4) && box4V === null){
    box4.visible = true;
    gameState = "o";
    turn = "O";
    box4V = "x";
    touches = [];
  }

  if(touches.length > 0 && box5V === null || mousePressedOver(box5) && box5V === null){
    box5.visible = true;
    gameState = "o";
    turn = "O";
    box5V = "x";
    touches = [];
  }

  if(touches.length > 0 && box6V === null || mousePressedOver(box6) && box6V === null){
    box6.visible = true;
    gameState = "o";
    turn = "O";
    box6V = "x";
    touches = [];
  }

  if(touches.length > 0 && box7V === null || mousePressedOver(box7) && box7V === null){
    box7.visible = true;
    gameState = "o";
    turn = "O";
    box7V = "x";
    touches = [];
  }

  if(touches.length > 0 && box8V === null || mousePressedOver(box8) && box8V === null){
    box8.visible = true;
    gameState = "o";
    turn = "O";
    box8V = "x";
    touches = [];
  }

  if(touches.length > 0 && box9V === null || mousePressedOver(box9) && box9V === null){
    box9.visible = true;
    gameState = "o";
    turn = "O";
    box9V = "x";
    touches = [];
  }
} 

if(gameState === "o"){
  if(touches.length > 0 && box1V === null || mousePressedOver(box1) && box1V === null){
    box1.visible = true;
    box1.changeAnimation("o", oneO);
    box1.scale = 0.33;
    gameState = "x";
    turn = "X";
    box1V = "o";
    touches = [];
  }

  if(touches.length > 0 && box2V === null || mousePressedOver(box2) && box2V === null){
    box2.visible = true;
    box2.changeAnimation("o", twoO);
    box2.scale = 0.33;
    gameState = "x";
    turn = "X";
    box2V = "o";
    touches = [];
  }

  if(touches.length > 0 && box3V === null || mousePressedOver(box3) && box3V === null){
    box3.visible = true;
    box3.changeAnimation("o", threeO);
    box3.scale = 0.33;
    gameState = "x";
    turn = "X";
    box3V = "o";
    touches = [];
  }

  if(touches.length > 0 && box4V === null || mousePressedOver(box4) && box4V === null){
    box4.visible = true;
    box4.changeAnimation("o", fourO);
    box4.scale = 0.33;
    gameState = "x";
    turn = "X";
    box4V = "o";
    touches = [];
  }

  if(touches.length > 0 && box5V === null || mousePressedOver(box5) && box5V === null){
    box5.visible = true;
    box5.changeAnimation("o", fiveO);
    box5.scale = 0.33;
    gameState = "x";
    turn = "X";
    box5V = "o";
    touches = [];
  }

  if(touches.length > 0 && box6V === null || mousePressedOver(box6) && box6V === null){
    box6.visible = true;
    box6.changeAnimation("o", sixO);
    box6.scale = 0.33;
    gameState = "x";
    turn = "X";
    box6V = "o";
    touches = [];
  }

  if(touches.length > 0 && box7V === null || mousePressedOver(box7) && box7V === null){
    box7.visible = true;
    box7.changeAnimation("o", sevenO);
    box7.scale = 0.33;
    gameState = "x";  
    turn = "X";
    box7V = "o";
    touches = [];
  }

  if(touches.length > 0 && box8V === null || mousePressedOver(box8) && box8V === null){
    box8.visible = true;
    box8.changeAnimation("o", eightO);
    box8.scale = 0.33;
    gameState = "x";
    turn = "X";
    box8V = "o";
    touches = [];
  }

  if(touches.length > 0 && box9V === null || mousePressedOver(box9) && box9V === null){
    box9.visible = true;
    box9.changeAnimation("o", nineO);
    box9.scale = 0.33;
    gameState = "x";
    turn = "X";
    box9V = "o";
    touches = [];
  }
}

if(gameState === "x" || gameState === "o"){
  fill("black");
  textSize(45);
  text("It is " + turn + "'s turn",75,400)
}

if(box1V === "x" && box2V === "x" && box3V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}

if(box4V === "x" && box5V === "x" && box6V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}

if(box7V === "x" && box8V === "x" && box9V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}

if(box1V === "x" && box4V === "x" && box7V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}

if(box2V === "x" && box5V === "x" && box8V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}

if(box3V === "x" && box6V === "x" && box9V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}

if(box1V === "x" && box5V === "x" && box9V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}

if(box3V === "x" && box5V === "x" && box7V === "x"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("X Wins!",75,400);
}


if(box1V === "o" && box2V === "o" && box3V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box4V === "o" && box5V === "o" && box6V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box7V === "o" && box8V === "o" && box9V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box1V === "o" && box4V === "o" && box7V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box2V === "o" && box5V === "o" && box8V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box3V === "o" && box6V === "o" && box9V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box1V === "o" && box5V === "o" && box9V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box3V === "o" && box5V === "o" && box7V === "o"){
  gameState = "end";
  fill(rgb(Math.round(random(50,200)),Math.round(random(50,200)),Math.round(random(50,200))));
  textSize(45);
  text("O Wins!",75,400);
}

if(box1V !== null && box2V !== null && box3V !== null && box4V !== null && box5V !== null && box6V !== null && box7V !== null && box8V !== null && box9V !== null && gameState !== "end"){
  gameState = "tie";
  fill("black")
  textSize(45);
  text("Tie!",75,400);
}

  drawSprites();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();  
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
}