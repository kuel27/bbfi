import React from 'react';

interface HeroImageProps {
  src: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        minWidth: '500px',
        maxWidth: '600px',
      }}
    >
      <img
        src={src}
        alt="Beat Bounce Logo"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '500px',
          filter: 'drop-shadow(0 0 15px rgba(255, 107, 0, 0.6))',
        }}
      />
    </div>
  );
};

export default HeroImage;
