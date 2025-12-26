import { useState } from "react";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";

const VisualSystem = () => {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [leaksVisible, setLeaksVisible] = useState(true);
  const [reinforcingLoops, setReinforcingLoops] = useState(true);
  const [balancingLoops, setBalancingLoops] = useState(true);
  const [selectedStock, setSelectedStock] = useState<string | null>(null);
  const [hoveredStock, setHoveredStock] = useState<string | null>(null);

  const stockInfo: Record<string, any> = {
    'ad-spend': {
      title: '💰 Ad Spend (Energy Input)',
      kpi: 'Daily Budget: Variable',
      impact: 'This is the system\'s forcing function. Without ad spend, no leads enter the system.',
      leverage: 'Optimize: Better targeting, creative testing, audience segmentation',
      connections: ['Generates leads', 'Funded by working capital', 'ROI depends on conversion rate']
    },
    'leads': {
      title: '📋 Leads in Pipeline',
      kpi: 'Conversion Rate: 25-40%',
      impact: 'The first accumulation point. Decays without follow-up.',
      leverage: 'Optimize: Faster response times, better qualification, nurture sequences',
      connections: ['Sourced from ad spend', 'Converted by telesales', 'Decay rate: ~10-20%/day']
    },
    'orders': {
      title: '📦 Active Orders in Process',
      kpi: 'Cycle Time: 2-5 days',
      impact: 'Orders waiting for delivery. High volume here indicates capacity issues.',
      leverage: 'Optimize: Faster dispatch, better DA matching, inventory positioning',
      connections: ['Created by telesales', 'Require DA inventory', 'Completion = revenue']
    },
    'delivered': {
      title: '✅ Delivered & Paid Orders',
      kpi: 'Delivery Success Rate: Target 85%+',
      impact: 'This is your revenue realization point. Failed deliveries leak out.',
      leverage: 'Optimize: DA training, customer education, payment collection systems',
      connections: ['Generates cash', 'Builds brand trust', 'Creates customer base']
    },
    'cash': {
      title: '💵 Cash & Working Capital',
      kpi: 'Working Capital Ratio: Critical',
      impact: 'Available cash determines scale capacity and inventory investment.',
      leverage: 'Optimize: Faster collections, better inventory turns, expense control',
      connections: ['Funds ad spend', 'Buys inventory', 'Pays team', 'Invests in systems']
    },
    'factory': {
      title: '🏭 Factory Inventory',
      kpi: 'Production Lead Time: Varies',
      impact: 'Raw materials and finished goods at production level.',
      leverage: 'Optimize: Better forecasting, supplier relationships, batch sizing',
      connections: ['Flows to warehouse', 'Requires cash investment', 'Subject to shrinkage']
    },
    'warehouse': {
      title: '🏢 Warehouse Inventory',
      kpi: 'Reorder Point: Must maintain',
      impact: 'Central distribution hub. Stockouts here stop all sales.',
      leverage: 'Optimize: Reorder triggers, safety stock levels, accuracy tracking',
      connections: ['Receives from factory', 'Dispatches to DAs', 'Shrinkage risk point']
    },
    'da-inventory': {
      title: '🚚 DA Inventory',
      kpi: 'Coverage: By state/location',
      impact: 'Products positioned close to customers for fast delivery.',
      leverage: 'Optimize: Geographic matching, DA capacity planning, stock rotation',
      connections: ['Enables deliveries', 'Requires waybill tracking', 'Fraud/theft risk']
    },
    'da-network': {
      title: '👥 Delivery Agent Network',
      kpi: 'Active DAs: Number & Quality',
      impact: 'Primary capacity constraint. Quality affects delivery rate and reputation.',
      leverage: 'Optimize: Strict KYC, guarantors, performance monitoring, compliance training',
      connections: ['Limits order volume', 'Affects delivery success', 'Subject to dropout']
    },
    'telesales': {
      title: '📞 Telesales Capacity',
      kpi: 'Conversion Rate & Volume',
      impact: 'Converts leads to orders. Skill level directly affects revenue.',
      leverage: 'Optimize: Training, scripts, CRM tools, performance bonuses',
      connections: ['Processes leads', 'Creates orders', 'Subject to turnover']
    },
    'systems': {
      title: '⚙️ Systems Maturity',
      kpi: 'Process Quality Score',
      impact: 'Determines accuracy, efficiency, and scalability of operations.',
      leverage: 'Optimize: Better dashboards, SOPs, automation, training programs',
      connections: ['Reduces errors', 'Improves decisions', 'Enables scale', 'Self-reinforcing']
    },
    'trust': {
      title: '🌟 Brand Trust & Reputation',
      kpi: 'Net Promoter Score (NPS)',
      impact: 'Affects conversion rate, word-of-mouth, and repeat purchase rate.',
      leverage: 'Optimize: Delivery excellence, customer care, visible results, testimonials',
      connections: ['Built by delivery experience', 'Increases conversion', 'Generates WOM']
    },
    'customers': {
      title: '👥 Customer Base',
      kpi: 'Repeat Rate: Target 30-50%',
      impact: 'First-time buyers who become loyal advocates. LTV = 2-5x initial purchase.',
      leverage: 'Optimize: Education, follow-up, product results, loyalty programs',
      connections: ['Created by first purchase', 'Generate repeat revenue', 'Drive referrals']
    },
    'wom': {
      title: '📣 Word of Mouth',
      kpi: 'Organic Lead %',
      impact: 'Reduces customer acquisition cost over time. Self-perpetuating growth.',
      leverage: 'Optimize: Referral programs, social proof, visible transformations',
      connections: ['Reduces ad dependency', 'Increases trust', 'Lowers CAC']
    },
    'team': {
      title: '🎓 Team Capability',
      kpi: 'Retention & Performance',
      impact: 'Strong team enables all operations. Weak hiring causes system-wide issues.',
      leverage: 'Optimize: Recruitment filters, training programs, culture, accountability',
      connections: ['Supports all operations', 'SystemForce Academy', 'Subject to turnover']
    }
  };

  const closeInfo = () => setSelectedStock(null);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '20px', paddingTop: '80px' }}>
      <Navigation />
      <div className="max-w-[1600px] mx-auto bg-white rounded-xl p-8 shadow-2xl">
        <h1 className="text-center text-4xl font-bold text-[#2c3e50] mb-2">🌱 Vitalvida System Map</h1>
        <p className="text-center text-[#7f8c8d] italic mb-5">Enhanced Donella Meadows-Style Systems Thinking Diagram</p>
        
        {/* Controls */}
        <div className="flex justify-center gap-4 mb-5 flex-wrap">
          <button 
            onClick={() => setAnimationsEnabled(!animationsEnabled)}
            className={`px-5 py-2.5 border-none rounded-md cursor-pointer font-semibold transition-all duration-300 text-sm ${animationsEnabled ? 'shadow-[0_0_0_3px_rgba(52,152,219,0.3)]' : ''}`}
            style={{ background: '#3498db', color: 'white' }}
          >
            ▶️ Toggle Flow Animations
          </button>
          <button 
            onClick={() => setReinforcingLoops(!reinforcingLoops)}
            className={`px-5 py-2.5 border-none rounded-md cursor-pointer font-semibold transition-all duration-300 text-sm ${reinforcingLoops ? 'shadow-[0_0_0_3px_rgba(52,152,219,0.3)]' : ''}`}
            style={{ background: '#27ae60', color: 'white' }}
          >
            🔄 Show R Loops
          </button>
          <button 
            onClick={() => setBalancingLoops(!balancingLoops)}
            className={`px-5 py-2.5 border-none rounded-md cursor-pointer font-semibold transition-all duration-300 text-sm ${balancingLoops ? 'shadow-[0_0_0_3px_rgba(52,152,219,0.3)]' : ''}`}
            style={{ background: '#e74c3c', color: 'white' }}
          >
            ⚖️ Show B Loops
          </button>
          <button 
            onClick={() => setLeaksVisible(!leaksVisible)}
            className={`px-5 py-2.5 border-none rounded-md cursor-pointer font-semibold transition-all duration-300 text-sm ${leaksVisible ? 'shadow-[0_0_0_3px_rgba(52,152,219,0.3)]' : ''}`}
            style={{ background: '#f39c12', color: 'white' }}
          >
            ⚠️ Toggle Leak Points
          </button>
        </div>
        
        {/* Purpose */}
        <div className="rounded-xl p-6 mb-8 text-center shadow-[0_4px_15px_rgba(102,126,234,0.3)]" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h2 className="mb-2.5 text-xl font-semibold">🎯 Queen Bee Role (System Purpose)</h2>
          <p className="text-lg leading-relaxed">"Get genuinely high-performing hair products into the hands of the right women, ensure they actually use them correctly, and turn them into loyal repeat customers — profitably and at scale."</p>
        </div>
        
        {/* Diagram Container */}
        <div className="relative min-h-[1400px] my-8 bg-[#fafbfc] rounded-xl p-5">
          
          {/* ENERGY INPUT */}
          <div 
            className={`absolute bg-white border-[4px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'ad-spend' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '50px', left: '50px', borderColor: '#e74c3c', background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)', animation: 'pulse 2s infinite' }}
            onClick={() => setSelectedStock('ad-spend')}
            onMouseEnter={() => setHoveredStock('ad-spend')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#e74c3c] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#e74c3c' }}>💰 Ad Spend</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Marketing budget<br/>Facebook ads<br/>Campaigns & creatives</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>External energy input</div>
          </div>
          
          {/* CORE FLOW STOCKS */}
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'leads' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '50px', left: '280px', borderColor: '#34495e' }}
            onClick={() => setSelectedStock('leads')}
            onMouseEnter={() => setHoveredStock('leads')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#34495e' }}>📋 Leads in Pipeline</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Interested prospects<br/>Forms filled<br/>Calls/DMs received</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Conversion rate: ~25-40%</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'orders' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '50px', left: '510px', borderColor: '#34495e' }}
            onClick={() => setSelectedStock('orders')}
            onMouseEnter={() => setHoveredStock('orders')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#34495e' }}>📦 Active Orders</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Orders placed<br/>Not yet delivered<br/>In process</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Delivery cycle: 2-5 days</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'delivered' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '50px', left: '740px', borderColor: '#27ae60' }}
            onClick={() => setSelectedStock('delivered')}
            onMouseEnter={() => setHoveredStock('delivered')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#27ae60' }}>✅ Delivered & Paid</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Completed orders<br/>Payment collected<br/>Revenue realized</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Core revenue engine</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'cash' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '50px', left: '970px', borderColor: '#27ae60' }}
            onClick={() => setSelectedStock('cash')}
            onMouseEnter={() => setHoveredStock('cash')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#27ae60' }}>💵 Cash & Working Capital</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Available funds<br/>For reinvestment<br/>Operations</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Determines scale capacity</div>
          </div>
          
          {/* INVENTORY LAYER */}
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'factory' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '280px', left: '50px', borderColor: '#f39c12' }}
            onClick={() => setSelectedStock('factory')}
            onMouseEnter={() => setHoveredStock('factory')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#f39c12' }}>🏭 Factory Inventory</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Raw materials<br/>Finished products<br/>Production stock</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Production lead time: varies</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'warehouse' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '280px', left: '280px', borderColor: '#f39c12' }}
            onClick={() => setSelectedStock('warehouse')}
            onMouseEnter={() => setHoveredStock('warehouse')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#f39c12' }}>🏢 Warehouse Inventory</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Office stock<br/>Ready for dispatch<br/>Central hub</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Reorder point critical</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'da-inventory' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '280px', left: '510px', borderColor: '#f39c12' }}
            onClick={() => setSelectedStock('da-inventory')}
            onMouseEnter={() => setHoveredStock('da-inventory')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#f39c12' }}>🚚 DA Inventory</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Stock with agents<br/>By state/location<br/>Ready to deliver</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Must match order flow</div>
          </div>
          
          {/* OPERATIONAL CAPACITY */}
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'da-network' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '510px', left: '50px', borderColor: '#9b59b6' }}
            onClick={() => setSelectedStock('da-network')}
            onMouseEnter={() => setHoveredStock('da-network')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#9b59b6' }}>👥 Delivery Agent Network</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Number of DAs<br/>Geographic spread<br/>Reliability level</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Key capacity constraint</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'telesales' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '510px', left: '280px', borderColor: '#9b59b6' }}
            onClick={() => setSelectedStock('telesales')}
            onMouseEnter={() => setHoveredStock('telesales')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#9b59b6' }}>📞 Telesales Capacity</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Number of staff<br/>Skill level<br/>Conversion ability</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Converts leads → orders</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'systems' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '510px', left: '510px', borderColor: '#34495e' }}
            onClick={() => setSelectedStock('systems')}
            onMouseEnter={() => setHoveredStock('systems')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#34495e' }}>⚙️ Systems Maturity</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">SOPs quality<br/>Dashboard accuracy<br/>Process strength</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Wilke-style excellence</div>
          </div>
          
          {/* CUSTOMER & BRAND */}
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'trust' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '750px', left: '280px', borderColor: '#e91e63' }}
            onClick={() => setSelectedStock('trust')}
            onMouseEnter={() => setHoveredStock('trust')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#e91e63' }}>🌟 Brand Trust</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Customer perception<br/>Reputation<br/>Testimonials</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Affects conversion rate</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'customers' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '750px', left: '510px', borderColor: '#e91e63' }}
            onClick={() => setSelectedStock('customers')}
            onMouseEnter={() => setHoveredStock('customers')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#e91e63' }}>👥 Customer Base</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">First-time buyers<br/>Repeat customers<br/>Loyal advocates</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>LTV = 2-5x first purchase</div>
          </div>
          
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'wom' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '750px', left: '740px', borderColor: '#e91e63' }}
            onClick={() => setSelectedStock('wom')}
            onMouseEnter={() => setHoveredStock('wom')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#e91e63' }}>📣 Word of Mouth</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Organic referrals<br/>Social proof<br/>Natural growth</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>Reduces CAC over time</div>
          </div>
          
          {/* TEAM */}
          <div 
            className={`absolute bg-white border-[3px] rounded-lg p-4 min-w-[160px] shadow-lg transition-all duration-300 cursor-pointer ${hoveredStock === 'team' ? 'transform -translate-y-1 shadow-2xl z-[100]' : ''}`}
            style={{ top: '980px', left: '50px', borderColor: '#9b59b6' }}
            onClick={() => setSelectedStock('team')}
            onMouseEnter={() => setHoveredStock('team')}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <h3 className="text-[#2c3e50] text-sm font-bold mb-2 border-b-2 pb-1 flex items-center gap-1" style={{ borderColor: '#9b59b6' }}>🎓 Team Capability</h3>
            <p className="text-[#7f8c8d] text-xs leading-relaxed">Hiring quality<br/>Training level<br/>Culture strength</p>
            <div className="mt-2 pt-2 border-t text-xs text-[#95a5a6]" style={{ borderColor: '#ecf0f1' }}>SystemForce Academy</div>
          </div>
          
          {/* LEAK POINTS */}
          {leaksVisible && (
            <>
              <div className="absolute bg-[rgba(231,76,60,0.1)] border-2 border-dashed rounded-md p-2.5 min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-[rgba(231,76,60,0.2)] hover:scale-105" style={{ top: '180px', left: '340px', borderColor: '#e74c3c' }}>
                <h4 className="text-[#c0392b] text-[0.85em] mb-1 flex items-center gap-1">⚠️ Lead Decay</h4>
                <p className="text-[#e74c3c] text-xs leading-snug">Poor follow-up<br/>Slow response<br/>Lost interest</p>
              </div>
              
              <div className="absolute bg-[rgba(231,76,60,0.1)] border-2 border-dashed rounded-md p-2.5 min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-[rgba(231,76,60,0.2)] hover:scale-105" style={{ top: '180px', left: '570px', borderColor: '#e74c3c' }}>
                <h4 className="text-[#c0392b] text-[0.85em] mb-1 flex items-center gap-1">⚠️ Failed Orders</h4>
                <p className="text-[#e74c3c] text-xs leading-snug">Customer unavailable<br/>Changed mind<br/>DA issues</p>
              </div>
              
              <div className="absolute bg-[rgba(231,76,60,0.1)] border-2 border-dashed rounded-md p-2.5 min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-[rgba(231,76,60,0.2)] hover:scale-105" style={{ top: '410px', left: '150px', borderColor: '#e74c3c' }}>
                <h4 className="text-[#c0392b] text-[0.85em] mb-1 flex items-center gap-1">⚠️ Shrinkage & Theft</h4>
                <p className="text-[#e74c3c] text-xs leading-snug">Missing cartons<br/>Inventory errors<br/>Fraud</p>
              </div>
              
              <div className="absolute bg-[rgba(231,76,60,0.1)] border-2 border-dashed rounded-md p-2.5 min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-[rgba(231,76,60,0.2)] hover:scale-105" style={{ top: '640px', left: '110px', borderColor: '#e74c3c' }}>
                <h4 className="text-[#c0392b] text-[0.85em] mb-1 flex items-center gap-1">⚠️ DA Dropout</h4>
                <p className="text-[#e74c3c] text-xs leading-snug">Poor performance<br/>Non-compliance<br/>Turnover</p>
              </div>
              
              <div className="absolute bg-[rgba(231,76,60,0.1)] border-2 border-dashed rounded-md p-2.5 min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-[rgba(231,76,60,0.2)] hover:scale-105" style={{ top: '640px', left: '340px', borderColor: '#e74c3c' }}>
                <h4 className="text-[#c0392b] text-[0.85em] mb-1 flex items-center gap-1">⚠️ Staff Turnover</h4>
                <p className="text-[#e74c3c] text-xs leading-snug">Wrong hires<br/>Burnout<br/>Weak culture</p>
              </div>
              
              <div className="absolute bg-[rgba(231,76,60,0.1)] border-2 border-dashed rounded-md p-2.5 min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-[rgba(231,76,60,0.2)] hover:scale-105" style={{ top: '880px', left: '300px', borderColor: '#e74c3c' }}>
                <h4 className="text-[#c0392b] text-[0.85em] mb-1 flex items-center gap-1">⚠️ Reputation Damage</h4>
                <p className="text-[#e74c3c] text-xs leading-snug">Delayed deliveries<br/>Bad DA behavior<br/>Negative reviews</p>
              </div>
            </>
          )}
          
          {/* FLOW LABELS WITH POLARITY */}
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '70px', left: '160px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            Generate Leads <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '70px', left: '390px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            Convert to Orders <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span><span className="inline-block ml-1 text-[#f39c12] text-[0.9em]">⏱ 1-3 days</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '70px', left: '620px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            Complete Delivery <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span><span className="inline-block ml-1 text-[#f39c12] text-[0.9em]">⏱ 2-5 days</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '70px', left: '850px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            Collect Payment <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '20px', left: '1020px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            ↺ Reinvest <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '210px', left: '70px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            ↓ Production Flow <span className="inline-block ml-1 text-[#f39c12] text-[0.9em]">⏱ varies</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '210px', left: '280px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            → Replenishment <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '210px', left: '510px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            → Dispatch <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '440px', left: '70px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            ↑ Delivery Support <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '440px', left: '280px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            ↑ Convert Leads <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '440px', left: '510px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            ↑ Process Excellence <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '680px', left: '280px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            ↓ Build Trust <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '680px', left: '510px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            → Create Customers <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '680px', left: '740px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            → Generate WOM <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          
          <div className="absolute bg-[rgba(255,255,255,0.95)] px-3 py-1.5 rounded text-xs text-[#2c3e50] font-semibold shadow-sm border whitespace-nowrap" style={{ top: '920px', left: '70px', borderColor: '#e0e0e0', animation: animationsEnabled ? 'pulse 1.5s infinite' : 'none' }}>
            ↑ Strengthen Team <span className="inline-block ml-1 font-bold text-[1.1em]" style={{ color: '#27ae60' }}>+</span>
          </div>
          
          {/* DELAY MARKERS */}
          <div className="absolute w-5 h-5 bg-[#f39c12] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md" style={{ top: '90px', left: '390px' }} title="1-3 day delay">⏱</div>
          <div className="absolute w-5 h-5 bg-[#f39c12] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md" style={{ top: '90px', left: '620px' }} title="2-5 day delay">⏱</div>
          <div className="absolute w-5 h-5 bg-[#f39c12] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md" style={{ top: '230px', left: '70px' }} title="Production delay">⏱</div>
          
          {/* FEEDBACK LOOPS */}
          {reinforcingLoops && (
            <>
              <div className="absolute border-[3px] border-dashed rounded-[20px] p-4 transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.9)] hover:scale-[1.02]" style={{ top: '10px', left: '30px', width: '1150px', height: '120px', borderColor: '#27ae60', background: 'rgba(39, 174, 96, 0.05)' }}></div>
              <div className="absolute font-bold text-sm px-3 py-1.5 rounded cursor-pointer transition-all duration-300 shadow-md hover:scale-105" style={{ top: '0px', left: '40px', background: '#27ae60', color: 'white' }}>
                R1: Cash Engine Loop 🔄
              </div>
              
              <div className="absolute border-[3px] border-dashed rounded-[20px] p-4 transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.9)] hover:scale-[1.02]" style={{ top: '700px', left: '250px', width: '550px', height: '180px', borderColor: '#27ae60', background: 'rgba(39, 174, 96, 0.05)' }}></div>
              <div className="absolute font-bold text-sm px-3 py-1.5 rounded cursor-pointer transition-all duration-300 shadow-md hover:scale-105" style={{ top: '690px', left: '260px', background: '#27ae60', color: 'white' }}>
                R2: Trust & Word-of-Mouth Loop 💚
              </div>
              
              <div className="absolute border-[3px] border-dashed rounded-[20px] p-4 transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.9)] hover:scale-[1.02]" style={{ top: '460px', left: '480px', width: '200px', height: '280px', borderColor: '#27ae60', background: 'rgba(39, 174, 96, 0.05)' }}></div>
              <div className="absolute font-bold text-sm px-3 py-1.5 rounded cursor-pointer transition-all duration-300 shadow-md hover:scale-105" style={{ top: '450px', left: '490px', background: '#27ae60', color: 'white' }}>
                R3: Systems Excellence 🎯
              </div>
            </>
          )}
          
          {balancingLoops && (
            <>
              <div className="absolute border-[3px] border-dashed rounded-[20px] p-4 transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.9)] hover:scale-[1.02]" style={{ top: '460px', left: '20px', width: '410px', height: '120px', borderColor: '#e74c3c', background: 'rgba(231, 76, 60, 0.05)' }}></div>
              <div className="absolute font-bold text-sm px-3 py-1.5 rounded cursor-pointer transition-all duration-300 shadow-md hover:scale-105" style={{ top: '450px', left: '30px', background: '#e74c3c', color: 'white' }}>
                B1: Capacity Constraint ⚖️
              </div>
              
              <div className="absolute border-[3px] border-dashed rounded-[20px] p-4 transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.9)] hover:scale-[1.02]" style={{ top: '230px', left: '20px', width: '700px', height: '120px', borderColor: '#e74c3c', background: 'rgba(231, 76, 60, 0.05)' }}></div>
              <div className="absolute font-bold text-sm px-3 py-1.5 rounded cursor-pointer transition-all duration-300 shadow-md hover:scale-105" style={{ top: '220px', left: '280px', background: '#e74c3c', color: 'white' }}>
                B2: Inventory & Cash Limits 📊
              </div>
              
              <div className="absolute border-[3px] border-dashed rounded-[20px] p-4 transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.9)] hover:scale-[1.02]" style={{ top: '930px', left: '20px', width: '500px', height: '120px', borderColor: '#e74c3c', background: 'rgba(231, 76, 60, 0.05)' }}></div>
              <div className="absolute font-bold text-sm px-3 py-1.5 rounded cursor-pointer transition-all duration-300 shadow-md hover:scale-105" style={{ top: '920px', left: '180px', background: '#e74c3c', color: 'white' }}>
                B3: Complexity & Attention ⚠️
              </div>
            </>
          )}
        </div>
        
        {/* System Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          <div className="text-white p-5 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)' }}>
            <h4 className="text-sm mb-2.5 opacity-90">Reinforcing Loops</h4>
            <div className="text-[2em] font-bold">3</div>
          </div>
          <div className="text-white p-5 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' }}>
            <h4 className="text-sm mb-2.5 opacity-90">Balancing Loops</h4>
            <div className="text-[2em] font-bold">3</div>
          </div>
          <div className="text-white p-5 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)' }}>
            <h4 className="text-sm mb-2.5 opacity-90">Leak Points</h4>
            <div className="text-[2em] font-bold">6</div>
          </div>
          <div className="text-white p-5 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)' }}>
            <h4 className="text-sm mb-2.5 opacity-90">Core Stocks</h4>
            <div className="text-[2em] font-bold">14</div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-5 bg-[#f8f9fa] rounded-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px]" style={{ borderColor: '#e74c3c', background: '#fff5f5' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>Energy Input:</strong> External energy source</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px]" style={{ borderColor: '#27ae60', background: 'white' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>Money Stock:</strong> Financial resources</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px]" style={{ borderColor: '#f39c12', background: 'white' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>Inventory Stock:</strong> Physical goods</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px]" style={{ borderColor: '#9b59b6', background: 'white' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>People Stock:</strong> Human capacity</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px]" style={{ borderColor: '#e91e63', background: 'white' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>Reputation Stock:</strong> Brand & trust</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px]" style={{ borderColor: '#34495e', background: 'white' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>Operations Stock:</strong> Processes</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-2 border-dashed" style={{ borderColor: '#e74c3c', background: 'rgba(231, 76, 60, 0.1)' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>Leak Point:</strong> System losses</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px] border-dashed" style={{ borderColor: '#27ae60', background: 'rgba(39, 174, 96, 0.1)' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>R Loop:</strong> Reinforcing (growth)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex-shrink-0 border-[3px] border-dashed" style={{ borderColor: '#e74c3c', background: 'rgba(231, 76, 60, 0.1)' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>B Loop:</strong> Balancing (limits)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: '#f39c12' }}></div>
            <span className="text-sm text-[#2c3e50]"><strong>Delay Marker:</strong> Time lag in flow</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span style={{ color: '#27ae60', fontSize: '1.5em', fontWeight: 'bold' }}>+</span>
            <span className="text-sm text-[#2c3e50]"><strong>Positive Polarity:</strong> Same direction</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span style={{ color: '#e74c3c', fontSize: '1.5em', fontWeight: 'bold' }}>−</span>
            <span className="text-sm text-[#2c3e50]"><strong>Negative Polarity:</strong> Opposite direction</span>
          </div>
        </div>
        
        {/* Leverage Points */}
        <div className="mt-8 p-5 bg-[#fff3cd] border-l-[5px] rounded" style={{ borderColor: '#f39c12' }}>
          <h3 className="text-[#e67e22] mb-4">⚡ High Leverage Points (Meadows-Style Intervention Points)</h3>
          <ul className="list-inside text-[#7f8c8d] leading-8">
            <li><strong>Information Flows:</strong> Real-time dashboards for DA inventory, payment matching, order status, fraud alerts</li>
            <li><strong>Rules & Incentives:</strong> Bonus structures that reward delivery rate, honesty, accuracy over shortcuts</li>
            <li><strong>Mindset & Culture:</strong> "We don't bend rules here" — training, penalties, KYC, consequences</li>
            <li><strong>Quality Filters:</strong> Strong DA & telesales recruitment with KYC + guarantors + Wilke-style operators</li>
            <li><strong>Product Education:</strong> Clear instructions, follow-ups, before/after documentation for real results</li>
            <li><strong>Leak Prevention:</strong> Systems to catch shrinkage, fraud, lead decay, reputation damage early</li>
          </ul>
        </div>
        
        {/* System Starting Point */}
        <div className="mt-8 p-5 bg-[#e8f5e9] rounded-lg border-l-[5px]" style={{ borderColor: '#4caf50' }}>
          <h3 className="text-[#2e7d32] mb-2.5">🌱 System Starting Point</h3>
          <p className="text-[#558b2f] leading-relaxed">
            <strong>Following Donella Meadows' principle:</strong> The system begins where external energy first enters. 
            For Vitalvida, this is <strong>Ad Spend → Attention → Leads</strong>. Without this initial input, 
            no other flows activate. This is your forcing function — the spark that ignites every subsequent stock and loop.
          </p>
        </div>
        
        {/* Feedback Loops Explained */}
        <div className="mt-5 p-4 bg-[#f5f5f5] rounded-lg text-center text-[#7f8c8d] text-sm">
          <p><strong>Key Feedback Loops Explained:</strong></p>
          <p className="mt-2.5"><strong>R1 (Cash Engine):</strong> More ads → more leads → more sales → more cash → more ads (primary growth driver)</p>
          <p><strong>R2 (Trust):</strong> Better delivery → stronger trust → higher conversion → more happy customers → more referrals → cheaper acquisition</p>
          <p><strong>R3 (Systems):</strong> Better data → smarter decisions → fewer errors → higher profit → better tools → better data (operational excellence)</p>
          <p><strong>B1 (Capacity):</strong> More orders hit delivery/telesales limits → delays increase → growth slows (capacity governor)</p>
          <p><strong>B2 (Inventory):</strong> More orders drain stock faster → stockouts → sales pause until replenishment (working capital limit)</p>
          <p><strong>B3 (Complexity):</strong> More growth → more complexity → stretched management → errors increase → forced simplification</p>
        </div>
      </div>
      
      {/* Info Panel */}
      {selectedStock && stockInfo[selectedStock] && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-[999]" 
            onClick={closeInfo}
          />
          <div className="fixed top-1/2 right-5 -translate-y-1/2 bg-white rounded-xl p-5 shadow-2xl max-w-[300px] max-h-[80vh] overflow-y-auto z-[1000] animate-[slideIn_0.3s_ease]">
            <button 
              className="absolute top-2.5 right-2.5 bg-none border-none text-2xl cursor-pointer text-[#95a5a6] hover:text-[#e74c3c]"
              onClick={closeInfo}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-[#2c3e50] mb-4 pb-2.5 border-b-2" style={{ borderColor: '#3498db' }}>{stockInfo[selectedStock].title}</h3>
            
            <div className="mb-4">
              <h4 className="text-[#7f8c8d] text-sm mb-1">📊 Key Metric</h4>
              <p className="text-[#2c3e50] text-[0.85em] leading-relaxed">{stockInfo[selectedStock].kpi}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-[#7f8c8d] text-sm mb-1">💡 System Impact</h4>
              <p className="text-[#2c3e50] text-[0.85em] leading-relaxed">{stockInfo[selectedStock].impact}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-[#7f8c8d] text-sm mb-1">⚡ Leverage Point</h4>
              <p className="text-[#2c3e50] text-[0.85em] leading-relaxed">{stockInfo[selectedStock].leverage}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-[#7f8c8d] text-sm mb-1">🔗 Key Connections</h4>
              <div className="text-[#2c3e50] text-[0.85em] leading-relaxed">
                {stockInfo[selectedStock].connections.map((conn: string, idx: number) => (
                  <p key={idx}>{conn}</p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      
      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 10px rgba(231, 76, 60, 0.3); }
          50% { box-shadow: 0 4px 20px rgba(231, 76, 60, 0.6); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default VisualSystem;
