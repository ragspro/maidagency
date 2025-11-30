import { motion } from 'framer-motion';

export const TopBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white overflow-hidden"
      style={{ 
        height: '32px',
        lineHeight: '32px',
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
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          height: '32px',
          alignItems: 'center'
        }}
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center" style={{ height: '32px' }}>
            <span className="text-xs md:text-sm font-semibold px-4 md:px-6">📞 Call 9971691558</span>
            <span className="text-xs md:text-sm font-semibold px-4 md:px-6">💰 Live-In Nanny ₹12,999/month</span>
            <span className="text-xs md:text-sm font-semibold px-4 md:px-6">👶 Newborn Care ₹14,999/month</span>
            <span className="text-xs md:text-sm font-semibold px-4 md:px-6">🎁 Free 3-Day Trial</span>
            <span className="text-xs md:text-sm font-semibold px-4 md:px-6">⭐ North East Nannies ₹15,999/month</span>
            <span className="text-xs md:text-sm font-semibold px-4 md:px-6">✅ 24-Hour Replacement</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
