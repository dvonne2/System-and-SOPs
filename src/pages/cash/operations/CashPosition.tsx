import { CashLayout } from "@/components/CashLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CashPosition = () => {
  const sidebarContent = (
    <nav className="space-y-1">
      <Link to="/cash/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">
        Dashboard
      </Link>
      <Link to="/cash/operations/cash-position" className="block px-3 py-2 rounded-md bg-muted font-medium">
        Cash Position
      </Link>
      <Link to="/cash/operations/payment-processing" className="block px-3 py-2 rounded-md hover:bg-muted">
        Payment Processing
      </Link>
      <Link to="/cash/operations/disbursements" className="block px-3 py-2 rounded-md hover:bg-muted">
        Disbursements
      </Link>
      <Link to="/cash/operations/collections" className="block px-3 py-2 rounded-md hover:bg-muted">
        Collections
      </Link>
      <Link to="/cash/operations/reconciliation" className="block px-3 py-2 rounded-md hover:bg-muted">
        Reconciliation
      </Link>
    </nav>
  );

  return (
    <CashLayout sidebarContent={sidebarContent} title="Cash Operations">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Cash Position</h1>
          <p className="text-muted-foreground">
            Real-time view of all cash across accounts, wallets, and physical cash
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Cash Position</div>
            <div className="text-2xl font-bold">₦12,450,000</div>
            <div className="text-xs text-green-600 mt-1">+₦850K today</div>
          </Card>
          
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Bank Accounts</div>
            <div className="text-2xl font-bold">₦8,200,000</div>
            <div className="text-xs text-muted-foreground mt-1">3 accounts</div>
          </Card>
          
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Digital Wallets</div>
            <div className="text-2xl font-bold">₦3,950,000</div>
            <div className="text-xs text-muted-foreground mt-1">Moniepoint, Paystack</div>
          </Card>
          
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Physical Cash</div>
            <div className="text-2xl font-bold">₦300,000</div>
            <div className="text-xs text-muted-foreground mt-1">Petty cash + POS</div>
          </Card>
        </div>

        {/* Bank Accounts Detail */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Bank Accounts</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏦</span>
                </div>
                <div>
                  <div className="font-semibold">Access Bank - Operations</div>
                  <div className="text-sm text-muted-foreground">***1234</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦5,200,000</div>
                <div className="text-sm text-muted-foreground">Last updated: 2 mins ago</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏦</span>
                </div>
                <div>
                  <div className="font-semibold">GTBank - Payroll</div>
                  <div className="text-sm text-muted-foreground">***5678</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦2,000,000</div>
                <div className="text-sm text-muted-foreground">Last updated: 5 mins ago</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏦</span>
                </div>
                <div>
                  <div className="font-semibold">Zenith Bank - Supplier Payments</div>
                  <div className="text-sm text-muted-foreground">***9012</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦1,000,000</div>
                <div className="text-sm text-muted-foreground">Last updated: 1 min ago</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Digital Wallets Detail */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Digital Wallets</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">💳</span>
                </div>
                <div>
                  <div className="font-semibold">Moniepoint</div>
                  <div className="text-sm text-muted-foreground">Customer collections</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦2,450,000</div>
                <div className="text-sm text-muted-foreground">Available balance</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">💳</span>
                </div>
                <div>
                  <div className="font-semibold">Paystack</div>
                  <div className="text-sm text-muted-foreground">Online payments</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦1,500,000</div>
                <div className="text-sm text-muted-foreground">Available balance</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Physical Cash Detail */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Physical Cash</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <div className="font-semibold">Petty Cash Box</div>
                  <div className="text-sm text-muted-foreground">Office safe</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦150,000</div>
                <div className="text-sm text-muted-foreground">Last count: This morning</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <div className="font-semibold">POS Float</div>
                  <div className="text-sm text-muted-foreground">Cash on delivery</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦100,000</div>
                <div className="text-sm text-muted-foreground">Last count: This morning</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <div className="font-semibold">Emergency Reserve</div>
                  <div className="text-sm text-muted-foreground">Crisis fund</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">₦50,000</div>
                <div className="text-sm text-muted-foreground">Last count: This morning</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Cash Runway Alert */}
        <Card className="p-6 bg-yellow-50 border-yellow-200">
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚠️</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Cash Runway: 6 Days</h3>
              <p className="text-sm text-muted-foreground mb-3">
                At current burn rate of ₦2.1M/day, available cash will last 6 days. 
                Consider accelerating collections or securing additional funding.
              </p>
              <div className="flex gap-2">
                <Link to="/cash/academy/optimization/reduce-cash-cycle" className="text-sm text-primary hover:underline">
                  Learn to optimize cash cycle →
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </CashLayout>
  );
};

export default CashPosition;
