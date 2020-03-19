
var r = 0;
var g = 50;
var b = 255;


// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);

}


function draw(){
  r = map(mouseX,0,600,0,50);
  g = map(mouseX,600,1200,50,255);
  b = map(mouseX,1200,0,225,0);
  
  background(r,g,b);

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  fill(250,118,222);
  ellipse(mouseX,200,20,20);
  
}