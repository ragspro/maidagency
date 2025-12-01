import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-widest text-indigo-600 mb-3 md:mb-4 font-semibold">
            — ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Delhi NCR's Most Trusted
            <br />
            <span className="text-indigo-600">Baby Care Agency</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional nanny & babysitter placement services since 2006
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/baby-care3.png"
                alt="Professional Baby Care"
                loading="lazy"
                decoding="async"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-indigo-600">19+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-indigo-600">5000+</div>
                  <div className="text-xs text-gray-600">Families</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-indigo-600">100%</div>
                  <div className="text-xs text-gray-600">Verified</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-indigo-600">Maid Placement Agency Baby Sitter</strong> is a trusted professional nanny & babysitter placement agency providing <strong>24-hour live-in babysitters</strong>, newborn baby care nannies, baby caretakers at home and baby care maids across <strong>Delhi NCR</strong> including Delhi, Noida, Gurugram, Ghaziabad and Faridabad.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our team specializes in trained, polite and background-verified <strong>North East & Nepali nannies</strong> who stay full-time (24 hours) with families and offer complete baby care support including feeding, bathing, diaper changing, sleeping routines, hygiene maintenance, learning activities and safety-focused baby handling.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We understand that finding a reliable <strong>baby sitter</strong>, <strong>nanny for baby</strong> or <strong>baby caretaker in Delhi</strong> can be difficult and urgent for many working parents. That is why we provide fast placement support and urgent baby care assistance with professional, responsible and experienced babysitters in Delhi NCR.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">👶</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Baby Care Services</h3>
            <p className="text-sm text-gray-600">
              24-hour live-in babysitters, newborn care nannies, and toddler caretakers
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">👴</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Elder Care Services</h3>
            <p className="text-sm text-gray-600">
              24-hour maid service and elder care attendants at home for seniors
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Domestic Services</h3>
            <p className="text-sm text-gray-600">
              Domestic cook service (limited availability) for complete home support
            </p>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
            To deliver safe, stress-free and trusted in-home childcare & home care services through verified staff, transparent process, long-term reliability and fast replacement support whenever required.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Police-Verified Staff</h4>
                <p className="text-sm text-gray-600">All our nannies are background-verified and police-checked for your family's safety</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">24-Hour Support</h4>
                <p className="text-sm text-gray-600">Fast placement and emergency replacement support available 24/7</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experienced Team</h4>
                <p className="text-sm text-gray-600">19+ years of experience serving 5000+ families across Delhi NCR</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Love-Based Care</h4>
                <p className="text-sm text-gray-600">Our nannies provide professional care with genuine love and affection</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            We are proud to be one of the most recommended babysitter and nanny agencies in Delhi NCR, trusted by thousands of parents.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:8595661698"
              className="px-8 py-3.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: 8595661698
            </a>
            <a
              href="tel:9971691558"
              className="px-8 py-3.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: 9971691558
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Choose professionalism, love-based childcare and reliable support with Maid Placement Agency Baby Sitter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
