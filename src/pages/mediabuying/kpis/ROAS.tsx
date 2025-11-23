import { AcademyLayout } from "@/components/AcademyLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, CheckCircle2, Calculator } from "lucide-react";

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

const ROAS = () => {
  return (
    <AcademyLayout
      sidebarContent={<SidebarNav items={sidebarItems} />}
      title="Media Buying Academy"
      category="money"
    >
      <div className="space-y-6 max-w-4xl">
        <div>
          <Badge className="mb-4">KPI</Badge>
          <h1 className="text-3xl font-bold mb-2">Return on Ad Spend (ROAS)</h1>
          <p className="text-muted-foreground">
            Last Updated: November 22, 2025 • Reading Time: 8 minutes
          </p>
        </div>

        <Alert>
          <Calculator className="h-4 w-4" />
          <AlertDescription>
            <strong>Definition:</strong> ROAS = Revenue Generated / Ad Spend<br />
            Example: If you spend ₦10,000 and generate ₦30,000 in revenue, your ROAS is 3.0x
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>ROAS Benchmarks for Nigerian E-commerce</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border rounded-lg p-4 border-destructive">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <h3 className="font-semibold">Below Target</h3>
                </div>
                <div className="text-3xl font-bold mb-2">{'<'} 2.0x</div>
                <p className="text-sm text-muted-foreground">
                  Campaigns are losing money or barely breaking even. Immediate optimization required.
                </p>
              </div>

              <div className="border rounded-lg p-4 border-yellow-500">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-yellow-500" />
                  <h3 className="font-semibold">Acceptable</h3>
                </div>
                <div className="text-3xl font-bold mb-2">2.0x - 2.9x</div>
                <p className="text-sm text-muted-foreground">
                  Meeting minimum targets. Profitable but has room for improvement through testing.
                </p>
              </div>

              <div className="border rounded-lg p-4 border-stock-money">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-stock-money" />
                  <h3 className="font-semibold">Excellent</h3>
                </div>
                <div className="text-3xl font-bold mb-2">3.0x+</div>
                <p className="text-sm text-muted-foreground">
                  Strong performance. Ready for scaling. This is the target range for all campaigns.
                </p>
              </div>
            </div>

            <Alert>
              <AlertDescription>
                <strong>Company Target:</strong> Vitalvida targets a minimum blended ROAS of 3.0x across all campaigns. Individual campaigns may vary, but overall portfolio must hit this threshold.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding ROAS Calculation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Practical Example</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                <div>Campaign Spend: ₦15,000</div>
                <div>Revenue Generated: ₦48,000</div>
                <div className="border-t pt-2 mt-2">
                  ROAS = ₦48,000 / ₦15,000 = <span className="text-stock-money font-bold">3.2x</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  This means for every ₦1 spent, you generated ₦3.20 in revenue
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Multiple Campaigns Example</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Campaign</th>
                      <th className="text-right py-2">Spend</th>
                      <th className="text-right py-2">Revenue</th>
                      <th className="text-right py-2">ROAS</th>
                      <th className="text-center py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Fashion Collection</td>
                      <td className="text-right">₦8,000</td>
                      <td className="text-right">₦28,000</td>
                      <td className="text-right font-bold">3.5x</td>
                      <td className="text-center"><Badge className="bg-stock-money">Excellent</Badge></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Electronics Promo</td>
                      <td className="text-right">₦12,000</td>
                      <td className="text-right">₦33,000</td>
                      <td className="text-right font-bold">2.75x</td>
                      <td className="text-center"><Badge variant="outline">Acceptable</Badge></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Beauty Products</td>
                      <td className="text-right">₦5,000</td>
                      <td className="text-right">₦8,000</td>
                      <td className="text-right font-bold">1.6x</td>
                      <td className="text-center"><Badge variant="destructive">Below Target</Badge></td>
                    </tr>
                    <tr className="border-t-2 font-bold">
                      <td className="py-2">TOTAL</td>
                      <td className="text-right">₦25,000</td>
                      <td className="text-right">₦69,000</td>
                      <td className="text-right">2.76x</td>
                      <td className="text-center"><Badge variant="outline">Blended</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Note: Even with one underperforming campaign, the blended ROAS is acceptable. The strong performers compensate for the weaker one.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Factors Affecting ROAS in Nigeria</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="mt-1">💰</div>
                <div>
                  <p className="font-medium">Product Margins</p>
                  <p className="text-sm text-muted-foreground">
                    High-margin products (50%+ gross margin) can sustain lower ROAS. Low-margin items need 4.0x+ ROAS to be profitable.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">🎯</div>
                <div>
                  <p className="font-medium">Audience Quality</p>
                  <p className="text-sm text-muted-foreground">
                    Warm audiences (website visitors, engaged users) typically deliver 1.5-2x better ROAS than cold prospecting audiences.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">📱</div>
                <div>
                  <p className="font-medium">Mobile Experience</p>
                  <p className="text-sm text-muted-foreground">
                    Poor mobile checkout experience can reduce ROAS by 30-50%. Optimize for mobile first.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">🎨</div>
                <div>
                  <p className="font-medium">Creative Quality</p>
                  <p className="text-sm text-muted-foreground">
                    Strong creative (clear product benefits, social proof, Nigerian context) can improve ROAS by 40-60%.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">💳</div>
                <div>
                  <p className="font-medium">Payment Options</p>
                  <p className="text-sm text-muted-foreground">
                    Cash on Delivery (COD) increases conversion but has 15-25% failed delivery rate. Factor this into ROAS expectations.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Improve ROAS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-stock-money pl-4">
                <h3 className="font-semibold mb-2">1. Audience Refinement</h3>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Create lookalike audiences from purchasers (highest ROAS)</li>
                  <li>Exclude recent buyers to avoid wasted spend</li>
                  <li>Layer interests with demographics for precision targeting</li>
                  <li>Test geographic focus (Lagos often delivers best ROAS)</li>
                </ul>
              </div>

              <div className="border-l-4 border-stock-operations pl-4">
                <h3 className="font-semibold mb-2">2. Creative Optimization</h3>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Test 3-5 creative variations simultaneously</li>
                  <li>Use Nigerian models and local contexts</li>
                  <li>Show clear product benefits and prices</li>
                  <li>Include social proof (reviews, testimonials)</li>
                </ul>
              </div>

              <div className="border-l-4 border-stock-people pl-4">
                <h3 className="font-semibold mb-2">3. Landing Page Experience</h3>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Ensure mobile load time {'<'} 3 seconds</li>
                  <li>Simplify checkout process (fewer steps)</li>
                  <li>Display delivery time and costs clearly</li>
                  <li>Offer Cash on Delivery prominently</li>
                </ul>
              </div>

              <div className="border-l-4 border-stock-reputation pl-4">
                <h3 className="font-semibold mb-2">4. Bid Strategy Optimization</h3>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Use "Lowest Cost" for new campaigns</li>
                  <li>Switch to "Cost Cap" once stable performance established</li>
                  <li>Set cost cap at 20% below target CPA</li>
                  <li>Allow 3-5 days for algorithm learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ROAS vs CPA: When to Use Each</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <AlertDescription>
                ROAS and CPA are related but measure different things. ROAS shows revenue efficiency while CPA shows cost efficiency.
              </AlertDescription>
            </Alert>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Use ROAS When:</h3>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Products have varying prices</li>
                  <li>You want to measure revenue impact</li>
                  <li>Comparing campaign profitability</li>
                  <li>Reporting to management</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Use CPA When:</h3>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Products have similar prices</li>
                  <li>Optimizing acquisition cost</li>
                  <li>Setting bid caps</li>
                  <li>Day-to-day optimization decisions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attribution Window Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm">
              Facebook allows different attribution windows. Your ROAS will vary depending on which window you use:
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span className="font-medium">1-Day Click</span>
                <span className="text-muted-foreground">Most conservative - Only counts conversions within 24 hours</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span className="font-medium">7-Day Click</span>
                <span className="text-stock-money font-medium">Recommended - Standard for Nigerian market</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span className="font-medium">28-Day Click</span>
                <span className="text-muted-foreground">Most generous - May overstate impact</span>
              </div>
            </div>

            <Alert>
              <AlertDescription>
                <strong>Vitalvida Standard:</strong> All ROAS reporting uses 7-day click attribution unless specified otherwise. This balances accuracy with capturing the customer journey.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </AcademyLayout>
  );
};

export default ROAS;
