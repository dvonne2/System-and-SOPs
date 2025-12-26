import React, { useState } from 'react';
import Navigation from '@/components/Navigation';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'For growing Cash on Delivery (COD) businesses',
      price: { monthly: '75,000', annual: '60,000' },
      features: {
        orders: '500',
        das: '50',
        telesales: '5',
        warehouses: '1',
        mediaBuyers: '—',
        api: false,
        whiteLabel: false
      },
      extras: [
        'Order management',
        'WhatsApp notifications',
        'Round-robin assignment',
        'Delivery Agent (DA) tracking & freeze',
        'Payment tracking',
        'Basic reports'
      ]
    },
    {
      name: 'Growth',
      description: 'For scaling operations',
      price: { monthly: '150,000', annual: '120,000' },
      featured: true,
      features: {
        orders: '5,000',
        das: '100',
        telesales: '20',
        warehouses: '5',
        mediaBuyers: '10',
        api: true,
        whiteLabel: false
      },
      extras: [
        'Everything in Starter',
        'Media Buyer module',
        'Performance-based assignment',
        'Multi-warehouse inventory',
        'API access',
        'Advanced reports'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large operations',
      price: { monthly: '250,000', annual: '200,000' },
      features: {
        orders: 'Unlimited',
        das: 'Unlimited',
        telesales: 'Unlimited',
        warehouses: '37',
        mediaBuyers: 'Unlimited',
        api: true,
        whiteLabel: true
      },
      extras: [
        'Everything in Growth',
        'Unlimited everything',
        'White label option',
        'Dedicated support',
        'Custom integrations',
        'Priority feature requests'
      ]
    }
  ];

  const comparisonFeatures = [
    { category: 'Capacity', features: [
      { name: 'Orders per month', starter: '500', growth: '5,000', enterprise: 'Unlimited' },
      { name: 'Delivery Agents (DAs)', starter: '50', growth: '100', enterprise: 'Unlimited' },
      { name: 'Telesales Staff', starter: '5', growth: '20', enterprise: 'Unlimited' },
      { name: 'Central Warehouses', starter: '1', growth: '5', enterprise: '37 (all states)' },
      { name: 'Media Buyers', starter: '—', growth: '10', enterprise: 'Unlimited' },
    ]},
    { category: 'Core Features', features: [
      { name: 'Order Management', starter: true, growth: true, enterprise: true },
      { name: 'WhatsApp Notifications', starter: true, growth: true, enterprise: true },
      { name: 'Delivery Agent (DA) Tracking & Freeze', starter: true, growth: true, enterprise: true },
      { name: 'Payment Tracking', starter: true, growth: true, enterprise: true },
      { name: 'Inventory Management', starter: true, growth: true, enterprise: true },
      { name: 'Commission Calculator', starter: true, growth: true, enterprise: true },
    ]},
    { category: 'Assignment & Distribution', features: [
      { name: 'Round-Robin Assignment', starter: true, growth: true, enterprise: true },
      { name: 'Performance-Based Assignment', starter: false, growth: true, enterprise: true },
      { name: 'Location-Based Delivery Agent (DA) Assignment', starter: true, growth: true, enterprise: true },
    ]},
    { category: 'Advanced Features', features: [
      { name: 'Media Buyer Module', starter: false, growth: true, enterprise: true },
      { name: 'Multi-Warehouse Inventory', starter: false, growth: true, enterprise: true },
      { name: 'API Access', starter: false, growth: true, enterprise: true },
      { name: 'White Label', starter: false, growth: false, enterprise: true },
      { name: 'Custom Integrations', starter: false, growth: false, enterprise: true },
    ]},
    { category: 'Support', features: [
      { name: 'WhatsApp Support', starter: true, growth: true, enterprise: true },
      { name: 'Priority Support', starter: false, growth: true, enterprise: true },
      { name: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
      { name: 'Onboarding Assistance', starter: 'Self-serve', growth: 'Guided', enterprise: 'White-glove' },
    ]},
  ];

  const faqs = [
    {
      q: 'What happens if I exceed my order limit?',
      a: 'You\'ll receive a notification when you reach 80% of your limit. If you exceed it, new orders will queue until the next billing cycle, or you can upgrade your plan instantly.'
    },
    {
      q: 'Can I upgrade or downgrade anytime?',
      a: 'Yes. Upgrades take effect immediately with prorated billing. Downgrades take effect at your next billing cycle.'
    },
    {
      q: 'Is there a setup fee?',
      a: 'No setup fees. You only pay the monthly subscription. We\'ll help you get started via WhatsApp.'
    },
    {
      q: 'How does the annual discount work?',
      a: 'Pay annually and get 2 months free (20% discount). You\'ll be billed once per year instead of monthly.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'Bank transfer, card payment, and USSD. We\'ll send you an invoice and payment details after you request a demo.'
    },
    {
      q: 'Can I get a refund?',
      a: 'We offer a 14-day money-back guarantee. If SystemForce isn\'t right for you, we\'ll refund your first payment in full.'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: '"DM Sans", system-ui, sans-serif',
      background: '#f8fafc',
      color: '#1e293b'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
        
        * { box-sizing: border-box; }
        
        .cta-button-pricing {
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
          text-align: center;
        }
        
        .cta-button-pricing:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.5);
        }
        
        .cta-secondary-pricing {
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
          text-align: center;
        }
        
        .cta-secondary-pricing:hover {
          background: #2d4a6f;
        }
        
        .cta-outline-pricing {
          background: transparent;
          color: #1e3a5f;
          border: 2px solid #1e3a5f;
          padding: 14px 30px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }
        
        .cta-outline-pricing:hover {
          background: #1e3a5f;
          color: white;
        }
        
        .plan-card {
          background: white;
          border-radius: 24px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .plan-card:hover {
          border-color: #f97316;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .plan-card.featured {
          background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%);
          border: none;
          transform: scale(1.05);
          box-shadow: 0 25px 60px rgba(30, 58, 95, 0.3);
        }
        
        .toggle-container {
          display: inline-flex;
          background: #e2e8f0;
          border-radius: 100px;
          padding: 4px;
        }
        
        .toggle-option {
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          color: #64748b;
          font-family: inherit;
        }
        
        .toggle-option.active {
          background: white;
          color: #0f172a;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .faq-item {
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          border-color: #cbd5e1;
        }
        
        .faq-question {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-weight: 600;
          color: #0f172a;
        }
        
        .faq-answer {
          padding: 0 24px 20px;
          color: #64748b;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .plan-card.featured {
            transform: scale(1) !important;
          }
          .comparison-table {
            overflow-x: auto;
          }
        }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '20px',
            fontFamily: '"Space Grotesk", sans-serif',
            lineHeight: 1.1
          }}>
            Simple, <span style={{ color: '#f97316' }}>Transparent</span> Pricing
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#94a3b8',
            marginBottom: '32px',
            lineHeight: 1.6
          }}>
            No hidden fees. No surprises. Just what you need to end the chaos.
          </p>
          
          {/* Billing Toggle */}
          <div className="toggle-container">
            <button
              className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`toggle-option ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span style={{ color: '#f97316', marginLeft: '6px' }}>Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{
        padding: '0 24px',
        marginTop: '-60px',
        position: 'relative',
        zIndex: 10
      }}>
        <div className="pricing-grid" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'start'
        }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
              style={{ padding: '40px 32px' }}
            >
              {plan.featured && (
                <div style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 700,
                  display: 'inline-block',
                  marginBottom: '20px'
                }}>
                  MOST POPULAR
                </div>
              )}
              
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: plan.featured ? '#f97316' : '#64748b',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {plan.name}
              </div>
              
              <div style={{
                fontSize: '14px',
                color: plan.featured ? '#94a3b8' : '#64748b',
                marginBottom: '20px'
              }}>
                {plan.description}
              </div>
              
              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: plan.featured ? 'white' : '#0f172a',
                  fontFamily: '"Space Grotesk", sans-serif'
                }}>
                  ₦{plan.price[billingCycle as keyof typeof plan.price]}
                </span>
              </div>
              
              <div style={{
                color: plan.featured ? '#94a3b8' : '#64748b',
                fontSize: '14px',
                marginBottom: '28px'
              }}>
                per month {billingCycle === 'annual' && '(billed annually)'}
              </div>
              
              <a
                href="#demo"
                className={plan.featured ? 'cta-button-pricing' : 'cta-outline-pricing'}
                style={{
                  width: '100%',
                  display: 'block',
                  marginBottom: '28px',
                  ...(plan.featured ? {} : { borderColor: '#1e3a5f' })
                }}
              >
                View Demo
              </a>
              
              <div style={{
                borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                paddingTop: '24px'
              }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: plan.featured ? '#94a3b8' : '#64748b',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  What's included
                </div>
                
                {plan.extras.map((extra, j) => (
                  <div key={j} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                    color: plan.featured ? '#e2e8f0' : '#475569',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#4ade80', fontSize: '16px' }}>✓</span>
                    {extra}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '40px',
            textAlign: 'center',
            fontFamily: '"Space Grotesk", sans-serif'
          }}>
            What You Get at Each Tier
          </h2>
          
          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              background: '#f8fafc',
              padding: '16px 24px',
              fontWeight: 600,
              fontSize: '14px',
              color: '#64748b',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <div></div>
              <div style={{ textAlign: 'center' }}>Starter</div>
              <div style={{ textAlign: 'center', color: '#f97316' }}>Growth</div>
              <div style={{ textAlign: 'center' }}>Enterprise</div>
            </div>
            
            {[
              { label: 'Orders / month', starter: '500', growth: '5,000', enterprise: 'Unlimited' },
              { label: 'Delivery Agents (DAs)', starter: '50', growth: '100', enterprise: 'Unlimited' },
              { label: 'Telesales Staff', starter: '5', growth: '20', enterprise: 'Unlimited' },
              { label: 'Central Warehouses', starter: '1', growth: '5', enterprise: '37' },
              { label: 'Media Buyers', starter: '—', growth: '10', enterprise: 'Unlimited' }
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                padding: '16px 24px',
                borderBottom: i < 4 ? '1px solid #f1f5f9' : 'none',
                alignItems: 'center'
              }}>
                <div style={{ fontWeight: 500, color: '#1e293b' }}>{row.label}</div>
                <div style={{ textAlign: 'center', color: '#64748b' }}>{row.starter}</div>
                <div style={{ textAlign: 'center', color: '#f97316', fontWeight: 600 }}>{row.growth}</div>
                <div style={{ textAlign: 'center', color: '#64748b' }}>{row.enterprise}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section style={{ padding: '40px 24px 80px', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '40px',
            textAlign: 'center',
            fontFamily: '"Space Grotesk", sans-serif'
          }}>
            Full Feature <span style={{ color: '#f97316' }}>Comparison</span>
          </h2>
          
          <div className="comparison-table" style={{
            background: '#f8fafc',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0'
          }}>
            {/* Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              background: '#1e3a5f',
              padding: '20px 24px',
              color: 'white',
              minWidth: '600px'
            }}>
              <div style={{ fontWeight: 600 }}>Features</div>
              <div style={{ textAlign: 'center', fontWeight: 600 }}>Starter</div>
              <div style={{ textAlign: 'center', fontWeight: 600 }}>Growth</div>
              <div style={{ textAlign: 'center', fontWeight: 600 }}>Enterprise</div>
            </div>
            
            {comparisonFeatures.map((category, catIndex) => (
              <div key={catIndex} style={{ minWidth: '600px' }}>
                {/* Category Header */}
                <div style={{
                  background: '#f1f5f9',
                  padding: '12px 24px',
                  fontWeight: 700,
                  color: '#0f172a',
                  fontSize: '14px',
                  borderTop: catIndex > 0 ? '1px solid #e2e8f0' : 'none'
                }}>
                  {category.category}
                </div>
                
                {/* Features */}
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    padding: '14px 24px',
                    background: 'white',
                    borderTop: '1px solid #f1f5f9',
                    alignItems: 'center'
                  }}>
                    <div style={{ color: '#475569', fontSize: '14px' }}>{feature.name}</div>
                    <div style={{ textAlign: 'center' }}>
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? 
                          <span style={{ color: '#4ade80', fontSize: '18px' }}>✓</span> : 
                          <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#64748b', fontSize: '13px' }}>{feature.starter}</span>
                      )}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      {typeof feature.growth === 'boolean' ? (
                        feature.growth ? 
                          <span style={{ color: '#4ade80', fontSize: '18px' }}>✓</span> : 
                          <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#64748b', fontSize: '13px' }}>{feature.growth}</span>
                      )}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? 
                          <span style={{ color: '#4ade80', fontSize: '18px' }}>✓</span> : 
                          <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#64748b', fontSize: '13px' }}>{feature.enterprise}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '40px',
            textAlign: 'center',
            fontFamily: '"Space Grotesk", sans-serif'
          }}>
            Frequently Asked <span style={{ color: '#f97316' }}>Questions</span>
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    transform: openFaq === i ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease',
                    color: '#64748b'
                  }}>
                    ▼
                  </span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '20px',
            fontFamily: '"Space Grotesk", sans-serif'
          }}>
            Ready to See It <span style={{ color: '#f97316' }}>in Action</span>?
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Get a personalized demo. See exactly how SystemForce<br/>
            will work for your business.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="cta-button-pricing" style={{ fontSize: '18px', padding: '18px 40px' }}>
              View Demo →
            </a>
            <a href="https://wa.me/2348179455117" className="cta-secondary-pricing" style={{ fontSize: '18px', padding: '18px 40px' }}>
              📞 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a0f1a',
        padding: '40px 24px',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '14px'
      }}>
        <div style={{ marginBottom: '16px' }}>
          Built in Nigeria 🇳🇬 for Nigerian businesses
        </div>
        <div>© 2025 SystemForce ERP. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Pricing;
