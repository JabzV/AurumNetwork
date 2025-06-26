
import { WhitepaperButton } from './WhitepaperButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ href: string; text: string }>;
}

export const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-hero shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-[#FBBF00] transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className={`
                      block py-3 px-4 text-lg font-medium transition-colors duration-200
                      ${index === 0 
                        ? 'text-[#FBBF00]' 
                        : 'text-white hover:text-[#FBBF00]'
                      }
                    `}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Whitepaper Button */}
          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full"
            >
              <WhitepaperButton />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}; 