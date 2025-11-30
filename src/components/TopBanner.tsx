import { motion } from 'framer-motion';

export const TopBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white py-1.5 md:py-2 text-center text-[10px] md:text-xs lg:text-sm overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-12">
            <span>24/7 Emergency Baby Care Delhi NCR — <strong>Call 9971691558</strong></span>
            <span>Special Offer: Live-In Nanny <strong>₹12,999/month</strong> Only!</span>
            <span>Newborn Care Expert — Starting at <strong>₹14,999/month</strong></span>
            <span>Free Trial Period — <strong>3 Days</strong> No Commitment!</span>
            <span>Verified North East Nannies — <strong>₹15,999/month</strong></span>
            <span>24-Hour Replacement Guarantee — <strong>100% Satisfaction</strong></span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
