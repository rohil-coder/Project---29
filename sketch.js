var a;
var circles=[];
var block1, block2, block3, block4, block5, block6, block7, block8;
var slingShot; 

function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
    block1 = new Rect(330, 235, 30, 40);
    block2 = new Rect(360, 235, 30, 40);
    block3 = new Rect(390, 235, 30, 40);
    block4 = new Rect(420, 235, 30, 40);
    block5 = new Rect(450, 235, 30, 40);
    block6 = new Rect(480, 235, 30, 40);
    block7 = new Rect(510, 235, 30, 40);
    block8 = new Rect(540, 235, 30, 40);
    slingShot = new SlingShot(this.polygon, {x:100, y:200});
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 slingShot.display();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 