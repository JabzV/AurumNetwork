import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'Telegram', href: '#', icon: '📱' },
    { name: 'Discord', href: '#', icon: '🎮' },
    { name: 'Medium', href: '#', icon: '📝' },
  ];

  return (
    <footer className="w-full bg-[#181a1d] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/AurumLogo.png" alt="Aurum Network" className="h-8" />
            <p className="text-neutral-400 text-sm text-center md:text-left max-w-xs">
              Transforming the gold industry through blockchain technology and community-driven innovation.
            </p>
          </div>

          {/* Social Links and Footer Links */}
          <div className="flex flex-col items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 hover:bg-[#e59445] rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-[#e59445] text-sm transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-sm text-center">
            © {currentYear} Aurum Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
