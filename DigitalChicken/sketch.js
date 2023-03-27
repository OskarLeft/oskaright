
let drawA = false;
let drawS = false;
let drawD = false;
let drawW = false;

let vid;
let vid2;
let vid3;
let vid4;
let fish;

let sound1;
let sound2;
let sound3;
let sound4;


function setup() {
  createCanvas(1280,720);

    vid =createVideo(['assets/chicken 1.mov']);

  vid2=createVideo(['assets/chicken 2.mov']);

  vid3=createVideo(['assets/chicken 3.mov']);

   vid4=createVideo(['assets/jail rabbit .mov']);

  soundFormats('mp3');
  sound1=loadSound('assets/chicken 1.mp3');
  sound2=loadSound('assets/chicken 2.mp3');
  sound3=loadSound('assets/chicken 3.mp3');
  // sound4=loadSound('assets/chicken 4.mp3');


  vid.elt.muted = true;
  vid.loop();
  vid.hide();

  vid2.elt.muted = true;
  vid2.loop();
  vid2.hide();

    vid3.elt.muted = true;
  vid3.loop();
  vid3.hide();

   vid4.elt.muted = true;
  vid4.loop();
  vid4.hide();

}

function preload(){
  fish=loadImage('assets/scary fishhh.png');


}
function draw() {
  background(220,10);

  image(fish,mouseX,mouseY,180,300);



  if (drawA == true) {
    sound1.play();
    image(vid,0,0);
      image(fish,mouseX,mouseY,180,300);

  }

if (drawS == true) {
  sound2.play();
  image(vid2,0,0);
      image(fish,mouseX,mouseY,180,300);

}

if (drawD == true) {
  sound3.play();
  image(vid3,0,0);
      image(fish,mouseX,mouseY,180,300);

}

if (drawW == true) {
  image(vid4,0,0);
  image(fish,mouseX,mouseY,180,300);
}

}

function keyPressed() {

    if ((key == 'A') || (key == 'a')) {
    drawA = true;
  }

    if ((key == 'S') || (key == 's')) {
    drawS = true;
  }

    if ((key == 'D') || (key == 'd')) {
    drawD = true;
  }

  if ((key == 'W') || (key == 'w')) {
  drawW = true;
}





}
function keyReleased() {
  drawA = false;
  drawS = false;
  drawD = false;
  drawW = false;

}
