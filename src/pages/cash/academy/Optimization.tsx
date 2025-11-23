import { CashLayout } from "@/components/CashLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Optimization = () => {
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
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Cash Optimization</h1>
          <p className="text-muted-foreground">
            Advanced strategies to maximize working capital efficiency and ROI
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/cash/academy/optimization/reduce-cash-cycle">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Reduce Cash Cycle</h3>
                  <p className="text-sm text-muted-foreground">
                    Cut your cash conversion cycle from 18 days to 15 days and free up millions in working capital
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/optimization/negotiate-payment-terms">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🤝</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Negotiate Payment Terms</h3>
                  <p className="text-sm text-muted-foreground">
                    Master supplier negotiations to extend payment terms and capture early payment discounts
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/optimization/inventory-turnover">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📦</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Inventory Turnover</h3>
                  <p className="text-sm text-muted-foreground">
                    Increase inventory turnover from 12x to 15x per month and unlock ₦5M+ in cash
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/optimization/credit-management">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💳</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Credit Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimize customer credit terms, collections, and minimize days sales outstanding (DSO)
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </CashLayout>
  );
};

export default Optimization;
