export const TopBanner = () => {
  const tickerText = "📞 Call 8595661698 / 9971691558 • Babysitter ₹18,000/month • Nanny ₹22,000/month • Japa Maid Available • Police Verified • 19+ Years Experience";
  const mobileTickerText = "📞 8595661698 / 9971691558 • ₹18,000/mo • ₹22,000/mo • Police Verified • 19+ Years";
  
  return (
    <>
      {/* Desktop version */}
      <div
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white"
        style={{ 
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div 
          className="ticker-wrapper"
          style={{ 
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'scroll-left 25s linear infinite',
          }}
        >
          {/* Repeat text 6 times for seamless loop */}
          {[...Array(6)].map((_, i) => (
            <span 
              key={i}
              style={{ 
                fontSize: '13px', 
                fontWeight: 600, 
                padding: '0 40px',
                whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
            >
              {tickerText}
            </span>
          ))}
        </div>
      </div>
      
      {/* Mobile version */}
      <div
        className="block md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white"
        style={{ 
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div 
          className="ticker-wrapper-mobile"
          style={{ 
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'scroll-left 20s linear infinite',
          }}
        >
          {/* Repeat text 6 times for seamless loop */}
          {[...Array(6)].map((_, i) => (
            <span 
              key={i}
              style={{ 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '0 25px',
                whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
            >
              {mobileTickerText}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .ticker-wrapper,
        .ticker-wrapper-mobile {
          will-change: transform;
        }
        
        /* Extra small mobile screens */
        @media (max-width: 480px) {
          .block.md\\:hidden {
            height: 30px !important;
          }
          .ticker-wrapper-mobile span {
            font-size: 10px !important;
            padding: 0 20px !important;
          }
        }
        
        /* Tablet adjustments */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hidden.md\\:block {
            height: 34px !important;
          }
          .ticker-wrapper span {
            font-size: 12px !important;
            padding: 0 35px !important;
          }
        }
      `}</style>
    </>
  );
};
