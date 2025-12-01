export const TopBanner = () => {
  // Desktop message - full text
  const desktopMessage = "24/7 Emergency Baby Care Delhi NCR — Call 9971691558  •  Special Offer: Live-In Nanny ₹12,999/month Only!  •  Newborn Care Expert — Starting at ₹14,999/month  •  Free Trial Period — 3 Days No Commitment!  •  Verified North East Nannies — ₹15,999/month  •  24-Hour Replacement Guarantee — 100% Satisfaction  •  ";
  
  // Mobile message - shorter text
  const mobileMessage = "Call 9971691558  •  Nanny ₹12,999/mo  •  Newborn ₹14,999/mo  •  Free Trial  •  24hr Service  •  ";
  
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white overflow-hidden"
      style={{ 
        height: '32px',
        lineHeight: '32px',
      }}
    >
      {/* Desktop version */}
      <div
        className="hidden md:flex"
        style={{ 
          whiteSpace: 'nowrap',
          animation: 'scroll 30s linear infinite',
        }}
      >
        <span style={{ fontSize: '13px', fontWeight: 600, paddingRight: '100vw' }}>{desktopMessage}</span>
        <span style={{ fontSize: '13px', fontWeight: 600, paddingRight: '100vw' }}>{desktopMessage}</span>
        <span style={{ fontSize: '13px', fontWeight: 600, paddingRight: '100vw' }}>{desktopMessage}</span>
      </div>
      
      {/* Mobile version */}
      <div
        className="flex md:hidden"
        style={{ 
          whiteSpace: 'nowrap',
          animation: 'scroll 20s linear infinite',
        }}
      >
        <span style={{ fontSize: '11px', fontWeight: 600, paddingRight: '100vw' }}>{mobileMessage}</span>
        <span style={{ fontSize: '11px', fontWeight: 600, paddingRight: '100vw' }}>{mobileMessage}</span>
        <span style={{ fontSize: '11px', fontWeight: 600, paddingRight: '100vw' }}>{mobileMessage}</span>
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
