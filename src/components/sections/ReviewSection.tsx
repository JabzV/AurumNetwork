import { motion } from 'framer-motion';

const testimonialsRow1 = [
  {
    name: 'Sarah Pasquito',
    role: 'RN, Physician',
    avatar: '/assets/avatar5.png',
    text: 'I\'m So Glad I Joined Aurum Network.'
  },
  {
    name: 'Jake Dela Cruz',
    role: 'Government Employee',
    avatar: '/assets/avatar6.png',
    text: 'Aurum Network Helped Me To Be Financially Free.'
  },
  {
    name: 'Selena Perez',
    role: 'Teacher',
    avatar: '/assets/avatar7.png',
    text: 'It Continues To Amaze Me Everyday.'
  },
  {
    name: 'Lara Gomez',
    role: 'Business Owner',
    avatar: '/assets/avatar8.png',
    text: "I'm Now Earning More Than Ever!"
  },
];

const testimonialsRow2 = [
  {
    name: 'Jelian Escudero',
    role: 'Accountant, RN, Entrepreneur',
    avatar: '/assets/avatar1.png',
    text: 'Aurum Empowered Me With Financial Literacy.'
  },
  {
    name: 'Ernelyn De Castro',
    role: 'Certified Public Accountant',
    avatar: '/assets/avatar2.png',
    text: "I'm Confident Aurum Will Secure My Retirement."
  },
  {
    name: 'Gemma Sanoria',
    role: 'Government Employee',
    avatar: '/assets/avatar3.png',
    text: 'Completely Changed How I Understand Money.'
  },
  {
    name: 'Rafael Durias',
    role: 'Business Man',
    avatar: '/assets/avatar4.png',
    text: 'Helped Restored My Finances And Family Life.'
  }
];

const TestimonialCard = ({ name, role, avatar, text }: any) => (
  <div className="bg-[#272727] rounded-2xl p-6 w-[320px] flex-shrink-0 flex flex-col gap-4 shadow-lg border border-[#333]">
    <div className="text-white text-xl  flex-grow">{text}</div>
    <div className="flex items-center gap-4 mt-2">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover" onError={e => (e.currentTarget.style.display = 'none')} />
      <div>
        <div className="text-white  text-lg">{name}</div>
        <div className="text-[rgb(222,150,83)] text-sm font-medium">{role}</div>
      </div>
    </div>
    
  </div>
);

const getRow = (testimonials: any[], reverse = false) => {
  // Duplicate testimonials for seamless loop
  const row = [...testimonials, ...testimonials];
  return (
    <div
      className={`flex gap-8 animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`}
      style={{ minWidth: 'max-content' }}
    >
      {row.map((t, i) => (
        <TestimonialCard key={t.name + i} {...t} />
      ))}
    </div>
  );
};

export const ReviewSection = () => {
  return (
    <section id="review" className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-0 flex flex-col items-center bg-body/10 relative overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center">Hear From Our KYC Verified Users</h2>
        <div className="w-full max-w-5xl h-1 my-2 rounded-full bg-gradient-to-r from-[#7f5030]/0 via-[#e59445] to-[#7f5030]/0" />
        <p className="text-base md:text-lg text-neutral-300 text-center max-w-3xl mx-auto mt-2">
          Our growing community speaks for itself. Discover how Aurum Network is creating real impact.
        </p>
      </div>
      {/* Row 1: Right to Left */}
      <div className="w-full mt-12 overflow-x-hidden">
        <div className="flex flex-nowrap" style={{ width: 'max-content' }}>
          {getRow(testimonialsRow1)}
        </div>
      </div>
      {/* Row 2: Left to Right */}
      <div className="w-full mt-8 overflow-x-hidden">
        <div className="flex flex-nowrap" style={{ width: 'max-content' }}>
          {getRow(testimonialsRow2, true)}
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
}; 