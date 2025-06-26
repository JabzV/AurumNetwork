const socialLinks = [
  { href: 'https://www.facebook.com/aurumnetworkofficial', label: 'Facebook', icon: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M17.525 8.999h-3.025V7.5c0-.482.393-.875.875-.875h2.15a.75.75 0 0 0 0-1.5h-2.15A2.375 2.375 0 0 0 12.025 7.5v1.499H10.5a.75.75 0 0 0 0 1.5h1.525V18a.75.75 0 0 0 1.5 0V10.5h2a.75.75 0 0 0 0-1.5Z" fill="#fff"/></svg>
  ) },
  { href: 'https://www.instagram.com/aurumnetworkofficial/', label: 'Instagram', icon: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" x="4" y="4" rx="4" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="2"/><circle cx="16.5" cy="7.5" r="1" fill="#fff"/></svg>
  ) },
  { href: 'https://x.com/aurumnetworkhq', label: 'X', icon: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M7 7l10 10M17 7L7 17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { href: 'https://www.linkedin.com/company/aurumneworkofficial/', label: 'LinkedIn', icon: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="2"/><path d="M8 11v5M8 8v.01M12 11v5m0 0v-2.5a2.5 2.5 0 0 1 5 0V16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { href: 'https://t.me/+ZjoFH1LibLRhZjg1', label: 'Telegram', icon: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M20.944 4.438a1.5 1.5 0 0 0-1.64-.217L4.5 11.5a1.5 1.5 0 0 0 .13 2.77l3.47 1.23 1.23 3.47a1.5 1.5 0 0 0 2.77.13l7.28-14.804a1.5 1.5 0 0 0-.436-1.858Z" fill="#fff"/></svg>
  ) },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent pt-4 pb-8 px-4 flex flex-col items-center relative z-10">
      <div className="max-w-7xl w-full flex flex-row justify-center md:justify-between items-start mx-auto">
        {/* Logo and Description */}
        <div className="flex flex-col items-center sm:items-start gap-4 max-w-md">
          <img src="/assets/aurum-network-white.webp" alt="Aurum Network Logo" className="w-[270px] h-auto" />
          <p className="text-neutral-200 text-base max-w-xs text-center sm:text-left">
            $AUN (Aurum Network Token) is the native cryptocurrency of the Aurum Platform Ecosystem designed to power various utilities and enhance user engagement across its platforms.
          </p>
          {/* Social Icons */}
          <div className="flex gap-6 mt-2 mb-4">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label} className="w-12 h-12 rounded-full flex items-center justify-center" style={{background: '#8a6032'}} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
          {/* Links Columns - Positioned under social icons on smaller screens */}
          <div className="flex flex-row items-center sm:items-start gap-8 sm:gap-x-24 mt-4 sm:mt-0 sm:hidden">
            {/* Useful Links */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-white text-lg font-semibold mb-4 text-center sm:text-left">Useful Links</h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li><a href="#" className="text-neutral-300 hover:text-[#e59445] transition">Home</a></li>
                <li><a href="#why-aurum" className="text-neutral-300 hover:text-[#e59445] transition">Why Aurum</a></li>
                <li><a href="#discover" className="text-neutral-300 hover:text-[#e59445] transition">Discover</a></li>
                <li><a href="#reviews" className="text-neutral-300 hover:text-[#e59445] transition">Reviews</a></li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-white text-lg font-semibold mb-4 text-center sm:text-left">Quick Links</h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li><a href="https://aurumnetwork.io/blog/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#e59445] transition">Blog</a></li>
                <li><a href="https://aurumnetwork.io/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#e59445] transition">Privacy Policy</a></li>
                <li><a href="#faq" className="text-neutral-300 hover:text-[#e59445] transition">FAQ</a></li>
                <li><a href="#learn-more" className="text-neutral-300 hover:text-[#e59445] transition">Learn More</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Links Columns - Desktop version */}
        <div className="hidden sm:flex flex-row items-center sm:items-start gap-8 sm:gap-x-24 mt-16">
          {/* Useful Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white text-lg font-semibold mb-4 text-center sm:text-left">Useful Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li><a href="#home" className="text-neutral-300 hover:text-[#e59445] transition">Home</a></li>
              <li><a href="#why-aurum" className="text-neutral-300 hover:text-[#e59445] transition">Why Aurum</a></li>
              <li><a href="#discover" className="text-neutral-300 hover:text-[#e59445] transition">Discover</a></li>
              <li><a href="#reviews" className="text-neutral-300 hover:text-[#e59445] transition">Reviews</a></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white text-lg font-semibold mb-4 text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li><a href="https://aurumnetwork.io/blog/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#e59445] transition">Blog</a></li>
              <li><a href="https://aurumnetwork.io/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#e59445] transition">Privacy Policy</a></li>
              <li><a href="#faq" className="text-neutral-300 hover:text-[#e59445] transition">FAQ</a></li>
              <li><a href="#learn-more" className="text-neutral-300 hover:text-[#e59445] transition">Learn More</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full max-w-6xl h-1 my-8 rounded-full" style={{
        background: 'linear-gradient(90deg, rgba(127,80,48,0) 0%, #e59445 50%, rgba(127,80,48,0) 100%)'
      }} />
      {/* Copyright */}
      <div className="w-full flex justify-center">
        <p className="text-white text-center text-sm opacity-80">
          Copyright © 2025 Aurum Network | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
