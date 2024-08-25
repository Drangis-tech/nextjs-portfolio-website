(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  window.requestAnimationFrame = requestAnimationFrame;
})();

// Terrain setup
var terrain = document.getElementById("terCanvas"),
    background = document.getElementById("bgCanvas"),
    terCtx = terrain.getContext("2d"),
    bgCtx = background.getContext("2d"),
    width = window.innerWidth,
    height = document.body.offsetHeight;
(height < 400) ? height = 400 : height;

terrain.width = background.width = width;
terrain.height = background.height = height;

// Generate terrain points
var points = [],
    displacement = 140,
    power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

// Start height and end height for the terrain
points[0] = (height - (Math.random() * height / 2)) - displacement;
points[power] = (height - (Math.random() * height / 2)) - displacement;

// Create the rest of the points
for (var i = 1; i < power; i *= 2) {
  for (var j = (power / i) / 2; j < power; j += power / i) {
    points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
  }
  displacement *= 0.6;
}

// Draw the terrain with a black fill and no bottom outline
terCtx.fillStyle = '#000000'; 
terCtx.beginPath();
for (var i = 0; i <= width; i++) {
  if (i === 0) {
    terCtx.moveTo(0, points[0]);
  } else if (points[i] !== undefined) {
    terCtx.lineTo(i, points[i]);
  }
}
terCtx.lineTo(width, points[width]);
terCtx.lineTo(0, points[0]);
terCtx.fill();

// Add a gray outline only at the top of the mountains
terCtx.strokeStyle = '#52525B'; 
terCtx.lineWidth = 2;
terCtx.beginPath();
for (var i = 0; i <= width; i++) {
  if (points[i] !== undefined) {
    if (i === 0) {
      terCtx.moveTo(i, points[i]);
    } else {
      terCtx.lineTo(i, points[i]);
    }
  }
}
terCtx.stroke();

// Sky background color set to black
bgCtx.fillStyle = '#000000';
bgCtx.fillRect(0, 0, width, height);

// Particle effect inside the mountains
function Particle(options) {
  this.x = options.x;
  this.y = options.y;
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.5 + 0.5;
  this.direction = Math.random() * Math.PI * 2;
}

Particle.prototype.update = function() {
  this.x += Math.cos(this.direction) * this.speed;
  this.y += Math.sin(this.direction) * this.speed;

  // Check if particle is still within the terrain
  var terrainY = points[Math.round(this.x)];
  if (this.y > terrainY) {
    this.y = terrainY;
    this.direction = -this.direction;
  }

  terCtx.fillRect(this.x, this.y, this.size, this.size);
}

// Initialize particles
var particles = [];
for (var i = 0; i < 100; i++) {
  particles.push(new Particle({
    x: Math.random() * width,
    y: Math.random() * height
  }));
}

// Animate particles
function animateParticles() {
  terCtx.fillStyle = '#000000';
  terCtx.fillRect(0, 0, width, height);
  terCtx.fillStyle = '#FFFFFF';

  particles.forEach(function(particle) {
    particle.update();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// Stars setup
function Star(options) {
  this.size = Math.random() * 2;
  this.speed = Math.random() * .1;
  this.x = options.x;
  this.y = options.y;
}

Star.prototype.reset = function() {
  this.size = Math.random() * 2;
  this.speed = Math.random() * .1;
  this.x = width;
  this.y = Math.random() * height;
}

Star.prototype.update = function() {
  this.x -= this.speed;
  if (this.x < 0) {
    this.reset();
  } else {
    bgCtx.fillRect(this.x, this.y, this.size, this.size);
  }
}

// Shooting stars setup
function ShootingStar() {
  this.reset();
}

ShootingStar.prototype.reset = function() {
  this.x = Math.random() * width;
  this.y = 0;
  this.len = (Math.random() * 80) + 10;
  this.speed = (Math.random() * 10) + 6;
  this.size = (Math.random() * 1) + 0.1;
  this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
  this.active = false;
}

ShootingStar.prototype.update = function() {
  if (this.active) {
    this.x -= this.speed;
    this.y += this.speed;
    if (this.x < 0 || this.y >= height) {
      this.reset();
    } else {
      bgCtx.lineWidth = this.size;
      bgCtx.beginPath();
      bgCtx.moveTo(this.x, this.y);
      bgCtx.lineTo(this.x + this.len, this.y - this.len);
      bgCtx.stroke();
    }
  } else {
    if (this.waitTime < new Date().getTime()) {
      this.active = true;
    }
  }
}

// Initialize stars and shooting stars
var entities = [];
var numStars = (width > 768) ? height : Math.max(height / 2, 50);
for (var i = 0; i < numStars; i++) {
  entities.push(new Star({ x: Math.random() * width, y: Math.random() * height }));
}
entities.push(new ShootingStar());
entities.push(new ShootingStar());

// Animate the background with stars and shooting stars
function animateBackground() {
  bgCtx.fillStyle = '#000000';
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = '#FFFFFF';
  bgCtx.strokeStyle = '#FFFFFF';

  var entLen = entities.length;
  while (entLen--) {
    entities[entLen].update();
  }

  requestAnimationFrame(animateBackground);
}

animateBackground();