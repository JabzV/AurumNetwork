import { motion } from 'framer-motion';
import { StrategicPartners } from './why-aurum/StrategicPartners';
import { SocialProofSection } from './why-aurum/SocialProofSection';
import { LineDivider } from '../shared/LineDivider';

export const WhyAurumSection = () => {
  return (
    <section id="why-aurum" className="w-full bg-body">
      {/* Strategic Partners */}
      <StrategicPartners />
      <LineDivider />
      {/* Social Proof Section */}
      <SocialProofSection />
    </section>
  );
}; 