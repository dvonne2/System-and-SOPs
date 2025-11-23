import { CashLayout } from "@/components/CashLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";

const PaymentProcessing = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const sidebarContent = (
    <nav className="space-y-1">
      <Link to="/cash/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">
        Dashboard
      </Link>
      <Link to="/cash/operations/cash-position" className="block px-3 py-2 rounded-md hover:bg-muted">
        Cash Position
      </Link>
      <Link to="/cash/operations/payment-processing" className="block px-3 py-2 rounded-md bg-muted font-medium">
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

  const payments = [
    {
      id: 'PAY-001',
      type: 'Customer Payment',
      customer: 'Aisha Mohammed',
      amount: 81000,
      method: 'Bank Transfer',
      orderId: 'ORD-12345',
      status: 'pending',
      time: '10 mins ago',
      priority: 'high'
    },
    {
      id: 'PAY-002',
      type: 'Customer Payment',
      customer: 'Chukwudi Okafor',
      amount: 54000,
      method: 'Moniepoint',
      orderId: 'ORD-12346',
      status: 'pending',
      time: '25 mins ago',
      priority: 'medium'
    },
    {
      id: 'PAY-003',
      type: 'Customer Payment',
      customer: 'Fatima Bello',
      amount: 27000,
      method: 'Cash on Delivery',
      orderId: 'ORD-12347',
      status: 'approved',
      time: '1 hour ago',
      priority: 'low'
    },
    {
      id: 'PAY-004',
      type: 'Supplier Payment',
      customer: 'Global Cosmetics Ltd',
      amount: 2500000,
      method: 'Bank Transfer',
      orderId: 'PO-5678',
      status: 'pending',
      time: '2 hours ago',
      priority: 'high'
    },
  ];

  const filteredPayments = payments.filter(p => filter === 'all' || p.status === filter);

  return (
    <CashLayout sidebarContent={sidebarContent} title="Cash Operations">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Payment Processing</h1>
          <p className="text-muted-foreground">
            Verify, approve, and track all incoming and outgoing payments
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Pending Verification</div>
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-xs text-muted-foreground mt-1">₦3.15M total</div>
          </Card>
          
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Approved Today</div>
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-xs text-muted-foreground mt-1">₦8.4M processed</div>
          </Card>
          
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Rejected Today</div>
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-xs text-muted-foreground mt-1">₦150K flagged</div>
          </Card>
          
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Average Processing Time</div>
            <div className="text-2xl font-bold">18 mins</div>
            <div className="text-xs text-green-600 mt-1">-5 mins improvement</div>
          </Card>
        </div>

        {/* Filter Tabs */}
        <Card className="p-4">
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              size="sm"
            >
              All Payments
            </Button>
            <Button
              variant={filter === 'pending' ? 'default' : 'outline'}
              onClick={() => setFilter('pending')}
              size="sm"
            >
              Pending (3)
            </Button>
            <Button
              variant={filter === 'approved' ? 'default' : 'outline'}
              onClick={() => setFilter('approved')}
              size="sm"
            >
              Approved (12)
            </Button>
            <Button
              variant={filter === 'rejected' ? 'default' : 'outline'}
              onClick={() => setFilter('rejected')}
              size="sm"
            >
              Rejected (1)
            </Button>
          </div>
        </Card>

        {/* Payment Queue */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Payment Queue</h2>
          
          {filteredPayments.map((payment) => (
            <Card key={payment.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={payment.priority === 'high' ? 'destructive' : payment.priority === 'medium' ? 'default' : 'secondary'}>
                      {payment.priority === 'high' ? '🔴' : payment.priority === 'medium' ? '🟡' : '🟢'} {payment.priority.toUpperCase()}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{payment.time}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{payment.customer}</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div><span className="font-medium">Payment ID:</span> {payment.id}</div>
                        <div><span className="font-medium">Type:</span> {payment.type}</div>
                        <div><span className="font-medium">Order/PO:</span> {payment.orderId}</div>
                        <div><span className="font-medium">Method:</span> {payment.method}</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-3xl font-bold mb-2">₦{payment.amount.toLocaleString()}</div>
                      <Badge variant={
                        payment.status === 'pending' ? 'outline' : 
                        payment.status === 'approved' ? 'default' : 
                        'destructive'
                      }>
                        {payment.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </div>

                {payment.status === 'pending' && (
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    <Button size="sm" className="w-full">
                      ✓ Approve
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      📋 Review
                    </Button>
                    <Button size="sm" variant="destructive" className="w-full">
                      ✗ Reject
                    </Button>
                  </div>
                )}
              </div>

              {payment.status === 'pending' && (
                <div className="mt-4 pt-4 border-t">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Verification Status</div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Bank details match</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Order verified</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Risk Assessment</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Low Risk</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Required Action</div>
                      <div className="font-medium">Final approval needed</div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Payment Processing Guide */}
        <Card className="p-6 bg-primary/5 border-primary">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Payment Verification Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Always cross-check payment amount with order total</li>
                <li>✓ Verify bank account details match customer records</li>
                <li>✓ Flag payments over ₦500K for manager approval</li>
                <li>✓ Document rejection reasons for future reference</li>
                <li>✓ Process high-priority payments within 15 minutes</li>
              </ul>
              <Link to="/cash/academy/daily-operations" className="text-sm text-primary hover:underline inline-block mt-3">
                Learn payment verification SOPs →
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </CashLayout>
  );
};

export default PaymentProcessing;
