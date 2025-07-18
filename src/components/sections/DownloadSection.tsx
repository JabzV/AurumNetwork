import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center bg-body relative">
      {/* Background Glowing Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow 1 */}
        <div 
          className="absolute top-20 right-1/4 w-28 h-28 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 187, 128, 0.3) 0%, rgba(255, 187, 128, 0.1) 50%, transparent 100%)',
            boxShadow: '0 0 23px rgba(255, 187, 128, 0.5), 0 0 46px rgba(255, 187, 128, 0.3), 0 0 162px rgba(255, 187, 128, 0.2), 0 0 250px rgba(255, 187, 128, 0.1)'
          }}
        />
        
        {/* Glow 2 */}
        <div 
          className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 187, 128, 0.4) 0%, rgba(255, 187, 128, 0.15) 50%, transparent 100%)',
            boxShadow: '0 0 23px rgba(255, 187, 128, 0.6), 0 0 46px rgba(255, 187, 128, 0.4), 0 0 162px rgba(255, 187, 128, 0.3), 0 0 250px rgba(255, 187, 128, 0.2)'
          }}
        />
      </div>

      <motion.div 
        ref={ref}
        className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-6 max-w-2xl order-2 lg:order-1 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Download and Access Aurum Platform App
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            Get the Aurum Platform App to seamlessly oversee your token, receive real-time updates, and connect with our engaged community.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Web App Button */}
            <motion.a 
              href="https://aurumplatform.io/" 
              className="flex items-center w-full sm:w-auto px-4 py-2 bg-black border border-white rounded-lg transition-colors duration-300 hover:bg-[#181818] gap-4 min-w-[200px]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              {/* Gold Globe Icon */}
              <img 
                src="/assets/Gold-Globe-PNG-Photo.png" 
                alt="Web App" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                style={{ minWidth: '2.5rem' }}
              />
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/70 tracking-widest font-medium uppercase">Access our</span>
                <span className="text-lg text-white font-bold leading-tight">Web App</span>
              </div>
            </motion.a>
            
            {/* App Store Button */}
            <motion.a 
              href="#" 
              className="flex items-center w-full sm:w-auto px-4 py-2 bg-black border border-white rounded-lg transition-colors duration-300 hover:bg-[#181818] gap-4 min-w-[200px]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              {/* Official Apple Logo */}
              <img 
                src="/assets/apple-logo-png_seeklogo-9833.png" 
                alt="App Store" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                style={{ minWidth: '2.5rem' }}
              />
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/70 tracking-widest font-medium uppercase">Get it on</span>
                <span className="text-lg text-white font-bold leading-tight">App Store</span>
              </div>
            </motion.a>
            
            {/* Google Play Button */}
            <motion.a 
              href="#" 
              className="flex items-center w-full sm:w-auto px-4 py-2 bg-black border border-white rounded-lg transition-colors duration-300 hover:bg-[#181818] gap-4 min-w-[200px]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              {/* Google Play Image Icon */}
              <img 
                src="/assets/Google_Play-Icon-Logo.wine.png" 
                alt="Google Play" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                style={{ minWidth: '2.5rem' }}
              />
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/70 tracking-widest font-medium uppercase">Get it on</span>
                <span className="text-lg text-white font-bold leading-tight">Google Play</span>
              </div>
            </motion.a>
          </div>
        </div>
        
        {/* Right Mobile Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full mb-8 lg:mb-0">
          <motion.div 
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[400px] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Glow Effect Behind Phone */}
            <div 
              className="absolute inset-0 w-full h-full rounded-3xl blur-2xl -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(229, 148, 69, 0.3) 0%, rgba(229, 148, 69, 0.1) 50%, transparent 70%)'
              }}
            />
            <img 
              src="/assets/phone-mockup.png" 
              alt="Aurum Network Mobile App" 
              className="w-full h-[400px] object-contain relative z-10"
              onError={e => (e.currentTarget.style.display = 'none')}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}; 