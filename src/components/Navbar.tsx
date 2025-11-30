import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If on blog page, go back to home first
    if (window.location.hash.startsWith('#blog/')) {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const goHome = () => {
    setIsOpen(false);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-3 md:px-6 pt-8 md:pt-12 max-w-full overflow-hidden">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 max-w-full"
        style={{
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        <div className="px-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={goHome}
            className="flex items-center gap-2 md:gap-3 flex-shrink min-w-0"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={isScrolled ? "/logo1.png" : "/logo.png"}
              alt="Maid Placement Agency Baby Sitter Logo" 
              className="h-8 md:h-12 w-auto transition-opacity duration-500 flex-shrink-0"
              onError={(e) => {
                // Fallback if logo not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg items-center justify-center hidden">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className={`font-bold text-sm md:text-base lg:text-xl transition-colors duration-500 truncate ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>Maid Placement Agency Baby Sitter</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={goHome}
              className={`font-medium transition-colors duration-500 ${
                isScrolled ? 'text-gray-900 hover:text-indigo-600' : 'text-white hover:text-indigo-400'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors duration-500 ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className={`transition-colors duration-500 ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`transition-colors duration-500 ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`transition-colors duration-500 ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
            >
              FAQ
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <motion.a
              href="https://wa.me/919971691558?text=Hi%2C%20I%20need%20baby%20care%20services.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            >
              CONTACT US
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                →
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            style={{ minWidth: '44px', minHeight: '44px' }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden py-4 border-t transition-colors duration-500 ${
              isScrolled ? 'border-gray-200' : 'border-slate-700'
            }`}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={goHome}
                className={`font-medium py-2 text-left transition-colors duration-500 ${
                  isScrolled ? 'text-gray-900 hover:text-indigo-600' : 'text-white hover:text-indigo-400'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`py-2 text-left transition-colors duration-500 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className={`py-2 text-left transition-colors duration-500 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`py-2 text-left transition-colors duration-500 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`py-2 text-left transition-colors duration-500 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
                }`}
              >
                FAQ
              </button>
              <a
                href="https://wa.me/919971691558?text=Hi%2C%20I%20need%20baby%20care%20services.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors text-center mt-2 block"
              >
                CONTACT US
              </a>
            </div>
          </motion.div>
        )}
        </div>
      </motion.nav>
    </div>
  );
};
