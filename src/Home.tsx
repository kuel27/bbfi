import React from 'react';
import useIsMobile from './hooks/useIsMobile';

import gameIcon from './assets/red.png';

import Hero from './components/Hero';
import HeroImage from './components/HeroImage';

const Home: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #121212 0%, #000000 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '2rem 1.5rem' : '2rem',
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          gap: isMobile ? '2.5rem' : '4rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Hero Text & Buttons */}
        <Hero isMobile={isMobile} />

        {/* Image (hidden on mobile) */}
        {!isMobile && (
          <HeroImage src={gameIcon} />
        )}
      </div>
    </div>
  );
};

export default Home;
