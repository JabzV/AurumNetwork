import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What is Aurum Network?',
    answer: 'Aurum Network is a revolutionary gold supply chain ecosystem that leverages blockchain technology to make gold ownership and transactions accessible to everyone. It combines traditional gold investment with modern digital infrastructure.'
  },
  {
    id: '2',
    question: 'How does Aurum Network work?',
    answer: 'Aurum Network uses blockchain technology to tokenize physical gold, creating a secure and transparent system for gold ownership and transactions. Each token represents a specific amount of physical gold stored in secure facilities.'
  },
  {
    id: '3',
    question: 'Is my gold investment secure?',
    answer: 'Yes, Aurum Network implements industry-standard security measures and works with verified gold suppliers and storage facilities. All gold is insured and audited regularly to ensure maximum security for investors.'
  },
  {
    id: '4',
    question: 'How can I start investing in Aurum Network?',
    answer: 'You can start by downloading the Aurum Platform App, completing the KYC verification process, and purchasing $AUN tokens. The platform provides a user-friendly interface for managing your gold investments.'
  },
  {
    id: '5',
    question: 'What are the benefits of using Aurum Network?',
    answer: 'Aurum Network offers lower barriers to gold ownership, secure transactions, real-time tracking, and the ability to use gold as a payment method. It also provides access to a growing ecosystem of gold-backed services.'
  },
  {
    id: '6',
    question: 'Can I redeem my tokens for physical gold?',
    answer: 'Yes, Aurum Network allows token holders to redeem their $AUN tokens for physical gold through our verified partners. The redemption process is secure and transparent, with clear terms and conditions.'
  }
];

const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="w-full">
      {/* Question Header */}
      <div 
        className={`bg-[#272727] rounded-xl p-6 cursor-pointer hover:bg-[rgba(229,148,69,0.1)] active:scale-98 ${
          isOpen ? 'border-2 border-[#e59445]' : 'border border-[#333] hover:border-[#e59445]/50'
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div 
              className={`w-4 h-4 rounded-full bg-[#e59445] flex items-center justify-center transition-all duration-200 ${
                isOpen ? 'scale-110' : 'scale-100'
              }`}
            >
              <div 
                className={`w-2 h-2 bg-white rounded-full transition-all duration-200 ${
                  isOpen ? 'scale-75' : 'scale-100'
                }`}
              />
            </div>
            <h3 className={`text-lg font-medium transition-all duration-200 ${isOpen ? 'text-[#e59445]' : 'text-white'}`}>
              {item.question}
            </h3>
          </div>
          <div className="w-4 h-4 flex items-center justify-center">
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 15 15" 
              fill="none" 
              className={`transition-all duration-200 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            >
              <path 
                d="M0.9375 0.9375H13.125V13.125H0.9375V0.9375Z" 
                fill={isOpen ? '#e59445' : '#ffffff'}
                className="transition-all duration-200"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Answer Content */}
      <div className="overflow-hidden">
        {isOpen && (
          <div className={`bg-[#272727] mt-0 rounded-b-xl p-6 border-l-2 border-r-2 border-b-2 border-[#e59445] transition-all duration-300`}>
            <div className="pl-4">
              <p className="text-white text-base leading-relaxed flex items-start gap-3">
                <span className="text-[#e59445] font-bold text-lg mt-0.5">{'>'}</span>
                {item.answer}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-0 flex flex-col items-center bg-body relative">
      {/* Background Glowing Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow 1 */}
        <div 
          className="absolute top-20 left-1/4 w-28 h-28 rounded-full blur-3xl"
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

      <div className="max-w-7xl w-full flex flex-col items-center gap-4 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-5xl h-1 my-2 rounded-full bg-gradient-to-r from-[#7f5030]/0 via-[#e59445] to-[#7f5030]/0" />
        <p className="text-base md:text-lg text-neutral-300 text-center max-w-3xl mx-auto mt-2">
          Everything you need to know about Aurum Network Token
        </p>
      </div>
      
      <div className="w-full max-w-4xl mt-12 space-y-4 relative z-10">
        {faqData.map((item) => (
          <div key={item.id}>
            <FAQItem
              item={item}
              isOpen={openItem === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}; 