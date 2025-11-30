import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { processSteps } from '../data/processSteps';

const stepIcons = [
  // Step 1: Contact/Phone Icon
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>,
  // Step 2: Document/Share Icon
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>,
  // Step 3: Users/Meet Icon
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>,
  // Step 4: Check/Select Icon
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>,
  // Step 5: Support/Heart Icon
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
];

export const ProcessTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="process-section py-10 md:py-14 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 md:mb-3">
            How It Works
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Simple steps to find your perfect nanny
          </p>
        </motion.div>

        <div className="hidden md:flex items-center justify-between relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 origin-left"
            style={{ transform: 'translateY(-50%)' }}
          />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: 'spring' }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg mb-4 hover:bg-indigo-700 transition-colors duration-300">
                {stepIcons[index]}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1 text-center mt-4">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center max-w-[150px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  {stepIcons[index].props.children}
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
