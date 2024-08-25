(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){
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

// Some random points
var points = [],
    displacement = 80,  // Reduced displacement to lower the peaks
    smoothness = 2,      // Added smoothness factor
    power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

// Set the start height and end height for the terrain
points[0] = (height - (Math.random() * height / 3)) - displacement;
points[power] = (height - (Math.random() * height / 3)) - displacement;

// Create the rest of the points with smoothing
for(var i = 1; i < power; i *= 2){
  for(var j = (power / i) / 2; j < power; j += power / i){
    points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2) 
                  + Math.floor(Math.random() * -displacement + displacement) / smoothness;
  }
  displacement *= 0.6;
}

// Create a gradient for the mountain
var gradient = terCtx.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, '#000000');  // Black at the top
gradient.addColorStop(1, '#333333');  // Dark grey at the bottom

// Fill the mountain with the gradient
terCtx.fillStyle = gradient;
terCtx.beginPath();
for(var i = 0; i <= width; i++){
  if(i === 0){
    terCtx.moveTo(0, points[0]);
  } else if(points[i] !== undefined){
    terCtx.lineTo(i, points[i]);
  }
}
terCtx.lineTo(width, terrain.height);
terCtx.lineTo(0, terrain.height);
terCtx.lineTo(0, points[0]);
terCtx.fill();

// Draw the outline only on the top of the mountains
terCtx.strokeStyle = '#D3D3D3';  // Set the outline color to grey
terCtx.lineWidth = 2;
terCtx.beginPath();
for(var i = 0; i <= width; i++){
  if(i === 0){
    terCtx.moveTo(0, points[0]);
  } else if(points[i] !== undefined){
    terCtx.lineTo(i, points[i]);
  }
}
terCtx.stroke();

// Second canvas used for the stars
bgCtx.fillStyle = '#000000';  // Change the sky color to black
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
  this.y = Math.random() * height;
}

Star.prototype.update = function() {
  this.x -= this.speed;
  if(this.x < 0) {
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
  if(this.active) {
    this.x -= this.speed;
    this.y += this.speed;
    if(this.x < 0 || this.y >= height) {
      this.reset();
    } else {
      bgCtx.lineWidth = this.size;
      bgCtx.beginPath();
      bgCtx.moveTo(this.x, this.y);
      bgCtx.lineTo(this.x + this.len, this.y - this.len);
      bgCtx.stroke();
    }
  } else {
    if(this.waitTime < new Date().getTime()) {
      this.active = true;
    }			
  }
}

var entities = [];

// Adjust number of stars based on screen width
var numStars = (width > 768) ? height : Math.max(height / 2, 50);

// Init the stars
for(var i = 0; i < numStars; i++) {
  entities.push(new Star({x: Math.random() * width, y: Math.random() * height}));
}

// Add 2 shooting stars that just cycle.
entities.push(new ShootingStar());
entities.push(new ShootingStar());

// Animate background
function animate() {
  bgCtx.fillStyle = '#000000';  // Keep the sky color consistent during animation
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = '#ffffff';
  bgCtx.strokeStyle = '#ffffff';

  var entLen = entities.length;
  
  while(entLen--) {
    entities[entLen].update();
  }
  
  requestAnimationFrame(animate);
}
animate();