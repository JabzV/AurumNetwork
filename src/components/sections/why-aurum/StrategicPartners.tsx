import { motion } from 'framer-motion';

export const StrategicPartners = () => {
  return (
    <div className="w-full py-8 px-4 sm:px-6 md:px-12 lg:px-20 mb-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <h2 className="text-sm lg:text-base text-white text-center mb-12 mt-6">
          Strategic Partners from companies all around the world
        </h2>
        
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32">
          {/* QMB Partner */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
          >
            <img 
              src="assets/sp1.png"
              alt="QMB Strategic Partner"
              className="h-12 md:h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
          
          {/* QMEI Partner */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
          >
            <img 
              src="assets/sp2.png"
              alt="QMEI Strategic Partner"
              className="h-12 md:h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
          
          {/* Perth Mint Partner */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
          >
            <img 
              src="assets/sp3.png"
              alt="Perth Mint Strategic Partner"
              className="h-12 md:h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}; 