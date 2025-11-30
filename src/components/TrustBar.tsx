import { motion } from 'framer-motion';

const trustItems = [
  '15+ Years Experience',
  '5000+ Babies Cared',
  '4.9/5 Rating',
  'Most Trusted in Delhi NCR',
  '100% Verified Staff',
  '24-Hour Replacement Guarantee',
];

export const TrustBar = () => {
  return (
    <div className="trust-bar bg-indigo-600 text-white py-4 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {[...trustItems, ...trustItems, ...trustItems].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span className="text-lg font-semibold">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
