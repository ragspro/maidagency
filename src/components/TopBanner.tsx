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
          className="ticker-wrapper-desktop"
          style={{ 
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'scroll-desktop 25s linear infinite',
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
                lineHeight: '36px',
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
          height: '30px',
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
            animation: 'scroll-mobile 20s linear infinite',
          }}
        >
          {/* Repeat text 6 times for seamless loop */}
          {[...Array(6)].map((_, i) => (
            <span 
              key={i}
              style={{ 
                fontSize: '10px', 
                fontWeight: 600, 
                padding: '0 20px',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                lineHeight: '30px',
              }}
            >
              {mobileTickerText}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        /* Desktop animation - simple */
        @keyframes scroll-desktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Mobile animation - simple */
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .ticker-wrapper-desktop,
        .ticker-wrapper-mobile {
          will-change: transform;
        }
        
        /* Mobile specific - force single line */
        @media (max-width: 767px) {
          .block.md\\:hidden {
            height: 30px !important;
            display: flex !important;
            align-items: center !important;
            overflow: hidden !important;
          }
          
          .ticker-wrapper-mobile {
            display: flex !important;
            white-space: nowrap !important;
          }
          
          .ticker-wrapper-mobile span {
            font-size: 10px !important;
            padding: 0 20px !important;
            white-space: nowrap !important;
            line-height: 30px !important;
            display: inline-block !important;
          }
        }
        
        /* Extra small screens */
        @media (max-width: 375px) {
          .block.md\\:hidden {
            height: 28px !important;
          }
          
          .ticker-wrapper-mobile span {
            font-size: 9px !important;
            padding: 0 15px !important;
            line-height: 28px !important;
          }
        }
      `}</style>
    </>
  );
};
