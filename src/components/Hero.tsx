import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-28">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1920')] bg-cover bg-center opacity-20"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-widest text-indigo-300 mb-4 font-semibold"
            >
              Trusted caregivers, on your schedule
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
            >
              Delhi NCR's Most Trusted
              <br />
              <span className="text-indigo-400">24/7 Live-In</span>
              <br />
              Baby Care Service
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 mb-6 max-w-xl leading-relaxed"
            >
              Verified, trained nannies for newborns to toddlers. Background checked North East professionals trusted by 5000+ families. Free trial & 24-hour replacement guarantee.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-indigo-600 text-white rounded-full font-medium text-base shadow-xl hover:bg-indigo-700 transition-all inline-flex items-center gap-2"
              >
                Get Started Now
                <span className="text-lg">→</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div>
                <div className="text-xl font-medium text-indigo-400">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-xl font-medium text-indigo-400">5000+</div>
                <div className="text-gray-400 text-sm">Babies Cared</div>
              </div>
              <div>
                <div className="text-xl font-medium text-indigo-400">4.9/5</div>
                <div className="text-gray-400 text-sm">Rating</div>
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
                className="w-full h-[600px] object-cover"
              />
              
              {/* Testimonial Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-indigo-200 shadow-lg flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
                      alt="Priya Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic mb-2">
                      "Our North East nanny is amazing! She takes care of our 6-month baby with so much love. Best decision we made!"
                    </p>
                    <p className="text-xs text-gray-600 font-semibold">
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
