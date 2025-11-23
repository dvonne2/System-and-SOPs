import { CashLayout, useViewMode } from "@/components/CashLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertCircle, DollarSign, ShoppingCart, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const sidebarNav = (
  <nav className="space-y-2">
    <Link to="/cash/dashboard" className="block px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
      Dashboard
    </Link>
    <div className="space-y-1">
      <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Academy</p>
      <Link to="/cash/academy/fundamentals" className="block px-3 py-2 rounded-md hover:bg-muted">
        Fundamentals
      </Link>
      <Link to="/cash/academy/daily-operations" className="block px-3 py-2 rounded-md hover:bg-muted">
        Daily Operations
      </Link>
      <Link to="/cash/academy/optimization" className="block px-3 py-2 rounded-md hover:bg-muted">
        Optimization
      </Link>
    </div>
    <div className="space-y-1">
      <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Operations</p>
      <Link to="/cash/operations/cash-position" className="block px-3 py-2 rounded-md hover:bg-muted">
        Cash Position
      </Link>
      <Link to="/cash/operations/payment-processing" className="block px-3 py-2 rounded-md hover:bg-muted">
        Payment Processing
      </Link>
      <Link to="/cash/operations/disbursements" className="block px-3 py-2 rounded-md hover:bg-muted">
        Disbursements
      </Link>
    </div>
  </nav>
);

const DashboardContent = () => {
  const mode = useViewMode();

  // Sample cash data
  const cashData = {
    currentCash: 4200000,
    dailyChange: 5.2,
    adsBudget: 2000000,
    inventoryBudget: 1500000,
    opexBudget: 700000,
    ccc: 18,
    runway: 6
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Cash & Working Capital Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your cash position and manage working capital effectively
        </p>
      </div>

      {/* Critical Cash Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Cash Position</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{cashData.currentCash.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{cashData.dailyChange}%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available for Ads</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{cashData.adsBudget.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Safe to spend on media buying
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available for Inventory</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{cashData.inventoryBudget.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Safe to spend on stock
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash Runway</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cashData.runway} days</div>
            <p className="text-xs text-muted-foreground mt-1">
              At current burn rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Mode-Specific Content */}
      {mode === 'academy' && (
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Journey</CardTitle>
              <CardDescription>Cash management mastery progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span className="font-medium">45%</span>
                </div>
                <Progress value={45} />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Current Module</h4>
                <p className="text-sm text-muted-foreground">Cash Flow Forecasting</p>
                <Button size="sm" className="w-full">Continue Learning</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Lessons</CardTitle>
              <CardDescription>Based on current operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/cash/academy/fundamentals/working-capital-basics" className="block p-3 rounded-lg border hover:bg-muted transition-colors">
                <h4 className="font-medium text-sm">Working Capital Basics</h4>
                <p className="text-xs text-muted-foreground mt-1">15 min • Beginner</p>
              </Link>
              <Link to="/cash/academy/optimization/reduce-cash-cycle" className="block p-3 rounded-lg border hover:bg-muted transition-colors">
                <h4 className="font-medium text-sm">Reduce Cash Conversion Cycle</h4>
                <p className="text-xs text-muted-foreground mt-1">20 min • Intermediate</p>
              </Link>
            </CardContent>
          </Card>
        </div>
      )}

      {mode === 'operations' && (
        <Card>
          <CardHeader>
            <CardTitle>Urgent Actions Required</CardTitle>
            <CardDescription>Items needing your attention today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg border-red-200 bg-red-50 dark:bg-red-950/20">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-sm">Supplier Payment Due Today</h4>
                <p className="text-sm text-muted-foreground mt-1">₦2,000,000 to Media Supplier - Due in 2 hours</p>
                <Button size="sm" className="mt-2">Approve Payment</Button>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50 dark:bg-orange-950/20">
              <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-sm">DA Settlement Requests</h4>
                <p className="text-sm text-muted-foreground mt-1">5 agents waiting for commission payment</p>
                <Button size="sm" variant="outline" className="mt-2">Review Requests</Button>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-sm">Reconcile Moniepoint Transactions</h4>
                <p className="text-sm text-muted-foreground mt-1">Yesterday's payments pending verification</p>
                <Button size="sm" variant="outline" className="mt-2">Start Reconciliation</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {mode === 'hybrid' && (
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Operations</CardTitle>
              <CardDescription>Live working capital management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Cash Allocation Decision</h4>
                  <p className="text-sm text-muted-foreground mt-1">₦5M available: Ads (₦3M) vs Inventory (₦2.5M)?</p>
                  <Button size="sm" className="mt-2">Get Recommendation</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Opportunity</CardTitle>
              <CardDescription>Context-aware guidance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium text-sm mb-2">💡 Optimization Tip</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Your cash conversion cycle is {cashData.ccc} days. Industry best practice is 15 days.
                </p>
                <Link to="/cash/academy/optimization/reduce-cash-cycle">
                  <Button size="sm" variant="outline">Learn How to Improve</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start">
              <DollarSign className="mr-2 h-4 w-4" />
              Check Cash Position
            </Button>
            <Button variant="outline" className="justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Forecast
            </Button>
            <Button variant="outline" className="justify-start">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Process Payment
            </Button>
            <Button variant="outline" className="justify-start">
              <AlertCircle className="mr-2 h-4 w-4" />
              Crisis Mode
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CashDashboard = () => {
  return (
    <CashLayout sidebarContent={sidebarNav} title="Cash Management">
      <DashboardContent />
    </CashLayout>
  );
};

export default CashDashboard;
