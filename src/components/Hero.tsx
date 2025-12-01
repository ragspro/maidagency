import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="hero-section min-h-[85vh] md:min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 md:pt-28 pb-8 md:pb-0">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1920')] bg-cover bg-center opacity-20"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm uppercase tracking-widest text-indigo-300 mb-2 md:mb-4 font-semibold"
            >
              Delhi NCR's Most Trusted 24-Hour Baby Care Agency
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 md:mb-6 leading-tight"
            >
              24/7 Live-In Babysitter
              <br />
              <span className="text-indigo-400">Nanny • Japa Maid</span>
              <br />
              Services in Delhi NCR
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base lg:text-lg text-gray-300 mb-4 md:mb-6 max-w-xl leading-relaxed"
            >
              Providing Police-Verified, Aadhaar-Checked & Fully Trained North-East and Nepali Caregivers for Newborns, Toddlers & Mothers since 2006.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-5 md:mb-8"
            >
              <motion.a
                href="tel:9910443876"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 md:px-8 md:py-3.5 bg-indigo-600 text-white rounded-full font-medium text-sm md:text-base shadow-xl hover:bg-indigo-700 transition-all inline-flex items-center gap-2"
              >
                Call Now – 9910443876
                <span className="text-base md:text-lg">📞</span>
              </motion.a>
              <motion.a
                href="https://wa.me/918130135822?text=Hi%2C%20I%20need%20baby%20care%20services.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 md:px-8 md:py-3.5 bg-green-600 text-white rounded-full font-medium text-sm md:text-base shadow-xl hover:bg-green-700 transition-all inline-flex items-center gap-2"
              >
                Chat on WhatsApp
                <span className="text-base md:text-lg">💬</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 md:gap-6 text-sm"
            >
              <div>
                <div className="text-lg md:text-xl font-medium text-indigo-400">✅ 19+</div>
                <div className="text-gray-400 text-xs md:text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-medium text-indigo-400">✅ 5000+</div>
                <div className="text-gray-400 text-xs md:text-sm">Families Served</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-medium text-indigo-400">✅ Police</div>
                <div className="text-gray-400 text-xs md:text-sm">Verified Staff</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-medium text-indigo-400">✅ 24-Hour</div>
                <div className="text-gray-400 text-xs md:text-sm">Replacement</div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800" 
                alt="Professional Baby Care"
                className="w-full h-[500px] xl:h-[600px] object-cover"
              />
              
              {/* Testimonial Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-200 shadow-lg flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
                      alt="Priya Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-700 italic mb-1.5">
                      "Our North East nanny is amazing! She takes care of our 6-month baby with so much love. Best decision we made!"
                    </p>
                    <p className="text-[10px] text-gray-600 font-semibold">
                      — Priya Sharma, Noida
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
