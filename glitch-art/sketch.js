/* 
Previously called "Glitch Art Image Filterer" this is now "Chuck-it,"
an image filter that turns ordinary photos into Chuck Close like art.
Chuck close is a contemporary painter who paints in a grid-like fashion,
creating images that look hyperrealistic from a distance but, upon closer 
inspection, are found to be made of discrete color units in loosely drawn
dots, loops, and sloppy-looking rectangles. This sketch allows uses to replicate
the artisst dot and loop style using ordinary photos.  

By Kelly Graham & Tess Wolfe-Stelzer
Last updated 3/12/17
*/

ind = 0; // Holds index variable to store what image to display large
var marginTop = 150; // Spacing from the top of the canvas
var marginSide = 250; // Spacing from side of canvas to content
var grid; // Size of square that grid is divided by, this is adjusted by the abstraction slider
var slider; // Initialize slider 
var imgS = 75; // Small image size for thumbnails
var imgB = 500; // Large image size for center image
var xThumb = 165; // x position of thumbnails

// load all images
function preload() {
  img1 = loadImage('../images/friedaWeb.jpg'); // Larger photo 
  img2 = loadImage('../images/mandelaWeb.jpg'); // Larger photo 
  img3 = loadImage('../images/monroeWeb.jpg'); // Larger photo 
  img4 = loadImage('../images/obamaWeb.jpg'); // Larger photo 
  img5 = loadImage('../images/BowieWeb.jpg'); // Larger photo 
  img6 = loadImage('../images/einsteinWeb.jpg'); // Larger photo 

  img7 = loadImage('../images/friedaWebThumb.jpg'); // Thumbnail for side gallery
  img8 = loadImage('../images/mandelaWebThumb.jpg'); // Thumbnail for side gallery
  img9 = loadImage('../images/monroeWebThumb.jpg'); // Thumbnail for side gallery
  img10 = loadImage('../images/obamaWebThumb.jpg'); // Thumbnail for side gallery
  img11 = loadImage('../images/BowieWebThumb.jpg'); // Thumbnail for side gallery
  img12 = loadImage('../images/einsteinWebThumb.jpg'); // Thumbnail for side gallery 

  img13 = loadImage('../images/chuckProcess.jpg'); // Bio photo (for use w/ future info page)
  img14 = loadImage('../images/chuckPhotoCropped.jpg'); // Comparison1 photo (for future info page)
  img15 = loadImage('../images/chuckPaintingCropped.jpg'); // Comparison2 photo (for future info page)

  img16 = loadImage('../images/chuckItRed.png'); // Logo by itself (for future multipage app)

  portraitsLg = new Array(img1, img2, img3, img4, img5, img6); // Array of the larger images to call
  portraitsSm = new Array(img7, img8, img9, img10, img11, img12); // Array of the thumbnails to draw on canvas
}

function setup() {
  createCanvas(1000, 800); // Draw canvas
  background(245, 245, 245); // Sets background color
  subtitle(width / 2, marginTop - 30); // Calls function to write subtitle
  logo(840, marginTop - 20); // Calls function to draw logo at top of page
  for (i = 0; i < 6; i++) { // Loop to draw all the thumbnails
    image(portraitsSm[i], xThumb, marginTop + (i * imgS) + (i * 10), imgS, imgS); // Draw all thumbnails in a column
  }

  mainImage(); // Function to display first image before clicking the button
  slider = createSlider(0, 50, 25, 25); // Draws slider object with starting value of 25, steps of 25
  slider.position(width - marginSide + 30, marginTop + 80); // Places slider on page
  textAlign(CENTER, CENTER); // Aligns text from center
  text("Abstraction", width - marginSide + 100, marginTop + 120); // Places slider text
}

function draw() {
  fill(0); // Fill for text
  grid = max(10, slider.value()); // Allows slider to start at 0 and increment by multiples of 25 w/out sq being too small.
  button(width - marginSide + 30, marginTop); // Draw button for "Chuck It"
  ellipseMode(CENTER); // Draw circles from center
  rectMode(CENTER); // Draw rounded rectangles from center
}

// Draws the centered text description of the project
function subtitle(x, y) {
  textAlign(CENTER); // Places text from center
  text("A photographic effect that turns ordinary photos into Chuck Close-style art", x, y);

}
// Draws the logo image, scales it down from source size. Restricts scaling to logo only.
function logo(x, y) {
  push(); // Confines scaling by bookending w/ pop()
  scale(0.5); // Makes half the size
  image(img16, x, y);
  pop(); // Confines scaling by bookending w/ push()
}

// Checks if mouse is pressed on Chuck-it button, runs Chuck-It. If pressed on thumbnails, switches main image.
function mousePressed() {
  if (mouseX > width - marginSide + 50 && mouseX < width - marginSide + 50 + 130 &&
    mouseY > marginTop && mouseY < marginTop + 40) { // Checks if mouse is within button dimensions.
    chuckIt(ind); // parameter is index of portraitLg array
  }

  for (i = 0; i < 6; i++) {
    if (mouseX > xThumb && mouseX < xThumb + imgS && mouseY > marginTop + ((imgS + 10) * i) &&
      mouseY < marginTop + ((imgS + 10) * (i + 1))) { // Checks if mouse is withing thumbnail dimensions.
      ind = i; // Sets ind variable to draw that array index 
      mainImage();
    }
  }
}

// Divides center image into grid, randomly samples colors from each grid section
// then draws shapes with randomized attributes (width, height, corner arc) in that section
function chuckIt(ind) {
  ellipseMode(CENTER);
  rectMode(CENTER);

  for (i = 0; i < 500 / grid; i++) {
    for (j = 0; j < 500 / grid; j++) {
      // storing color information from randomized points inside each grid section
      var color1 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)),
        random(grid * j, min(grid * j + grid, 500)));
      var color2 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)),
        random(grid * j, min(grid * j + grid, 500)));
      var color3 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)),
        random(grid * j, min(grid * j + grid, 500)));
      var color4 = portraitsLg[ind].get(random(grid * i, min(grid * i + grid, 500)),
        random(grid * j, min(grid * j + grid, 500)));

      // draws randomized shapes with stored colors vars 
      noStroke();
      fill(color1);
      rect(marginSide + grid / 2 + i * grid, marginTop + grid / 2 + j * grid, grid, grid);
      fill(color2);
      rect(marginSide + grid / 2 + i * grid, marginTop + grid / 2 + j * grid, grid, grid, random(5, 15),
        random(5, 15), random(5, 15), random(5, 15));
      fill(color3);
      ellipse(marginSide + grid / 2 + i * grid, marginTop + grid / 2 + j * grid, grid / random(1.25, 1.5),
        grid / random(1.25, 1.5));
      fill(color4);
      ellipse(marginSide + grid / 2 + i * grid, marginTop + grid / 2 + j * grid, grid / random(2, 3.5),
        grid / random(2, 3.5));
    }
  }
}

// draws Chuck-it button
function button(x, y) {
  rectMode(CORNER);
  var w = 130;
  var h = 40;

  // Determine if cursor is over button
  if (mouseIsPressed && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(150); // Fill color for pressed state
  } else if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(200); // Fill color for hover state
  } else { // Fill color when mouse isn't on button
    fill(255); 
  }

  rect(x, y, w, h);
  fill(0);
  text("Chuck It", x + w / 2, y + h / 2);
}

// Draws large center image based on what thumbnail the user has clicked
function mainImage() {
  imageMode(CENTER); // places image from center
  image(portraitsLg[ind], width / 2, height / 2, imgB, imgB); // Main image that's loaded. 
}