import { InventoryLayout, useViewMode } from "@/components/InventoryLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Package, Users, TruckIcon, AlertTriangle, 
  Clock, CheckCircle, BookOpen, Target,
  TrendingUp, Award, Calendar
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
  {
    title: "SOPs",
    items: [
      { title: "Morning Routine (6-8 AM)", href: "/inventory/sops/morning-routine" },
      { title: "Opening Stock Prep", href: "/inventory/sops/opening-stock" },
      { title: "Order Assignment", href: "/inventory/sops/order-assignment" },
      { title: "Real-Time Updates", href: "/inventory/sops/real-time-updates" },
      { title: "Friday Photo Verification", href: "/inventory/sops/friday-photos" },
    ],
  },
  {
    title: "Fraud Prevention",
    items: [
      { title: "10 Non-Negotiable Rules", href: "/inventory/fraud-prevention/rules" },
      { title: "Red Flags Detection", href: "/inventory/fraud-prevention/red-flags" },
      { title: "Stock Leakage Prevention", href: "/inventory/fraud-prevention/stock-leakage" },
    ],
  },
  {
    title: "DA Management",
    items: [
      { title: "Managing 50+ Agents", href: "/inventory/da-management/overview" },
      { title: "Agent Onboarding", href: "/inventory/da-management/onboarding" },
      { title: "Performance Tracking", href: "/inventory/da-management/performance" },
    ],
  },
  {
    title: "Learning Path",
    items: [
      { title: "Day 1 Onboarding", href: "/inventory/learning/day-1" },
      { title: "Week 1 Foundation", href: "/inventory/learning/week-1" },
      { title: "Month 1 Mastery", href: "/inventory/learning/month-1" },
    ],
  },
];

const liveMetrics = [
  {
    title: "National Inventory",
    value: "₦45.2M",
    subtitle: "8,500 SKUs",
    icon: Package,
    color: "hsl(var(--warehouse-primary))",
    trend: "+2.4%",
  },
  {
    title: "Active Agents",
    value: "48",
    subtitle: "Out of 50",
    icon: Users,
    color: "hsl(var(--warehouse-success))",
    trend: "96%",
  },
  {
    title: "Stock Accuracy",
    value: "99.2%",
    subtitle: "Last 30 days",
    icon: CheckCircle,
    color: "hsl(217 91% 60%)",
    trend: "+0.3%",
  },
  {
    title: "Today's Updates",
    value: "47",
    subtitle: "So far",
    icon: TruckIcon,
    color: "hsl(var(--warehouse-primary))",
    trend: "On track",
  },
];

const learningProgress = {
  overall: 65,
  nextLesson: "Friday Photo Verification",
  completedModules: 13,
  totalModules: 20,
  streakDays: 7,
};

const operationalAlerts = [
  { type: "critical", message: "Low stock: Conditioner (28 units remaining)", priority: 1 },
  { type: "warning", message: "3 agents need dispatch by 10 AM", priority: 2 },
  { type: "info", message: "Friday photo verification due tomorrow", priority: 3 },
];

