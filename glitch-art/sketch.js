/* 
  Glitch Art Image Filterer
  By Kelly & Tess
  Last updated 3/4/17
  
  To Do:
  -Get page switching if statements set up
  -Set up true/false for cmyk() to make function run properly
  -Add red filter to cmyk()

*/ 

var img1;
var margin = 150;

function preload() {
  img1 = loadImage('mntn.png');
}

function setup() {
  createCanvas(1000, 720);
  imageMode(CENTER);
  background(245, 245, 245);
  image(img1, width/2, height/2, 500, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  filterBoxes(width - margin, margin); // draw button 
  cmyk();
}

function mousePressed() { // setting up the page switch on mouse press
  page = (page + 1) % 6;
}

function filterBoxes(x, y) {
  var w = 120;
  var h = 40;
  
  if (mouseIsPressed && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) { // determine if cursor is over button
    fill(150); // fill color for pressed state
  } else if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h){
      fill(200); // fill color for hover state
  } else { // fill color when mouse isn't on button
      fill(255);
  }
  
  rect(x, y, w, h);
  fill(0);
  text("CMYK", x + w/2, y + h/2);
}

function cmyk() {
  image(img1, width/2, height/2, 500, 500);
  tint(0, 0, 255, 10);
  image(img1, width/2 + 20, height/2 + 20, 460, 460);
}