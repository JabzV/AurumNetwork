import { motion } from 'framer-motion';

interface StatItem {
  icon: string;
  stat: string;
  description: string;
}

interface SocialProofBlockProps {
  glowColor: string;
  mainImage: string;
  heading: string;
  stats: StatItem[];
  index: number;
  className?: string;
}

export const SocialProofBlock = ({ glowColor, mainImage, heading, stats, index, className = '' }: SocialProofBlockProps) => {
  const isEven = index % 2 === 0;
  
  const GlowingImage = () => (
    <div className="relative flex-shrink-0 w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[397px] h-[250px] xs:h-[280px] sm:h-[320px] md:h-[360px] lg:h-[397px] mx-auto lg:mx-0">
      {/* Glow Ellipse */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 'clamp(100px, 10vw, 156px)',
          height: 'clamp(100px, 10vw, 156px)',
          background: glowColor,
          filter: 'blur(80px) drop-shadow(0 0 40px ' + glowColor + ') drop-shadow(0 0 140px ' + glowColor + ') drop-shadow(0 0 220px ' + glowColor + ')',
          zIndex: 0,
        }}
      />
      {/* Main Image */}
      <img
        src={mainImage}
        alt="Social Proof Main Image"
        className="relative z-10 w-full h-full rounded-[16px] xs:rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] object-cover transition-transform duration-150 hover:scale-[1.01]"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
  );

  const Content = () => (
    <div className="flex-1 flex flex-col gap-4 xs:gap-6 md:gap-8 lg:pt-12 px-1 xs:px-2 sm:px-4 w-full lg:px-16">
      {/* Main Heading */}
      <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight font-medium">
        {heading}
      </h3>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 md:gap-8">
        {stats.map((stat, statIndex) => (
          <div key={statIndex} className="flex flex-col gap-2 xs:gap-3 md:gap-4">
            {/* Stat Icon + Text */}
            <motion.div 
              className="flex items-center gap-2 xs:gap-3"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.15 }}
            >
              <motion.img
                src={stat.icon}
                alt={stat.stat}
                className="w-[40px] h-[40px] xs:w-[48px] xs:h-[48px] sm:w-[54px] sm:h-[54px] md:w-[60px] md:h-[60px] object-contain flex-shrink-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              />
              <span className="text-white font-medium text-sm xs:text-base sm:text-lg leading-tight">
                {stat.stat}
              </span>
            </motion.div>
            
            {/* Stat Description */}
            <p className="text-neutral-300 text-xs xs:text-sm sm:text-base leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row items-center lg:items-start gap-6 xs:gap-8 md:gap-10 lg:gap-20 w-full ${className}`}>
      {/* On smaller screens (mobile/tablet), always show image first */}
      <div className="lg:hidden w-full flex flex-col gap-8">
        <GlowingImage />
        <Content />
      </div>
      
      {/* On larger screens (lg+), use alternating layout */}
      <div className="hidden lg:flex w-full">
        {(!isEven) ? (
          <>
            <Content />
            <GlowingImage />
          </>
        ) : (
          <>
            <GlowingImage />
            <Content />
          </>
        )}
      </div>
    </div>
  );
}; 