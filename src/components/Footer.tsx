import { services } from '../data/services';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-transparent">
      <div className="container mx-auto max-w-[90rem] bg-gray-900 text-white rounded-3xl shadow-2xl p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Maid Placement Agency Baby Sitter Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="text-xl font-bold text-yellow-400">
                Maid Placement Agency Baby Sitter
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Delhi NCR's most trusted 24/7 live-in baby care service. 15+ years of experience caring for families with love and dedication.
            </p>
            <div className="flex gap-4">
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
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#blogs" className="text-gray-400 hover:text-white transition-colors">View All Blogs</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map(service => (
                <li key={service.id}>
                  <span className="text-gray-400">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <span>Pillanji, South Extension, Delhi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <a href="tel:9971691558" className="hover:text-white transition-colors">
                  9971691558
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <a href="mailto:info@sewa.com" className="hover:text-white transition-colors">
                  info@sewa.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▸</span>
                <span>Open 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Maid Placement Agency Baby Sitter. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Trusted by 5000+ families across Delhi NCR
          </p>
          <p className="mt-3 text-sm">
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
