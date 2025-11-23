import { AcademyLayout } from "@/components/AcademyLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, Clock, CheckCircle2, Download, Play } from "lucide-react";

const sidebarItems = [
  { title: "📊 Dashboard", href: "/mediabuying" },
  { title: "🎯 Strategy", items: [
    { title: "Audience Targeting", href: "/mediabuying/strategy/audience-targeting" },
    { title: "Campaign Structure", href: "/mediabuying/strategy/campaign-structure" },
  ]},
  { title: "📋 SOPs", items: [
    { title: "Daily Routine", href: "/mediabuying/sops/daily-routine" },
    { title: "Campaign Creation", href: "/mediabuying/sops/campaign-creation" },
    { title: "Creating Facebook Ads Pixel", href: "/mediabuying/sops/creating-facebook-ads-pixel" },
    { title: "Installing Pixel on Shopify", href: "/mediabuying/sops/installing-pixel-on-shopify" },
    { title: "Setting Up Conversion Events", href: "/mediabuying/sops/setting-up-conversion-events" },
  ]},
];

const SOPCreatingPixel = () => {
  return (
    <AcademyLayout
      title="Media Buying Academy"
      category="money"
      sidebarContent={<SidebarNav items={sidebarItems} />}
    >
      <div className="max-w-4xl space-y-8">
        {/* Page Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Creating Facebook Ads Pixel</h1>
          
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              5 minutes
            </Badge>
            <Badge variant="secondary">Beginner</Badge>
            <Badge variant="secondary">Last Updated: Nov 15, 2025</Badge>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Complete step-by-step guide to creating a Facebook Ads Pixel for tracking campaign performance
          </p>
        </div>

        {/* Purpose Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Purpose</h2>
          <p className="mb-4">
            The Facebook Ads Pixel is a tracking code that allows you to measure the effectiveness of your 
            advertising campaigns by understanding the actions people take on your website. Without a properly 
            configured pixel, you cannot:
          </p>
          <ul className="space-y-2 ml-6">
            {[
              "Track conversions accurately",
              "Build custom audiences for retargeting",
              "Optimize campaigns for specific actions",
              "Calculate true ROAS",
              "Use dynamic ads effectively"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-stock-money flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* When to Use */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">When to Use This SOP</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-green-600 mb-2">✅ Use this procedure when:</h3>
              <ul className="space-y-1 ml-6 text-sm">
                <li>• Setting up advertising for a new website or domain</li>
                <li>• Creating a separate pixel for testing purposes</li>
                <li>• Onboarding a new brand to your ad account</li>
                <li>• Your existing pixel has been compromised or needs replacement</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-red-600 mb-2">❌ Do NOT create a new pixel if:</h3>
              <ul className="space-y-1 ml-6 text-sm">
                <li>• You already have a working pixel on your website (use existing one)</li>
                <li>• You're just adding new events (use "Set Up Web Events" instead)</li>
                <li>• You're troubleshooting existing pixel (see Troubleshooting Guide)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Prerequisites */}
        <Card className="p-6 border-l-4 border-stock-operations">
          <h2 className="text-2xl font-bold mb-4">Prerequisites Checklist</h2>
          <p className="mb-4">Before starting, ensure you have:</p>
          <div className="space-y-3">
            {[
              "Facebook Business Manager account access",
              "Admin or Developer role in Business Manager",
              "Business Manager ID handy (for reference)",
              "Website domain name ready",
              "5 minutes of uninterrupted time",
              "Stable internet connection"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Checkbox id={`prereq-${index}`} />
                <label htmlFor={`prereq-${index}`} className="cursor-pointer">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </Card>

        {/* Important Warning */}
        <Alert className="border-amber-500 bg-amber-500/10">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="ml-2">
            <strong>Important:</strong> Only create ONE pixel per website domain. Multiple pixels on the same 
            domain can cause tracking conflicts and data accuracy issues.
          </AlertDescription>
        </Alert>

        {/* Step-by-Step Procedure */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step-by-Step Procedure</h2>
          
          {/* Step 1 */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-stock-money text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Access Facebook Events Manager</h3>
              </div>
              <Badge variant="outline">30 seconds</Badge>
            </div>
            
            <ol className="space-y-2 ml-12 mb-4">
              <li>1. Go to <code className="bg-muted px-2 py-1 rounded text-sm">business.facebook.com</code></li>
              <li>2. Log in with your credentials</li>
              <li>3. From the left sidebar, click on "Events Manager" (icon looks like a bar chart)</li>
              <li>4. If prompted, select the correct Business Manager account</li>
            </ol>
            
            <div className="ml-12 p-4 bg-muted rounded-lg">
              <div className="text-sm font-medium mb-2">📸 Screenshot would appear here:</div>
              <div className="text-sm text-muted-foreground">
                Facebook Business Manager dashboard with Events Manager highlighted in left sidebar
              </div>
            </div>
            
            <div className="ml-12 mt-4 text-sm">
              <strong>What you should see:</strong> Events Manager dashboard with any existing data sources listed
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-stock-money text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Initiate Pixel Creation</h3>
              </div>
              <Badge variant="outline">20 seconds</Badge>
            </div>
            
            <ol className="space-y-2 ml-12 mb-4">
              <li>1. In Events Manager, click the green "Connect Data Sources" button (top left)</li>
              <li>2. From the options presented, select "Web"</li>
              <li>3. Click "Get Started" under "Facebook Pixel"</li>
            </ol>
            
            <div className="ml-12 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
              <strong>Alternative path:</strong> If you see "Add Events" instead, click it and choose 
              "From a New Website" → "Facebook Pixel"
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-stock-money text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Name Your Pixel</h3>
              </div>
              <Badge variant="outline">1 minute</Badge>
            </div>
            
            <div className="ml-12 space-y-4">
              <p>Enter a descriptive name for your pixel following our naming convention:</p>
              
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-bold mb-2">Naming Convention Format:</div>
                <code className="text-sm">[Brand/Store Name] - [Domain] - [Environment]</code>
                
                <div className="mt-3 space-y-1 text-sm">
                  <div><strong>Examples:</strong></div>
                  <div>• Glamour Beauty - glamourbeauty.ng - Production</div>
                  <div>• TechHub Store - techhubng.com - Production</div>
                  <div>• Fashion Empire - fashionempire.ng - Test</div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                <strong>💡 Naming Best Practice:</strong> Always include "Production" or "Test" in the name. 
                This prevents accidentally using test pixels in live campaigns, which would corrupt your data.
              </div>
              
              <ol className="space-y-2">
                <li>2. Optional but recommended: Enter your website URL in the "Website URL" field</li>
                <li className="ml-6 text-sm text-muted-foreground">Format: https://www.yourstore.ng</li>
                <li className="ml-6 text-sm text-muted-foreground">This helps Facebook provide relevant setup instructions</li>
                <li>3. Click "Continue"</li>
              </ol>
            </div>
          </Card>

          {/* Step 4 */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-stock-money text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Record Your Pixel ID</h3>
              </div>
              <Badge variant="outline">2 minutes</Badge>
            </div>
            
            <div className="ml-12 space-y-4">
              <Alert className="border-red-500 bg-red-500/10">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <AlertDescription className="ml-2">
                  <strong>CRITICAL:</strong> You will need this Pixel ID for installation. If you lose it, 
                  you'll have to navigate back to Events Manager → Data Sources → Select your pixel → Settings to retrieve it.
                </AlertDescription>
              </Alert>
              
              <p>Once created, Facebook will display your new Pixel ID. This is critically important.</p>
              
              <ol className="space-y-3">
                <li>1. Copy the Pixel ID (it's a 15-16 digit number)</li>
                <li>2. Immediately document it in our Pixel Registry:
                  <ul className="ml-6 mt-2 space-y-1 text-sm">
                    <li>• Open the shared Google Sheet: <strong>Pixel Registry 2025</strong></li>
                    <li>• Add a new row with: Pixel Name, Pixel ID, Website Domain, Date Created, Created By (your name), Status, Notes</li>
                  </ul>
                </li>
                <li>3. Save the Pixel ID somewhere secure (password manager or company credential store)</li>
              </ol>
              
              <div className="p-3 bg-muted rounded-lg text-sm">
                <strong>Example Pixel ID:</strong> 1234567891234567
              </div>
            </div>
          </Card>

          {/* Step 5 */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-stock-money text-white flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Choose Installation Method (Information Only)</h3>
              </div>
              <Badge variant="outline">30 seconds</Badge>
            </div>
            
            <div className="ml-12 space-y-4">
              <p>Facebook will now ask how you want to install the pixel. At this stage, just note the options - don't proceed with installation yet.</p>
              
              <div className="space-y-2">
                <strong>Installation options:</strong>
                <ol className="ml-6 space-y-1">
                  <li>1. Partner Integration (Shopify, WordPress, etc.) - ⭐ Recommended for most cases</li>
                  <li>2. Manually Install Code Yourself - For custom websites</li>
                  <li>3. Email Instructions - Send to developer</li>
                </ol>
              </div>
              
              <Alert className="border-stock-operations bg-stock-operations/10">
                <AlertDescription>
                  <strong>For this SOP:</strong> Click "Partner Integration" to see the option, but do NOT complete installation here.
                  <br /><br />
                  <strong>Why?</strong> Installation is a separate SOP with specific verification steps. 
                  See: <code className="bg-muted px-2 py-1 rounded text-xs">/mediabuying/sops/installing-pixel-on-shopify</code>
                </AlertDescription>
              </Alert>
              
              <p className="text-sm">Click "Done" or "Set Up Later" to complete pixel creation.</p>
            </div>
          </Card>

          {/* Step 6 */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-stock-money text-white flex items-center justify-center font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Verify Pixel Creation</h3>
              </div>
              <Badge variant="outline">30 seconds</Badge>
            </div>
            
            <ol className="ml-12 space-y-2">
              <li>1. You should now see your pixel listed in Events Manager</li>
              <li>2. Status will show "No Activity" (this is normal - no tracking code installed yet)</li>
              <li>3. Confirm the pixel name matches your naming convention</li>
            </ol>
          </Card>
        </div>

        {/* Post-Creation Checklist */}
        <Card className="p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold mb-4">Post-Creation Checklist</h2>
          <p className="mb-4">After creating your pixel, complete these immediate next steps:</p>
          <div className="space-y-3">
            {[
              "Pixel ID recorded in company Pixel Registry",
              "Pixel ID saved in secure password manager",
              "Pixel name follows naming convention",
              "Correct Business Manager ownership verified",
              "Pixel status visible in Events Manager",
              "Team notified of new pixel creation (Slack #media-buying channel)",
              "Next SOP scheduled: Installing Pixel on Shopify"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Checkbox id={`post-${index}`} />
                <label htmlFor={`post-${index}`} className="cursor-pointer">
                  {item}
                </label>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-stock-operations/10 border border-stock-operations/20 rounded-lg">
            <strong>Immediate Next Action:</strong> Proceed to Installing Pixel on Shopify to complete the implementation.
          </div>
        </Card>

        {/* Troubleshooting */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Issue: "Connect Data Sources" button is greyed out</h3>
              <p className="text-sm mb-2"><strong>Cause:</strong> Insufficient permissions in Business Manager</p>
              <p className="text-sm"><strong>Solution:</strong></p>
              <ol className="ml-6 text-sm space-y-1">
                <li>1. Contact your Business Manager admin</li>
                <li>2. Request "Admin" or "Developer" role</li>
                <li>3. Once granted, refresh page and try again</li>
                <li>4. If still greyed out, clear browser cache and try in incognito mode</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold mb-2">Issue: Pixel name already exists</h3>
              <p className="text-sm mb-2"><strong>Cause:</strong> A pixel with that exact name was previously created</p>
              <p className="text-sm"><strong>Solution:</strong></p>
              <ol className="ml-6 text-sm space-y-1">
                <li>1. Add a distinguishing suffix: [Original Name] - v2 or [Original Name] - Nov2025</li>
                <li>2. Check Pixel Registry to see if previous pixel still exists</li>
                <li>3. If old pixel is inactive, consider archiving it first</li>
                <li>4. Document reason for creating new pixel in Notes column</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold mb-2">Issue: Created pixel accidentally - need to delete</h3>
              <p className="text-sm mb-2"><strong>Cause:</strong> Human error (wrong name, wrong account, etc.)</p>
              <p className="text-sm"><strong>Solution:</strong></p>
              <ol className="ml-6 text-sm space-y-1 mb-3">
                <li>1. In Events Manager, hover over the pixel</li>
                <li>2. Click the three dots menu (⋮)</li>
                <li>3. Select "Delete Pixel"</li>
                <li>4. Confirm deletion</li>
                <li>5. Update Pixel Registry with "DELETED" status and reason</li>
                <li>6. Create new pixel following this SOP</li>
              </ol>
              <Alert className="border-amber-500 bg-amber-500/10">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="ml-2 text-sm">
                  Warning: Deleting a pixel is permanent and cannot be undone. All historical data will be lost.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </Card>

        {/* Related Documentation */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Related Documentation</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2 text-stock-money">Must Read Next:</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/mediabuying/sops/installing-pixel-on-shopify">
                    Installing Pixel on Shopify - Immediate next step
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/mediabuying/sops/setting-up-conversion-events">
                    Setting Up Conversion Events - After installation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Video Tutorial */}
        <Card className="p-6 bg-gradient-to-br from-stock-operations/10 to-stock-reputation/10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Play className="h-6 w-6" />
            Video Tutorial
          </h2>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <Play className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Creating Facebook Ads Pixel - Complete Walkthrough</p>
              <p className="text-xs text-muted-foreground">Duration: 4:32</p>
            </div>
          </div>
          <div className="text-sm space-y-1">
            <strong>Topics Covered:</strong>
            <ul className="ml-6 space-y-1">
              <li>0:00 - Introduction and prerequisites</li>
              <li>0:30 - Accessing Events Manager</li>
              <li>1:15 - Creating the pixel</li>
              <li>2:00 - Naming convention best practices</li>
              <li>2:45 - Recording Pixel ID properly</li>
              <li>3:30 - Understanding installation options</li>
              <li>4:00 - Next steps overview</li>
            </ul>
          </div>
        </Card>

        {/* Quick Reference Download */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Reference Card</h2>
          <p className="mb-4">One-page summary including 6-step process flowchart, naming convention template, common errors and quick fixes</p>
          <Button className="w-full" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download PDF Quick Reference
          </Button>
        </Card>

        {/* Footer */}
        <Card className="p-6 bg-muted">
          <div className="space-y-2 text-sm">
            <div><strong>Need help?</strong> Contact: Media Buying Supervisor - Adebayo M. (ext. 234) or #media-buying Slack</div>
            <div><strong>Office Hours Support:</strong> Mon-Fri, 9 AM - 6 PM WAT</div>
            <div><strong>Emergency After-Hours:</strong> For urgent pixel issues affecting live campaigns: +234-XXX-XXXX-XXX</div>
          </div>
        </Card>
      </div>
    </AcademyLayout>
  );
};

export default SOPCreatingPixel;
