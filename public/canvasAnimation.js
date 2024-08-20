(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
  window.requestAnimationFrame = requestAnimationFrame;
})();

// Get canvas elements and contexts
var terrain = document.getElementById("terCanvas"),
  background = document.getElementById("bgCanvas"),
  terCtx = terrain.getContext("2d"),
  bgCtx = background.getContext("2d"),
  width = window.innerWidth,
  height = window.innerHeight;

// Set canvas sizes
terrain.width = background.width = width;
terrain.height = background.height = height;

// Variables for terrain
var points = [],
  displacement = 140,
  power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

// Function to calculate terrain height
function calculateTerrainHeight() {
  // Calculate terrain height based on the viewport height
  return height * 0.6; // Adjust the factor as needed
}

// Set the start height and end height for the terrain
function drawTerrain() {
  var terrainHeight = calculateTerrainHeight();
  points[0] = (height - (Math.random() * height / 2)) - displacement;
  points[power] = (height - (Math.random() * height / 2)) - displacement;

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
  terCtx.lineTo(width, height - (height - terrainHeight)); // Lower the terrain based on the calculated height
  terCtx.lineTo(0, height - (height - terrainHeight)); // Lower the terrain based on the calculated height
  terCtx.lineTo(0, points[0]);
  terCtx.closePath();
  terCtx.fillStyle = "#333"; // Darker gray for the terrain
  terCtx.fill();
}

// Draw stars on the background canvas
bgCtx.fillStyle = '#000'; // Background color of stars canvas
bgCtx.fillRect(0, 0, width, height);

// Star and shooting star definitions
function Star(options) {
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.1;
  this.x = options.x;
  this.y = options.y;
}

Star.prototype.reset = function () {
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.1;
  this.x = width;
  this.y = Math.random() * height;
}

Star.prototype.update = function () {
  this.x -= this.speed;
  if (this.x < 0) {
      this.reset();
  } else {
      bgCtx.fillStyle = '#ffffff'; // White color for stars
      bgCtx.fillRect(this.x, this.y, this.size, this.size);
  }
}

function ShootingStar() {
  this.reset();
}

ShootingStar.prototype.reset = function () {
  this.x = Math.random() * width;
  this.y = 0;
  this.len = (Math.random() * 80) + 10;
  this.speed = (Math.random() * 10) + 6;
  this.size = (Math.random() * 1) + 0.1;
  this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
  this.active = false;
}

ShootingStar.prototype.update = function () {
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
          bgCtx.strokeStyle = '#ffffff'; // White color for shooting stars
          bgCtx.stroke();
      }
  } else {
      if (this.waitTime < new Date().getTime()) {
          this.active = true;
      }
  }
}

var entities = [];
for (var i = 0; i < height; i++) {
  entities.push(new Star({ x: Math.random() * width, y: Math.random() * height }));
}
entities.push(new ShootingStar());
entities.push(new ShootingStar());

// Animate the stars
function animate() {
  bgCtx.fillStyle = '#000'; // Background color of stars canvas
  bgCtx.fillRect(0, 0, width, height);
  var entLen = entities.length;
  while (entLen--) {
      entities[entLen].update();
  }
  requestAnimationFrame(animate);
}
animate();

// Handle window resize
window.addEventListener("resize", function() {
  width = window.innerWidth;
  height = window.innerHeight;
  terrain.width = background.width = width;
  terrain.height = background.height = height;
  terCtx.clearRect(0, 0, width, height);
  bgCtx.clearRect(0, 0, width, height);

  drawTerrain(); // Redraw terrain on resize

  bgCtx.fillStyle = '#000'; // Background color of stars canvas
  bgCtx.fillRect(0, 0, width, height);

  entities.forEach(entity => entity.reset());
  entities.push(new ShootingStar());
  entities.push(new ShootingStar());
});