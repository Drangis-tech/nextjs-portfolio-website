(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){
        window.setTimeout(callback, 1000 / 60);
      };
  window.requestAnimationFrame = requestAnimationFrame;
})();

// Canvas and Background Setup
var background = document.getElementById("bgCanvas"),
    bgCtx = background ? background.getContext("2d") : null,
    width = window.innerWidth,
    height = document.body.offsetHeight;

// Make sure height doesn't get too small
(height < 400) ? height = 400 : height;

background.width = width;
background.height = height;

// Create gradient background similar to the "Apie Mus" page
var gradient = bgCtx.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, '#000000'); // Pure black at the top
gradient.addColorStop(1, '#1a1a1a'); // Slightly lighter black/gray at the bottom

bgCtx.fillStyle = gradient;
bgCtx.fillRect(0, 0, width, height);

// Star Entity
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

// Shooting Star Entity
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

// Entity Array
var entities = [];

// Init Entities
function initEntities() {
  entities = []; // Reset the entities
  var numStars = (width > 768) ? height : Math.max(height / 2, 50);

  // Init the stars
  for (var i = 0; i < numStars; i++) {
    entities.push(new Star({x: Math.random() * width, y: Math.random() * height}));
  }

  // Add 2 shooting stars that just cycle.
  entities.push(new ShootingStar());
  entities.push(new ShootingStar());
}

// Animate the canvas
function animate() {
  bgCtx.fillStyle = gradient;  // Keep the gradient during animation
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = '#ffffff';
  bgCtx.strokeStyle = '#ffffff';

  var entLen = entities.length;
  
  while (entLen--) {
    entities[entLen].update();
  }
  
  requestAnimationFrame(animate);
}

// Resize Handling
function resizeCanvas() {
  width = window.innerWidth;
  height = document.body.offsetHeight;
  
  if (height < 400) height = 400;

  background.width = width;
  background.height = height;

  // Update gradient background
  gradient = bgCtx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(1, '#1a1a1a');

  // Reinitialize stars
  initEntities();
}

// Initialize the canvas and animation
function initializeCanvas() {
  if (background && bgCtx) {
    resizeCanvas();
    initEntities();
    animate();
  }
}

// Event listener for window resizing
window.addEventListener('resize', resizeCanvas);

// Initialize the canvas on document load
document.addEventListener('DOMContentLoaded', initializeCanvas);