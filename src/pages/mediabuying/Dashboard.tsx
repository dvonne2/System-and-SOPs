import { AcademyLayout } from "@/components/AcademyLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, TrendingUp, DollarSign } from "lucide-react";

const sidebarItems = [
  { title: "Dashboard", href: "/mediabuying/dashboard" },
  {
    title: "Strategy",
    items: [
      { title: "Audience Targeting", href: "/mediabuying/strategy/audience-targeting" },
      { title: "Campaign Structure", href: "/mediabuying/strategy/campaign-structure" },
      { title: "Scaling Frameworks", href: "/mediabuying/strategy/scaling-frameworks" },
    ],
  },
  {
    title: "SOPs",
    items: [
      { title: "Daily Routine", href: "/mediabuying/sops/daily-routine" },
      { title: "Campaign Creation", href: "/mediabuying/sops/campaign-creation" },
      { title: "Creating Facebook Ads Pixel", href: "/mediabuying/sops/creating-facebook-ads-pixel" },
      { title: "Campaign Optimization", href: "/mediabuying/sops/campaign-optimization" },
    ],
  },
  {
    title: "KPIs",
    items: [
      { title: "ROAS", href: "/mediabuying/kpis/roas" },
      { title: "CPA", href: "/mediabuying/kpis/cpa" },
      { title: "CTR", href: "/mediabuying/kpis/ctr" },
    ],
  },
  {
    title: "Learning Path",
    items: [
      { title: "Day 1: Foundation", href: "/mediabuying/learning/day-1" },
      { title: "Day 2: Application", href: "/mediabuying/learning/day-2" },
      { title: "Day 3: Mastery", href: "/mediabuying/learning/day-3" },
    ],
  },
];

const Dashboard = () => {
  return (
    <AcademyLayout
      sidebarContent={<SidebarNav items={sidebarItems} />}
      title="Media Buying Academy"
      category="money"
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Media Buying Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your daily operations hub. Track performance, manage tasks, and access key resources.
          </p>
        </div>

        {/* Today's Performance */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦50,000</div>
              <Progress value={65} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">₦32,450 spent (65%)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders Today</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-stock-money mt-2">+12% vs yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROAS</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2x</div>
              <Badge className="mt-2 bg-stock-money">Target: 3.0x</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CPA</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦1,850</div>
              <Badge className="mt-2 bg-stock-money">Within Target</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Daily Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Today's Checklist
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="font-medium">Morning Performance Review</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 9:00 AM - Analyze overnight campaign performance
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="font-medium">Create 10 New Ad Variations</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 11:00 AM - Test new creative concepts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="font-medium">Midday Optimization</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 1:00 PM - Review and adjust underperforming campaigns
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="font-medium">Daily Report Submission</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 4:00 PM - Submit performance report to management
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Your Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Overall Completion</span>
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <Progress value={60} />
              </div>
              <div className="text-sm">
                <p className="font-medium mb-2">Current: Day 2 - Application</p>
                <p className="text-muted-foreground">
                  You're on track! Complete Day 2 modules to unlock Day 3: Mastery.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AcademyLayout>
  );
};

export default Dashboard;
