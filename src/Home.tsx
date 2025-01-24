import React from 'react';
import useIsMobile from './hooks/useIsMobile';
import gameIcon from './assets/red.png';
import Hero from './components/Hero';
import HeroImage from './components/HeroImage';
import ParticlesBackground from './components/ParticlesBackground';

const Home: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: `
        linear-gradient(135deg, 
            rgba(10, 10, 10, 1) 0%, 
            rgba(0, 0, 0, 1) 100%),
        radial-gradient(circle at 50% 100%, 
            rgba(255, 107, 0, 0.05) 0%,
            transparent 30%)
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '2rem 1.5rem' : '4rem',
        textAlign: isMobile ? 'center' : 'left',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Add ParticlesBackground component here */}
      <ParticlesBackground />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          gap: isMobile ? '2.5rem' : '6rem',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
          animation: 'fadeInUp 1s ease-out',
          animationFillMode: 'both',
        }}
      >
        <Hero isMobile={isMobile} />
        {!isMobile && <HeroImage src={gameIcon} />}
      </div>
    </div>
  );
};

export default Home;