var background;
var snow; 
var snowImg;

function preload() 
{
  backgroundImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.jpg");
}

function setup() 
{
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);

  snow = createSprite(650,30);
	snow.addImage(starImg);
	snow.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	snowBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, snowBody);
	
	Engine.run(engine);}
	
function draw() 
{
  background(255,255,255);  

  //snow.velocityY = 3;
  
  drawSprites();

  background(backgroundImg);

}