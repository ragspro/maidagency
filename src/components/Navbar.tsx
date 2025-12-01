import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling 50px for better visibility
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

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
    <div className="fixed left-0 right-0 z-40 px-3 md:px-6 max-w-full overflow-hidden top-7 md:top-8">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`container mx-auto rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-300 max-w-full mt-2 md:mt-4 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border border-gray-200' 
            : 'bg-white/20 backdrop-blur-2xl border border-white/30'
        }`}
        style={{
          boxShadow: isScrolled 
            ? '0 4px 20px 0 rgba(0, 0, 0, 0.1)' 
            : '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
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
            <span className={`font-bold text-sm md:text-base lg:text-xl transition-colors duration-300 truncate ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>Maid Placement Agency Baby Sitter</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={goHome}
              className={`font-semibold transition-all duration-300 ${
                isScrolled ? 'text-gray-900 hover:text-indigo-600' : 'text-white drop-shadow-lg hover:text-indigo-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 drop-shadow-lg hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 drop-shadow-lg hover:text-white'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 drop-shadow-lg hover:text-white'
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`font-medium transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 drop-shadow-lg hover:text-white'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 drop-shadow-lg hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <motion.a
              href="tel:8595661698"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            >
              📞 8595661698
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                →
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
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
                className={`font-semibold py-2 text-left transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900 hover:text-indigo-600' : 'text-white hover:text-indigo-300'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`font-medium py-2 text-left transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium py-2 text-left transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 hover:text-white'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`font-medium py-2 text-left transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 hover:text-white'
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`font-medium py-2 text-left transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 hover:text-white'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium py-2 text-left transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/95 hover:text-white'
                }`}
              >
                Contact
              </button>
              <a
                href="tel:8595661698"
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors text-center mt-2 block"
              >
                📞 Call 8595661698
              </a>
            </div>
          </motion.div>
        )}
        </div>
      </motion.nav>
    </div>
  );
};
