
let currentkey = '1';
let bgc ;
let gkcount;
let isBlackBg = false;

function setup() {
    createCanvas(1200,1000);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}

function draw() {
    if( keyIsPressed) {
      clear_print();
    }
    if(mouseIsPressed) {
     drawChoice();
    }
}

function keyPressed (){
    if ( key === 'n' || key === 'N'){
        toggleBackground();
    }
}

function toggleBackground() {
    if (isBlackBg) {
        bgc = color(255); 
    } else {
        bgc = color(0); 
    }
    isBlackBg = !isBlackBg; 
    background(bgc); 

}

function randomYellow(){
    let yellowValue = random(200,255);
    let redValue = random(200,255);
    let blueValue = (0,100)
    return color (redValue, yellowValue, blueValue);
}

function randomGreen() {
    let redValue = random(0, 100);     
    let greenValue = random(150, 255);
    let blueValue = random(0, 100);   
    return color(redValue, greenValue, blueValue);
}

function drawChoice() {

  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // teal line
  drawline1(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline2(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawline3(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
    console.log("5");  
    sdTurboSpatter(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {
        gkcount = 1;
    } else {
        gkcount+= .5;
    }
 break;
  case '6':
  console.log("6");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;


default:             
  console.log("None");
  break;
}

}

function drawline1( k,  lx, ly,  px, py) {
  
  strokeWeight(5);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawline2( k,  lx, ly,  px, py) {
  
    let colors = [
        color(25, 25, 112), 
        color(0, 0, 128),    
        color(0, 102, 204),  
        color(70, 130, 180), 
        color(100, 149, 237)
    ];
    let chosenColor = random(colors);
    fill(chosenColor);
    noStroke();
    triangle(lx, ly, px, py, (lx + px) / 2, (ly + py) / 2 - 20); // The third vertex is slightly above the midpoint
    console.log(mouseX);
    console.log(pmouseX);
}
  function drawline3( k,  lx, ly,  px, py) {
    let offset = random(30, 70);

    let newPx = lx + offset;
    let newPy = ly + offset;
    strokeWeight(3);
    stroke(randomGreen());
    line(lx, ly, newPx, newPy);

    let mPx = lx - offset;
    let mPy = ly + offset;
    strokeWeight(3);
    stroke(randomGreen());
    line(lx, ly, mPx, mPy);
    
    console.log(mouseX);
    console.log(pmouseX);
    console.log("Diagonal lines drawn at", lx, ly);

  }

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(randomYellow());
  line(lx, ly, px, py);
}

function sdTurboSpatter( k, lx, ly) {
    let r = random(25);
    fill(k);
    stroke(k);
    for (let i = 0; i < r; i++) {
     let lr = random(1,40);
     let srx = random(-39,39);
     let sry = random(-39,39);
     let purpleShade = lerpColor(color(147, 112, 219),color(255, 182, 193),random(1));
     fill(purpleShade);
     stroke(purpleShade);
     ellipse(lx+srx, ly+sry, lr, lr);
     noStroke();
   }
 }


function eraser( k, lx, ly, sz) {
  fill(k);
  noStroke();
  ellipse(lx, ly, sz,sz);
}

function clear_print() {


  if (key == 'x' || key == 'X') {
    background(bgc);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = ''; 
  }

}

