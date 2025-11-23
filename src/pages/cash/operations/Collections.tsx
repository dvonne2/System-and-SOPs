import { CashLayout } from "@/components/CashLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertCircle, CheckCircle, Clock, Phone, Mail } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      id: "COL-001",
      customer: "TechCorp Nigeria Ltd",
      invoice: "INV-2024-0156",
      amount: 450000,
      dueDate: "2024-01-20",
      status: "overdue",
      priority: "high",
      daysOverdue: 5,
      contact: "+234 801 234 5678",
      email: "accounts@techcorp.ng",
      lastContact: "2 days ago"
    },
    {
      id: "COL-002",
      customer: "QuickMart Stores",
      invoice: "INV-2024-0189",
      amount: 285000,
      dueDate: "2024-01-25",
      status: "pending",
      priority: "medium",
      daysUntilDue: 2,
      contact: "+234 802 345 6789",
      email: "payments@quickmart.com",
      lastContact: "1 week ago"
    },
    {
      id: "COL-003",
      customer: "Sunrise Distributors",
      invoice: "INV-2024-0201",
      amount: 625000,
      dueDate: "2024-01-22",
      status: "overdue",
      priority: "critical",
      daysOverdue: 3,
      contact: "+234 803 456 7890",
      email: "finance@sunrise.ng",
      lastContact: "Today"
    },
    {
      id: "COL-004",
      customer: "Metro Logistics",
      invoice: "INV-2024-0178",
      amount: 180000,
      dueDate: "2024-01-28",
      status: "pending",
      priority: "low",
      daysUntilDue: 5,
      contact: "+234 804 567 8901",
      email: "billing@metrologistics.com",
      lastContact: "3 days ago"
    },
    {
      id: "COL-005",
      customer: "GlobalTech Solutions",
      invoice: "INV-2024-0195",
      amount: 520000,
      dueDate: "2024-01-18",
      status: "received",
      priority: "high",
      receivedDate: "2024-01-18",
      contact: "+234 805 678 9012",
      email: "accounts@globaltech.ng"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "received": return "default";
      case "pending": return "secondary";
      case "overdue": return "destructive";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "destructive";
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
      <a href="/cash/operations/disbursements" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
        Disbursements
      </a>
      <a href="/cash/operations/collections" className="block px-4 py-2 text-sm bg-accent rounded-md font-medium">
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
          <h1 className="text-3xl font-bold">Collections</h1>
          <p className="text-muted-foreground mt-2">
            Track and manage customer payment collections and outstanding receivables
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Overdue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">₦1.08M</div>
              <p className="text-xs text-muted-foreground mt-1">2 customers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Due Soon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦465K</div>
              <p className="text-xs text-muted-foreground mt-1">Within 5 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Received Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₦520K</div>
              <p className="text-xs text-muted-foreground mt-1">1 payment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Collection Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Collections List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Outstanding Collections</h2>
          <div className="space-y-4">
            {collections.map((collection) => (
              <Card key={collection.id} className={collection.status === "overdue" ? "border-destructive" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{collection.id}</CardTitle>
                        <Badge variant={getStatusColor(collection.status)}>
                          {collection.status}
                        </Badge>
                        <Badge variant={getPriorityColor(collection.priority)}>
                          {collection.priority}
                        </Badge>
                      </div>
                      <CardDescription className="text-base font-medium">
                        {collection.customer}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">₦{collection.amount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{collection.invoice}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Due Date</div>
                      <div className="font-medium">{collection.dueDate}</div>
                      {collection.daysOverdue && (
                        <div className="text-xs text-destructive">{collection.daysOverdue} days overdue</div>
                      )}
                      {collection.daysUntilDue && (
                        <div className="text-xs text-muted-foreground">{collection.daysUntilDue} days until due</div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Contact</div>
                      <div className="font-medium text-sm">{collection.contact}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-sm">{collection.email}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Last Contact</div>
                      <div className="font-medium">{collection.lastContact}</div>
                    </div>
                  </div>

                  {collection.status !== "received" && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Customer
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Reminder
                      </Button>
                      <Button size="sm">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Received
                      </Button>
                    </div>
                  )}

                  {collection.status === "received" && collection.receivedDate && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      Payment received on {collection.receivedDate}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Collection Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Contact overdue customers within 24 hours of missed payment</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Send payment reminders 3 days before due date</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Maintain professional and courteous communication</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                <span>Document all collection attempts and customer responses</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </CashLayout>
  );
};

export default Collections;