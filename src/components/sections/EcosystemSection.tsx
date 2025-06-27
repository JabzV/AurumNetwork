import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Gold Sparkle Component
const GoldSparkle = ({ delay = 0, duration = 3, size = 4, x = 0, y = 0 }: {
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
);

export const EcosystemSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Generate sparkle data only once
  const sparkles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      delay: i * 0.3,
      duration: 2 + Math.random() * 2,
      size: 3 + Math.random() * 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const isFormValid = formData.name.trim() !== '' && 
                       formData.email.trim() !== '' && 
                       formData.phone.trim() !== '' && 
                       formData.message.trim() !== '';
    
    if (isFormValid && formRef.current) {
      emailjs.sendForm(
        'service_m6iobec',
        'template_n5iw1y5',
        formRef.current,
        '7RvBpfvheXDm5kbA_'
      )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        // Redirect to another page after successful email
        window.location.href = 'https://webinar.aurumnetwork.io/';
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again.');
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="learn-more" className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-0 flex flex-col items-center bg-body/10 relative">
      {/* Animated Gold Sparkles */}
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
      
      {/* Heading and Divider */}
      <motion.div 
        ref={ref}
        className="max-w-7xl w-full flex flex-col items-center gap-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
          Get Started And Learn More
        </h2>
        <div className="w-full max-w-5xl h-1 my-2 rounded-full" style={{
          background: 'linear-gradient(90deg, rgba(127,80,48,0) 0%, #e59445 50%, rgba(127,80,48,0) 100%)'
        }} />
        <p className="text-base md:text-lg text-neutral-300 text-center max-w-3xl mx-auto mt-2">
          Explore how Aurum Network is transforming the gold industry. See the technology, community, and vision driving the future of gold.
        </p>
      </motion.div>

      {/* Inquiry Form Card */}
      <motion.div 
        className="w-full flex justify-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <motion.div
          className="w-full max-w-xl p-[2px] rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #e59445 0%, #7f5026 100%)',
          }}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.15 }}
        >
          <form onSubmit={sendEmail} ref={formRef} className="w-full bg-[#181a1d] rounded-3xl p-10 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Name */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  className="bg-[#101113] border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e59445] transition" 
                  placeholder="Enter your name" 
                />
              </div>
              {/* Email */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="bg-[#101113] border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e59445] transition" 
                  placeholder="Enter your email" 
                />
              </div>
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-white text-sm font-medium">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required 
                className="bg-[#101113] border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e59445] transition" 
                placeholder="Enter your phone number" 
              />
            </div>
            {/* Message */}
            <div className="flex flex-col gap-2 mb-8">
              <label className="text-white text-sm font-medium">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required 
                className="bg-[#101113] border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e59445] transition min-h-[100px] resize-none" 
                placeholder="Type your message..." 
              />
            </div>
            {/* Submit Button */}
            <motion.button 
              type="submit" 
              className="w-full py-3 rounded-lg font-bold text-white text-lg transition-all 
              duration-300 bg-gradient-to-r from-[#e59445] to-[#7f5026] hover:to-[#e59445] 
              active:from-[#7f5026] active:to-[#a86a1a] focus:outline-none"
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}; 