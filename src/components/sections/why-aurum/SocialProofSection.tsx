import { motion } from 'framer-motion';
import { SocialProofBlock } from './SocialProofBlock';

const socialProofData = [
  {
    id: 1,
    glowColor: 'rgba(255,187,128,0.7)',
    mainImage: 'assets/whyaurum1.webp',
    heading: "World's Fastest-Growing Gold Supply Chain Network",
    stats: [
      {
        icon: 'assets/w1i1.png',
        stat: '3.3K+ Verified',
        description: 'Backed by 3.3K+ KYC-Verified Members. Join a growing and trusted community where every member is verified.'
      },
      {
        icon: 'assets/w1i2.png',
        stat: '20.8k Transactions',
        description: '20.8K+ Transactions and Rapidly Growing. Reflecting strong adoption and trust in our gold-backed ecosystem.'
      }
    ]
  },
  {
    id: 2,
    glowColor: 'rgba(255,187,128,0.7)',
    mainImage: 'assets/whyaurum2.webp',
    heading: 'Aurum Network Makes Gold A Blockchain-Powered Asset.',
    stats: [
      {
        icon: 'assets/w2i1.png',
        stat: 'Gold Backed Transactions',
        description: '$AUN enables everyday payments backed by gold, preserving value and protecting against inflation.'
      },
      {
        icon: 'assets/w2i2.png',
        stat: 'Gold Ownership',
        description: 'Lowering barriers to gold ownership, making it secure, versatile, and accessible to everyone'
      }
    ]
  },
  {
    id: 3,
    glowColor: 'rgba(255,187,128,0.7)',
    mainImage: 'assets/whyaurum3.webp',
    heading: 'The Future of Gold With Aurum: Secure, Scalable, Seamless.',
    stats: [
      {
        icon: 'assets/w3i1.png',
        stat: 'Ecosystem & Expansion',
        description: '$AUN drives Gold API adoption across DeFi, GameFi, commerce, and rewards ecosystem participants.'
      },
      {
        icon: 'assets/w3i2.png',
        stat: 'Safe Transactions',
        description: 'Every gold-backed transaction is secure, transparent, and protected by industry-standard encryption.'
      }
    ]
  }
];

export const SocialProofSection = () => {
  return (
    <div className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {socialProofData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SocialProofBlock {...item} index={index} className="my-8 md:my-12 lg:my-16"/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}; 