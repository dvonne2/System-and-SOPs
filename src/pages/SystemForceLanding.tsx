import React, { useState, useEffect } from 'react';
import DemoCredentialsModal from '@/components/DemoCredentialsModal';

const SystemForceLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: "📦", title: "Order Management", desc: "See every order in one place. Track status from pending to delivered. Nothing falls through the cracks." },
    { icon: "👥", title: "Telesales Control", desc: "Round-robin or performance-based distribution. DSR tracking. Leaderboards. Know who's really performing." },
    { icon: "🚚", title: "DA Management", desc: "Track every delivery agent. Know their DSR, outstanding money, and performance. Freeze bad actors instantly." },
    { icon: "💰", title: "Payment Tracking", desc: "Know exactly where your money is. Who owes you. How long they've owed. No more disappearing naira." },
    { icon: "📊", title: "Inventory Control", desc: "Real-time stock across all locations. DA = mini warehouse. Friday photo proof. Catch theft before it kills you." },
    { icon: "📢", title: "Media Buyer Module", desc: "Track which media buyer brings orders. Track which orders actually DELIVER. Pay for results, not claims." },
  ];

  const problems = [
    { before: '"I was working all day"', after: 'Activity log shows 3 hours idle time' },
    { before: '"Customer wasn\'t home"', after: 'GPS shows DA was never at the address' },
    { before: '"I already sent the money"', after: '₦120,000 outstanding for 14 days' },
    { before: '"Stock should be there"', after: 'Friday photo shows 8 units missing' },
    { before: '"That media buyer brought 50 orders"', after: 'UTM tracking shows 12 delivered' },
  ];

  const testimonials = [
    { name: "Chioma A.", business: "Beauty Business, Lagos", text: "I was losing ₦200k monthly to DA theft. SystemForce caught it in week 1." },
    { name: "Emeka O.", business: "Skincare Brand, Abuja", text: "My telesales DSR went from 55% to 82% once they knew the system was watching." },
    { name: "Fatima B.", business: "Fashion Store, Kano", text: "Finally know which media buyers are making me money vs wasting my ad spend." },
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        .delay-5 { animation-delay: 0.5s; opacity: 0; }
        
        .cta-button {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          border: none;
          padding: 18px 40px;
          font-size: 18px;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
          font-family: inherit;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.5);
        }
        
        .cta-secondary {
          background: transparent;
          color: #1e3a5f;
          border: 2px solid #1e3a5f;
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .cta-secondary:hover {
          background: #1e3a5f;
          color: white;
        }
        
        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: #f97316;
        }
        
        .problem-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 20px;
          align-items: center;
          padding: 20px;
          background: white;
          border-radius: 12px;
          margin-bottom: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .problem-row:hover {
          border-color: #f97316;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        
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
        
        .stat-card {
          text-align: center;
          padding: 30px;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #1e3a5f 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .testimonial-card {
          background: white;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-[1000] py-4 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
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
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="/systemthinking" className="nav-link">System Thinking</a>
            <a href="/features" className="nav-link">Features</a>
            <a href="/pricing" className="nav-link">Pricing</a>
            <a href="/referral" className="nav-link">Referral</a>
            <span className="nav-link">FAQ</span>
            <button className="cta-button" style={{ padding: '12px 24px', fontSize: '14px' }} onClick={() => setShowDemoModal(true)}>
              View Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[140px] pb-20 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(30,58,95,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="text-center max-w-[900px] mx-auto">
            <div className={`animate-in delay-1 inline-block bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold mb-6`}>
              🇳🇬 Built for Nigerian COD Businesses
            </div>
            
            <h1 className={`animate-in delay-2 text-[clamp(40px,6vw,64px)] font-bold leading-[1.1] mb-6`} style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              From COD <span className="text-red-600">Chaos</span><br/>
              to <span className="gradient-text">Peace of Mind</span>
            </h1>
            
            <p className={`animate-in delay-3 text-xl text-slate-500 leading-relaxed mb-10 max-w-[700px] mx-auto`}>
              The ERP that <strong className="text-[#1e3a5f]">sees everything</strong>, <strong className="text-[#1e3a5f]">forgets nothing</strong>, and <strong className="text-[#1e3a5f]">lies to no one</strong>. 
              Track orders, staff, stock, and money — all in one place.
            </p>
            
            <div className={`animate-in delay-4 flex gap-4 justify-center flex-wrap`}>
              <button className="cta-button" onClick={() => setShowDemoModal(true)}>
                View Demo →
              </button>
              <button className="cta-secondary">
                📞 Talk to Sales Rep
              </button>
            </div>
            
            <p className={`animate-in delay-5 text-sm text-slate-400 mt-4`}>
              Full access • Set up in 24 hours
            </p>
          </div>

          {/* Before/After Stats */}
          <div className="mt-20 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            {/* Header */}
            <div className="grid grid-cols-[220px_1fr_1fr] bg-slate-50 border-b border-slate-200">
              <div className="p-4 px-6 font-semibold text-slate-500">Metric</div>
              <div className="p-4 px-6 font-bold text-red-600 bg-gradient-to-br from-red-50 to-red-100 text-center flex items-center justify-center gap-2">
                😰 Before SystemForce
              </div>
              <div className="p-4 px-6 font-bold text-green-600 bg-gradient-to-br from-green-50 to-green-100 text-center flex items-center justify-center gap-2">
                😌 After SystemForce
              </div>
            </div>
            
            {/* Rows */}
            {[
              { metric: '💰 Annual Losses', before: '₦265,000', beforeSub: 'Theft, fraud, inefficiency', after: '₦0', afterSub: '0% losses — everything tracked' },
              { metric: '📦 Delivery Success Rate', before: '30%', beforeSub: '70% of orders fail or return', after: '85%+', afterSub: 'Industry-leading DSR' },
              { metric: '💳 Money Tracking', before: '???', beforeSub: 'No idea who owes what', after: '100% visible', afterSub: 'Every naira tracked in real-time' },
              { metric: '📊 Inventory Accuracy', before: '~60%', beforeSub: 'Ghost stock, shrinkage, theft', after: '99%+', afterSub: 'Friday photo proof, DA accountability' },
              { metric: '👥 Staff Productivity', before: '"I was working"', beforeSub: 'No way to verify', after: 'Activity logs', afterSub: 'Clock in/out, screenshots, anti-gaming' },
              { metric: '🚚 DA Accountability', before: '"Customer wasn\'t home"', beforeSub: 'No proof, just stories', after: 'GPS + timestamps', afterSub: 'Know exactly where they were' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[220px_1fr_1fr] border-b border-slate-200 last:border-b-0">
                <div className="p-4 px-6 font-semibold text-slate-800 flex items-center text-sm">
                  {row.metric}
                </div>
                <div className="p-4 px-6 text-center bg-red-50/50">
                  <div className="text-xl font-bold text-red-600" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    {row.before}
                  </div>
                  <div className="text-xs text-red-800 mt-1">{row.beforeSub}</div>
                </div>
                <div className="p-4 px-6 text-center bg-green-50/50">
                  <div className="text-xl font-bold text-green-600" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    {row.after}
                  </div>
                  <div className="text-xs text-green-800 mt-1">{row.afterSub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Stories vs <span className="text-orange-500">Truth</span>
            </h2>
            <p className="text-slate-400 text-lg">
              What staff say vs what SystemForce shows
            </p>
          </div>
          
          <div>
            {problems.map((item, i) => (
              <div key={i} className="problem-row" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-red-400 text-base italic p-3 bg-red-500/10 rounded-lg">
                  {item.before}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  →
                </div>
                <div className="text-green-400 text-base font-medium p-3 bg-green-500/10 rounded-lg">
                  {item.after}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="cta-button" onClick={() => setShowDemoModal(true)}>
              Try Live Demo →
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Everything You Need to <span className="text-orange-500">Stop the Bleeding</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-[600px] mx-auto">
              One system that tracks orders, staff, stock, and money. No more Excel sheets. No more WhatsApp chaos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              See <span className="text-orange-500">Everything</span> At A Glance
            </h2>
            <p className="text-slate-500 text-lg">
              One dashboard. All your data. Real-time.
            </p>
          </div>
          
          {/* Top Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-900 rounded-2xl p-6">
              <div className="text-slate-400 text-xs mb-2">TODAY'S ORDERS</div>
              <div className="text-white text-4xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>142</div>
              <div className="text-green-400 text-sm mt-1">↑ 12% vs yesterday</div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6">
              <div className="text-slate-400 text-xs mb-2">DELIVERED</div>
              <div className="text-green-400 text-4xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>89</div>
              <div className="text-green-400 text-sm mt-1">63% delivery rate</div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6">
              <div className="text-slate-400 text-xs mb-2">FAILED / RETURNS</div>
              <div className="text-red-400 text-4xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>12</div>
              <div className="text-red-400 text-sm mt-1">8% failure rate</div>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-6">
              <div className="text-red-200 text-xs mb-2">💰 CASH OUTSTANDING</div>
              <div className="text-white text-4xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>₦265,000</div>
              <div className="text-red-200 text-sm mt-1">4 DAs owing</div>
            </div>
          </div>

          {/* DA Performance Board */}
          <div className="bg-slate-900 rounded-3xl p-8 mb-6 shadow-xl">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div className="text-white font-semibold text-lg flex items-center gap-3">
                🚚 DA Performance & Money Owing
              </div>
              <div className="text-slate-400 text-sm">
                Last updated: Just now
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-white">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 text-slate-400 font-medium">DA</th>
                    <th className="text-left p-3 text-slate-400 font-medium">Location</th>
                    <th className="text-center p-3 text-slate-400 font-medium">Delivered</th>
                    <th className="text-center p-3 text-slate-400 font-medium">Failed</th>
                    <th className="text-center p-3 text-slate-400 font-medium">DSR</th>
                    <th className="text-right p-3 text-slate-400 font-medium">Owing</th>
                    <th className="text-center p-3 text-slate-400 font-medium">Days</th>
                    <th className="text-center p-3 text-slate-400 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Emeka', loc: 'Lagos Mainland', del: 108, fail: 12, dsr: 90, out: 0, days: '-', status: 'good' },
                    { name: 'Fatima', loc: 'Abuja', del: 76, fail: 19, dsr: 80, out: 15000, days: '2', status: 'good' },
                    { name: 'Tunde', loc: 'Ibadan', del: 52, fail: 28, dsr: 65, out: 85000, days: '8', status: 'warn' },
                    { name: 'Kemi', loc: 'Lagos Island', del: 30, fail: 30, dsr: 50, out: 120000, days: '14', status: 'bad' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="p-4 font-medium">{row.name}</td>
                      <td className="p-4 text-slate-400">{row.loc}</td>
                      <td className="p-4 text-center text-green-400">{row.del}</td>
                      <td className="p-4 text-center text-red-400">{row.fail}</td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          row.status === 'good' ? 'bg-green-500/20 text-green-400' : 
                          row.status === 'warn' ? 'bg-yellow-500/20 text-yellow-400' : 
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {row.dsr}%
                        </span>
                      </td>
                      <td className={`p-4 text-right font-semibold ${
                        row.out > 50000 ? 'text-red-400' : row.out > 0 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        ₦{row.out.toLocaleString()}
                      </td>
                      <td className={`p-4 text-center ${row.days === '14' ? 'text-red-400' : 'text-slate-400'}`}>
                        {row.days}{row.days === '14' && ' 🚨'}
                      </td>
                      <td className="p-4 text-center">
                        <button className={`px-3 py-1.5 rounded-md text-xs text-white ${
                          row.status === 'bad' ? 'bg-red-600' : 'bg-white/10'
                        }`}>
                          {row.status === 'bad' ? '🚨 Freeze' : 'View'}
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-red-500/10">
                    <td className="p-4 font-bold" colSpan={5}>TOTAL OUTSTANDING</td>
                    <td className="p-4 text-right text-red-400 font-bold text-lg">₦265,000</td>
                    <td colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              From Business Owners <span className="text-orange-500">Like You</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="text-4xl mb-4 opacity-20">"</div>
                <p className="text-slate-600 leading-relaxed mb-5">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Simple, <span className="text-orange-500">Transparent</span> Pricing
            </h2>
            <p className="text-slate-500 text-lg">
              See it in action with our live demo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '75,000', orders: '500', das: '50', ts: '5', best: 'Growing businesses' },
              { name: 'Growth', price: '150,000', orders: '5,000', das: '100', ts: '20', best: 'Scaling operations', featured: true },
              { name: 'Enterprise', price: '250,000', orders: 'Unlimited', das: 'Unlimited', ts: 'Unlimited', best: 'Large operations' },
            ].map((plan, i) => (
              <div key={i} className={`rounded-3xl p-10 relative ${
                plan.featured 
                  ? 'bg-gradient-to-br from-[#1e3a5f] to-slate-900 scale-105 shadow-xl' 
                  : 'bg-white border-2 border-slate-200'
              }`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-1.5 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className={`text-lg font-semibold mb-2 ${plan.featured ? 'text-orange-500' : 'text-slate-500'}`}>
                  {plan.name}
                </div>
                <div className={`text-5xl font-bold mb-1 ${plan.featured ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  ₦{plan.price}
                </div>
                <div className={`mb-6 ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                  per month
                </div>
                <div className={`border-t pt-6 ${plan.featured ? 'border-white/10' : 'border-slate-200'}`}>
                  {[
                    `${plan.orders} orders/month`,
                    `${plan.das} delivery agents`,
                    `${plan.ts} telesales`,
                    'Full feature access',
                    'WhatsApp notifications',
                    'Priority support'
                  ].map((feature, j) => (
                    <div key={j} className={`flex items-center gap-3 mb-3 ${plan.featured ? 'text-slate-200' : 'text-slate-600'}`}>
                      <span className="text-green-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className={plan.featured ? 'cta-button w-full mt-6' : 'cta-secondary w-full mt-6'} onClick={() => setShowDemoModal(true)}>
                  View Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-[#1e3a5f] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-5" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Ready to End the <span className="text-orange-500">Chaos</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Try the live demo now. Full access to everything.
            <br/>Talk to our sales team. Get set up in 24 hours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="cta-button text-lg px-12 py-5" onClick={() => setShowDemoModal(true)}>
              Try Live Demo →
            </button>
            <button className="cta-secondary border-white text-white text-lg px-9 py-5">
              📞 WhatsApp: 08179455117
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0a0f1a] text-slate-400">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  SystemForce ERP
                </span>
              </div>
              <div className="text-sm">From COD Chaos to Peace of Mind</div>
            </div>
            <div className="text-sm">
              Built in Nigeria 🇳🇬 for Nigerian businesses
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm">
            © 2024 SystemForce ERP. All rights reserved.
          </div>
        </div>
      </footer>
      
      <DemoCredentialsModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </div>
  );
};

export default SystemForceLanding;
