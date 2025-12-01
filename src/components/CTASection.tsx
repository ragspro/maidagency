import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="cta-section py-10 md:py-14 px-4 md:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4"
        >
          Need Trusted Baby Care Services?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base mb-6 md:mb-8 opacity-90"
        >
          19+ Years Experience • 5000+ Families Served • Police Verified Staff
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-white text-indigo-600 rounded-full font-medium text-sm md:text-base shadow-lg hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </motion.a>
          
          <motion.a
            href="tel:9910443876"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-transparent border-2 border-white text-white rounded-full font-medium text-sm md:text-base hover:bg-white hover:text-indigo-600 transition-colors"
          >
            📞 Call: 9910443876
          </motion.a>
          
          <motion.a
            href="https://wa.me/918130135822?text=Hi, I'm interested in your baby care services"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-green-500 text-white rounded-full font-medium text-sm md:text-base shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: 8130135822
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
