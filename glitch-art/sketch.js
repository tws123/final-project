/* 
Previously called "Glitch Art Image Filterer" this is now "Chuck-it,"
an image filter that turns ordinary photos into Chuck Close like art.
Chuck close is a contemporary painter who paints in a grid-like fashion,
creating images that look hyperrealistic from a distance but, upon closer 
inspection, are found to be made of discrete color units in loosely drawn
dots, loops, and rectangles. 

By Kelly & Tess
Last updated 3/4/17
  
To Do:
•figure out how to use mousePressed over thumbnails to change array index
for portaitsLg.
•code Chuck-it button to revert to original image on second click 
•figure out how to dim or highlight thumbnails appropriately
•code logo page (with forward arrow)
•code bio page (with forward and back arrows)
•code example of chuck's work page(with forward and back arrows)
•test and integrate changes
•google slide deck and practice presentation
•video




*/

//var filter = false; // may need this later. 
var marginTop = 110;
var marginSide = 250;
var grid; // size of square that grid is divided by
var slider;
var imgS = 75; // small image size
var imgB = 500; // large image size
var portraitsLg = []; // sets array of large portait images
var portraitsSm = []; // sets array of thumbnail, small, portrait images




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
  ind = 0; // holds index variable
  createCanvas(1000, 720);
  imageMode(CENTER);
  background(245, 245, 245); // sets background color
  for (i = 0; i < 6; i++) { // places thumbnails sequentially
    image(portraitsSm[i], width / 5 + 2, marginTop + imgS / 2 + (i * imgS) + (i * 10), imgS, imgS);
  }
  
  image(portraitsLg[ind], width / 2, height / 2, imgB, imgB); // main image that's loaded. 
  slider = createSlider(0, 50, 25, 25); // (min, max, [default value], [step]) 
  slider.position(width - marginSide + 50, marginTop + 80); // places slider on page
  textAlign(CENTER, CENTER); // aligns text from center
  text("abstraction", width - marginSide + 120, marginTop + 120); // places slider text
}

function draw() {
  fill(0);
  // text("abstraction", width - marginSide + 120, marginTop + 120);
  grid = max(10, slider.value()); // allows slider to start at 0 and increment by multiples of 25 w/out sq being too small.
  button(width - marginSide + 50, marginTop); // draw button 
  ellipseMode(CENTER);
  rectMode(CENTER);
}


// chuck-its the image
function mousePressed() {
  if (mouseX > width - marginSide + 50 && mouseX < width - marginSide + 50 + 130 && mouseY > marginTop && mouseY < marginTop + 40) { // checks if mouse is within buttom dimensions
    chuckIt(ind); // parameter is index of portraitLg array

  } else if (mouseX > marginSide && mouseX < marginSide + imgS) {
    fill(0);
    ellipse(10, 10, 1000, 1000);
    // ind = ind + 1;
    // console.log("it's working");
  }
}


function chuckIt(ind) {
  ellipseMode(CENTER);
  rectMode(CENTER);


  for (i = 0; i < 500 / grid; i++) {
    for (j = 0; j < 500 / grid; j++) {


      var color1 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      var color2 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      var color3 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));
      var color4 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)), random(grid * j, min(grid * j + grid, 500)));

      noStroke();
      fill(color1);
      rect(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid, grid);
      fill(color2);
      rect(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid, grid, random(5, 15), random(5, 15), random(5, 15), random(5, 15));
      fill(color3);
      ellipse(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid / random(1.25, 1.5), grid / random(1.25, 1.5));
      fill(color4);
      ellipse(250 + grid / 2 + i * grid, 110 + grid / 2 + j * grid, grid / random(2, 3.5), grid / random(2, 3.5));

    }
  }
}

function button(x, y) {
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


    //page = (page + 1) % 6; // switches pages
    //background(255);