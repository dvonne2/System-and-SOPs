import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Referral = () => {
  const [copied, setCopied] = useState(false);
  
  const referralLink = "systemforce.co/r/MERCHANT-7X9K";
  const paidReferrals: number = 4;

  const copyLink = () => {
    navigator.clipboard.writeText(`https://${referralLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
      `}</style>

      {/* Navigation */}
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
            <Link to="/" className="text-slate-500 hover:text-orange-500 font-medium transition-colors">Features</Link>
            <Link to="/" className="text-slate-500 hover:text-orange-500 font-medium transition-colors">Full Features</Link>
            <Link to="/" className="text-slate-500 hover:text-orange-500 font-medium transition-colors">Pricing</Link>
            <Link to="/referral" className="text-orange-500 font-medium">Referral</Link>
            <Link to="/" className="text-slate-500 hover:text-orange-500 font-medium transition-colors">FAQ</Link>
            <button className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-[120px] pb-20 px-6">
        <div className="max-w-[480px] mx-auto">
          {/* Modal Container */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            
            {/* Header with gradient illustration */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 pb-10 relative overflow-hidden">
              {/* Badge */}
              <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-[#1e3a5f] mb-4 shadow-sm">
                🎁 Referral Program
              </div>

              {/* Decorative shapes */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-[140px] h-[140px]">
                {/* Shield icon - SystemForce brand */}
                <div className="absolute w-[100px] h-[100px] bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-3xl right-0 top-5 flex items-center justify-center shadow-lg">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Orange accent blob */}
                <div className="absolute w-[50px] h-[50px] bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl left-0 top-0 -rotate-[15deg] shadow-lg" />
              </div>

              <h2 className="text-[32px] font-bold text-slate-900 leading-tight max-w-[260px]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                Earn Free Months
              </h2>
              <p className="text-slate-500 mt-2 text-base">
                1 referral = 1 month free. It stacks.
              </p>
            </div>

            {/* Progress Section */}
            <div className="p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-slate-500">Your earnings</span>
                <span className="text-sm font-bold text-orange-500">
                  {paidReferrals} paid → {paidReferrals} {paidReferrals === 1 ? 'month' : 'months'} free
                </span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden relative">
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((paidReferrals / 10) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[11px] text-slate-400">
                <span>0</span>
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8</span>
                <span className="text-orange-500 font-semibold">10+</span>
              </div>
            </div>

            {/* How it works */}
            <div className="p-6">
              <div className="text-sm text-slate-500 mb-4 font-medium">
                How it works:
              </div>
              
              <div className="flex flex-col gap-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Share your invite link</div>
                    <div className="text-sm text-slate-500">Send to COD merchants you know</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎁</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      They get <span className="text-orange-500">1 month free</span>
                    </div>
                    <div className="text-sm text-slate-500">Full features. No card required.</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      You get <span className="text-orange-500">1 month free</span> when they pay
                    </div>
                    <div className="text-sm text-slate-500">They pay → you earn. It stacks.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invite Link Section */}
            <div className="px-6 pb-6">
              <div className="text-sm text-slate-500 mb-2.5">
                Your invite link has been used by <strong className="text-slate-800">{paidReferrals} merchants</strong>
              </div>
              
              <div className="flex gap-2.5 items-center">
                <div className="flex-1 flex items-center gap-2.5 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3.5">
                  <span className="text-orange-500">🔗</span>
                  <span className="text-sm text-slate-800 font-mono overflow-hidden text-ellipsis whitespace-nowrap">
                    https://{referralLink}
                  </span>
                </div>
                <button 
                  onClick={copyLink}
                  className={`${copied ? 'bg-green-500' : 'bg-slate-900'} text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap hover:opacity-90`}
                >
                  {copied ? '✓ Copied!' : 'Copy link'}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="py-4 px-6 border-t border-slate-100 text-center">
              <a 
                href="#terms" 
                className="text-[13px] text-slate-400 underline hover:text-slate-600 cursor-pointer"
              >
                View Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
