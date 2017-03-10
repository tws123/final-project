/* 
  Glitch Art Image Filterer
  By Kelly & Tess
  Last updated 3/4/17
  
  To Do:
  -Get page switching if statements set up
  -Set up true/false for cmyk() to make function run properly
  -Add red filter to cmyk()

*/


var marginTop = 110;
var marginSide = 250;
//var filter = false;
var grid; // size of square that grid is divided by
var slider;
var imgS = 75; // small image size
var imgB = 500; // large image size
var portraitsLg = [];
var portraitsSm = [];




function preload() {


  img1 = loadImage('../images/friedaWeb.jpg'); // larger photo 
  img2 = loadImage('../images/mandelaWeb.jpg'); // larger photo 
  img3 = loadImage('../images/monroeWeb.jpg'); // larger photo 
  img4 = loadImage('../images/obamaWeb.jpg'); // larger photo 
  img5 = loadImage('../images/BowieWeb.jpg'); // larger photo 
  img6 = loadImage('../images/einsteinWeb.jpg'); // larger photo 

  img7 = loadImage('../images/friedaWebThumb.jpg'); // thumbnail for side gallery
  img8 = loadImage('../images/mandelaWebThumb.jpg'); // thumbnail for side gallery
  img9 = loadImage('../images/monroeWebThumb.jpg'); // thumbnail for side gallery
  img10 = loadImage('../images/obamaWebThumb.jpg'); // thumbnail for side gallery
  img11 = loadImage('../images/BowieWebThumb.jpg'); // thumbnail for side gallery
  img12 = loadImage('../images/einsteinWebThumb.jpg'); // thumbnail for side gallery 

  img13 = loadImage('../images/chuckProcess.jpg'); // bio photo
  img14 = loadImage('../images/chuckPhotoCropped.jpg'); // comparison1 photo for page after bio
  img15 = loadImage('../images/chuckPaintingCropped.jpg'); // comparison2 photo for page after bio

  img16 = loadImage('../images/chuckItRed.png'); // logo for landing page (may choose to use logo w/ description instead)

  portraitsLg = new Array(img1, img2, img3, img4, img5, img6);
  portraitsSm = new Array(img7, img8, img9, img10, img11, img12);
}

function setup() {

  createCanvas(1000, 720);
  imageMode(CENTER);
  background(245, 245, 245);
  image(portraitsSm[0], width / 5 + 2, marginTop + imgS / 2, imgS, imgS);
  image(portraitsSm[1], width / 5 + 2, marginTop + imgS / 2 + imgS + 10, imgS, imgS); //123
  image(portraitsSm[2], width / 5 + 2, marginTop + imgS / 2 + (2 * imgS) + 20, imgS, imgS); //208
  image(portraitsSm[3], width / 5 + 2, marginTop + imgS / 2 + (3 * imgS) + 30, imgS, imgS); //293
  image(portraitsSm[4], width / 5 + 2, marginTop + imgS / 2 + (4 * imgS) + 40, imgS, imgS); //378
  image(portraitsSm[5], width / 5 + 2, marginTop + imgS / 2 + (5 * imgS) + 50, imgS, imgS); //463
  // image(img12, imgS, imgS);

  image(img1, width / 2, height / 2, imgB, imgB); // main image
  slider = createSlider(0, 50, 25, 25); // (min, max, [default value], [step]) 
  slider.position(width - marginSide + 50, marginTop + 80);
  textAlign(CENTER, CENTER);
  // fill(0);
  text("abstraction", width - marginSide + 120, marginTop + 120);

}

function draw() {
  fill(0);
  // text("abstraction", width - marginSide + 120, marginTop + 120);
  grid = max(10, slider.value()); // allows slider to start at 0 and increment by multiples of 25 w/out sq being too small.
  filterBoxes(width - marginSide + 50, marginTop); // draw button 
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// function mousePressed() { // setting up the page switch on mouse press
//   page = (page + 1) % 6;
// }

// chuck-its the image
function mousePressed() {

  if (mouseX > width - marginSide + 50 && mouseX < width - marginSide + 50 + 130 && mouseY > marginTop && mouseY < marginTop + 40) { // checks if mouse is within buttom dimensions
    //page = (page + 1) % 6; // switches pages
    //background(255);
    chuckIt();
  }
}

function sidePanel() {
  
}

function chuckIt() {
  ellipseMode(CENTER);
  rectMode(CENTER);


  for (i = 0; i < 500 / grid; i++) {
    for (j = 0; j < 500 / grid; j++) {
      var color1 = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      var color2 = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      var color3 = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      var color4 = img1.get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));

      noStroke();
      fill(color1);
      rect(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid, grid);
      fill(color2);
      ellipse(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid - 5, grid - 5);
      fill(color3);
      ellipse(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid - 10, grid - 10);
      fill(color4);
      ellipse(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid - 15, grid - 15);
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