import { AcademyLayout } from "@/components/AcademyLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Users, MapPin, TrendingUp } from "lucide-react";

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

const AudienceTargeting = () => {
  return (
    <AcademyLayout
      sidebarContent={<SidebarNav items={sidebarItems} />}
      title="Media Buying Academy"
      category="money"
    >
      <div className="space-y-6 max-w-4xl">
        <div>
          <Badge className="mb-4">Strategy</Badge>
          <h1 className="text-3xl font-bold mb-2">Audience Targeting for Nigerian E-commerce</h1>
          <p className="text-muted-foreground">
            Master audience targeting strategies optimized for the Nigerian market. Learn how to reach the right customers at the right time with the right message.
          </p>
        </div>

        <Alert>
          <Target className="h-4 w-4" />
          <AlertDescription>
            <strong>Key Principle:</strong> In Nigeria, mobile-first behavior dominates with 90%+ of traffic coming from mobile devices. All targeting strategies must account for this reality.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="demographics" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="lookalikes">Lookalikes</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
          </TabsList>

          <TabsContent value="demographics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Nigerian E-commerce Demographics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Age Groups</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>18-24 years</span>
                      <Badge variant="outline">High Intent - Fashion, Tech Accessories</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>25-34 years</span>
                      <Badge className="bg-stock-money">Primary Target - All Categories</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>35-44 years</span>
                      <Badge variant="outline">High Value - Electronics, Home Goods</Badge>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Gender Considerations</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Nigerian e-commerce shows distinct gender preferences:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Women (25-40):</strong> Beauty products, fashion, home goods - Peak shopping 8-11 PM</li>
                    <li><strong>Men (25-45):</strong> Electronics, gadgets, sporting goods - Peak shopping 7-10 PM</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Income Targeting</h3>
                  <Alert>
                    <AlertDescription>
                      Facebook doesn't provide income targeting in Nigeria. Use proxy indicators: device type (iPhone users), interests (business, entrepreneurship), and geographic location.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Interest-Based Targeting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">High-Performance Interest Categories</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-stock-money pl-4">
                      <h4 className="font-medium mb-2">Fashion & Beauty</h4>
                      <p className="text-sm text-muted-foreground mb-2">Best for: Clothing, accessories, cosmetics</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Online Shopping</Badge>
                        <Badge variant="outline">Fashion</Badge>
                        <Badge variant="outline">Beauty</Badge>
                        <Badge variant="outline">Instagram</Badge>
                      </div>
                    </div>

                    <div className="border-l-4 border-stock-operations pl-4">
                      <h4 className="font-medium mb-2">Technology</h4>
                      <p className="text-sm text-muted-foreground mb-2">Best for: Electronics, gadgets, accessories</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Technology</Badge>
                        <Badge variant="outline">Mobile Phones</Badge>
                        <Badge variant="outline">Electronics</Badge>
                        <Badge variant="outline">Gadgets</Badge>
                      </div>
                    </div>

                    <div className="border-l-4 border-stock-people pl-4">
                      <h4 className="font-medium mb-2">Lifestyle & Aspirational</h4>
                      <p className="text-sm text-muted-foreground mb-2">Best for: Premium products, lifestyle goods</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Entrepreneurship</Badge>
                        <Badge variant="outline">Business</Badge>
                        <Badge variant="outline">Luxury Goods</Badge>
                        <Badge variant="outline">Travel</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <TrendingUp className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Pro Tip:</strong> Layer interests with demographic filters. Example: "Online Shopping" + "Fashion" + Women 25-40 + Lagos typically yields 2-3x better ROAS than single interest targeting.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lookalikes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lookalike Audience Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Lookalike Audience Creation Framework</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Build lookalike audiences from your best customer segments to scale efficiently.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">1% Lookalike (Highest Quality)</h4>
                    <p className="text-sm mb-2">Source: Last 180 days purchasers</p>
                    <p className="text-sm text-muted-foreground">
                      Most similar to your customers. Use for scaling winning campaigns. Expected audience size: ~200,000-400,000 in Nigeria.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">3% Lookalike (Medium Quality)</h4>
                    <p className="text-sm mb-2">Source: Website visitors (30 days)</p>
                    <p className="text-sm text-muted-foreground">
                      Broader reach with good relevance. Use when 1% audiences are exhausted. Expected audience size: ~600,000-1,000,000.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">5-10% Lookalike (Testing Only)</h4>
                    <p className="text-sm mb-2">Source: Engaged users</p>
                    <p className="text-sm text-muted-foreground">
                      Large reach, lower relevance. Use only for prospecting campaigns with strong creative. Monitor ROAS closely.
                    </p>
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    <strong>Minimum Source Size:</strong> You need at least 100 purchasers to create an effective lookalike audience. For new stores, start with website visitor lookalikes while building purchase data.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regional" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Regional Targeting Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Key Nigerian Markets</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-stock-money pl-4">
                      <h4 className="font-medium mb-1">Lagos State</h4>
                      <p className="text-sm text-muted-foreground mb-2">40-50% of Nigerian e-commerce orders</p>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Highest purchasing power and order frequency</li>
                        <li>Best areas: Victoria Island, Lekki, Ikeja, Surulere</li>
                        <li>Peak shopping hours: 8-11 PM WAT</li>
                        <li>Average CPA: ₦1,500-2,200</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-stock-operations pl-4">
                      <h4 className="font-medium mb-1">Abuja (FCT)</h4>
                      <p className="text-sm text-muted-foreground mb-2">15-20% of orders, high-value customers</p>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Government workers with stable income</li>
                        <li>Strong preference for quality over price</li>
                        <li>Best for: Electronics, fashion, home goods</li>
                        <li>Average CPA: ₦1,800-2,500</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-stock-people pl-4">
                      <h4 className="font-medium mb-1">Port Harcourt & Other States</h4>
                      <p className="text-sm text-muted-foreground mb-2">30-35% of orders, growing market</p>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Port Harcourt, Ibadan, Kano, Enugu</li>
                        <li>Lower CPA but also lower average order value</li>
                        <li>Delivery takes 3-5 days (plan campaign messaging accordingly)</li>
                        <li>Average CPA: ₦1,200-1,800</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    <strong>Delivery Consideration:</strong> Always communicate delivery timeframes clearly in ads. Lagos: 1-2 days, Abuja: 2-3 days, Other states: 3-5 days. Mismatched expectations drive high return rates.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Exclusion Strategies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Excluding the right audiences is as important as targeting the right ones. Reduce wasted spend by excluding:
            </p>
            <ul className="space-y-2 text-sm list-disc list-inside">
              <li><strong>Recent Purchasers (7-30 days):</strong> Avoid advertising to customers who just bought</li>
              <li><strong>Non-Deliverable Locations:</strong> Areas where you cannot fulfill orders</li>
              <li><strong>Career Excludes:</strong> Target working professionals by excluding "Students" interest for premium products</li>
              <li><strong>Competitor Employees:</strong> Exclude employees of competing stores to avoid false signals</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </AcademyLayout>
  );
};

export default AudienceTargeting;
