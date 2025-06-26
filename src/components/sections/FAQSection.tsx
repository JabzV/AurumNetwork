import { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What is the Aurum Network Token ($AUN) and what does it represent?',
    answer: 'The Aurum Network Token ($AUN) is the native cryptocurrency of the Aurum Financial Ecosystem, bridging traditional finance and blockchain. It enables secure, transparent interaction with gold-backed assets in the digital space.'
  },
  {
    id: '2',
    question: 'How can I start earning with Aurum Network?',
    answer: 'Start earning with Aurum Network: complete KYC, buy $AUN, and stake to earn. Unlock passive income through staking, liquidity, and gold-backed DeFi rewards.'
  },
  {
    id: '3',
    question: 'What are the benefits of completing KYC verification?',
    answer: 'KYC unlocks full access to Aurum Network—boost security, raise earning limits, and access exclusive gold-backed features. Get verified to enjoy the platform\'s full potential.'
  },
  { 
    id: '4',
    question: 'How secure is the Aurum Network platform?',
    answer: 'Aurum Network ensures your assets are safe with multi-signature wallets, cold storage, regular audits, and blockchain transparency—secure, trusted, and fully transparent.'
  },
  {
    id: '5',
    question: 'What makes Aurum Network different from other DeFi platforms?',
    answer: 'Aurum Network stands out with financial education, a user-friendly platform, top-tier security, and full regulatory compliance—designed for a seamless and secure user experience.'
  }
];

const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Question Header */}
      <motion.div 
        className={`bg-[#272727] rounded-xl p-6 cursor-pointer transition-all duration-100 ease-in-out ${
          isOpen ? 'border-2 border-[#e59445]' : 'border border-[#333] hover:border-[#e59445]/50'
        }`}
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(229, 148, 69, 0.1)" }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              className="w-4 h-4 rounded-full bg-[#e59445] flex items-center justify-center transition-all duration-300"
              animate={{ scale: isOpen ? 1.1 : 1 }}
              transition={{ duration: 0.15 }}
            >
              <motion.div 
                className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${isOpen ? 'scale-75' : 'scale-100'}`}
                animate={{ scale: isOpen ? 0.75 : 1 }}
                transition={{ duration: 0.15 }}
              />
            </motion.div>
            <h3 className={`text-lg font-medium transition-all duration-300 ${isOpen ? 'text-[#e59445]' : 'text-white'}`}>
              {item.question}
            </h3>
          </div>
          <motion.div 
            className="w-4 h-4 flex items-center justify-center"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 15 15" 
              fill="none" 
              className={`transition-all duration-500 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            >
              <path 
                d="M0.9375 0.9375H13.125V13.125H0.9375V0.9375Z" 
                fill={isOpen ? '#e59445' : '#ffffff'}
                className="transition-all duration-300"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Answer Content */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="overflow-hidden"
      >
        {isOpen && (
          <div className="bg-[#272727] mt-0 rounded-b-xl p-6 border-l-2 border-r-2 border-b-2 border-[#e59445]">
            <div className="pl-4">
              <p className="text-white text-base leading-relaxed flex items-start gap-3">
                <span className="text-[#e59445] font-bold text-lg mt-0.5">{'>'}</span>
                {item.answer}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>('1');

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  return (
    <section id="faq" className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-0 flex flex-col items-center bg-body/10 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left circle */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-sm"
          style={{
            background: 'radial-gradient(circle, rgba(229, 148, 69, 0.1) 0%, rgba(229, 148, 69, 0.05) 50%, transparent 100%)'
          }}
        />
        
        {/* Bottom right circle */}
        <div 
          className="absolute bottom-20 right-10 w-28 h-28 rounded-full blur-sm"
          style={{
            background: 'radial-gradient(circle, rgba(229, 148, 69, 0.12) 0%, rgba(229, 148, 69, 0.06) 50%, transparent 100%)'
          }}
        />
        
        {/* Center small circle */}
        <div 
          className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full blur-sm"
          style={{
            background: 'radial-gradient(circle, rgba(229, 148, 69, 0.04) 0%, rgba(229, 148, 69, 0.01) 50%, transparent 100%)'
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl w-full flex flex-col items-center gap-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-5xl h-1 my-2 rounded-full bg-gradient-to-r from-[#7f5030]/0 via-[#e59445] to-[#7f5030]/0" />
        <p className="text-base md:text-lg text-neutral-300 text-center max-w-3xl mx-auto mt-2">
          Everything you need to know about Aurum Network Token
        </p>
      </motion.div>
      
      <motion.div 
        className="w-full max-w-4xl mt-12 space-y-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {faqData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.03 }}
            viewport={{ once: true }}
          >
            <FAQItem
              item={item}
              isOpen={openItem === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}; 