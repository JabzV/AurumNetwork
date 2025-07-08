import { useState } from 'react';
import { NavLink } from './navbar/NavLink';
import { Logo } from './navbar/Logo';
import { WhitepaperButton } from './navbar/WhitepaperButton';
import { MobileMenu } from './navbar/MobileMenu';

const navItems = [
  { href: "#home", text: "HOME" },
  { href: "#why-aurum", text: "ABOUT" },
  { href: "#discover", text: "DISCOVER" },
  { href: "#review", text: "REVIEWS" },
  { href: "#faq", text: "FAQ" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-[60px] md:h-[80px] lg:h-[100px] flex items-center px-4 sm:px-6 md:px-12 lg:px-20 bg-hero">
      {/* Logo */}
      <div className="flex items-center justify-start w-[185px] lg:w-[215px]">
        <Logo />
      </div>
      
      {/* Desktop Navigation - Absolutely centered */}
      <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 md:text-sm">
        <ul className="flex items-center space-x-0">
          {navItems.map((item, index) => (
            <NavLink 
              key={index}
              href={item.href}
              text={item.text}
              isActive={index === 0} // HOME is active by default
            />
          ))}
        </ul>
      </nav>
      
      {/* Desktop Whitepaper Button */}
      <div className="hidden md:flex items-center justify-end w-[185px] lg:w-[215px] ml-auto">
        <WhitepaperButton />
      </div>
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex flex-col space-y-1 p-2 ml-auto"
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};