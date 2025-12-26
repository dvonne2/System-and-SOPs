import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      id: 'orders',
      icon: '📦',
      title: 'Order Management',
      count: 67,
      tagline: 'Every order tracked. Nothing falls through.',
      features: [
        '10 Order Statuses (Pending → Delivered)',
        'Full order timeline with timestamps',
        'Bulk actions (assign, update, export)',
        'Duplicate order detection',
        'Order risk scoring (0-100)',
        'Call recording uploads (MP3, WAV)',
        'UTM tracking & attribution',
        'Print packing slips',
        'Search & filter by any field',
        'CSV/Excel export'
      ],
      highlight: 'Every status change logged with exact timestamp, actor ID, and source. Cannot be edited.'
    },
    {
      id: 'telesales',
      icon: '📞',
      title: 'Telesales Management',
      count: 52,
      tagline: 'Know who\'s really performing.',
      features: [
        'Round-robin OR performance-based distribution',
        '8 call outcome options',
        'Call recording management',
        'Real-time DSR tracking',
        'Leaderboards (weekly/monthly)',
        'Performance tiers with auto-assignment',
        'Telesales portal with own stats',
        'Click-to-call integration',
        'Commission calculator (live)',
        'Recognition awards'
      ],
      highlight: 'Top performers (80%+ DSR) get 50% of orders. Struggling staff get 15%. System enforces quality.'
    },
    {
      id: 'da',
      icon: '🚚',
      title: 'DA Management',
      count: 78,
      tagline: 'Track every agent. Know where your money is.',
      features: [
        'Each DA = mini warehouse',
        'Full KYC with guarantor',
        'Location-based OR performance-based assignment',
        '12 delivery failure reasons',
        'Auto-freeze rules (DSR, money owed)',
        'DA portal (orders, inventory, earnings)',
        'Speed-based incentive tiers',
        'Friday stock proof (3 photos)',
        'Outstanding money tracking',
        'SLA engine with alerts'
      ],
      highlight: 'DA owes >₦100K or >14 days? Auto-freeze. Guarantor contacted. No manual intervention needed.'
    },
    {
      id: 'inventory',
      icon: '📊',
      title: 'Inventory Control',
      count: 45,
      tagline: 'Real-time stock. Catch theft before it kills you.',
      features: [
        'Central warehouse + DA stock tracking',
        'Transfer codes (anti-collusion)',
        'Bundle/package auto-deduction',
        'Friday photo proof (date, location)',
        'Stock variance detection',
        'Low stock alerts (WhatsApp)',
        'Inventory audit mode',
        'Supplier receipt logging',
        'Multi-location support',
        '37 Nigerian states ready'
      ],
      highlight: 'Expected vs Actual comparison. Negative variance = shortage. Forced explanation required.'
    },
    {
      id: 'money',
      icon: '💰',
      title: 'Payment & Money Tracking',
      count: 42,
      tagline: 'Know exactly where your money is.',
      features: [
        'Customer Pays Direct (Moniepoint webhook)',
        'DA Cash Collection with controls',
        'Outstanding money dashboard',
        'Aging report (0-3, 4-7, 8-14, 15+ days)',
        'Auto-freeze at threshold',
        'Guarantor escalation',
        '"Where Is The Money" dashboard',
        'Progressive trust system',
        'Same-day remittance bonus',
        'Daily WhatsApp reminders'
      ],
      highlight: '₦20K starting limit → ₦50K → ₦100K → ₦200K. Trust is earned, not given.'
    },
    {
      id: 'media',
      icon: '📢',
      title: 'Media Buyer Module',
      count: 18,
      tagline: 'Pay for results, not claims.',
      features: [
        'Pre-qualification flow',
        'UTM tracking (auto-attribution)',
        '5 performance tiers',
        'Funded test system',
        'Creative library access',
        'Anti-fraud controls',
        'DSR-based tier progression',
        'Auto-demotion rules',
        'Budget allocation by tier',
        'No self-approval possible'
      ],
      highlight: 'UTM tracking mandatory. No delivered order = no commission. System knows who brought what.'
    },
    {
      id: 'commission',
      icon: '🏆',
      title: 'Incentive & Commission',
      count: 56,
      tagline: 'Reward speed. Reward quality. Automatically.',
      features: [
        'Telesales: ₦0-₦500/order by DSR',
        'DA: Speed tiers (3h → 24h+)',
        'Media Buyer: Tier-based pay',
        'Monthly bonuses (DSR-based)',
        'Penalty structure (complaints, delays)',
        'Streak bonuses',
        'Perfect week rewards',
        'Same-day remittance bonus',
        'Base + commission hybrid',
        'All calculations automatic'
      ],
      highlight: 'Lightning delivery (<3 hours) = ₦600 + 2.0x multiplier. Slow (>24 hours) = ₦100 + 1.0x.'
    },
    {
      id: 'whatsapp',
      icon: '💬',
      title: 'WhatsApp Notifications',
      count: 18,
      tagline: 'Automated updates. Zero manual work.',
      features: [
        'Order received → Customer',
        'Out for delivery → Customer (with DA phone)',
        'Delivered → Customer',
        'New order → Admin',
        'Payment matched → Admin',
        'Low stock alert → Admin',
        'Custom message templates',
        'Merchant branding',
        'Toggle each notification',
        'Placeholder system'
      ],
      highlight: 'Customer gets DA name + phone when order goes out. Transparency builds trust.'
    },
    {
      id: 'accountability',
      icon: '🔍',
      title: 'Accountability & Audit',
      count: 24,
      tagline: 'Every action has an owner.',
      features: [
        'Responsibility ledger (7 event types)',
        '6 responsible party categories',
        'Override registry (all logged)',
        'Inaction tracking (silence = data)',
        'Full audit trail',
        'IP address logging',
        'User agent tracking',
        'Immutable timestamps',
        'Actor ID on every change',
        'Cannot edit history'
      ],
      highlight: 'Order in Assigned >24 hours? System logs: "DA didn\'t dispatch." Name. Time. Evidence.'
    },
    {
      id: 'returns',
      icon: '↩️',
      title: 'Returns & Reverse Logistics',
      count: 22,
      tagline: 'Know who caused it. Know what it cost.',
      features: [
        'Order returns (Customer → DA)',
        'Stock returns (DA → Central)',
        '6 return statuses',
        'Cost attribution by fault',
        'Returns per DA report',
        'Customer fault %',
        'DA fault %',
        'Operations fault %',
        'Pattern detection',
        'Returns by product/location'
      ],
      highlight: 'Wrong product sent? ₦1,500 outbound + ₦1,000 return = Operations charged ₦2,500.'
    },
    {
      id: 'sla',
      icon: '⏱️',
      title: 'Time & SLA Tracking',
      count: 24,
      tagline: 'Measure everything. Assume nothing.',
      features: [
        'Time to first call',
        'Time to confirmation',
        'Time to DA assignment',
        'Time to dispatch',
        'Time to delivery',
        'Total order cycle time',
        'SLA alerts (configurable)',
        'Auto-flag stuck orders',
        'Escalation to manager',
        'All timestamps immutable'
      ],
      highlight: 'Order in Pending >4 hours? Alert. Order in Out for Delivery >24 hours? Escalation.'
    },
    {
      id: 'roles',
      icon: '👥',
      title: 'Roles & Permissions',
      count: 9,
      tagline: 'Right access. Right people.',
      features: [
        'Delivery Agent role',
        'Telesales role',
        'Operations role',
        'Inventory Manager role',
        'General Manager role',
        'Logistics Officer role',
        'Auditor role (view-only)',
        'Admin role (full access)',
        'Media Buyer role'
      ],
      highlight: 'Auditor sees everything but changes nothing. Telesales sees only their orders.'
    },
    {
      id: 'dashboard',
      icon: '📈',
      title: 'Dashboards & Reports',
      count: 34,
      tagline: 'See everything. Decide fast.',
      features: [
        'Orders today/week/month',
        'Revenue tracking',
        'DSR percentage with trend',
        'Outstanding money total',
        'Low stock items',
        'Staff performance comparison',
        'Order volume charts',
        'Revenue bar charts',
        'Orders by state heatmap',
        'Top products ranking'
      ],
      highlight: 'One dashboard. All KPIs. Updated in real-time.'
    },
    {
      id: 'technical',
      icon: '⚙️',
      title: 'Technical & Integrations',
      count: 46,
      tagline: 'Built for Nigerian infrastructure.',
      features: [
        'WPForms integration',
        'Elementor Forms webhook',
        'Gravity Forms support',
        'Moniepoint webhook',
        'REST API access',
        'Bulk import (CSV)',
        'Export (CSV, Excel, PDF)',
        'Mobile-responsive',
        'Offline queue (poor connectivity)',
        '37 states, 774 LGAs ready'
      ],
      highlight: 'Webhook confirms payment automatically. No "Mark as Paid" button. Evidence-only.'
    }
  ];

  const totalFeatures = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="min-h-screen font-sans bg-slate-100 text-slate-800">
      <Navigation />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .feature-card {
          background: white;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .feature-card:hover {
          border-color: #f97316;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        
        .feature-card.expanded {
          border-color: #1e3a5f;
          box-shadow: 0 20px 40px rgba(30, 58, 95, 0.15);
        }
        
        .cta-button {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
          font-family: inherit;
          text-decoration: none;
          display: inline-block;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.5);
        }
        
        .cta-secondary {
          background: #1e3a5f;
          color: white;
          border: none;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          text-decoration: none;
          display: inline-block;
        }
        
        .cta-secondary:hover {
          background: #2d4a6f;
        }
        
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 12px 24px;
          border-bottom: 1px solid #e2e8f0;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }
        
        .sticky-header.visible {
          transform: translateY(0);
        }
      `}</style>

      {/* Sticky Header */}
      <div className={`sticky-header ${isSticky ? 'visible' : ''}`}>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>SystemForce ERP</span>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="cta-secondary" style={{ padding: '10px 20px', fontSize: '14px' }}>← Back to Home</Link>
            <a href="#demo" className="cta-button" style={{ padding: '10px 20px', fontSize: '14px' }}>View Demo →</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-20 px-6 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(249,115,22,0.1)_0%,transparent_70%)] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_70%)] rounded-full" />
        
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="inline-block bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            {totalFeatures}+ Features Built for Nigerian COD
          </div>
          
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Everything You Need to <br/>
            <span className="text-orange-500">End the Chaos</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Orders. Telesales. Delivery Agents. Inventory. Payments.<br/>
            All tracked. All enforced. All in one system.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#demo" className="cta-button">
              View Demo →
            </a>
            <a href="https://wa.me/2348179455117" className="cta-secondary">
              📞 Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white p-0 -mt-12 relative z-10">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-[20px] shadow-xl grid grid-cols-4 gap-[1px] overflow-hidden">
            {[
              { number: `${totalFeatures}+`, label: 'Features' },
              { number: '14', label: 'Modules' },
              { number: '37', label: 'States Ready' },
              { number: '774', label: 'LGAs Mapped' }
            ].map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center" style={{ borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                <div className="text-4xl font-bold text-orange-500 mb-1" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Every Module. <span className="text-orange-500">Every Detail.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Click any category to see what's inside
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`feature-card ${activeCategory === category.id ? 'expanded' : ''}`}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                style={{ padding: '28px' }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all"
                      style={{ background: activeCategory === category.id ? '#1e3a5f' : '#f1f5f9' }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                        {category.title}
                      </h3>
                      <div className="text-sm text-orange-500 font-semibold">
                        {category.count} features
                      </div>
                    </div>
                  </div>
                  <div 
                    className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-sm text-slate-500 transition-transform"
                    style={{ transform: activeCategory === category.id ? 'rotate(180deg)' : 'none' }}
                  >
                    ▼
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-slate-500 text-sm" style={{ marginBottom: activeCategory === category.id ? '20px' : '0' }}>
                  {category.tagline}
                </p>

                {/* Expanded Content */}
                {activeCategory === category.id && (
                  <div className="animate-in">
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-orange-500 flex-shrink-0">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Highlight Box */}
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-900 leading-relaxed">
                      <strong className="text-orange-500">Key insight:</strong> {category.highlight}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-slate-900 py-20 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            The SystemForce <span className="text-orange-500">Philosophy</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Truth-First', desc: 'Measures reality — not assumptions. Exposes friction — not hides it.' },
              { title: 'Evidence-Only', desc: 'Webhook confirms payment. Photo proves stock. Timestamp proves action.' },
              { title: 'Single Owner', desc: 'Every failure has ONE owner. No finger-pointing. No confusion.' },
              { title: 'Silence = Data', desc: 'Inaction is recorded. Order stuck 24h? System knows who didn\'t act.' },
              { title: 'No Auto-Punishment', desc: 'System surfaces truth. Humans decide consequences.' },
              { title: 'Immutable History', desc: 'Timestamps cannot be edited. Evidence cannot be deleted.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-lg font-bold text-orange-500 mb-2">
                  {item.title}
                </div>
                <div className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Simple <span className="text-orange-500">Pricing</span>
            </h2>
            <p className="text-slate-500 text-lg">
              View demo first. Pay when ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '75,000', orders: '500', das: '50', ts: '5', warehouses: '1' },
              { name: 'Growth', price: '150,000', orders: '5,000', das: '100', ts: '20', warehouses: '5', featured: true },
              { name: 'Enterprise', price: '250,000', orders: 'Unlimited', das: 'Unlimited', ts: 'Unlimited', warehouses: '37' }
            ].map((plan, i) => (
              <div 
                key={i} 
                className="rounded-3xl p-10 relative"
                style={{
                  background: plan.featured ? 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)' : 'white',
                  border: plan.featured ? 'none' : '2px solid #e2e8f0',
                  transform: plan.featured ? 'scale(1.05)' : 'none',
                  boxShadow: plan.featured ? '0 20px 60px rgba(30, 58, 95, 0.3)' : 'none'
                }}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-1.5 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className={`text-lg font-semibold mb-2 ${plan.featured ? 'text-orange-500' : 'text-slate-500'}`}>
                  {plan.name}
                </div>
                <div 
                  className={`text-5xl font-bold mb-1 ${plan.featured ? 'text-white' : 'text-slate-900'}`}
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  ₦{plan.price}
                </div>
                <div className={`text-sm mb-6 ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                  per month
                </div>
                <div className={`border-t pt-6 ${plan.featured ? 'border-white/10' : 'border-slate-200'}`}>
                  {[
                    `${plan.orders} orders/month`,
                    `${plan.das} delivery agents`,
                    `${plan.ts} telesales`,
                    `${plan.warehouses} central warehouse${plan.warehouses === '1' ? '' : 's'}`,
                    'WhatsApp notifications',
                    'Full feature access'
                  ].map((feature, j) => (
                    <div 
                      key={j} 
                      className={`flex items-center gap-2.5 mb-3 text-sm ${plan.featured ? 'text-slate-200' : 'text-slate-600'}`}
                    >
                      <span className="text-green-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <a
                  href="#demo"
                  className={plan.featured ? 'cta-button' : 'cta-secondary'}
                  style={{ width: '100%', marginTop: '24px', textAlign: 'center', display: 'block' }}
                >
                  View Demo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="bg-orange-50 py-20 px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Ready to See It in Action?
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            See exactly how SystemForce works.<br/>
            Or talk to our team — we'll walk you through it.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#demo" className="cta-button" style={{ fontSize: '18px', padding: '18px 40px' }}>
              View Demo →
            </a>
            <a href="https://wa.me/2348179455117" className="cta-secondary" style={{ fontSize: '18px', padding: '18px 40px' }}>
              📞 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 px-6 text-center text-slate-500 text-sm">
        <div className="mb-4">
          Built in Nigeria 🇳🇬 for Nigerian businesses
        </div>
        <div>© 2025 SystemForce ERP. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Features;
