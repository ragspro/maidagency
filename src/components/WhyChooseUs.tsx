import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const features = [
  'Background Verified Staff',
  'Trained in Baby Safety & First Aid',
  'Live-In 24/7 Support',
  'North East & Nepali Professionals',
  'Affordable Pricing',
  'No Hidden Charges',
  'Free Trial Period',
  '24-Hour Replacement Guarantee',
];

export const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="why-choose-us" ref={sectionRef} className="why-choose-us py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800" 
                alt="Happy Baby with Caregiver"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-7"
            >
              Why Families Trust Us
            </motion.h2>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: 'spring' }}
                    className="flex-shrink-0 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white font-medium text-sm"
                  >
                    ✓
                  </motion.span>
                  <span className="text-base text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
