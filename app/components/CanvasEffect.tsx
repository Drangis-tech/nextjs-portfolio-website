import React, { useEffect } from "react";

// Define TypeScript types for Star and ShootingStar
interface StarOptions {
  x: number;
  y: number;
}

class Star {
  size: number;
  speed: number;
  x: number;
  y: number;

  constructor(options: StarOptions) {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.1;
    this.x = options.x;
    this.y = options.y;
  }

  reset() {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.1;
    this.x = window.innerWidth;
    this.y = Math.random() * window.innerHeight;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x -= this.speed;
    if (this.x < 0) {
      this.reset();
    } else {
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }
}

class ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  size: number;
  waitTime: number;
  active: boolean;

  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * window.innerWidth;
    this.y = 0;
    this.len = Math.random() * 80 + 10;
    this.speed = Math.random() * 10 + 6;
    this.size = Math.random() * 1 + 0.1;
    this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
    this.active = false;
  }

  update(ctx: CanvasRenderingContext2D) {
    if (this.active) {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.x < 0 || this.y >= window.innerHeight) {
        this.reset();
      } else {
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.len, this.y - this.len);
        ctx.stroke();
      }
    } else {
      if (this.waitTime < new Date().getTime()) {
        this.active = true;
      }
    }
  }
}

const CanvasEffect: React.FC = () => {
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

    const width = window.innerWidth;
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

    const entities: (Star | ShootingStar)[] = [];

    for (let i = 0; i < height; i++) {
      entities.push(new Star({ x: Math.random() * width, y: Math.random() * height }));
    }

    entities.push(new ShootingStar());
    entities.push(new ShootingStar());

    function animate() {
      bgCtx.clearRect(0, 0, width, height);
      bgCtx.fillStyle = "#05004c";
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = "#ffffff";
      bgCtx.strokeStyle = "#ffffff";

      entities.forEach(entity => entity.update(bgCtx));

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return null;
};

export default CanvasEffect;