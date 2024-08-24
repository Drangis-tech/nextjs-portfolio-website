"use client";

import React, { useEffect } from 'react';
import styles from '../styles/page.module.css'; // Ensure this path is correct

const ParticleCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Your particle animation code here (from CodePen)
      const particles = [];
      const numParticles = 100;
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 3 - 1.5,
          speedY: Math.random() * 3 - 1.5,
        });
      }
      
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          if (particle.size > 0) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
          }
          
          if (particle.size > 0.2) {
            particle.size -= 0.1;
          }
        });
        
        requestAnimationFrame(animate);
      }
      
      animate();
    }
  }, []);

  return <canvas id="particleCanvas" className={styles.particleCanvas} />;
};

const Page = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Particle Effect</h1>
      </div>
      <div className={styles.canvasContainer}>
        <ParticleCanvas />
      </div>
      <div className={styles.footer}>
        <p>Made with 💙 by Nojus Mykolaitis</p>
      </div>
    </div>
  );
};

export default Page;