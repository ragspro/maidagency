import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { services } from '../data/services';
import type { Service } from '../data/services';
import { ServiceModal } from './ServiceModal';
import { ServiceIcon } from './ServiceIcon';

export const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" ref={sectionRef} className="services-section py-10 md:py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
              <img 
                src="/baby-care1.png" 
                alt="Baby Care Services"
                loading="lazy"
                decoding="async"
                className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-indigo-600 mb-2 md:mb-4 font-medium">
              — WHO WE ARE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 md:mb-5 leading-tight">
              Professional Baby Care Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Professional baby care tailored to your family's needs. We provide verified, trained nannies who treat your children with love and care.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - All devices: 3 cols */}
        <div className="services-grid grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              onClick={() => handleServiceClick(service)}
              className="service-card bg-white/80 backdrop-blur-lg rounded-lg md:rounded-3xl p-2 sm:p-2.5 md:p-7 shadow-lg border border-white/20 hover:border-indigo-200 transition-all group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-indigo-100 text-indigo-600 rounded-lg md:rounded-2xl mb-1.5 sm:mb-2 md:mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ServiceIcon icon={service.icon} className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[10px] sm:text-xs md:text-lg font-medium text-gray-900 mb-1 sm:mb-1.5 md:mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[8px] sm:text-[10px] md:text-sm leading-relaxed mb-1.5 sm:mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">
                {service.description}
              </p>
              {service.priceRange && (
                <p className="text-indigo-600 font-semibold text-[8px] sm:text-[10px] md:text-sm mb-1.5 sm:mb-2 md:mb-3">
                  💰 {service.priceRange}
                </p>
              )}
              <div className="text-indigo-600 font-medium text-[8px] sm:text-[10px] md:text-sm inline-flex items-center gap-0.5 sm:gap-1 md:gap-2 group-hover:gap-3 transition-all">
                Details <span>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
