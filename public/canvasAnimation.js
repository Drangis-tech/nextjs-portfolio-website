(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){
        window.setTimeout(callback, 1000 / 60);
      };
  window.requestAnimationFrame = requestAnimationFrame;
})();

// Canvas setup
var background = document.getElementById("bgCanvas"),
    bgCtx = background.getContext("2d"),
    width = window.innerWidth,
    height = window.innerHeight;  // Use the full viewport height

background.width = width;
background.height = height;

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

// Clear canvas and fill background with black
bgCtx.fillStyle = '#000000';  // Black background for the stars
bgCtx.fillRect(0, 0, width, height);

// Initialize stars
var entities = [];
var numStars = (width > 768) ? height : Math.max(height / 2, 50);
for (var i = 0; i < numStars; i++) {
  entities.push(new Star({x: Math.random() * width, y: Math.random() * height}));
}

// Add 2 shooting stars that just cycle
entities.push(new ShootingStar());
entities.push(new ShootingStar());

// Animate background
function animate() {
  bgCtx.fillStyle = '#000000';  // Keep the sky color consistent during animation
  bgCtx.fillRect(0, 0, width, height);

  var entLen = entities.length;
  while (entLen--) {
    entities[entLen].update();
  }
  
  requestAnimationFrame(animate);
}
animate();