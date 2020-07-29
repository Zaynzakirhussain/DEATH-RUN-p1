const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var van;

function preload() {
  vanimg = loadImage("van.png");
  back = loadImage("back.gif");
}

function setup() {
  createCanvas(1365, 656);
  engine = Engine.create();
  world = engine.world;
  van = new Van(585, 600, 95, 65);
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

  image(back, 0, -700, displayWidth * 6, displayHeight * 2);
  image(back, displayWidth, -700, displayWidth * 6, displayHeight * 2);

  van.display();

  camera.position.x = van.body.position.x + 100;
  camera.position.y = displayHeight / 2;

  if (keyDown(RIGHT_ARROW) && van.body.position.x < 8800) {
    van.body.position.x += 8;
  }

  if (keyDown("space")) {
    bul = createSprite(van.body.position.x + 8, van.body.position.y - 19, 6, 3);
    bul.shapeColor = "yellow";
    bul.velocityX = 40;
  }

  console.log(van.body.position.x);

  drawSprites();
}