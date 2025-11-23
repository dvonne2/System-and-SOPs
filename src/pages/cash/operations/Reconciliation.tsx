import { CashLayout } from "@/components/CashLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, AlertTriangle, CheckCircle, XCircle, FileText } from "lucide-react";

const Reconciliation = () => {
  const reconciliations = [
    {
      id: "REC-001",
      date: "2024-01-23",
      account: "Main Operating Account",
      accountNumber: "****6789",
      expectedBalance: 2450000,
      actualBalance: 2450000,
      status: "matched",
      discrepancies: 0,
      transactionsCount: 45
    },
    {
      id: "REC-002",
      date: "2024-01-23",
      account: "Petty Cash - Lagos Office",
      accountNumber: "****3456",
      expectedBalance: 150000,
      actualBalance: 148500,
      status: "discrepancy",
      discrepancies: 1,
      transactionsCount: 12,
      variance: -1500,
      notes: "Missing receipt for office supplies"
    },
    {
      id: "REC-003",
      date: "2024-01-23",
      account: "Digital Wallet - PayStack",
      accountNumber: "****8901",
      expectedBalance: 856000,
      actualBalance: 856000,
      status: "matched",
      discrepancies: 0,
      transactionsCount: 78
    },
    {
      id: "REC-004",
      date: "2024-01-23",
      account: "Expense Account",
      accountNumber: "****2345",
      expectedBalance: 320000,
      actualBalance: 325000,
      status: "discrepancy",
      discrepancies: 2,
      transactionsCount: 23,
      variance: 5000,
      notes: "Unrecorded fuel purchase, pending verification"
    },
    {
      id: "REC-005",
      date: "2024-01-22",
      account: "Main Operating Account",
      accountNumber: "****6789",
      expectedBalance: 2380000,
      actualBalance: 2380000,
      status: "reconciled",
      discrepancies: 0,
      transactionsCount: 52,
      reconciledBy: "Sarah Chen",
      reconciledAt: "2024-01-22 18:45"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "matched": return "default";
      case "reconciled": return "default";
      case "discrepancy": return "destructive";
      case "pending": return "secondary";
      default: return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "matched": return CheckCircle;
      case "reconciled": return CheckCircle;
      case "discrepancy": return AlertTriangle;
      case "pending": return RefreshCw;
      default: return FileText;
    }
  };

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
      <a href="/cash/operations/reconciliation" className="block px-4 py-2 text-sm bg-accent rounded-md font-medium">
        Reconciliation
      </a>
    </nav>
  );

  return (
    <CashLayout sidebarContent={sidebarContent} title="Cash Operations">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Daily Reconciliation</h1>
            <p className="text-muted-foreground mt-2">
              End-of-day balance verification and discrepancy resolution
            </p>
          </div>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Run New Reconciliation
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Matched Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3/5</div>
              <p className="text-xs text-muted-foreground mt-1">Accounts reconciled</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Discrepancies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">2</div>
              <p className="text-xs text-muted-foreground mt-1">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Variance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦3,500</div>
              <p className="text-xs text-muted-foreground mt-1">Net difference</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">158</div>
              <p className="text-xs text-muted-foreground mt-1">Processed today</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Reconciliations */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Today's Reconciliations - Jan 23, 2024</h2>
          <div className="space-y-4">
            {reconciliations.filter(r => r.date === "2024-01-23").map((recon) => {
              const StatusIcon = getStatusIcon(recon.status);
              return (
                <Card key={recon.id} className={recon.status === "discrepancy" ? "border-destructive" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{recon.id}</CardTitle>
                          <Badge variant={getStatusColor(recon.status)}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {recon.status}
                          </Badge>
                          {recon.discrepancies > 0 && (
                            <Badge variant="outline">
                              {recon.discrepancies} issue{recon.discrepancies > 1 ? 's' : ''}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base font-medium">
                          {recon.account} ({recon.accountNumber})
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Expected Balance</div>
                        <div className="font-semibold">₦{recon.expectedBalance.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Actual Balance</div>
                        <div className={`font-semibold ${recon.status === "discrepancy" ? "text-destructive" : ""}`}>
                          ₦{recon.actualBalance.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Variance</div>
                        <div className={`font-semibold ${recon.variance && recon.variance !== 0 ? "text-destructive" : "text-green-600"}`}>
                          {recon.variance ? `₦${Math.abs(recon.variance).toLocaleString()}` : "₦0"}
                          {recon.variance && recon.variance !== 0 && (
                            <span className="text-xs ml-1">
                              ({recon.variance > 0 ? "over" : "under"})
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Transactions</div>
                        <div className="font-semibold">{recon.transactionsCount}</div>
                      </div>
                    </div>

                    {recon.notes && (
                      <div className="mb-4 p-3 bg-muted rounded-md">
                        <div className="text-sm font-medium mb-1">Notes:</div>
                        <div className="text-sm text-muted-foreground">{recon.notes}</div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {recon.status === "discrepancy" && (
                        <>
                          <Button size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Resolve Discrepancy
                          </Button>
                        </>
                      )}
                      {recon.status === "matched" && (
                        <Button size="sm">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve & Close
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Export Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Previous Day */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Previous Reconciliations</h2>
          <div className="space-y-4">
            {reconciliations.filter(r => r.date !== "2024-01-23").map((recon) => {
              const StatusIcon = getStatusIcon(recon.status);
              return (
                <Card key={recon.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{recon.id}</CardTitle>
                          <Badge variant={getStatusColor(recon.status)}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {recon.status}
                          </Badge>
                        </div>
                        <CardDescription>
                          {recon.account} - {recon.date}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">₦{recon.actualBalance.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{recon.transactionsCount} transactions</div>
                      </div>
                    </div>
                  </CardHeader>
                  {recon.reconciledBy && (
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        Reconciled by {recon.reconciledBy} on {recon.reconciledAt}
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Best Practices */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Reconciliation Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Perform daily reconciliation at end of business day</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Investigate all discrepancies immediately - don't let them accumulate</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Keep all supporting documents (receipts, bank statements) for audit trail</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Document reasons for any adjustments made during reconciliation</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Have a second person review and approve reconciliations over threshold amounts</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </CashLayout>
  );
};

export default Reconciliation;