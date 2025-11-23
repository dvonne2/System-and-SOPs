import { CashLayout } from "@/components/CashLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ReduceCashCycle = () => {
  const sidebarContent = (
    <nav className="space-y-1">
      <Link to="/cash/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">
        Dashboard
      </Link>
      <Link to="/cash/academy/fundamentals" className="block px-3 py-2 rounded-md hover:bg-muted">
        Fundamentals
      </Link>
      <Link to="/cash/academy/daily-operations" className="block px-3 py-2 rounded-md hover:bg-muted">
        Daily Operations
      </Link>
      <Link to="/cash/academy/optimization" className="block px-3 py-2 rounded-md bg-muted font-medium">
        Optimization
      </Link>
    </nav>
  );

  return (
    <CashLayout sidebarContent={sidebarContent} title="Cash Academy">
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reduce Cash Conversion Cycle</h1>
          <p className="text-muted-foreground">
            Strategies to accelerate cash flow and unlock working capital
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Understanding the Cash Cycle</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Cash Conversion Cycle (CCC) = DIO + DSO - DPO</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">DIO</strong> - Days Inventory Outstanding (how long inventory sits)</li>
              <li><strong className="text-foreground">DSO</strong> - Days Sales Outstanding (how long to collect payment)</li>
              <li><strong className="text-foreground">DPO</strong> - Days Payable Outstanding (how long before you pay suppliers)</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Optimization Strategies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">1. Reduce Inventory Days (DIO)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Implement just-in-time ordering based on sales velocity</li>
                <li>Focus marketing on slow-moving SKUs</li>
                <li>Improve demand forecasting accuracy</li>
                <li><strong className="text-foreground">Impact:</strong> Reduce from 7 days to 5 days = ₦5M freed up</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">2. Accelerate Collections (DSO)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Offer 2% discount for immediate payment</li>
                <li>Automate payment reminders via WhatsApp</li>
                <li>Require payment on delivery for new customers</li>
                <li><strong className="text-foreground">Impact:</strong> Reduce from 3 days to 2 days = ₦2M freed up</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">3. Extend Payment Terms (DPO)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Negotiate net 30 terms with top suppliers</li>
                <li>Take advantage of 2/10 net 30 discounts</li>
                <li>Build strong relationships for flexibility</li>
                <li><strong className="text-foreground">Impact:</strong> Extend from 10 days to 15 days = ₦8M retained</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5 border-primary">
          <h3 className="font-bold text-lg mb-2">💡 Quick Win</h3>
          <p className="text-muted-foreground">
            Reducing your CCC by just 3 days can free up <strong className="text-foreground">₦15M+</strong> in 
            working capital that can be reinvested in high-ROAS Facebook ads or inventory expansion.
          </p>
        </Card>
      </div>
    </CashLayout>
  );
};

export default ReduceCashCycle;
