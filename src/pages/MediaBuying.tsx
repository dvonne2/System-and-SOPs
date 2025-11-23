import { AcademyLayout } from "@/components/AcademyLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Target, TrendingUp, FileText, BarChart3, BookOpen, Wrench, ArrowRight } from "lucide-react";

const sidebarItems = [
  {
    title: "📊 Dashboard",
    href: "/mediabuying"
  },
  {
    title: "🎯 Strategy",
    items: [
      { title: "Audience Targeting", href: "/mediabuying/strategy/audience-targeting" },
      { title: "Campaign Structure", href: "/mediabuying/strategy/campaign-structure" },
      { title: "Scaling Frameworks", href: "/mediabuying/strategy/scaling-frameworks" },
      { title: "Budget Allocation", href: "/mediabuying/strategy/budget-allocation" }
    ]
  },
  {
    title: "📋 SOPs",
    items: [
      { title: "Daily Routine", href: "/mediabuying/sops/daily-routine" },
      { title: "Campaign Creation", href: "/mediabuying/sops/campaign-creation" },
      { title: "Creating Facebook Ads Pixel", href: "/mediabuying/sops/creating-facebook-ads-pixel" },
      { title: "Installing Pixel on Shopify", href: "/mediabuying/sops/installing-pixel-on-shopify" },
      { title: "Setting Up Conversion Events", href: "/mediabuying/sops/setting-up-conversion-events" },
      { title: "Campaign Optimization", href: "/mediabuying/sops/campaign-optimization" },
      { title: "Ad Creative Testing", href: "/mediabuying/sops/ad-creative-testing" },
      { title: "Crisis Management", href: "/mediabuying/sops/crisis-management" }
    ]
  },
  {
    title: "📈 KPIs & Metrics",
    items: [
      { title: "ROAS", href: "/mediabuying/kpis/roas" },
      { title: "CPA", href: "/mediabuying/kpis/cpa" },
      { title: "CTR", href: "/mediabuying/kpis/ctr" },
      { title: "Conversion Rate", href: "/mediabuying/kpis/conversion-rate" }
    ]
  },
  {
    title: "📊 Reporting",
    items: [
      { title: "Daily Reports", href: "/mediabuying/reporting/daily-reports" },
      { title: "Weekly Summaries", href: "/mediabuying/reporting/weekly-summaries" },
      { title: "Templates", href: "/mediabuying/reporting/templates" },
      { title: "Sample Reports", href: "/mediabuying/reporting/samples" }
    ]
  },
  {
    title: "🎓 Learning Path",
    items: [
      { title: "Day 1: Foundation", href: "/mediabuying/learning/day-1" },
      { title: "Day 2: Application", href: "/mediabuying/learning/day-2" },
      { title: "Day 3: Mastery", href: "/mediabuying/learning/day-3" },
      { title: "Case Studies", href: "/mediabuying/learning/case-studies" }
    ]
  },
  {
    title: "🛠 Tools & Resources",
    items: [
      { title: "Calculators", href: "/mediabuying/tools/calculators" },
      { title: "Chrome Extensions", href: "/mediabuying/tools/extensions" },
      { title: "Resource Links", href: "/mediabuying/tools/resources" }
    ]
  }
];