export default function InventoryDashboard() {
  const mode = useViewMode();

  const sidebarContent = <SidebarNav items={navItems} />;

  return (
    <InventoryLayout title="Inventory Academy" sidebarContent={sidebarContent}>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {mode === 'academy' && '🎓 Learning Dashboard'}
            {mode === 'operations' && '💼 Operations Command Center'}
            {mode === 'hybrid' && '🔄 Inventory Control Hub'}
          </h1>
          <p className="text-muted-foreground">
            {mode === 'academy' && 'Track your progress and continue your training journey'}
            {mode === 'operations' && 'Monitor live inventory operations and critical metrics'}
            {mode === 'hybrid' && 'Learn while you work with guided operational support'}
          </p>
        </div>

        {/* Live Metrics - Always visible */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Live Inventory Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.title} className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <Icon className="h-4 w-4" style={{ color: metric.color }} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">{metric.subtitle}</p>
                    <p className="text-xs font-medium mt-2" style={{ color: metric.color }}>
                      {metric.trend}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mode-Specific Content */}
        {mode === 'academy' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Learning Progress */}
            <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BookOpen className="h-5 w-5 text-[hsl(217_91%_60%)]" />
                  Your Learning Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Overall Progress</span>
                    <span className="text-sm font-bold text-[hsl(217_91%_60%)]">{learningProgress.overall}%</span>
                  </div>
                  <Progress value={learningProgress.overall} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{learningProgress.completedModules}/{learningProgress.totalModules}</div>
                    <div className="text-xs text-muted-foreground">Modules Complete</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{learningProgress.streakDays} days</div>
                    <div className="text-xs text-muted-foreground">Learning Streak</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-foreground">Next Lesson</div>
                      <div className="text-xs text-muted-foreground">{learningProgress.nextLesson}</div>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/inventory/sops/friday-photos">Continue</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Award className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#F8F8F3] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--warehouse-success)/0.2)] flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">Week 1 Complete</div>
                    <div className="text-xs text-muted-foreground">Mastered the fundamentals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#F8F8F3] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[hsl(217_91%_60%/0.2)] flex items-center justify-center">
                    <Target className="h-5 w-5 text-[hsl(217_91%_60%)]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">Perfect Accuracy</div>
                    <div className="text-xs text-muted-foreground">7 days of 100% accuracy</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#F8F8F3] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--warehouse-primary)/0.2)] flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">Speed Demon</div>
                    <div className="text-xs text-muted-foreground">Sub-3-minute updates</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {mode === 'operations' && (
          <div className="space-y-6">
            {/* Operational Alerts */}
            <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Critical Alerts & Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {operationalAlerts.map((alert, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "p-4 rounded-lg border-l-4",
                      alert.type === 'critical' && "bg-red-50 border-red-500",
                      alert.type === 'warning' && "bg-orange-50 border-orange-500",
                      alert.type === 'info' && "bg-blue-50 border-blue-500"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-foreground">{alert.message}</div>
                      <Button size="sm" variant="outline">Take Action</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
                  Today's Critical Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-[#F8F8F3] rounded">
                  <CheckCircle className="h-4 w-4 text-[hsl(var(--warehouse-success))]" />
                  <span className="text-sm text-foreground line-through">Morning Routine (6-8 AM)</span>
                  <span className="text-xs text-muted-foreground ml-auto">Completed</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-[#F8F8F3] rounded">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-foreground font-medium">Process Deliveries (8 AM - 4 PM)</span>
                  <span className="text-xs text-orange-600 ml-auto">In Progress</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-[#F8F8F3] rounded">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Evening Reconciliation (6-8 PM)</span>
                  <span className="text-xs text-muted-foreground ml-auto">Pending</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {mode === 'hybrid' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Operational Alerts */}
            <Card className="lg:col-span-2 bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Action Required
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {operationalAlerts.map((alert, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "p-4 rounded-lg border-l-4",
                      alert.type === 'critical' && "bg-red-50 border-red-500",
                      alert.type === 'warning' && "bg-orange-50 border-orange-500",
                      alert.type === 'info' && "bg-blue-50 border-blue-500"
                    )}
                  >
                    <div className="text-sm font-medium text-foreground mb-2">{alert.message}</div>
                    <div className="text-xs text-muted-foreground">
                      💡 Learn more: <Link to="/inventory/sops" className="text-[hsl(217_91%_60%)] hover:underline">Related SOP</Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Learning */}
            <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BookOpen className="h-5 w-5 text-[hsl(217_91%_60%)]" />
                  Suggested Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/inventory/sops/real-time-updates">
                    <Clock className="h-4 w-4 mr-2" />
                    Real-Time Updates
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/inventory/fraud-prevention/red-flags">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Red Flags Detection
                  </Link>
                </Button>
                <div className="pt-3 border-t">
                  <div className="text-xs text-muted-foreground mb-2">Your Progress</div>
                  <Progress value={learningProgress.overall} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">{learningProgress.overall}% Complete</div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </InventoryLayout>
  );
}
