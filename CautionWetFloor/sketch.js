
let drawQ = false;
let drawA = false;
let drawW = false;
let drawS = false;
let drawE = false;
let drawD = false;
let drawR = false;
let drawF = false;
let drawT = false;
let drawG = false;
let drawY = false;
let drawH = false;

let vid0;
let vid1;
let vid2;
let vid3;
let vid4;
let vid5;
let vid6;
let vid7;
let vid8;
let vid9;
let vid10;
let vid11;
let vid12;
let chancex=0;
let chancey=0;

let xoff=0.01;




function setup() {
  createCanvas(1280,720);

  background(153,0,0);
  noCursor();

vid0=createVideo(['assets/skin vid 0.m4v']);
 vid1=createVideo(['assets/skin vid 1.mp4']);
  vid2=createVideo(['assets/skin vid 2.mp4']);
  vid3=createVideo(['assets/skin vid 3.mp4']);
  vid4=createVideo(['assets/skin vid 4.mp4']);
  vid5=createVideo(['assets/skin vid 5.mp4']);
  vid6=createVideo(['assets/skin vid 6.mp4']);
  vid7=createVideo(['assets/skin vid 7.mp4']);
  vid8=createVideo(['assets/skin vid 8.mp4']);
  vid9=createVideo(['assets/skin vid 9.mp4']);
  vid10=createVideo(['assets/skin vid 10.mp4']);
  vid11=createVideo(['assets/skin vid 11.mp4']);
  vid12=createVideo(['assets/skin vid 12.mp4']);

  vid0.elt.muted = true;
vid0.loop();
  vid0.hide();

  vid1.elt.muted = true;
  vid2.loop();
  vid1.hide();

  vid2.elt.muted = true;
  vid2.loop();
  vid2.hide();

    vid3.elt.muted = true;
    vid3.loop();

  vid3.hide();

   vid4.elt.muted = true;
   vid4.loop();

  vid4.hide();

  vid5.elt.muted = true;
  vid5.loop();

 vid5.hide();

 vid6.elt.muted = true;
 vid6.loop();

vid6.hide();

vid7.elt.muted = true;
vid7.loop();

vid7.hide();

vid8.elt.muted = true;
vid8.loop();

vid8.hide();

vid9.elt.muted = true;
vid9.loop();

vid9.hide();

vid10.elt.muted = true;
vid10.loop();
vid10.hide();

vid11.elt.muted = true;
vid11.loop();

vid11.hide();

vid12.elt.muted = true;
vid12.loop();
vid12.hide();

}

function preload(){

}

var xStep = 0;
var yStep = 0;




function draw() {
  tint(255,128);
  image(vid0,0,0);


  var xNoise = noise(xStep);
  var yNoise = noise(yStep);

  var x = map(xNoise, 0, 1, 0, 800);
  var y = map(yNoise, 0, 1, 0, 400);

  if (drawQ == true) {

    // vid1.play();
    push();
    tint(255,128);
    image(vid1,x,y);
    pop();
  }

  if (drawA == true) {

    // vid2.play();
    push();
    tint(255,128);
     image(vid2,x,y);
     pop();
  }

  if (drawW == true) {

    // vid3.play();
    push();
    tint(255,128);
    image(vid3,x,y);
    pop();
  }

  if (drawS == true) {

    // vid4.play();
    push();
    tint(255,128);
    image(vid4,x,y);
    pop();
  }

  if (drawE == true) {

    // vid5.play();
    push();
    tint(255,128);
    image(vid5,x,y);
    pop();
  }

  if (drawD == true) {

    // vid6.play();
    push();
    tint(255,128);
    image(vid6,x,y);
    pop();
  }

  if (drawR == true) {

    // vid7.play();
    push();
    tint(255,128);
    image(vid7,x,y);
    pop();
  }

  if (drawF == true) {

    // vid8.play();
    push();
    tint(255,128);
    image(vid8,x,y);
    pop();
  }

  if (drawT == true) {

    // vid9.play();
    push();
    tint(255,128);
    image(vid9,x,y);
    pop();
  }

  if (drawG == true) {

    // vid10.play();
    push();
    tint(255,128);
    image(vid10,x,y);
    pop();
  }

  if (drawY == true) {

    // vid11.play();
    push();
    tint(255,128);
    image(vid11,x,y);
    pop();
  }

  if (drawH == true) {
    // vid12.play();
    push();
    image(vid12,x,y);
    tint(255,128);
    pop();
  }

  xStep +=0.009;
  yStep +=0.008;
}

function keyPressed() {

  if ((key == 'Q') || (key == 'q')) {
  drawQ = true;
}

    if ((key == 'A') || (key == 'a')) {
    drawA = true;
  }

  if ((key == 'W') || (key == 'w')) {
  drawW = true;
  }

    if ((key == 'S') || (key == 's')) {
    drawS = true;
  }

  if ((key == 'E') || (key == 'e')) {
  drawE = true;
  }

    if ((key == 'D') || (key == 'd')) {
    drawD = true;
  }

  if ((key == 'R') || (key == 'r')) {
  drawR = true;
}

if ((key == 'F') || (key == 'f')) {
drawF = true;
}

if ((key == 'T') || (key == 't')) {
drawT = true;
}

if ((key == 'G') || (key == 'g')) {
drawG = true;
}

if ((key == 'Y') || (key == 'y')) {
drawY = true;
}

if ((key == 'H') || (key == 'h')) {
drawH = true;
}

}
function keyReleased() {

  // vid1.stop();
  // vid2.stop();
  // vid3.stop();
  // vid4.stop();
  // vid5.stop();
  // vid6.stop();
  // vid7.stop();
  // vid8.stop();
  // vid10.stop();
  // vid11.stop();
  // vid12.stop();
  //
  drawQ = false;
  drawA = false;
  drawW = false;
  drawS = false;
  drawE = false;
  drawD = false;
  drawR = false;
  drawF = false;
  drawT = false;
  drawG = false;
  drawY = false;
  drawH = false;
}
