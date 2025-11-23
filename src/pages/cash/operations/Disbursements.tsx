import { CashLayout } from "@/components/CashLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

const Disbursements = () => {
  const disbursements = [
    {
      id: "DIS-001",
      recipient: "ABC Suppliers Ltd",
      type: "Supplier Payment",
      amount: 125000,
      method: "Bank Transfer",
      accountNumber: "****4532",
      status: "pending",
      requestedBy: "Sarah Chen",
      priority: "high",
      dueDate: "Today"
    },
    {
      id: "DIS-002",
      recipient: "DA-John Smith",
      type: "DA Commission",
      amount: 8500,
      method: "Mobile Money",
      accountNumber: "****7890",
      status: "pending",
      requestedBy: "Mike Johnson",
      priority: "medium",
      dueDate: "Tomorrow"
    },
    {
      id: "DIS-003",
      recipient: "XYZ Logistics",
      type: "Freight Payment",
      amount: 45000,
      method: "Bank Transfer",
      accountNumber: "****2341",
      status: "approved",
      requestedBy: "Tom Wilson",
      priority: "medium",
      dueDate: "Today"
    },
    {
      id: "DIS-004",
      recipient: "Office Supplies Co",
      type: "Expense Reimbursement",
      amount: 3200,
      method: "Cash",
      accountNumber: "N/A",
      status: "processing",
      requestedBy: "Lisa Brown",
      priority: "low",
      dueDate: "3 days"
    },
    {
      id: "DIS-005",
      recipient: "DA-Maria Garcia",
      type: "DA Advance",
      amount: 5000,
      method: "Mobile Money",
      accountNumber: "****4567",
      status: "rejected",
      requestedBy: "Carlos Martinez",
      priority: "low",
      dueDate: "Yesterday",
      rejectionReason: "Insufficient documentation"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500";
      case "approved": return "bg-green-500";
      case "processing": return "bg-blue-500";
      case "rejected": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
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
      <a href="/cash/operations/disbursements" className="block px-4 py-2 text-sm bg-accent rounded-md font-medium">
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
          <h1 className="text-3xl font-bold">Disbursements</h1>
          <p className="text-muted-foreground mt-2">
            Manage outgoing payments to suppliers, delivery agents, and other recipients
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">₦133.5K</div>
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">2 disbursements</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">₦45K</div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">1 disbursement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">₦3.2K</div>
                <DollarSign className="h-5 w-5 text-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">1 disbursement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Due Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">2</div>
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">High priority</p>
            </CardContent>
          </Card>
        </div>

        {/* Disbursement Queue */}
        <Card>
          <CardHeader>
            <CardTitle>Disbursement Queue</CardTitle>
            <CardDescription>Review and approve outgoing payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {disbursements.map((disbursement) => (
                <div
                  key={disbursement.id}
                  className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-muted-foreground">
                          {disbursement.id}
                        </span>
                        <Badge variant={getPriorityColor(disbursement.priority)}>
                          {disbursement.priority}
                        </Badge>
                        <Badge className={getStatusColor(disbursement.status)}>
                          {disbursement.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Recipient</div>
                          <div className="font-medium">{disbursement.recipient}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Type</div>
                          <div>{disbursement.type}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Amount</div>
                          <div className="font-semibold">₦{disbursement.amount.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Method</div>
                          <div>{disbursement.method}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Account</div>
                          <div>{disbursement.accountNumber}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Requested By</div>
                          <div>{disbursement.requestedBy}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Due Date</div>
                          <div>{disbursement.dueDate}</div>
                        </div>
                      </div>

                      {disbursement.status === "rejected" && (
                        <div className="bg-destructive/10 border border-destructive/20 rounded p-2 text-sm">
                          <span className="font-medium text-destructive">Rejection Reason:</span>{" "}
                          {disbursement.rejectionReason}
                        </div>
                      )}
                    </div>

                    {disbursement.status === "pending" && (
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="default">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}

                    {disbursement.status === "approved" && (
                      <Button size="sm" variant="secondary">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Disburse Now
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </CashLayout>
  );
};

export default Disbursements;
