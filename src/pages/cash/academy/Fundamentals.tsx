import { CashLayout } from "@/components/CashLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Fundamentals = () => {
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
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Cash Management Fundamentals</h1>
          <p className="text-muted-foreground">
            Master the core principles of working capital and cash flow management
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/cash/academy/fundamentals/working-capital-basics">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Working Capital Basics</h3>
                  <p className="text-sm text-muted-foreground">
                    Understand current assets, liabilities, and how to calculate working capital for VitalVida's ₦160M+ monthly operations
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/fundamentals/cash-conversion-cycle">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔄</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Cash Conversion Cycle</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to measure and optimize the time it takes to convert inventory investments back into cash
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/fundamentals/liquidity-ratios">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Liquidity Ratios</h3>
                  <p className="text-sm text-muted-foreground">
                    Master current ratio, quick ratio, and other key metrics to assess your business's financial health
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/fundamentals/cash-flow-forecasting">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔮</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Cash Flow Forecasting</h3>
                  <p className="text-sm text-muted-foreground">
                    Build accurate 7-day, 30-day, and 90-day cash flow projections using historical data and trends
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

export default Fundamentals;
