let sourceText;
let poem;
let cen;
let startIndex = 0;

function preload() {
  cen = loadImage("library_1000.jpg");
  sourceText = loadStrings("2023checkouts.txt");
}

function setup() {
  let picw = 1000
  let pich = 576
  let ratio = 6
  createCanvas((picw * ratio),(pich*ratio)); 
  poem = sourceText.join(' ');
  textFont("Courier");
  textStyle(BOLD)
}

function draw() {
  background(0);
  frameRate(0);
  
  let charIndex = startIndex;
  let w = width / cen.width;
  let h = height / cen.height;
  cen.loadPixels();
  for (let j = 0; j < cen.height; j++) {
    for (let i = 0; i < cen.width; i++) {
      const pixelIndex = (i + j * cen.width) * 4;
      const r = cen.pixels[pixelIndex + 0];
      const g = cen.pixels[pixelIndex + 1];
      const b = cen.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(r, g, b);      
      textSize(w*1.3);
      textAlign(CENTER, CENTER);
      
      text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);
      charIndex++;
    }
  }
  
  startIndex++;
  
  
}
