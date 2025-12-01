import { services } from '../data/services';

export const Footer = () => {
  return (
    <footer className="py-8 md:py-10 px-4 md:px-6 bg-transparent">
      <div className="container mx-auto max-w-[90rem] bg-gray-900 text-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <img 
                src="/logo.png" 
                alt="Maid Placement Agency Baby Sitter Logo" 
                className="h-8 md:h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-yellow-400">
                Maid Placement Agency Baby Sitter
              </h3>
            </div>
            <p className="text-gray-400 mb-3 md:mb-4 text-xs md:text-sm">
              Delhi NCR's Most Trusted 24-Hour Baby Care Agency. Police-Verified North-East & Nepali Caregivers since 2006. 19+ years of experience.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                📷
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                🐦
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#blogs" className="text-gray-400 hover:text-white transition-colors">View All Blogs</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-yellow-400">Our Services</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              {services.slice(0, 4).map(service => (
                <li key={service.id}>
                  <span className="text-gray-400">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <span>2034B/3, South Extension I, Kotla Mubarakpur, New Delhi, Delhi 110003</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <a href="tel:8595661698" className="hover:text-white transition-colors">
                  8595661698
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <a href="tel:9971691558" className="hover:text-white transition-colors">
                  9971691558
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <a href="mailto:subhashthapa87@gmail.com" className="hover:text-white transition-colors">
                  subhashthapa87@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <span>🌐 maidagencyindelhi.in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 md:pt-6 text-center text-gray-400">
          <p className="text-xs md:text-sm">&copy; 2006-2024 Maid Placement Agency Baby Sitter. All rights reserved.</p>
          <p className="mt-1.5 md:mt-2 text-[10px] md:text-xs">
            19+ Years Experience • 5000+ Families Served • Police Verified Staff
          </p>
          <p className="mt-2 md:mt-3 text-[10px] md:text-xs">
            Developed by{' '}
            <a 
              href="https://ragspro.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors underline"
            >
              RAGSPRO
            </a>
          </p>
        </div>
        </div>
    </footer>
  );
};
