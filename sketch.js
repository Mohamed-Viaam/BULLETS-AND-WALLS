//Declaring variabls
var bullet;
var wall;

var speed, weight, thickness;

var damage;

var b1, b2, b3, b4, b5, b6, b7, b8;
var rate;


function setup() {
  createCanvas(1600,1000);

  //giving random values for speed, weight & thickness
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  //creating the sprite of wall
  wall = createSprite(1400, 300, thickness, 400);
  wall.shapeColor = color(80,80,80);

  //creating bullet and giving velocity
  bullet = createSprite(50, 300, 50, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  //drawing table
  b1 = createSprite(800,600,1000,10);
  b1.shapeColor = "white";
  b2 = createSprite(800,750,1000,10);
  b2.shapeColor = "white";
  b3 = createSprite(800,900,1000,10);
  b3.shapeColor = "white";

  b4 = createSprite(300,750,10,310);
  b4.shapeColor = "white";
  b5 = createSprite(550,750,10,310);
  b5.shapeColor = "white";
  b6 = createSprite(800,750,10,310);
  b6.shapeColor = "white";
  b7= createSprite(1050,750,10,310);
  b7.shapeColor = "white";
  b8 = createSprite(1300,750,10,310);
  b8.shapeColor = "white";

  //creating a sprite to show rating
  rate = createSprite(1175,825,240,140)

  //formula to calculate damage
  damage = Math.round(0.5 * weight * speed * speed / (thickness * thickness * thickness));
}

function draw() {
  //giving background color
  background("#17202A");  

  //detecting the collision and changing color accordingly
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
      rate.shapeColor = color(255,0,0);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
      rate.shapeColor = color(255,0,0);
    }
  }
  
  //labelling the table
  fill("white");
  stroke("white");
  textSize(50);
  text(weight, 400, 850);
  text(speed, 635,850);
  text(thickness, 900,850);

  text("Weight", 350,690)
  text("Speed", 600,690);
  text("Thickness", 810,690);
  text("Damage", 1080,690);

  //displaying all the sprites
  drawSprites();

  //labelling the table
  text(damage, 1155,850)
}