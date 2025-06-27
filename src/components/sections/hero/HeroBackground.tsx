import { useEffect, useState } from 'react';

export const HeroBackground = () => {
  const [translateX, setTranslateX] = useState('21%');
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setTranslateX('0%');
        setShowBlur(false);
      } else {
        setTranslateX('15%');
        setShowBlur(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src="assets/image2.webp"
        alt="Aurum Network Ecosystem Platform"
        className="w-full h-full object-cover"
        style={{
          transform: `scale(1.2) translateX(${translateX})`,
          willChange: 'transform',
        }}
      />

      {/* Left edge blur for seamless background transition */}
      {showBlur && (
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(0, 0, 0, 0.8) 0%,
                rgba(0, 0, 0, 0.6) 5%,
                rgba(0, 0, 0, 0.4) 10%,
                rgba(0, 0, 0, 0.2) 15%,
                rgba(0, 0, 0, 0.1) 20%,
                rgba(0, 0, 0, 0) 25%
              )
            `,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            mask: 'linear-gradient(to right, black 0%, black 25%, transparent 25%)',
            WebkitMask: 'linear-gradient(to right, black 0%, black 25%, transparent 25%)',
          }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};
