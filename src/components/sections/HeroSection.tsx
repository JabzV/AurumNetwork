import { motion } from 'framer-motion';
import { useMemo, memo } from 'react';
import { HeroContent, HeroBackground, HeroButtons } from './hero';

// Memoized Gold Sparkle Component
const GoldSparkle = memo(({ delay = 0, duration = 3, size = 4, x = 0, y = 0 }: {
  delay?: number;
  duration?: number;
  size?: number;
  x?: number;
  y?: number;
}) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      willChange: 'transform, opacity',
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -20, -40],
      x: [0, Math.random() * 10 - 5, Math.random() * 20 - 10],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div 
      className="w-full h-full rounded-full shadow-lg"
      style={{
        background: 'linear-gradient(to bottom right, rgb(120,81,45), rgb(222,150,83))',
        boxShadow: '0 4px 6px -1px rgba(222, 150, 83, 0.5)'
      }}
    />
  </motion.div>
));

export const HeroSection = () => {
  // Memoize sparkle props so random values are only generated once
  const sparkles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const delay = i * 0.8;
      const duration = 3 + Math.random() * 2;
      const size = 3 + Math.random() * 3;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      // Memoize the random animation values for each sparkle
      const animX = [0, Math.random() * 10 - 5, Math.random() * 20 - 10];
      const animY = [0, -20, -40];
      return { id: i, delay, duration, size, x, y, animX, animY };
    });
  }, []);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[909px] overflow-hidden bg-hero">
      {/* Background Image with Blur Effect */}
      <HeroBackground />
      
      {/* Optimized Animated Gold Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {sparkles.map((sparkle) => (
          <GoldSparkle
            key={sparkle.id}
            delay={sparkle.delay}
            duration={sparkle.duration}
            size={sparkle.size}
            x={sparkle.x}
            y={sparkle.y}
          />
        ))}
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-[600px] md:min-h-[700px] lg:min-h-[909px] px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div 
          className="flex flex-col space-y-4 md:space-y-6 w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Hero Text Content */}
          <HeroContent />
          
          {/* Hero Buttons */}
          <HeroButtons />
        </motion.div>    
      </div>
    </section>
  );
}; 