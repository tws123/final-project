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
var marginTop = 110;
var marginSide = 250;
//var filter = false;
var grid = 25; // size of square that grid is divided by

function preload() {
 // img1 = loadImage('mntn.png');
 img1 = loadImage('monroe.jpg'); // testing portrait like image since Close does mostly portraits
}

function setup() {
  createCanvas(1000, 720);
  imageMode(CENTER);
  background(245, 245, 245);
  image(img1, width / 2, height / 2, 500, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  filterBoxes(width - marginSide + 50, marginTop); // draw button 
  //cmyk();
  chuckIt();
}

function mousePressed() { // setting up the page switch on mouse press
  page = (page + 1) % 6;
}

function chuckIt() {
  ellipseMode(CENTER);
  rectMode(CENTER);
  for (i = 250; i < 750; i = i + grid) { // img is located between 250–750 on the x axis of canvas
    for (j = 110; j < 610; j = j + grid) { // img is located between 110–610 on the y axis of canvas
      var a = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
      var b = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
      var c = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
      var d = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));


      noStroke();
      fill(a);
      rect(i + 12.5, j + 12.5, grid, grid, 5);
      fill(b);
      ellipse(i + 12.5, j + 12.5, grid - 5, grid - 5);
      fill(c);
      ellipse(i + 12.5, j + 12.5, grid - 10, grid - 10);
      fill(d);
      ellipse(i + 12.5, j + 12.5, grid - 15, grid - 15);

    }
  }
}


function filterBoxes(x, y) {
  rectMode(CORNER);
  var w = 120;
  var h = 40;

  if (mouseIsPressed && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) { // determine if cursor is over button
    fill(150); // fill color for pressed state
  } else if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(200); // fill color for hover state
  } else { // fill color when mouse isn't on button
    fill(255);
  }

  rect(x, y, w, h);
  fill(0);
  text("Chuck It", x + w / 2, y + h / 2);
}

function cmyk() {
  image(img1, width / 2, height / 2, 500, 500);
  tint(0, 0, 255, 10);
  image(img1, width / 2 + 20, height / 2 + 20, 460, 460);
}