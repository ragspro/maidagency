export const TopBanner = () => {
  const message = "📞 Call 9971691558  •  💰 Nanny ₹12,999/mo  •  👶 Newborn ₹14,999/mo  •  🎁 Free Trial  •  ⭐ North East Nannies  •  ✅ 24hr Replacement  •  ";
  
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white overflow-hidden"
      style={{ 
        height: '32px',
        lineHeight: '32px',
      }}
    >
      <div
        style={{ 
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'scroll 25s linear infinite',
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 600, paddingRight: '100vw' }}>{message}</span>
        <span style={{ fontSize: '12px', fontWeight: 600, paddingRight: '100vw' }}>{message}</span>
        <span style={{ fontSize: '12px', fontWeight: 600, paddingRight: '100vw' }}>{message}</span>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};
