import { motion } from 'framer-motion';
import { StrategicPartners } from './why-aurum/StrategicPartners';
import { SocialProofSection } from './why-aurum/SocialProofSection';
import { LineDivider } from '../shared/LineDivider';

export const WhyAurumSection = () => {
  return (
    <section id="why-aurum" className="w-full bg-body">
      {/* Strategic Partners */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <StrategicPartners />
      </motion.div>
        <LineDivider />
      
      {/* Social Proof Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <SocialProofSection />
      </motion.div>
    </section>
  );
}; 