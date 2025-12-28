import Navigation from '@/components/Navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "What is SystemForce?",
    answer: "SystemForce is an all-in-one ERP platform designed for e-commerce and distribution businesses in Nigeria. It helps you manage orders, deliveries, inventory, telesales, accounting, and your entire team from one dashboard."
  },
  {
    question: "Who is SystemForce for?",
    answer: "SystemForce is built for businesses that sell and deliver products - especially health & beauty, FMCG, electronics, and any company with delivery agents and telesales teams. If you take orders, manage stock, and deliver to customers, SystemForce is for you."
  },
  {
    question: "How does the multi-tenant system work?",
    answer: "Each client gets their own branded subdomain (e.g., yourcompany.systemforce.ng). Your data is completely separate from other clients. Your team logs into your own portal with your branding."
  },
  {
    question: "Can I use my existing order form?",
    answer: "Yes! SystemForce integrates with Elementor, WPForms, Gravity Forms, Typeform, JotForm, and any form builder that supports webhooks. Just paste our webhook URL into your form settings and orders flow in automatically."
  },
  {
    question: "What notification channels do you support?",
    answer: "We support WhatsApp Business notifications. You can customize 10 notification stages (Order Received, Confirmed, Dispatched, Out for Delivery, Delivered, etc.) with your own messages and branding."
  },
  {
    question: "Can I use my own WhatsApp number?",
    answer: "Yes! You enter your own WhatsApp Business number in settings. All notifications to your customers come from your number, not ours."
  },
  {
    question: "How do I add my team members?",
    answer: "Go to Admin → Staff and click \"Add Staff Member\". You can add Delivery Agents, Telesales, Inventory Officers, Accountants, and any other role. Each person gets their own login and sees only what they need."
  },
  {
    question: "Can I create product bundles?",
    answer: "Yes! Go to Admin → Products → Bundles tab. Select products, set quantities, set a bundle price, and the system automatically calculates customer savings."
  },
  {
    question: "Is there a mobile app?",
    answer: "SystemForce is a web app that works beautifully on mobile browsers. Your team can add it to their home screen for an app-like experience. No download needed - just open the link and start working."
  },
  {
    question: "How do I integrate payments?",
    answer: "Go to Admin → Settings → Payment. Enter your Paystack or Flutterwave API keys. We provide the webhook URL to add to your payment dashboard. All payments are tracked automatically."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Each client's data is isolated in separate database tables. We use SSL encryption for all connections. Your data belongs to you and is never shared with other clients."
  },
  {
    question: "Do you support FIRS e-Invoicing?",
    answer: "Yes! Go to Admin → Settings → FIRS Tax. Enter your TIN and FIRS API credentials. You can enable automatic invoice submission to FIRS when orders are delivered."
  },
  {
    question: "Can I try before I buy?",
    answer: "Yes! Visit demo.systemforce.ng and login with any of our demo accounts to explore the full platform with sample data. No signup required."
  },
  {
    question: "What's included in the subscription?",
    answer: "Everything. All 11 modules, unlimited users, unlimited orders, WhatsApp notifications, all integrations, and regular updates. No hidden fees."
  },
  {
    question: "How do I get started?",
    answer: "Click \"Get Started\", choose your plan, complete payment, and you'll receive your login details within minutes. Your subdomain is created automatically and you can start adding your team and products immediately."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Everything you need to know about SystemForce ERP
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-[#1e3a5f] font-semibold hover:text-[#f97316] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 text-center bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Still have questions?
            </h2>
            <p className="text-slate-300 mb-6">
              Our team is here to help you get started with SystemForce
            </p>
            <a 
              href="mailto:support@systemforce.ng" 
              className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
