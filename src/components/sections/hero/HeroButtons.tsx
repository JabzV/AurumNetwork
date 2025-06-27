import { motion } from 'framer-motion';

export const HeroButtons = () => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-5 lg:space-x-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      {/* Get Started Button - Gradient */}
      <motion.a 
        href="#learn-more" 
        className="w-full sm:w-auto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <button className="
          flex items-center justify-center 
          w-full sm:w-[240px] md:w-[240px] lg:w-[240px] 
          h-[44px] sm:h-[46px] md:h-[48px] 
          text-white text-base sm:text-lg transition-all 
          duration-300 bg-gradient-to-r from-[#e59445] to-[#7f5026] hover:to-[#e59445] 
          active:from-[#7f5026] active:to-[#a86a1a] focus:outline-none rounded-[320px] cursor-pointer
        ">
          Get Started
        </button>
      </motion.a>
      
      {/* Check the Whitepaper Button - Outlined */}
      <motion.a 
        href="https://aurum-network.gitbook.io/aurum-network" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-full sm:w-auto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <button className="
          flex items-center justify-center 
          w-full sm:w-[240px] md:w-[240px] lg:w-[240px] 
          h-[44px] sm:h-[46px] md:h-[50px] 
          border border-white 
          text-white font-medium text-base sm:text-lg
          rounded-[320px] 
          transition-all duration-200 
          hover:bg-white hover:text-black cursor-pointer
        ">
          Check the Whitepaper
        </button>
      </motion.a>
    </motion.div>
  );
}; 