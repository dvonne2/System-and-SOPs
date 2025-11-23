import { CashLayout } from "@/components/CashLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DailyOperations = () => {
  const sidebarContent = (
    <nav className="space-y-1">
      <Link to="/cash/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">
        Dashboard
      </Link>
      <Link to="/cash/academy/fundamentals" className="block px-3 py-2 rounded-md hover:bg-muted">
        Fundamentals
      </Link>
      <Link to="/cash/academy/daily-operations" className="block px-3 py-2 rounded-md bg-muted font-medium">
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
          <h1 className="text-3xl font-bold mb-2">Daily Cash Operations</h1>
          <p className="text-muted-foreground">
            Master the daily routines that ensure accurate cash management
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/cash/academy/daily-operations/morning-cash-count">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌅</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Morning Cash Count</h3>
                  <p className="text-sm text-muted-foreground">
                    Start your day right: physical cash, bank balances, digital wallets verification (8:00 AM - 9:00 AM)
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/daily-operations/payment-verification">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Payment Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    Verify customer payments, match with orders, and update accounts receivable throughout the day
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/daily-operations/disbursement-approval">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💸</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Disbursement Approval</h3>
                  <p className="text-sm text-muted-foreground">
                    Review and approve payments to suppliers, DAs, and operational expenses with proper controls
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cash/academy/daily-operations/evening-reconciliation">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌙</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Evening Reconciliation</h3>
                  <p className="text-sm text-muted-foreground">
                    End-of-day reconciliation, variance analysis, and preparation for tomorrow (5:00 PM - 6:00 PM)
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

export default DailyOperations;
