(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){
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

// Adjust height to ensure terrain is placed correctly
var terrainHeight = height - 100; // Adjust this value to position the terrain lower
terrain.height = background.height = terrainHeight;

// Random points for terrain
var points = [],
    displacement = 120,
    power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

// Set start and end heights for terrain
points[0] = (terrainHeight - (Math.random() * terrainHeight / 2)) - displacement;
points[power] = (terrainHeight - (Math.random() * terrainHeight / 2)) - displacement;

// Create terrain points
for (var i = 1; i < power; i *= 2) {
  for (var j = (power / i) / 2; j < power; j += power / i) {
    points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
  }
  displacement *= 0.6;
}

// Draw the terrain
terCtx.beginPath();

for (var i = 0; i <= width; i++) {
  if (i === 0) {
    terCtx.moveTo(0, points[0]);
  } else if (points[i] !== undefined) {
    terCtx.lineTo(i, points[i]);
  }
}

terCtx.lineTo(width, terrainHeight);
terCtx.lineTo(0, terrainHeight);
terCtx.lineTo(0, points[0]);
terCtx.closePath();
terCtx.fillStyle = '#121212'; // Very dark gray for a near-black appearance
terCtx.fill();

// Background canvas setup
bgCtx.fillStyle = '#000000'; // Black for the sky
bgCtx.fillRect(0, 0, width, height);

// Stars
function Star(options) {
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.1;
  this.x = options.x;
  this.y = options.y;
}

Star.prototype.reset = function() {
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.1;
  this.x = width;
  this.y = Math.random() * terrainHeight; // Ensure stars are only within the terrain
}

Star.prototype.update = function() {
  this.x -= this.speed;
  if (this.x < 0) {
    this.reset();
  } else {
    bgCtx.fillRect(this.x, this.y, this.size, this.size); 
  }
}

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
    if (this.x < 0 || this.y >= terrainHeight) { // Ensure shooting stars are within the terrain
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

var entities = [];

// Initialize stars
for (var i = 0; i < height; i++) {
  entities.push(new Star({ x: Math.random() * width, y: Math.random() * terrainHeight }));
}

// Add shooting stars
entities.push(new ShootingStar());
entities.push(new ShootingStar());

// Animate
function animate() {
  bgCtx.fillStyle = '#000000'; // Black for the sky
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = '#ffffff'; // White for the stars
  bgCtx.strokeStyle = '#ffffff'; // White for the shooting stars

  var entLen = entities.length;

  while (entLen--) {
    entities[entLen].update();
  }

  requestAnimationFrame(animate);
}
animate();