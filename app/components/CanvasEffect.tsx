import React, { useEffect } from "react";

const CanvasEffect = () => {
  useEffect(() => {
    const terCanvas = document.getElementById("terCanvas") as HTMLCanvasElement | null;
    const bgCanvas = document.getElementById("bgCanvas") as HTMLCanvasElement | null;

    if (!terCanvas || !bgCanvas) {
      console.error("Canvas elements not found");
      return;
    }

    const terCtx = terCanvas.getContext("2d");
    const bgCtx = bgCanvas.getContext("2d");

    if (!terCtx || !bgCtx) {
      console.error("Canvas context not found");
      return;
    }

    let width = window.innerWidth;
    let height = document.body.offsetHeight;

    if (height < 400) height = 400;

    terCanvas.width = bgCanvas.width = width;
    terCanvas.height = bgCanvas.height = height;

    let points: number[] = [];
    let displacement = 140;
    const power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

    points[0] = height - Math.random() * height / 2 - displacement;
    points[power] = height - Math.random() * height / 2 - displacement;

    for (let i = 1; i < power; i *= 2) {
      for (let j = (power / i) / 2; j < power; j += power / i) {
        points[j] = (points[j - power / i / 2] + points[j + power / i / 2]) / 2 + Math.floor(Math.random() * -displacement + displacement);
      }
      displacement *= 0.6;
    }

    terCtx.beginPath();

    for (let i = 0; i <= width; i++) {
      if (i === 0) {
        terCtx.moveTo(0, points[0]);
      } else if (points[i] !== undefined) {
        terCtx.lineTo(i, points[i]);
      }
    }

    terCtx.lineTo(width, height);
    terCtx.lineTo(0, height);
    terCtx.lineTo(0, points[0]);
    terCtx.fill();

    bgCtx.fillStyle = "#05004c";
    bgCtx.fillRect(0, 0, width, height);

    function Star(options: { x: number; y: number }) {
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
    };

    Star.prototype.update = function () {
      this.x -= this.speed;
      if (this.x < 0) {
        this.reset();
      } else {
        bgCtx.fillRect(this.x, this.y, this.size, this.size);
      }
    };

    function ShootingStar() {
      this.reset();
    }

    ShootingStar.prototype.reset = function () {
      this.x = Math.random() * width;
      this.y = 0;
      this.len = Math.random() * 80 + 10;
      this.speed = Math.random() * 10 + 6;
      this.size = Math.random() * 1 + 0.1;
      this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
      this.active = false;
    };

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
          bgCtx.stroke();
        }
      } else {
        if (this.waitTime < new Date().getTime()) {
          this.active = true;
        }
      }
    };

    const entities = [];

    for (let i = 0; i < height; i++) {
      entities.push(new Star({ x: Math.random() * width, y: Math.random() * height }));
    }

    entities.push(new ShootingStar());
    entities.push(new ShootingStar());

    function animate() {
      bgCtx.fillStyle = "#05004c";
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = "#ffffff";
      bgCtx.strokeStyle = "#ffffff";

      let entLen = entities.length;

      while (entLen--) {
        entities[entLen].update();
      }

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return null;
};

export default CanvasEffect;