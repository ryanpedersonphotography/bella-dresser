import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface ParticleBackgroundProps {
  count?: number;
  color?: string;
  maxSpeed?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  count = 50,
  color = '#FF00FF',
  maxSpeed = 0.5,
  minSize = 1,
  maxSize = 4,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: minSize + Math.random() * (maxSize - minSize),
        speedX: (Math.random() - 0.5) * maxSpeed,
        speedY: (Math.random() - 0.5) * maxSpeed,
        color,
        opacity: 0.2 + Math.random() * 0.6,
        pulse: 0,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }
    
    return particles;
  };

  // Update and draw particles
  const updateParticles = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    particles: Particle[]
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach((particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Update pulse effect
      particle.pulse += particle.pulseSpeed;
      if (particle.pulse > 1) {
        particle.pulse = 0;
      }
      
      // Calculate pulsing size and opacity
      const pulseEffect = Math.sin(particle.pulse * Math.PI * 2);
      const currentSize = particle.size * (1 + pulseEffect * 0.2);
      const currentOpacity = particle.opacity * (0.8 + pulseEffect * 0.2);
      
      // Bounce off edges with a small buffer
      if (particle.x < -50 || particle.x > width + 50) {
        particle.speedX *= -1;
        particle.x = Math.max(-50, Math.min(width + 50, particle.x));
      }
      
      if (particle.y < -50 || particle.y > height + 50) {
        particle.speedY *= -1;
        particle.y = Math.max(-50, Math.min(height + 50, particle.y));
      }
      
      // Draw particle with glow effect
      ctx.beginPath();
      
      // Add glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentSize * 2
      );
      gradient.addColorStop(0, `${particle.color}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${particle.color}00`);
      
      ctx.fillStyle = gradient;
      ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw the particle core
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`;
      ctx.fill();
    });
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    updateParticles(ctx, canvas.width, canvas.height, particlesRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    particlesRef.current = initParticles(canvas.width, canvas.height);
  };

  // Setup and cleanup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Initialize particles
    particlesRef.current = initParticles(canvas.width, canvas.height);
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-background ${className}`}
      style={{ display: 'block' }}
    />
  );
};

export default ParticleBackground;