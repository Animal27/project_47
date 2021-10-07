const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var human, bird, tiger, tiger2, ground, backGround;
var human_IMG, bird_IMG, tiger_IMG, ground_IMG, background_IMG;
var engine, world, seed; 
var dropseed;
var tiger_running;
var bird_fly
function preload() {
  ground_IMG = loadImage("ground.png");
  background_IMG = loadImage("background.png");
  tiger_running = loadAnimation("tiger1.png","tiger2.png","tiger3.png","tiger4.png","tiger5.png","tiger6.png");
  bird_fly = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png","bird9.png","bird10.png","bird11.png","bird12.png","bird13.png","bird14.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  bird = createSprite(300,100,50,50)
  bird.addAnimation("flying", bird_fly);
  bird.scale = 0.5
  human = createSprite(250, 250, 50, 50);
  tiger = createSprite(750,270,50,50);
  tiger.addAnimation("running", tiger_running);
  tiger.scale = 0.5
  ground = createSprite(400,380,1200,100);
  ground.addImage("ground",ground_IMG);
  ground.velocityX = -1;
  ground.scale = 5.0
  dropseed = new DropSeed(bird.x,bird.y)
}

function draw() {
  background(background_IMG);
Engine.update(engine);
  if(ground.x<0){
ground.x = ground.width/2;
  }
dropseed.display();
  drawSprites();
}

