import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section py-10 md:py-14 px-4 md:px-6 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Contact Us
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Get in touch and we'll respond within 24 hours
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <ContactForm />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 md:space-y-6"
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-xl border border-white/20">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-5">
                Visit Our Office
              </h3>
              
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-5">
                <div className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Address</p>
                    <p className="text-gray-600 text-xs md:text-sm">Pillanji, South Extension, Delhi NCR</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Phone</p>
                    <a href="tel:9910443876" className="text-indigo-600 hover:underline text-xs md:text-sm block">
                      9910443876
                    </a>
                    <a href="tel:8130135822" className="text-indigo-600 hover:underline text-xs md:text-sm block">
                      8130135822
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Email</p>
                    <a href="mailto:sewaenterprises2@gmail.com" className="text-indigo-600 hover:underline text-xs md:text-sm break-all">
                      sewaenterprises2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Hours</p>
                    <p className="text-gray-600 text-xs md:text-sm">Open 24 Hours</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.2!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
