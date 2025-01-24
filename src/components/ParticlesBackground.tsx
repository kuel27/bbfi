import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };
    window.addEventListener('resize', handleResize);

    type Particle = {
      x: number;
      y: number;
      speed: number;
      size: number;
      alpha: number;
      angle: number;
    };

    const particles: Particle[] = [];
    const PARTICLE_COLOR = 'rgba(255, 120, 50, 0.55)';

    const resetParticle = (particle: Particle) => {
      particle.y = canvas.height + Math.random() * 50;
      particle.x = Math.random() * canvas.width;
      particle.speed = 0.3 + Math.random() * 0.7;
      particle.size = 1 + Math.random() * 2;
      particle.angle = Math.random() * Math.PI * 2;
    };

    const particleCount = Math.floor((canvas.width * canvas.height) / 50000);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.7,
        size: 1 + Math.random() * 2,
        alpha: 0.55,
        angle: Math.random() * Math.PI * 2
      });
    }

    let animationFrameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        particle.y -= particle.speed;
        particle.x += Math.sin(particle.angle) * 0.3;
        particle.angle += 0.005;

        if (particle.y < -50) {
          resetParticle(particle);
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.4
      }}
    />
  );
};

export default ParticlesBackground;