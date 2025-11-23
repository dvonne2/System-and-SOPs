import { InventoryLayout } from "@/components/InventoryLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { 
  Target, Clock, Users, Shield, BarChart, 
  CheckCircle, AlertTriangle, TrendingUp
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/inventory/dashboard",
  },
  {
    title: "Role Overview",
    items: [
      { title: "Inventory Officer", href: "/inventory/role-overview/inventory-officer" },
      { title: "Warehouse Staff", href: "/inventory/role-overview/warehouse-staff" },
      { title: "Daily Schedule", href: "/inventory/role-overview/daily-schedule" },
      { title: "Career Growth", href: "/inventory/role-overview/career-growth" },
    ],
  },
];

const responsibilities = [
  {
    title: "Stock Tracking",
    percentage: 30,
    icon: BarChart,
    color: "hsl(var(--warehouse-primary))",
    description: "Maintain accurate records of every product unit across warehouse and 50+ delivery agents",
    keyTasks: [
      "Track stock across all locations",
      "Maintain 7 Google Sheets workbooks",
      "Achieve 99%+ accuracy target",
      "Real-time visibility of national position"
    ]
  },
  {
    title: "DA Management",
    percentage: 25,
    icon: Users,
    color: "hsl(var(--warehouse-success))",
    description: "Coordinate daily dispatch and monitor performance of 50+ delivery agents",
    keyTasks: [
      "Daily dispatch coordination",
      "Real-time performance monitoring",
      "Enforce company policies",
      "Build relationships with accountability"
    ]
  },
  {
    title: "Real-Time Updates",
    percentage: 20,
    icon: Clock,
    color: "hsl(217 91% 60%)",
    description: "Update Google Sheets within 5 minutes of delivery reports",
    keyTasks: [
      "Process 50-100+ daily transactions",
      "Maintain data accuracy under pressure",
      "Multi-screen command center operation",
      "Zero data lag tolerance"
    ]
  },
  {
    title: "Fraud Detection",
    percentage: 15,
    icon: Shield,
    color: "hsl(15 100% 50%)",
    description: "Identify suspicious patterns and prevent stock leakage",
    keyTasks: [
      "Verify Friday photo submissions",
      "Cross-reference reports with payments",
      "Investigate variances immediately",
      "Report to CEO on detection"
    ]
  },
  {
    title: "Daily Reconciliation",
    percentage: 10,
    icon: CheckCircle,
    color: "hsl(var(--warehouse-primary))",
    description: "Morning and evening routines for opening and closing stock verification",
    keyTasks: [
      "Morning routine (6-8 AM)",
      "Evening reconciliation (6-8 PM)",
      "Daily report submission by 4 PM",
      "Cash reconciliation with Accountant"
    ]
  }
];

const dailySchedule = [
  { time: "6:00-8:00 AM", activity: "Morning Routine: Opening stock preparation", percentage: 15 },
  { time: "8:00 AM-12:00 PM", activity: "Order assignment, dispatch, DA coordination", percentage: 30 },
  { time: "12:00-4:00 PM", activity: "Real-time updates, WhatsApp monitoring", percentage: 25 },
  { time: "4:00-6:00 PM", activity: "Delivery tracking, stock balance updates", percentage: 15 },
  { time: "6:00-8:00 PM", activity: "Evening reconciliation, reporting", percentage: 15 },
];

