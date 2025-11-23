import { CashLayout } from "@/components/CashLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WorkingCapitalBasics = () => {
  const sidebarContent = (
    <nav className="space-y-1">
      <Link to="/cash/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">
        Dashboard
      </Link>
      <Link to="/cash/academy/fundamentals" className="block px-3 py-2 rounded-md bg-muted font-medium">
        Fundamentals
      </Link>
      <Link to="/cash/academy/daily-operations" className="block px-3 py-2 rounded-md hover:bg-muted">
        Daily Operations
      </Link>
      <Link to="/cash/academy/optimization" className="block px-3 py-2 rounded-md hover:bg-muted">
        Optimization
      </Link>
    </nav>
  );

  return (
    <CashLayout sidebarContent={sidebarContent} title="Cash Academy">
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold mb-2">Working Capital Basics</h1>
          <p className="text-muted-foreground">
            Understanding the fundamentals of working capital management
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">What is Working Capital?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Working Capital = Current Assets - Current Liabilities</strong>
            </p>
            <p>
              For VitalVida's ₦160M+ monthly operation, working capital represents the cash and liquid assets 
              available to fund daily operations, purchase inventory, and pay short-term obligations.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Components</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Current Assets</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Cash on hand and in banks</li>
                <li>Inventory (shampoo, pomade, conditioner)</li>
                <li>Accounts Receivable (customer payments due)</li>
                <li>Digital wallet balances (Moniepoint, Paystack)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Current Liabilities</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Supplier payables</li>
                <li>DA commissions pending</li>
                <li>Short-term loans</li>
                <li>Accrued expenses (salaries, utilities)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5 border-primary">
          <h3 className="font-bold text-lg mb-2">📊 VitalVida Example</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><strong className="text-foreground">Current Assets:</strong> ₦45M (Cash: ₦12M, Inventory: ₦25M, Receivables: ₦8M)</p>
            <p><strong className="text-foreground">Current Liabilities:</strong> ₦28M (Payables: ₦18M, DA Commissions: ₦7M, Others: ₦3M)</p>
            <p><strong className="text-foreground">Working Capital:</strong> ₦17M</p>
          </div>
        </Card>
      </div>
    </CashLayout>
  );
};

export default WorkingCapitalBasics;
