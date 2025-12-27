import { useState } from 'react';
import { Link } from 'react-router-dom';
import DemoCredentialsModal from './DemoCredentialsModal';

const Navigation = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap');
        
        .nav-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: #f97316;
        }
        
        .cta-button-nav {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
          font-family: inherit;
        }
        
        .cta-button-nav:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.5);
        }
      `}</style>
      
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-[1000] py-4 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-[10px] flex items-center justify-center relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-xl text-[#1e3a5f]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                SystemForce<span className="text-slate-400 font-medium text-sm ml-1">ERP</span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/systemthinking" className="nav-link">System Thinking</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/referral" className="nav-link">Referral</Link>
            <span className="nav-link">FAQ</span>
            <button className="cta-button-nav" onClick={() => setShowDemoModal(true)}>
              View Demo
            </button>
          </div>
        </div>
      </nav>
      
      <DemoCredentialsModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </>
  );
};

export default Navigation;
