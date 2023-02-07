let song;
let v1;
let v2;
let v3;
let v4;
let v5;
let v6;
let v7;
let v8;
let v6display;
let button;
let button2;
let button3;
let button4;
let img;
let img2;
let img3;
let backparticle;
let col1;
let imgposx;
let imgposy;
let achievment1a;
let achievment1b;
let achievment1c;
let achievment2a;
let achievment2b;
let achievment2c;
let achievment3a;
let achievment3b;
let achievment3c;

function preload() {
  song = loadSound("song.mp3");
  img3 = loadImage("Grad.jpeg");
  img = loadImage("cookie.png");
  img2 = loadImage("download.png");
}

function setup() {
  createCanvas(400, 400);
  v1 = 0;
  v2 = 1;
  v3 = 10;
  v4 = 0;
  v5 = 0;
  v6 = 0;
  col1 = random(215, 225);
  v6display = 0;
  v7 = 200;
  v8 = 3;
  achievment1a = 0;
  achievment1b = loadImage("achievment.png");
  achievment1c = 0;
  achievment2a = 0;
  achievment2b = loadImage("achievment2.png");
  achievment2c = 0;
  achievment3a = 0;
  achievment3b = loadImage("achievment3.png");
  achievment3c = 0;
  imgposx = 130;
  imgposy = 115;
  button = createButton("generate");
  button2 = createButton("level up");
  button3 = createButton("reset");
  button4 = createButton("auto");
  button.mousePressed(changeBG);
  button2.mousePressed(changeBG2);
  button3.mousePressed(changeBG3);
  button4.mousePressed(changeBG4);
  backparticle = new ParticleSystem(createVector(width / 2, -30));
  setInterval(addthing, 2000);
  song.play();
}

let Particle = function (position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-9, 9), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 350;
};

Particle.prototype.run = function () {
  this.update();
  this.display();
};

Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

Particle.prototype.display = function () {
  noStroke();
  fill(127, 127, col1, 45);
  ellipse(this.position.x, this.position.y, 12, 12);
};

Particle.prototype.isDead = function () {
  return this.lifespan < 0;
};

let ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

function addthing() {
  if (v6display > 0) {
    v1 += v6;
  }
}

function draw() {
  background(img3);
  backparticle.addParticle();
  backparticle.run();
  button.position(160, 165);
  button2.position(4, 75);
  button4.position(347, 100);
  textSize(30);
  image(img, imgposx, imgposy, 120, 120);
  image(img2, 350, 10, 40, 50);
  fill("white");
  text(v1, 1, 30);
  fill("green");
  text(v5, 1, 65);
  fill("yellow");
  text(v6display, 360, 90);
  textSize(40);
  fill("black");
  text("object clicker", 90, 40);
  if (v4 == 1) {
    textSize(15);
    fill("red");
    text("you must acquire more cookies or levels", 10, 380);
  }
  if (v1 > 10000) {
    achievment1c = 1;
  }
  if (achievment1c > 0) {
    image(achievment1b, 10, 310, 50, 50);
  } else {
    fill("black");
    square(10, 310, 50);
  }
  if (v6display > 3) {
    achievment2c = 1;
  }
  if (achievment2c > 0) {
    image(achievment2b, 80, 310, 50, 50);
  } else {
    fill("black");
    square(80, 310, 50);
  }
  if (v1 > 20000 && v6display > 10) {
    achievment3c = 1;
  }
  if (achievment3c > 0) {
    image(achievment3b, 150, 310, 50, 50);
  } else {
    fill("black");
    square(150, 310, 50);
  }
}

function changeBG() {
  v1 += v2;
}

function changeBG2() {
  if (v1 > v3) {
    console.log("level up");
    v2 += 1;
    v1 -= v3;
    v3 += 100;
    v5 += 1;
  } else {
    console.log("dumb dumb");
    v4 = 1;
    setTimeout(function () {
      v4 = 0;
    }, 2000);
  }
}

function changeBG3() {
  v3 = 10;
  v1 = 0;
  v6display = 0;
  v6 = 0;
  v2 = 1;
  v5 = 0;
}

function changeBG4() {
  if (v1 > v7 && v2 > v8) {
    v6 += 10;
    v6display += 1;
    v7 *= 2;
    v8 *= 2;
  } else {
    console.log("dumb dumb");
    v4 = 1;
    setTimeout(function () {
      v4 = 0;
    }, 2000);
  }
}
