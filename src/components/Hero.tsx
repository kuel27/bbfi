import React from 'react';
import robloxIcon from '../assets/roblox.png';
import discordSvg from '../assets/discord.svg';

interface HeroProps {
  isMobile: boolean;
}

const Hero: React.FC<HeroProps> = ({ isMobile }) => {
  return (
    <div
      style={{
        flex: 1,
        maxWidth: '680px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: isMobile ? 'center' : 'flex-start',
        textAlign: isMobile ? 'center' : 'left',
        padding: isMobile ? '0 1rem' : '0',
        margin: '0 auto',
        animation: 'fadeInUp 1s ease-out',
        animationFillMode: 'both',
      }}
    >
      <h1
        style={{
          backgroundImage: 'linear-gradient(180deg, #ffd600 -12.18%, #ff3c00 103.41%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontSize: isMobile ? '2.5rem' : '4rem',
          fontWeight: 600,
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          width: '100%',
        }}
      >
        The Most Popular Geometry Dash Game on Roblox
      </h1>

      <p
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: isMobile ? '1.1rem' : '1.4rem',
          lineHeight: 1.6,
          margin: 0,
          maxWidth: isMobile ? '100%' : '90%',
        }}
      >
        Beat Bounce delivers smooth, colorful gameplay packed
        with unique mechanics and boundless creativity. Dive
        into endless possibilities with our advanced level editor
        and explore an ever-growing collection of community-
        made levels. Enjoy high-performance fun crafted for
        everyone!
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a
          href="https://www.roblox.com/games/15598056478"
          style={{
            padding: isMobile ? '1rem 2rem' : '1.5rem 3rem',
            background: 'linear-gradient(45deg, #FF6B00 0%, #FF3D00 100%)',
            color: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            width: isMobile ? '100%' : 'auto',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 20px rgba(255, 107, 0, 0.3)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 107, 0, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 107, 0, 0.3)';
          }}
        >
          <img
            src={robloxIcon}
            alt="Roblox"
            style={{
              width: isMobile ? '24px' : '32px',
              height: isMobile ? '24px' : '32px',
            }}
          />
          Play Now
        </a>

        <a
          href="https://discord.gg/dcCHHmmH8H"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: isMobile ? '1rem 2rem' : '1.5rem 3rem',
            background: 'linear-gradient(45deg, #5865F2 0%, #4752C4 100%)',
            color: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            width: isMobile ? '100%' : 'auto',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 20px rgba(88, 101, 242, 0.3)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(88, 101, 242, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(88, 101, 242, 0.3)';
          }}
        >
          <img
            src={discordSvg}
            alt="Discord"
            style={{
              width: isMobile ? '24px' : '32px',
              height: isMobile ? '24px' : '32px',
            }}
          />
          Join Discord
        </a>
      </div>
    </div>
  );
};

export default Hero;