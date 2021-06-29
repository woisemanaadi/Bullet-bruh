//Creating variables 
var bullet;
var wall;
var speed;
var weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  

//Giving values to the variables "speed","weight","thickness"
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

//Creating the sprite for "bullet"
  bullet=createSprite(50,200,30,10);

  //Creating the sprite for "wall" 
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);


  //Making the bullet move towards the wall
  bullet.velocityX=speed;

//bullet.depth=wall.depth+1;

}

function draw() {
  background(255,255,255);  

  //Detecting the collision
  if(wall.x-bullet.x< (bullet.width + wall.width)/2){

    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness

    //Assigning colours to different outcomes 

    if(damage>10 ){

      bullet.shapeColor="red";

    }

    if(damage<10){

      bullet.shapeColor="green";

    }

    

    


  }


  drawSprites();
}


 