import { motion } from 'framer-motion';

export const TopBanner = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white overflow-hidden"
      style={{ 
        height: '32px',
        minHeight: '32px',
        maxHeight: '32px',
      }}
    >
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
        style={{ 
          display: 'flex',
          whiteSpace: 'nowrap',
          height: '32px',
          alignItems: 'center',
          willChange: 'transform',
        }}
      >
        {[...Array(3)].map((_, setIndex) => (
          <div 
            key={setIndex} 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              height: '32px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ padding: '0 16px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>📞 Call 9971691558</span>
            <span style={{ padding: '0 16px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>💰 Nanny ₹12,999/mo</span>
            <span style={{ padding: '0 16px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>👶 Newborn ₹14,999/mo</span>
            <span style={{ padding: '0 16px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>🎁 Free Trial</span>
            <span style={{ padding: '0 16px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>⭐ North East Nannies</span>
            <span style={{ padding: '0 16px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>✅ 24hr Replacement</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
