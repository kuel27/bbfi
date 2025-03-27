import { memo, useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  speed: number;
  size: number;
  alpha: number;
  angle: number;
  length: number;
  wobble: number;
  dripping: boolean;
  originalSize: number;
};

type ColorValues = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const ORIGINAL_COLOR: ColorValues = { r: 255, g: 120, b: 50, a: 0.55 };
const TARGET_COLOR: ColorValues = { r: 255, g: 0, b: 0, a: 0.75 };

function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

function createInitialParticles(canvas: HTMLCanvasElement): Particle[] {
  const particleCount = Math.floor((canvas.width * canvas.height) / 25000);
  const particles: Particle[] = [];

  for (let i = 0; i < particleCount; i++) {
    const particle: Particle = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.3 + Math.random() * 0.7,
      size: 1 + Math.random() * 2,
      originalSize: 1 + Math.random() * 2,
      alpha: 0.55,
      angle: Math.random() * Math.PI * 2,
      length: 0,
      wobble: Math.random() * 0.1,
      dripping: false,
    };
    resetParticle(particle, canvas, true);
    particles.push(particle);
  }

  return particles;
}

function resetParticle(
  particle: Particle,
  canvas: HTMLCanvasElement,
  isInitial = false,
) {
  if (isInitial) {
    particle.y = Math.random() * canvas.height;
  } else {
    particle.y = -50 - Math.random() * 100;
  }

  particle.x = Math.random() * canvas.width;
  particle.speed = 0.3 + Math.random() * 0.7;
  const size = 1 + Math.random() * 2;
  particle.originalSize = size;
  particle.size = size;
  particle.angle = Math.random() * Math.PI * 2;
  particle.length = size * (2 + Math.random() * 3);
  particle.wobble = Math.random() * 0.1;
  particle.dripping = Math.random() < 0.1;
}

function interpolateColor(
  original: ColorValues,
  target: ColorValues,
  progress: number,
): ColorValues {
  return {
    r: Math.floor(original.r + (target.r - original.r) * progress),
    g: Math.floor(original.g + (target.g - original.g) * progress),
    b: Math.floor(original.b + (target.b - original.b) * progress),
    a: original.a + (target.a - original.a) * progress,
  };
}

function updateAndDrawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  canvas: HTMLCanvasElement,
  scrollProgress: number,
  color: ColorValues,
) {
  const { r, g, b, a } = color;

  particles.forEach((particle) => {
    const directionTransitionStart = 0;
    const directionTransitionEnd = 0.15;
    const directionTransition = Math.max(
      0,
      Math.min(
        1,
        (scrollProgress - directionTransitionStart) /
          (directionTransitionEnd - directionTransitionStart),
      ),
    );

    const directionFactor = -1 + (directionTransition * 2);
    const speedMultiplier = particle.dripping ? 1.5 : 1;
    particle.y += directionFactor * particle.speed * speedMultiplier;

    const wobbleAmount = (0.3 * (1 - directionTransition)) +
      (particle.wobble * directionTransition);
    particle.x += Math.sin(particle.angle) * wobbleAmount;
    particle.angle += 0.01 * directionTransition;

    if (directionFactor < 0 && particle.y < -50) {
      resetParticle(particle, canvas);
    } else if (directionFactor > 0 && particle.y > canvas.height + 50) {
      resetParticle(particle, canvas);
    }

    if (particle.x < -50 || particle.x > canvas.width + 50) {
      resetParticle(particle, canvas, true);
    }

    const transitionStart = 0.05;
    const transitionEnd = 0.15;
    const shapeTransition = Math.max(
      0,
      Math.min(
        1,
        (scrollProgress - transitionStart) /
          (transitionEnd - transitionStart),
      ),
    );

    const sizeMultiplier = 1 + (shapeTransition * 0.5);
    particle.size = particle.originalSize * sizeMultiplier;

    drawParticle(ctx, particle, shapeTransition, scrollProgress, r, g, b, a);
  });
}

function drawParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle,
  shapeTransition: number,
  scrollProgress: number,
  r: number,
  g: number,
  b: number,
  a: number,
) {
  if (shapeTransition < 1) {
    const circleOpacity = 1 - shapeTransition;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a * circleOpacity})`;
    ctx.fill();
  }

  if (shapeTransition > 0) {
    const dropEffect = Math.min(scrollProgress * 10, 1);
    const currentLength = particle.length * dropEffect * shapeTransition;
    const dropOpacity = shapeTransition;

    ctx.beginPath();
    ctx.moveTo(particle.x, particle.y);

    ctx.bezierCurveTo(
      particle.x - particle.size,
      particle.y + currentLength * 0.33,
      particle.x - particle.size,
      particle.y + currentLength * 0.66,
      particle.x,
      particle.y + currentLength,
    );

    ctx.bezierCurveTo(
      particle.x + particle.size,
      particle.y + currentLength * 0.66,
      particle.x + particle.size,
      particle.y + currentLength * 0.33,
      particle.x,
      particle.y,
    );

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a * dropOpacity})`;
    ctx.fill();
  }
}

const ParticlesBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollProgressRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setupCanvas = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;

      canvas.width = globalThis.innerWidth;
      canvas.height = globalThis.innerHeight;

      if (
        !particlesRef.current.length ||
        Math.abs(oldWidth - canvas.width) > 100 ||
        Math.abs(oldHeight - canvas.height) > 100
      ) {
        particlesRef.current = createInitialParticles(canvas);
      } else {
        particlesRef.current.forEach((particle) => {
          if (
            particle.x < 0 ||
            particle.x > canvas.width ||
            particle.y < -100 ||
            particle.y > canvas.height + 100
          ) {
            resetParticle(particle, canvas, true);
          }
        });

        const targetCount = Math.floor((canvas.width * canvas.height) / 25000);
        const currentCount = particlesRef.current.length;

        if (targetCount > currentCount) {
          for (let i = 0; i < targetCount - currentCount; i++) {
            const particle: Particle = {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              speed: 0.3 + Math.random() * 0.7,
              size: 1 + Math.random() * 2,
              originalSize: 1 + Math.random() * 2,
              alpha: 0.55,
              angle: Math.random() * Math.PI * 2,
              length: 0,
              wobble: Math.random() * 0.1,
              dripping: false,
            };
            resetParticle(particle, canvas, true);
            particlesRef.current.push(particle);
          }
        } else if (targetCount < currentCount) {
          particlesRef.current = particlesRef.current.slice(0, targetCount);
        }
      }
    };

    const handleResize = debounce(setupCanvas, 100);
    const handleScroll = () => {
      const viewportHeight = globalThis.innerHeight;
      const scrollPosition = globalThis.scrollY;
      scrollProgressRef.current = Math.min(
        Math.max(scrollPosition / viewportHeight, 0),
        1,
      );
    };

    setupCanvas();
    particlesRef.current = createInitialParticles(canvas);

    let animationFrameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollProgress = scrollProgressRef.current;
      const currentColor = interpolateColor(
        ORIGINAL_COLOR,
        TARGET_COLOR,
        scrollProgress,
      );

      updateAndDrawParticles(
        ctx,
        particlesRef.current,
        canvas,
        scrollProgress,
        currentColor,
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    globalThis.addEventListener("resize", handleResize);
    globalThis.addEventListener("scroll", handleScroll);
    handleScroll();
    animate();

    return () => {
      globalThis.removeEventListener("resize", handleResize);
      globalThis.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-40"
    />
  );
});

export default ParticlesBackground;
