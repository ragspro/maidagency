import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { services } from '../data/services';

export const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="services" ref={sectionRef} className="services-section py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800" 
                alt="Baby Care Services"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-widest text-indigo-600 mb-4 font-medium">
              — WHO WE ARE
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5 leading-tight">
              Professional Baby Care Solutions
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Professional baby care tailored to your family's needs. We provide verified, trained nannies who treat your children with love and care.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              className="service-card bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/20 hover:border-indigo-200 transition-all group"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-bold mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <button
                onClick={() => {
                  const slugMap: Record<string, string> = {
                    'live-in-24hr': '24-hour-live-in-baby-sitter-delhi-ncr',
                    'newborn-care': 'newborn-care-specialist-delhi-ncr',
                    'toddler-care': 'toddler-care-nanny-1-3-years-delhi-ncr',
                    'north-east-nannies': 'north-east-trained-nannies-delhi-ncr',
                    'emergency-replacement': '24-hour-emergency-nanny-replacement-delhi-ncr',
                    'mother-baby-package': 'mother-baby-care-package-postpartum-delhi-ncr'
                  };
                  const slug = slugMap[service.id];
                  if (slug) {
                    window.location.hash = `blog/${slug}`;
                  } else {
                    window.location.hash = 'contact';
                  }
                }}
                className="text-indigo-600 font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all hover:underline"
              >
                Learn More <span>→</span>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
