import { motion } from 'framer-motion';

export const TopBanner = () => {
  const messages = [
    '24/7 Emergency Baby Care — Call 9971691558',
    'Live-In Nanny ₹12,999/month',
    'Newborn Care ₹14,999/month',
    'Free 3-Day Trial',
    'North East Nannies ₹15,999/month',
    '24-Hour Replacement'
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white py-1.5 md:py-2 text-center overflow-hidden"
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)'
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        className="flex gap-6 md:gap-10 whitespace-nowrap items-center"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)'
        }}
      >
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-6 md:gap-10 items-center">
            {messages.map((message, i) => (
              <span 
                key={`${setIndex}-${i}`} 
                className="text-xs md:text-sm font-semibold inline-block px-2"
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
