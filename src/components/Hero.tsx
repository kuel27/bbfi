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
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: '1.5rem',
        justifyContent: 'space-between',
      }}
    >
      <h1
        style={{
          backgroundImage: 'linear-gradient(180deg, #ffa600 -12.18%, #ff3c00 103.41%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontSize: isMobile ? '2rem' : '3.5rem',
          fontWeight: 'bold',
          margin: '0 0 1.5rem 0',
          lineHeight: '1.2',
        }}
      >
        The most popular Geometry Dash game on Roblox
      </h1>

      <p
        style={{
          color: '#ffffff',
          fontSize: isMobile ? '1rem' : '1.3rem',
          lineHeight: '1.5',
          margin: '0 0 2rem 0',
        }}
      >
        Experience smooth, colorful gameplay with unique mechanics and endless
        creativity through our advanced level editor and community-made levels.
        Play and enjoy high-performance fun designed for everyone!
      </p>

      {/* CTA Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'center' : 'flex-start',
        }}
      >
        {/* Play Now button */}
        <a
          href="https://www.roblox.com/games/15598056478"
          style={{
            padding: isMobile ? '0.8rem 1.5rem' : '1.25rem 2.5rem',
            background: 'linear-gradient(45deg, #FF6B00, #FF3D00)',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: isMobile ? '1rem' : '1.25rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            width: isMobile ? '100%' : 'auto',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 0, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <img
            src={robloxIcon}
            alt="Roblox"
            style={{
              width: isMobile ? '20px' : '28px',
              height: isMobile ? '20px' : '28px',
            }}
          />
          Play Now
        </a>

        {/* Discord button */}
        <a
          href="https://discord.gg/dcCHHmmH8H"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: isMobile ? '0.8rem 1.5rem' : '1.25rem 2.5rem',
            background: 'linear-gradient(45deg, #5865F2, #4752C4)',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: isMobile ? '1rem' : '1.25rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            width: isMobile ? '100%' : 'auto',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(88, 101, 242, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <img
            src={discordSvg}
            alt="Discord"
            style={{
              width: isMobile ? '20px' : '28px',
              height: isMobile ? '20px' : '28px',
            }}
          />
          Discord
        </a>
      </div>
    </div>
  );
};

export default Hero;
