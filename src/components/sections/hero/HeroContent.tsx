import { motion } from 'framer-motion';

export const HeroContent = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 max-w-full lg:max-w-[711px]">
      {/* Main Heading */}
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.span 
          className="bg-[linear-gradient(to_right,rgb(120,81,45),rgb(222,150,83))] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Gold
        </motion.span>
        {" "}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Monetization
        </motion.span>
        <br />
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Made Simple for
        </motion.span>
        <br />
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Everyone.
        </motion.span>
      </motion.h1>
      
      {/* Description */}
      <motion.p 
        className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-full lg:max-w-[551px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Join the gold revolution with LivesWealth — empowering you to unlock the full value of the world's first gold supply chain ecosystem through Aurum Network.
      </motion.p>
    </div>
  );
}; 