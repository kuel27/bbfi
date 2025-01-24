import React from 'react';

const HeroImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div
      style={{
        flex: 1,
        minWidth: '500px',
        maxWidth: '600px',
        position: 'relative',
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(45deg, rgba(255, 107, 0, 0.2) 0%, rgba(255, 61, 0, 0.1) 100%)',
          borderRadius: '24px',
          padding: '1rem',
          boxShadow: '0 0 60px 20px rgba(255, 107, 0, 0.15)',
        }}
      >
        <img
          src={src}
          alt="Game Logo"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
            filter: `
              drop-shadow(0 0 30px rgba(255, 107, 0, 0.4))
              contrast(110%)
              saturate(120%)
            `,
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(3deg)',
          }}
        />
      </div>
      {/* Glowing effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default HeroImage;