export default function InventoryOfficer() {
  const sidebarContent = <SidebarNav items={navItems} />;

  return (
    <InventoryLayout title="Role Overview" sidebarContent={sidebarContent}>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Inventory Officer Responsibilities
          </h1>
          <p className="text-lg text-muted-foreground">
            The Backbone of ₦160M+ Monthly Operations
          </p>
        </div>

        {/* Core Purpose */}
        <Alert className="border-[hsl(var(--warehouse-primary))] bg-[hsl(var(--warehouse-primary)/0.1)]">
          <Target className="h-4 w-4" />
          <AlertTitle className="text-foreground">Core Purpose</AlertTitle>
          <AlertDescription className="text-foreground">
            To ensure accurate, real-time tracking of all inventory movement from warehouse to delivery 
            agents to customers, while preventing fraud, minimizing losses, and enabling smooth daily operations.
          </AlertDescription>
        </Alert>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-foreground">₦16M+</div>
              <div className="text-sm text-muted-foreground">Inventory Value Managed</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Delivery Agents Coordinated</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-foreground">36</div>
              <div className="text-sm text-muted-foreground">States Coverage</div>
            </CardContent>
          </Card>
        </div>

        {/* The Big 5 Responsibilities */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">The Big 5 Responsibilities</h2>
          <div className="space-y-4">
            {responsibilities.map((resp) => {
              const Icon = resp.icon;
              return (
                <Card key={resp.title} className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-foreground">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${resp.color}20` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: resp.color }} />
                        </div>
                        {resp.title}
                      </CardTitle>
                      <span className="text-2xl font-bold" style={{ color: resp.color }}>
                        {resp.percentage}%
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{resp.description}</p>
                    
                    <div>
                      <Progress value={resp.percentage} className="h-2 mb-3" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {resp.keyTasks.map((task, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: resp.color }} />
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Daily Time Breakdown */}
        <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
              Daily Time Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-orange-500 bg-orange-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-orange-900">
                Total Work Time: 10-12 hours per day (including Friday photo verification)
              </AlertDescription>
            </Alert>

            {dailySchedule.map((slot, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{slot.time}</span>
                  <span className="text-muted-foreground">{slot.percentage}% of day</span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">{slot.activity}</div>
                <Progress value={slot.percentage * (100/30)} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Who You Work With */}
        <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
          <CardHeader>
            <CardTitle className="text-foreground">Who You Work With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#F8F8F3] rounded">
                  <Users className="h-5 w-5 text-[hsl(var(--warehouse-primary))] mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">CEO</div>
                    <div className="text-sm text-muted-foreground">Weekly reports, critical fraud escalation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#F8F8F3] rounded">
                  <Users className="h-5 w-5 text-[hsl(var(--warehouse-primary))] mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Operations Manager</div>
                    <div className="text-sm text-muted-foreground">Direct supervisor, daily coordination</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#F8F8F3] rounded">
                  <Users className="h-5 w-5 text-[hsl(var(--warehouse-primary))] mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Accountant</div>
                    <div className="text-sm text-muted-foreground">Payment verification partner</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#F8F8F3] rounded">
                  <Users className="h-5 w-5 text-[hsl(var(--warehouse-primary))] mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Delivery Agents (50+)</div>
                    <div className="text-sm text-muted-foreground">Your field team</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#F8F8F3] rounded">
                  <Users className="h-5 w-5 text-[hsl(var(--warehouse-primary))] mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Telesales Team</div>
                    <div className="text-sm text-muted-foreground">Order source</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#F8F8F3] rounded">
                  <Users className="h-5 w-5 text-[hsl(var(--warehouse-primary))] mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Warehouse Staff</div>
                    <div className="text-sm text-muted-foreground">Physical stock handlers</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Profile */}
        <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <TrendingUp className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
              Success Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">✅ You'll Thrive If You Are:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                    Detail-oriented perfectionist
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                    Fast learner with tech comfort
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                    High integrity and honesty
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                    Strong communication skills
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                    Works well under pressure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                    Self-motivated and disciplined
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                    Early riser (6 AM start non-negotiable)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">⚠️ Challenges:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    Long hours (10-12 hour days)
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    High accountability (₦16M+ inventory)
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    Constant pressure (50+ agents)
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    Zero error tolerance
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    Fraud detection responsibility
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    Weekend work (Friday photos)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Makes This Rewarding */}
        <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
          <CardHeader>
            <CardTitle className="text-foreground">What Makes This Role Rewarding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Direct impact on company success",
                "Clear career growth path (IO → Senior IO → Excellence Lead)",
                "167% compensation growth potential over 3 years",
                "Learn scalable systems and processes",
                "Build management experience",
                "Master fraud prevention skills",
                "Develop data analysis capabilities",
                "National operational visibility"
              ].map((reward, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#F8F8F3] rounded">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--warehouse-success)/0.2)] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                  </div>
                  <span className="text-sm text-foreground">{reward}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </InventoryLayout>
  );
}
