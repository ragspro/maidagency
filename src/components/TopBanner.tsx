export const TopBanner = () => {
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
        className="hidden md:block"
        style={{ 
          whiteSpace: 'nowrap',
          animation: 'scroll-desktop 25s linear infinite',
        }}
      >
        <span style={{ fontSize: '13px', fontWeight: 600 }}>
          📞 Call 9971691558 &nbsp;&nbsp;•&nbsp;&nbsp; 💰 Live-In Nanny ₹12,999/month &nbsp;&nbsp;•&nbsp;&nbsp; 👶 Newborn Care ₹14,999/month &nbsp;&nbsp;•&nbsp;&nbsp; 🎁 Free 3-Day Trial &nbsp;&nbsp;•&nbsp;&nbsp; ⭐ North East Nannies &nbsp;&nbsp;•&nbsp;&nbsp; ✅ 24-Hour Replacement &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span style={{ fontSize: '13px', fontWeight: 600 }}>
          📞 Call 9971691558 &nbsp;&nbsp;•&nbsp;&nbsp; 💰 Live-In Nanny ₹12,999/month &nbsp;&nbsp;•&nbsp;&nbsp; 👶 Newborn Care ₹14,999/month &nbsp;&nbsp;•&nbsp;&nbsp; 🎁 Free 3-Day Trial &nbsp;&nbsp;•&nbsp;&nbsp; ⭐ North East Nannies &nbsp;&nbsp;•&nbsp;&nbsp; ✅ 24-Hour Replacement &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      
      {/* Mobile version */}
      <div
        className="block md:hidden"
        style={{ 
          whiteSpace: 'nowrap',
          animation: 'scroll-mobile 15s linear infinite',
        }}
      >
        <span style={{ fontSize: '11px', fontWeight: 600, display: 'inline-block' }}>
          📞 9971691558 &nbsp;•&nbsp; 💰 ₹12,999/mo &nbsp;•&nbsp; 👶 ₹14,999/mo &nbsp;•&nbsp; 🎁 Free Trial &nbsp;•&nbsp; ✅ 24hr Service &nbsp;&nbsp;&nbsp;
        </span>
        <span style={{ fontSize: '11px', fontWeight: 600, display: 'inline-block' }}>
          📞 9971691558 &nbsp;•&nbsp; 💰 ₹12,999/mo &nbsp;•&nbsp; 👶 ₹14,999/mo &nbsp;•&nbsp; 🎁 Free Trial &nbsp;•&nbsp; ✅ 24hr Service &nbsp;&nbsp;&nbsp;
        </span>
        <span style={{ fontSize: '11px', fontWeight: 600, display: 'inline-block' }}>
          📞 9971691558 &nbsp;•&nbsp; 💰 ₹12,999/mo &nbsp;•&nbsp; 👶 ₹14,999/mo &nbsp;•&nbsp; 🎁 Free Trial &nbsp;•&nbsp; ✅ 24hr Service &nbsp;&nbsp;&nbsp;
        </span>
      </div>
      
      <style>{`
        @keyframes scroll-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-66.666%); }
        }
      `}</style>
    </div>
  );
};
