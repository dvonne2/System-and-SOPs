import { AcademyLayout } from "@/components/AcademyLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Video, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const Day1 = () => {
  return (
    <AcademyLayout
      sidebarContent={<SidebarNav items={sidebarItems} />}
      title="Media Buying Academy"
      category="money"
    >
      <div className="space-y-6 max-w-4xl">
        <div>
          <Badge className="mb-4">Learning Path</Badge>
          <h1 className="text-3xl font-bold mb-2">Day 1: Foundation (0 → 30%)</h1>
          <p className="text-muted-foreground mb-4">
            Build your foundational understanding of media buying for Nigerian e-commerce. By the end of today, you'll understand the system, terminology, and basic workflows.
          </p>
          
          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              <strong>Today's Goal:</strong> Complete all modules and score 80%+ on the final quiz to unlock Day 2.
            </AlertDescription>
          </Alert>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Your Progress Today</span>
              <span className="text-sm font-normal text-muted-foreground">0% Complete</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={0} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Complete all sections and pass the quiz to finish Day 1
            </p>
          </CardContent>
        </Card>

        {/* Morning Session */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-stock-money" />
            <h2 className="text-2xl font-bold">Morning Session (9:00 AM - 12:00 PM)</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Module 1: System Overview (30 min)
                  </span>
                  <input type="checkbox" className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Video: Welcome to Media Buying</p>
                    <Button variant="outline" className="mt-2">Play Video</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Your role in the Vitalvida system</li>
                    <li>How media buying drives business growth</li>
                    <li>The customer journey from ad to purchase</li>
                    <li>Overview of tools and platforms you'll use</li>
                  </ul>
                </div>

                <Alert>
                  <AlertDescription>
                    <strong>Key Takeaway:</strong> You are the ENERGY INPUT of the business. Without your ad campaigns generating leads, no revenue flows. Your work directly impacts company success.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Module 2: Role Introduction (45 min)
                  </span>
                  <input type="checkbox" className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Video: The Media Buyer's Role</p>
                    <Button variant="outline" className="mt-2">Play Video</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Topics Covered:</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Daily responsibilities and tasks</li>
                    <li>Who you work with (Creative, Operations, Management)</li>
                    <li>Success metrics you'll be measured on (ROAS, CPA, CTR)</li>
                    <li>Career progression path</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm">Your Daily Impact:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Typical Daily Budget:</span>
                      <span className="font-medium">₦30,000 - ₦100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Orders Generated:</span>
                      <span className="font-medium">15-30 per day</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Impact:</span>
                      <span className="font-medium text-stock-money">₦90,000 - ₦300,000 per day</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Module 3: Platform Orientation (60 min)
                  </span>
                  <input type="checkbox" className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Hands-on walkthrough of Facebook Ads Manager, Business Manager, and internal tools.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold mb-2 text-sm">Facebook Business Manager</h4>
                    <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Account structure and navigation</li>
                      <li>Finding campaigns, ad sets, and ads</li>
                      <li>Understanding the dashboard metrics</li>
                      <li>Customizing columns and views</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold mb-2 text-sm">Events Manager</h4>
                    <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Viewing pixel data</li>
                      <li>Checking conversion events</li>
                      <li>Understanding event priority</li>
                      <li>Troubleshooting pixel issues</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold mb-2 text-sm">Ads Manager</h4>
                    <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Campaign, ad set, ad hierarchy</li>
                      <li>Reading performance metrics</li>
                      <li>Using filters and breakdowns</li>
                      <li>Creating custom reports</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold mb-2 text-sm">Internal Tools</h4>
                    <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Google Sheets reporting templates</li>
                      <li>Slack communication channels</li>
                      <li>Budget tracking spreadsheet</li>
                      <li>Creative asset folders</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    <strong>Practice Task:</strong> Log in to Facebook Ads Manager and locate the following: (1) Active campaigns list, (2) Today's spend, (3) Conversion events in Events Manager. Screenshot each and share in Slack.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Module 4: First Hands-On Exercise (45 min)
                  </span>
                  <input type="checkbox" className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Complete your first supervised task with guidance from your mentor.
                </p>

                <div className="border-l-4 border-stock-money pl-4 space-y-2">
                  <h4 className="font-semibold">Exercise: Campaign Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Your mentor will assign you an active campaign to analyze. You will:
                  </p>
                  <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                    <li>Identify the campaign objective</li>
                    <li>Record current performance metrics (spend, revenue, ROAS)</li>
                    <li>Note the audience targeting settings</li>
                    <li>Review the ad creative being used</li>
                    <li>Document your observations in the template provided</li>
                  </ol>
                </div>

                <div className="bg-muted p-3 rounded-lg text-sm">
                  <p className="font-semibold mb-1">Completion Criteria:</p>
                  <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Campaign analysis template filled completely</li>
                    <li>All metrics recorded accurately</li>
                    <li>Mentor review and approval received</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Afternoon Session */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-stock-money" />
            <h2 className="text-2xl font-bold">Afternoon Session (1:00 PM - 5:00 PM)</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Module 5: Tool Access Setup (90 min)
                  </span>
                  <input type="checkbox" className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Get access to all platforms and tools you'll need. Your supervisor will guide you through each step.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <input type="checkbox" />
                    <span className="text-sm">Facebook Business Manager access (Employee role)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <input type="checkbox" />
                    <span className="text-sm">Ad Account permissions verified</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <input type="checkbox" />
                    <span className="text-sm">Events Manager access confirmed</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <input type="checkbox" />
                    <span className="text-sm">Google Sheets templates access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <input type="checkbox" />
                    <span className="text-sm">Slack channels joined (#media-buying, #daily-reports)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <input type="checkbox" />
                    <span className="text-sm">Creative assets folder access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <input type="checkbox" />
                    <span className="text-sm">Password manager account created</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Module 6: Media Buying Terminology (60 min)
                  </span>
                  <input type="checkbox" className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground mb-3">
                  Learn the essential terms and acronyms used daily in media buying.
                </p>

                <div className="grid gap-2">
                  <div className="border-l-4 border-stock-money pl-3 py-1">
                    <p className="font-semibold text-sm">ROAS - Return on Ad Spend</p>
                    <p className="text-xs text-muted-foreground">Revenue ÷ Ad Spend. Target: 3.0x minimum</p>
                  </div>
                  <div className="border-l-4 border-stock-operations pl-3 py-1">
                    <p className="font-semibold text-sm">CPA - Cost Per Acquisition</p>
                    <p className="text-xs text-muted-foreground">Ad Spend ÷ Number of Purchases. Target: ₦1,800 or below</p>
                  </div>
                  <div className="border-l-4 border-stock-people pl-3 py-1">
                    <p className="font-semibold text-sm">CTR - Click-Through Rate</p>
                    <p className="text-xs text-muted-foreground">(Clicks ÷ Impressions) × 100. Target: 2.0%+</p>
                  </div>
                  <div className="border-l-4 border-stock-reputation pl-3 py-1">
                    <p className="font-semibold text-sm">CPM - Cost Per 1000 Impressions</p>
                    <p className="text-xs text-muted-foreground">How much you pay to show your ad 1000 times</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-3">
                  View Complete Glossary (40+ Terms)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Module 7: Observation Tasks (90 min)
                  </span>
                  <input type="checkbox" className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Shadow an experienced media buyer and observe real-time campaign management.
                </p>

                <Alert>
                  <AlertDescription>
                    <strong>What to Observe:</strong> Your mentor will walk you through their daily routine. Take detailed notes on their decision-making process, tools used, and workflow.
                  </AlertDescription>
                </Alert>

                <div className="space-y-2 text-sm">
                  <div className="p-3 border rounded-lg">
                    <p className="font-semibold mb-1">Observation 1: Morning Performance Check</p>
                    <p className="text-muted-foreground text-xs">Watch how they review overnight performance and identify what needs attention</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-semibold mb-1">Observation 2: Campaign Optimization</p>
                    <p className="text-muted-foreground text-xs">See how they make decisions about pausing, adjusting, or scaling campaigns</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-semibold mb-1">Observation 3: Report Creation</p>
                    <p className="text-muted-foreground text-xs">Learn how to pull data and create the daily performance report</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* End of Day Assessment */}
        <Card className="border-stock-money">
          <CardHeader>
            <CardTitle>End of Day 1: Knowledge Check Quiz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>
                <strong>Pass Requirement:</strong> Score 80% or higher (8/10 correct) to unlock Day 2
              </AlertDescription>
            </Alert>

            <div className="space-y-2 text-sm">
              <p className="font-medium">Quiz Topics:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Role of media buyer in the business system</li>
                <li>Basic terminology and metrics (ROAS, CPA, CTR)</li>
                <li>Platform navigation (Ads Manager, Events Manager)</li>
                <li>Daily workflow and responsibilities</li>
                <li>Nigerian e-commerce market basics</li>
              </ul>
            </div>

            <Button className="w-full bg-stock-money">
              Start Day 1 Quiz
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>Estimated time: 15 minutes</p>
              <p>You can retake the quiz if needed</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Before You Leave Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" />
                <span className="text-sm">Completed all 7 modules</span>
              </div>
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" />
                <span className="text-sm">Passed knowledge check quiz (80%+)</span>
              </div>
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" />
                <span className="text-sm">Submitted observation notes to mentor</span>
              </div>
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" />
                <span className="text-sm">All tool access verified and working</span>
              </div>
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" />
                <span className="text-sm">Day 2 materials reviewed (optional prep)</span>
              </div>
            </div>

            <Button className="w-full mt-4" disabled>
              Unlock Day 2 (Complete Day 1 First)
            </Button>
          </CardContent>
        </Card>
      </div>
    </AcademyLayout>
  );
};

export default Day1;
