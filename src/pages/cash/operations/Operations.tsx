import { CashLayout } from "@/components/CashLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, ArrowUpRight, ArrowDownRight, RefreshCw, Wallet, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Operations = () => {
  const operationsModules = [
    {
      title: "Cash Position",
      description: "Real-time view of all cash holdings across bank accounts, digital wallets, and physical cash",
      icon: Wallet,
      href: "/cash/operations/cash-position",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Payment Processing",
      description: "Verify and approve incoming customer payments with risk assessment and fraud detection",
      icon: ArrowDownRight,
      href: "/cash/operations/payment-processing",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Disbursements",
      description: "Manage outgoing payments to suppliers, delivery agents, and expense reimbursements",
      icon: ArrowUpRight,
      href: "/cash/operations/disbursements",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Collections",
      description: "Track customer payment collections, follow-ups, and outstanding receivables",
      icon: TrendingUp,
      href: "/cash/operations/collections",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Reconciliation",
      description: "End-of-day balance verification and discrepancy resolution across all cash sources",
      icon: RefreshCw,
      href: "/cash/operations/reconciliation",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  const sidebarContent = (
    <nav className="space-y-2">
      <a href="/cash/operations/cash-position" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
        Cash Position
      </a>
      <a href="/cash/operations/payment-processing" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
        Payment Processing
      </a>
      <a href="/cash/operations/disbursements" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
        Disbursements
      </a>
      <a href="/cash/operations/collections" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
        Collections
      </a>
      <a href="/cash/operations/reconciliation" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
        Reconciliation
      </a>
    </nav>
  );

  return (
    <CashLayout sidebarContent={sidebarContent} title="Cash Operations">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Cash Operations</h1>
          <p className="text-muted-foreground mt-2">
            Daily cash management operations for payment processing, disbursements, and reconciliation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Cash Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦2.4M</div>
              <p className="text-xs text-muted-foreground mt-1">Across all accounts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦856K</div>
              <p className="text-xs text-muted-foreground mt-1">23 payments to verify</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Disbursements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦133.5K</div>
              <p className="text-xs text-muted-foreground mt-1">2 awaiting approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cash Runway</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 days</div>
              <p className="text-xs text-muted-foreground mt-1">At current burn rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Operations Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operationsModules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.href} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${module.bgColor}`}>
                      <Icon className={`h-6 w-6 ${module.color}`} />
                    </div>
                  </div>
                  <CardTitle className="mt-4">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={module.href}>
                    <Button className="w-full">
                      Open {module.title}
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common daily operations</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="justify-start">
              <DollarSign className="h-4 w-4 mr-2" />
              Check Cash Position
            </Button>
            <Button variant="outline" className="justify-start">
              <ArrowDownRight className="h-4 w-4 mr-2" />
              Verify Payments
            </Button>
            <Button variant="outline" className="justify-start">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              Approve Disbursements
            </Button>
            <Button variant="outline" className="justify-start">
              <RefreshCw className="h-4 w-4 mr-2" />
              Run Reconciliation
            </Button>
          </CardContent>
        </Card>
      </div>
    </CashLayout>
  );
};

export default Operations;
