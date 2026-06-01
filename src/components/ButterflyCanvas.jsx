import React, { useEffect, useRef } from 'react';

export default function ButterflyCanvas({ activeTheme }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particles array (Shards + Butterflies)
    const particles = [];
    const maxParticles = 30;

    class Particle {
      constructor(type) {
        this.type = type; // 'shard' or 'butterfly'
        this.reset();
        // Stagger spawn positions across the screen initially
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;
        this.size = Math.random() * 8 + 4;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = -(Math.random() * 1.5 + 0.5);
        this.opacity = Math.random() * 0.4 + 0.1;
        this.rotSpeed = Math.random() * 0.02 - 0.01;
        this.rot = Math.random() * Math.PI * 2;
        this.color = '';
        this.wingsOpen = Math.random();
        this.flapSpeed = Math.random() * 0.1 + 0.05;

        // Choose colors based on theme
        if (activeTheme === 1) {
          // Sweet Dreams: Soft Mint Green and Hot Pink
          this.color = Math.random() > 0.5 ? '#3EB489' : '#FF69B4';
        } else if (activeTheme === 2) {
          // Glitch Vapor-Punk: Toxic Green and Glitch Magenta
          this.color = Math.random() > 0.5 ? '#7FFF00' : '#FF1493';
          this.speedY *= 1.8; // Move faster in glitched state
        } else if (activeTheme === 3) {
          // Velvet Abyss: Neon Cyan and Sunflower Gold
          this.color = Math.random() > 0.5 ? '#00EEFC' : '#FFD700';
        } else {
          // Main Menu: Cyan and Pink
          this.color = Math.random() > 0.5 ? '#00EEFC' : '#FF69B4';
        }
      }

      update(mouseX, mouseY) {
        // Parallax mouse drag pull
        const dx = (mouseX - canvas.width / 2) * 0.01;
        const dy = (mouseY - canvas.height / 2) * 0.01;

        this.x += this.speedX + dx * (this.size * 0.1);
        this.y += this.speedY + dy * (this.size * 0.1);
        this.rot += this.rotSpeed;

        if (this.type === 'butterfly') {
          this.wingsOpen += this.flapSpeed;
          this.x += Math.sin(this.y * 0.02) * 0.5; // Wobble fly path
        }

        // Warp bounds check
        if (this.y < -50 || this.x < -50 || this.x > canvas.width + 50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;

        if (this.type === 'shard') {
          // Render a sharp triangular or polygonal glass shard
          ctx.beginPath();
          ctx.moveTo(-this.size, -this.size * 1.5);
          ctx.lineTo(this.size * 1.2, -this.size * 0.5);
          ctx.lineTo(this.size * 0.2, this.size * 1.4);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          // Render a simple flat stylized butterfly silhouette
          const wingSpread = Math.abs(Math.sin(this.wingsOpen)) * this.size;
          
          // Left wing
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-wingSpread, -this.size, -wingSpread * 1.5, this.size * 0.5, 0, this.size * 0.2);
          ctx.closePath();
          ctx.fill();
          
          // Right wing
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(wingSpread, -this.size, wingSpread * 1.5, this.size * 0.5, 0, this.size * 0.2);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      const type = Math.random() > 0.4 ? 'butterfly' : 'shard';
      particles.push(new Particle(type));
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse damping
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      particles.forEach((p) => {
        p.update(mouse.x, mouse.y);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
