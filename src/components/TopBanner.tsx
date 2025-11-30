import { motion } from 'framer-motion';

export const TopBanner = () => {
  const messages = [
    '24/7 Emergency Baby Care Delhi NCR — Call 9971691558',
    'Special Offer: Live-In Nanny ₹12,999/month Only!',
    'Newborn Care Expert — Starting at ₹14,999/month',
    'Free Trial Period — 3 Days No Commitment!',
    'Verified North East Nannies — ₹15,999/month',
    '24-Hour Replacement Guarantee — 100% Satisfaction'
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white py-2 md:py-2.5 text-center overflow-hidden"
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        perspective: 1000
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
        className="flex gap-8 md:gap-12 whitespace-nowrap"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Duplicate messages for seamless loop */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-8 md:gap-12">
            {messages.map((message, i) => (
              <span 
                key={`${setIndex}-${i}`} 
                className="text-[11px] md:text-xs lg:text-sm font-medium"
                style={{ display: 'inline-block' }}
              >
                {message}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
