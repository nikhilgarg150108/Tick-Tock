var hr, min, sec;
var hrAng, minAng, secAng;

function setup() {
  createCanvas(800,400);
  

  angleMode(DEGREES);

}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  console.log(hr);
  console.log(min);
  console.log(sec);

  hrAng = map(hr%12, 0, 12, 0, 360);
  minAng = map(min, 0, 60, 0, 360);
  secAng = map(sec, 0, 60, 0, 360);


  push();
  rotate(hrAng);
  stroke("red");
  strokeWeight(10);
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(minAng);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(secAng);
  stroke("yellow");
  strokeWeight(4);
  line(0, 0, 100, 0);
  pop();

  stroke(255, 0, 255);
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke("yellow");
  arc(0, 0, 300, 300, 0, secAng);

  stroke("blue");
  arc(0, 0, 280, 280, 0, minAng);

  stroke("red");
  arc(0, 0, 260, 260, 0, hrAng);

  drawSprites();
}