const MediaBuying = () => {
  return (
    <AcademyLayout
      title="Media Buying Academy"
      category="money"
      sidebarContent={<SidebarNav items={sidebarItems} />}
    >
      <div className="max-w-4xl space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Media Buying Operations Academy</h1>
          <p className="text-xl text-muted-foreground">
            Master Facebook Ads for Nigerian E-commerce
          </p>
        </div>

        {/* Role Context */}
        <Card className="p-6 border-l-4 border-stock-energy bg-stock-energy/5">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="h-6 w-6 text-stock-energy" />
            Your Role in the System
          </h2>
          <p className="text-lg">
            You are the <span className="font-bold text-stock-energy">ENERGY INPUT</span> of Vitalvida. 
            Without your ad spend generating leads, no orders happen, no revenue flows. You control 
            the tap that fills the entire business system.
          </p>
        </Card>

        {/* Today's Dashboard */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">💰 Today's Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Daily Budget</div>
              <div className="text-2xl font-bold">₦50,000</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Spent (65%)</div>
              <div className="text-2xl font-bold text-stock-money">₦32,450</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Orders Today</div>
              <div className="text-2xl font-bold">18</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">CPR (Cost Per Result)</div>
              <div className="text-2xl font-bold text-green-600">₦1,850 ✓</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Budget Pacing</div>
            <Progress value={65} className="h-2" />
            <div className="text-xs text-muted-foreground">On track for full daily budget utilization</div>
          </div>
        </Card>

        {/* Daily Checklist */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">✅ Your Daily Checklist</h2>
          <div className="space-y-3">
            {[
              { task: "Analyze 5 competitor ads", time: "9:00 AM", done: false },
              { task: "Create 10 new ad variations", time: "10:00 AM", done: false },
              { task: "Launch 2 audience tests", time: "11:30 AM", done: false },
              { task: "Review campaign performance", time: "2:00 PM", done: false },
              { task: "Optimize underperforming ad sets", time: "3:00 PM", done: false },
              { task: "Submit daily report", time: "4:00 PM", done: false }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Checkbox id={`task-${index}`} />
                <label htmlFor={`task-${index}`} className="flex-1 cursor-pointer">
                  <div className="font-medium">{item.task}</div>
                  <div className="text-sm text-muted-foreground">{item.time}</div>
                </label>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <FileText className="h-8 w-8 text-stock-operations mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">Daily Workflow</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Step-by-step guide for your daily routine
            </p>
            <Button variant="link" className="p-0 h-auto">
              View SOPs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <BarChart3 className="h-8 w-8 text-stock-money mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">KPI Dashboard</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Monitor your key performance metrics
            </p>
            <Button variant="link" className="p-0 h-auto">
              View KPIs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <FileText className="h-8 w-8 text-stock-reputation mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">Report Templates</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Ready-to-use reporting templates
            </p>
            <Button variant="link" className="p-0 h-auto">
              Get Templates <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <Wrench className="h-8 w-8 text-stock-inventory mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">Emergency Procedures</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Crisis management protocols
            </p>
            <Button variant="link" className="p-0 h-auto">
              View Procedures <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>

        {/* Learning Path Progress */}
        <Card className="p-6 border-l-4 border-stock-people">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                3-Day Learning Path
              </h2>
              <p className="text-muted-foreground">From Zero to Expert in 3 Days</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-stock-people">60%</div>
              <div className="text-sm text-muted-foreground">Complete</div>
            </div>
          </div>
          
          <Progress value={60} className="h-3 mb-4" />
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">✓</div>
              <div className="flex-1">
                <div className="font-medium">Day 1: Foundation</div>
                <div className="text-sm text-muted-foreground">Platform orientation & basics</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-stock-operations/10 border border-stock-operations/20 rounded-lg">
              <div className="h-8 w-8 rounded-full bg-stock-operations text-white flex items-center justify-center font-bold">2</div>
              <div className="flex-1">
                <div className="font-medium">Day 2: Application (Current)</div>
                <div className="text-sm text-muted-foreground">Campaign optimization techniques</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-8 w-8 rounded-full bg-muted-foreground text-white flex items-center justify-center font-bold">3</div>
              <div className="flex-1">
                <div className="font-medium text-muted-foreground">Day 3: Mastery</div>
                <div className="text-sm text-muted-foreground">Advanced strategies & certification</div>
              </div>
            </div>
          </div>

          <Button className="w-full mt-4" size="lg">
            CONTINUE LEARNING <ArrowRight className="ml-2" />
          </Button>
        </Card>

        {/* Recent Updates */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">📢 Recent Updates</h2>
          <div className="space-y-3">
            <div className="p-3 border-l-4 border-stock-money bg-muted/50">
              <div className="text-sm text-muted-foreground">Nov 22, 2025</div>
              <div className="font-medium">New iOS 14+ tracking procedures added</div>
            </div>
            <div className="p-3 border-l-4 border-stock-operations bg-muted/50">
              <div className="text-sm text-muted-foreground">Nov 20, 2025</div>
              <div className="font-medium">Updated campaign structure guidelines for Q4</div>
            </div>
            <div className="p-3 border-l-4 border-stock-reputation bg-muted/50">
              <div className="text-sm text-muted-foreground">Nov 18, 2025</div>
              <div className="font-medium">New case study: Fashion retailer Black Friday success</div>
            </div>
          </div>
        </Card>
      </div>
    </AcademyLayout>
  );
};

export default MediaBuying;
