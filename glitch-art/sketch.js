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
var grid = 17; // size of square that grid is divided by
var slider;


function preload() {
  // img1 = loadImage('mntn.png');
  img1 = loadImage('../images/frieda.jpg'); // testing portrait like image since Close does mostly portraits
}

function setup() {
  createCanvas(1000, 720);
  imageMode(CENTER);
  background(245, 245, 245);
  image(img1, width / 2, height / 2, 500, 500);
  slider = createSlider(10, 100, 25, 5); // (min, max, [value], [step]) 
  slider.position(width - marginSide + 50, marginTop + 80);
  textAlign(CENTER, CENTER);
  fill(0);
  text("abstraction", width - marginSide + 120, marginTop + 120);

}

function draw() {
  filterBoxes(width - marginSide + 50, marginTop); // draw button 
  //chuckIt();
  ellipseMode(CENTER);
  rectMode(CENTER);

  var a;
  var b;
  var c;
  var d;

  for (i = 0; i < 500 / grid; i++) {
    for (j = 0; j < 500 / grid; j++) {
      a = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      b = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      c = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      d = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
  
      noStroke();
      fill(a);
      rect(250 + grid/2 + i * grid, 110 + grid/2 + j * grid, grid, grid);
      fill(b);
      ellipse(250 + grid/2 + i * grid, 110 + grid/2 + j * grid, grid - 5, grid - 5);
      fill(c);
      ellipse(250 + grid/2 + i * grid, 110 + grid/2 + j * grid, grid - 10, grid - 10);
      fill(d);
      ellipse(250 + grid/2 + i * grid, 110 + grid/2 + j * grid, grid - 15, grid - 15);
    }
  }




  // for (i = 250; i < 750; i = i + grid) { // img is located between 250–750 on the x axis of canvas
  //   for (j = 110; j < 610; j = j + grid) { // img is located between 110–610 on the y axis of canvas
  //     // var a = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
  //     // var b = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
  //     // var c = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
  //     // var d = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));




  //   }
  // }
}

function mousePressed() { // setting up the page switch on mouse press
  page = (page + 1) % 6;
}

function chuckIt() {
  ellipseMode(CENTER);
  rectMode(CENTER);
  var a;
  var b;
  var c;
  var d;

  for (i = 0; i < 500 / grid; i++) {
    for (j = 0; j < 500 / grid; i++) {
      a = img1.get(random(grid * i, grid * i + grid), random(grid * j, grid * j + grid));
      b = img1.get(random(grid * i, grid * i + grid), random(grid * j, grid * j + grid));
      c = img1.get(random(grid * i, grid * i + grid), random(grid * j, grid * j + grid));
      d = img1.get(random(grid * i, grid * i + grid), random(grid * j, grid * j + grid));
    }
  }

  for (i = 250; i < 750; i = i + grid) { // img is located between 250–750 on the x axis of canvas
    for (j = 110; j < 610; j = j + grid) { // img is located between 110–610 on the y axis of canvas
      // var a = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
      // var b = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
      // var c = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));
      // var d = img1.get(random(i - 250, i + grid - 250), random(j - 110, j + grid - 110));


      noStroke();
      fill(a);
      rect(i + grid / 2, j + grid / 2, grid, grid, 5);
      fill(b);
      ellipse(i + grid / 2, j + grid / 2, grid - 5, grid - 5);
      fill(c);
      ellipse(i + grid / 2, j + grid / 2, grid - 10, grid - 10);
      fill(d);
      ellipse(i + grid / 2, j + grid / 2, grid - 15, grid - 15);

    }
  }
}


function filterBoxes(x, y) {
  rectMode(CORNER);
  var w = 130;
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