export const TopBanner = () => {
  return (
    <>
      {/* Desktop version */}
      <div
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white overflow-hidden"
        style={{ 
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div 
          style={{ 
            whiteSpace: 'nowrap', 
            animation: 'scroll-desktop 20s linear infinite',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, display: 'inline-block', padding: '0 30px' }}>
            📞 Call 9971691558 • Live-In Nanny ₹12,999/month • Newborn Care ₹14,999/month • Free 3-Day Trial • North East Nannies • 24-Hour Replacement
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, display: 'inline-block', padding: '0 30px' }}>
            📞 Call 9971691558 • Live-In Nanny ₹12,999/month • Newborn Care ₹14,999/month • Free 3-Day Trial • North East Nannies • 24-Hour Replacement
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, display: 'inline-block', padding: '0 30px' }}>
            📞 Call 9971691558 • Live-In Nanny ₹12,999/month • Newborn Care ₹14,999/month • Free 3-Day Trial • North East Nannies • 24-Hour Replacement
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, display: 'inline-block', padding: '0 30px' }}>
            📞 Call 9971691558 • Live-In Nanny ₹12,999/month • Newborn Care ₹14,999/month • Free 3-Day Trial • North East Nannies • 24-Hour Replacement
          </span>
        </div>
      </div>
      
      {/* Mobile version */}
      <div
        className="block md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white overflow-hidden"
        style={{ 
          height: '28px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div 
          style={{ 
            whiteSpace: 'nowrap',
            animation: 'scroll-mobile 15s linear infinite',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '10px', fontWeight: 600, display: 'inline-block', padding: '0 20px' }}>
            📞 9971691558 • ₹12,999/mo • ₹14,999/mo • Free Trial • 24hr Service
          </span>
          <span style={{ fontSize: '10px', fontWeight: 600, display: 'inline-block', padding: '0 20px' }}>
            📞 9971691558 • ₹12,999/mo • ₹14,999/mo • Free Trial • 24hr Service
          </span>
          <span style={{ fontSize: '10px', fontWeight: 600, display: 'inline-block', padding: '0 20px' }}>
            📞 9971691558 • ₹12,999/mo • ₹14,999/mo • Free Trial • 24hr Service
          </span>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-66.666%); }
        }
      `}</style>
    </>
  );
};
