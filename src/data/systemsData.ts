export interface Stock {
  id: string;
  title: string;
  icon: string;
  category: 'money' | 'inventory' | 'people' | 'reputation' | 'operations';
  description: string;
  isEnergyInput?: boolean;
  kpi?: string;
  impact: string;
  leverage: string;
  connections: string;
}

export interface LeakPoint {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface FeedbackLoop {
  id: string;
  type: 'reinforcing' | 'balancing';
  label: string;
  description: string;
  stocks: string[];
}

export const stocks: Stock[] = [
  // Money Stocks
  {
    id: 'ad-spend',
    title: 'Ad Spend',
    icon: '💰',
    category: 'money',
    description: 'Marketing budget invested to generate attention and leads',
    isEnergyInput: true,
    kpi: 'Daily Budget: Variable',
    impact: 'This is the system\'s forcing function. Without ad spend, no leads enter the system.',
    leverage: 'Better targeting, creative testing, audience segmentation',
    connections: 'Generates leads • Funded by working capital • ROI depends on conversion rate'
  },
  {
    id: 'cash',
    title: 'Cash & Working Capital',
    icon: '💵',
    category: 'money',
    description: 'Available funds to reinvest in ads, inventory, and operations',
    kpi: 'Cash Flow: Daily',
    impact: 'Fuel for growth. Determines how much can be reinvested into the system.',
    leverage: 'Improve collection rates, reduce payment delays, optimize inventory turns',
    connections: 'Funds ad spend • Receives payments • Enables operations'
  },
  {
    id: 'delivered',
    title: 'Delivered & Paid Orders',
    icon: '✅',
    category: 'money',
    description: 'Successfully completed sales that generate revenue',
    kpi: 'Delivery Rate: 65-75%',
    impact: 'The conversion of effort into cash. This is where value crystallizes.',
    leverage: 'Improve DA reliability, faster delivery times, better customer experience',
    connections: 'Generates cash • Built from active orders • Enables reinvestment'
  },
  
  // Inventory Stocks
  {
    id: 'factory-inventory',
    title: 'Factory Inventory',
    icon: '🏭',
    category: 'inventory',
    description: 'Products manufactured and ready for warehouse distribution',
    kpi: 'Production Cycles: Variable',
    impact: 'The source of all physical product. Delays here cascade through the system.',
    leverage: 'Better forecasting, faster production cycles, quality control',
    connections: 'Flows to warehouse • Production lead times • Stock level monitoring'
  },
  {
    id: 'warehouse-inventory',
    title: 'Warehouse Inventory',
    icon: '🏢',
    category: 'inventory',
    description: 'Centralized stock ready to distribute to delivery agents',
    kpi: 'Stock Levels: Monitored',
    impact: 'The buffer that enables consistent fulfillment. Stockouts stop sales.',
    leverage: 'Optimize reorder points, reduce shrinkage, improve tracking',
    connections: 'Receives from factory • Distributes to DAs • Enables order fulfillment'
  },
  {
    id: 'da-inventory',
    title: 'DA (Delivery Agent) Inventory',
    icon: '🚚',
    category: 'inventory',
    description: 'Products distributed to agents for last-mile delivery',
    kpi: 'Distribution: Daily',
    impact: 'Enables fast delivery. The closer products are to customers, the faster fulfillment.',
    leverage: 'Better allocation, real-time tracking, prevent theft and losses',
    connections: 'Enables deliveries • Replenished from warehouse • Shrinkage risk point'
  },
  
  // People Stocks
  {
    id: 'da-network',
    title: 'Delivery Agent Network',
    icon: '👥',
    category: 'people',
    description: 'Pool of trained agents handling last-mile delivery',
    kpi: 'Active DAs: Growing',
    impact: 'Your distribution capacity. More quality DAs = more deliveries = more revenue.',
    leverage: 'Strong recruitment, KYC processes, guarantors, performance bonuses',
    connections: 'Enables deliveries • Requires training • Dropout risk point'
  },
  {
    id: 'telesales',
    title: 'Telesales Capacity',
    icon: '📞',
    category: 'people',
    description: 'Team members converting leads into confirmed orders',
    kpi: 'Conversion: 25-40%',
    impact: 'The human bridge between interest and purchase. Bottlenecks here stop growth.',
    leverage: 'Better scripts, faster response times, skill development',
    connections: 'Converts leads to orders • Training improves performance • Capacity constraint'
  },
  {
    id: 'team-capability',
    title: 'Team Capability',
    icon: '🎓',
    category: 'people',
    description: 'Overall skill level and effectiveness of the organization',
    kpi: 'Training: Continuous',
    impact: 'Determines quality of execution across all functions. High capability = fewer errors.',
    leverage: 'Structured training programs, hiring standards, knowledge sharing',
    connections: 'Improves all operations • Built through training • Reduces system leaks'
  },
  
  // Reputation Stocks
  {
    id: 'brand-trust',
    title: 'Brand Trust & Reputation',
    icon: '🌟',
    category: 'reputation',
    description: 'Customer perception and confidence in Vitalvida',
    kpi: 'Trust Level: Building',
    impact: 'Accelerates conversion, reduces objections, enables premium pricing.',
    leverage: 'Consistent quality, excellent delivery experience, customer education',
    connections: 'Built by positive experiences • Drives higher conversion • Damaged by failures'
  },
  {
    id: 'customer-base',
    title: 'Customer Base',
    icon: '👥',
    category: 'reputation',
    description: 'Total pool of people who have purchased from Vitalvida',
    kpi: 'Customers: Accumulating',
    impact: 'The foundation for repeat business and referrals. Every customer is an asset.',
    leverage: 'Retention programs, product education, follow-up sequences',
    connections: 'Built from first purchases • Generates repeat orders • Drives word of mouth'
  },
  {
    id: 'word-of-mouth',
    title: 'Word of Mouth',
    icon: '📣',
    category: 'reputation',
    description: 'Organic referrals and recommendations from satisfied customers',
    kpi: 'Referral Rate: Growing',
    impact: 'Free lead generation. The best customers come from referrals.',
    leverage: 'Exceptional experiences, referral incentives, social proof',
    connections: 'Generates organic leads • Reduces acquisition cost • Built by customer satisfaction'
  },
  
  // Operations Stocks
  {
    id: 'leads',
    title: 'Leads in Pipeline',
    icon: '📋',
    category: 'operations',
    description: 'Potential customers showing interest in products',
    kpi: 'Conversion Rate: 25-40%',
    impact: 'The first accumulation point. Decays without follow-up.',
    leverage: 'Faster response times, better qualification, nurture sequences',
    connections: 'Sourced from ad spend • Converted by telesales • Decay rate: ~10-20%/day'
  },
  {
    id: 'active-orders',
    title: 'Active Orders in Process',
    icon: '📦',
    category: 'operations',
    description: 'Confirmed orders being prepared and delivered',
    kpi: 'Processing: 2-5 days',
    impact: 'Work in progress. The bridge between sale and revenue.',
    leverage: 'Faster fulfillment, better tracking, reduce failures',
    connections: 'Built from leads • Fulfilled by DAs • Converts to revenue'
  },
  {
    id: 'systems-maturity',
    title: 'Systems Maturity',
    icon: '⚙️',
    category: 'operations',
    description: 'Quality of data, processes, and operational infrastructure',
    kpi: 'Maturity: Evolving',
    impact: 'Better systems = better decisions = fewer errors = higher profits.',
    leverage: 'Invest in dashboards, automation, data quality, process documentation',
    connections: 'Improves all operations • Built through investment • Reduces complexity'
  }
];

export const leakPoints: LeakPoint[] = [
  {
    id: 'lead-decay',
    title: 'Lead Decay',
    icon: '⚠️',
    description: 'Poor follow-up, slow response, lost interest'
  },
  {
    id: 'failed-orders',
    title: 'Failed Orders',
    icon: '⚠️',
    description: 'Customer unavailable, changed mind, DA issues'
  },
  {
    id: 'shrinkage',
    title: 'Shrinkage & Theft',
    icon: '⚠️',
    description: 'Missing cartons, inventory errors, fraud'
  },
  {
    id: 'da-dropout',
    title: 'DA Dropout',
    icon: '⚠️',
    description: 'Poor performance, non-compliance, turnover'
  },
  {
    id: 'staff-turnover',
    title: 'Staff Turnover',
    icon: '⚠️',
    description: 'Wrong hires, burnout, weak culture'
  },
  {
    id: 'reputation-damage',
    title: 'Reputation Damage',
    icon: '⚠️',
    description: 'Delayed deliveries, bad DA behavior, negative reviews'
  }
];

export const feedbackLoops: FeedbackLoop[] = [
  {
    id: 'r1',
    type: 'reinforcing',
    label: 'R1: Cash Engine Loop',
    description: 'More ads → more leads → more sales → more cash → more ads',
    stocks: ['ad-spend', 'leads', 'active-orders', 'delivered', 'cash']
  },
  {
    id: 'r2',
    type: 'reinforcing',
    label: 'R2: Trust & Word-of-Mouth Loop',
    description: 'Better delivery → stronger trust → higher conversion → more happy customers → more referrals → cheaper acquisition',
    stocks: ['delivered', 'brand-trust', 'customer-base', 'word-of-mouth']
  },
  {
    id: 'r3',
    type: 'reinforcing',
    label: 'R3: Systems Excellence Loop',
    description: 'Better data → smarter decisions → fewer errors → higher profit → better tools → better data',
    stocks: ['systems-maturity', 'delivered', 'cash']
  },
  {
    id: 'b1',
    type: 'balancing',
    label: 'B1: Capacity Constraint Loop',
    description: 'More orders hit delivery/telesales limits → delays increase → growth slows',
    stocks: ['active-orders', 'da-network', 'telesales']
  },
  {
    id: 'b2',
    type: 'balancing',
    label: 'B2: Inventory & Cash Limits Loop',
    description: 'More orders drain stock faster → stockouts → sales pause until replenishment',
    stocks: ['active-orders', 'warehouse-inventory', 'da-inventory']
  },
  {
    id: 'b3',
    type: 'balancing',
    label: 'B3: Complexity & Attention Loop',
    description: 'More growth → more complexity → stretched management → errors increase → forced simplification',
    stocks: ['active-orders', 'systems-maturity', 'team-capability']
  }
];
