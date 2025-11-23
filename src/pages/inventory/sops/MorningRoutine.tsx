import { useState, useEffect } from "react";
import { InventoryLayout, useViewMode } from "@/components/InventoryLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Clock, AlertTriangle, CheckCircle, XCircle, 
  FileText, Users, Package, Lock, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "/inventory/dashboard",
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
];

type Phase = 'phase1' | 'phase2' | 'phase3' | 'phase4' | 'phase5' | 'locked' | 'outside_routine';

const getCurrentPhase = (): { phase: Phase; timeLeft: string; currentTime: string } => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  
  let phase: Phase = 'outside_routine';
  let targetTime = new Date();
  
  if (hour < 6) {
    phase = 'outside_routine';
    targetTime.setHours(6, 0, 0, 0);
  } else if (hour === 6 && minute < 30) {
    phase = 'phase1';
    targetTime.setHours(6, 30, 0, 0);
  } else if (hour === 6 && minute >= 30) {
    phase = 'phase2';
    targetTime.setHours(7, 0, 0, 0);
  } else if (hour === 7 && minute < 30) {
    phase = 'phase3';
    targetTime.setHours(7, 30, 0, 0);
  } else if (hour === 7 && minute >= 30 && minute < 45) {
    phase = 'phase4';
    targetTime.setHours(7, 45, 0, 0);
  } else if (hour === 7 && minute >= 45) {
    phase = 'phase5';
    targetTime.setHours(8, 0, 0, 0);
  } else if (hour >= 8) {
    phase = 'locked';
  }
  
  const timeLeft = Math.max(0, Math.floor((targetTime.getTime() - now.getTime()) / 1000 / 60));
  
  return { 
    phase, 
    timeLeft: phase === 'locked' ? 'Complete' : `${timeLeft} min`,
    currentTime 
  };
};

export default function MorningRoutine() {
  const mode = useViewMode();
  const [timeInfo, setTimeInfo] = useState(getCurrentPhase());
  const [checklist, setChecklist] = useState({
    phase1: false,
    phase2: false,
    phase3: false,
    phase4: false,
    phase5: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeInfo(getCurrentPhase());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const sidebarContent = <SidebarNav items={navItems} />;

  const getPhaseStatus = (phaseKey: keyof typeof checklist) => {
    const phaseNumber = parseInt(phaseKey.replace('phase', ''));
    const currentPhaseNumber = parseInt(timeInfo.phase.replace('phase', '') || '0');
    
    if (checklist[phaseKey]) return 'complete';
    if (timeInfo.phase === phaseKey) return 'active';
    if (currentPhaseNumber > phaseNumber) return 'overdue';
    return 'pending';
  };

  return (
    <InventoryLayout title="SOPs" sidebarContent={sidebarContent}>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Morning Routine (6:00 AM - 8:00 AM)
          </h1>
          <p className="text-muted-foreground">
            The Most Critical 2 Hours of Your Day
          </p>
        </div>

        {/* Time-Sensitive Alert */}
        <Alert className={cn(
          timeInfo.phase === 'outside_routine' && "border-blue-500 bg-blue-50",
          timeInfo.phase !== 'outside_routine' && timeInfo.phase !== 'locked' && "border-orange-500 bg-orange-50",
          timeInfo.phase === 'locked' && "border-green-500 bg-green-50"
        )}>
          <Clock className="h-4 w-4" />
          <AlertTitle>
            {timeInfo.phase === 'outside_routine' && 'Routine Not Started'}
            {timeInfo.phase === 'locked' && '✅ Routine Complete - System Locked'}
            {timeInfo.phase !== 'outside_routine' && timeInfo.phase !== 'locked' && 
              `Phase ${timeInfo.phase.replace('phase', '')} Active`
            }
          </AlertTitle>
          <AlertDescription>
            Current Time: {timeInfo.currentTime} | Time Left: {timeInfo.timeLeft}
            {timeInfo.phase === 'locked' && ' | Opening stock is now protected'}
          </AlertDescription>
        </Alert>

        {/* Purpose Section */}
        <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
          <CardHeader>
            <CardTitle className="text-foreground">Why This Routine Is Critical</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              The morning routine is THE foundation of accurate inventory management. This 2-hour window 
              determines whether your entire day (and the operations of 50+ delivery agents) runs smoothly 
              or descends into chaos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h4 className="font-semibold">What Happens:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Verify yesterday's closing stock is accurate</li>
                  <li>✓ Handle early morning deliveries correctly</li>
                  <li>✓ Prepare today's opening stock report</li>
                  <li>✓ Submit to management for approval</li>
                  <li>✓ Set up the day for operational success</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Why 6:00 AM:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• You need 2 full hours before 8:00 AM cutoff</li>
                  <li>• Some DAs deliver early (7-8 AM)</li>
                  <li>• Fixes must happen BEFORE today begins</li>
                  <li>• CEO expects your report by 7:45 AM</li>
                  <li>• System automatically locks at 8:00 AM sharp</li>
                </ul>
              </div>
            </div>

            <Alert className="border-red-500 bg-red-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="text-red-900">Critical Warning</AlertTitle>
              <AlertDescription className="text-red-800">
                If opening stock is inaccurate, EVERYTHING that follows is wrong. You'll spend the 
                entire day chasing errors that cascade through 50+ agents. Start right, stay right.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The 5 Phases */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">The 5 Critical Phases</h2>

          {/* Phase 1 */}
          <Card className={cn(
            "border-l-4 transition-all",
            getPhaseStatus('phase1') === 'complete' && "border-green-500 bg-green-50",
            getPhaseStatus('phase1') === 'active' && "border-orange-500 bg-orange-50",
            getPhaseStatus('phase1') === 'overdue' && "border-red-500 bg-red-50",
            getPhaseStatus('phase1') === 'pending' && "border-gray-300 bg-white"
          )}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  {getPhaseStatus('phase1') === 'complete' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {getPhaseStatus('phase1') === 'active' && <Clock className="h-5 w-5 text-orange-600" />}
                  {getPhaseStatus('phase1') === 'overdue' && <XCircle className="h-5 w-5 text-red-600" />}
                  {getPhaseStatus('phase1') === 'pending' && <Clock className="h-5 w-5 text-gray-400" />}
                  Phase 1: Review Yesterday's Closing Stock (6:00-6:30 AM)
                </CardTitle>
                {mode !== 'academy' && (
                  <Checkbox 
                    checked={checklist.phase1}
                    onCheckedChange={(checked) => setChecklist(prev => ({ ...prev, phase1: checked as boolean }))}
                  />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-foreground space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Step 1: Open DA Stock Position Sheet (2 min)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Navigate to "DA Stock Position" workbook → "Current Stock" tab</li>
                    <li>Verify you're viewing most recent data (check timestamp)</li>
                    <li>All 50+ agents should be listed with closing stock from yesterday</li>
                  </ul>
                </div>

                <div className="bg-[#F8F8F3] p-3 rounded">
                  <h5 className="font-medium text-red-700 mb-2">Red Flags to Watch:</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>🚩 Any "Last Updated" older than yesterday → Missing closing stock</li>
                    <li>🚩 Negative stock values → Data error</li>
                    <li>🚩 #ERROR in calculations → Formula broken</li>
                    <li>🚩 Blank agent status → Needs investigation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Step 2: Compare with WhatsApp Messages (10 min)</h4>
                  <p className="text-muted-foreground mb-2">
                    This is detective work. Verify EVERY delivery reported in WhatsApp was recorded in the system.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Open WhatsApp Web → "VitalVida DAs - Operations" group</li>
                    <li>Scroll to yesterday's messages (filter by date)</li>
                    <li>Count all "✅ DELIVERY REPORT" messages</li>
                    <li>Cross-reference each one with DA Stock Position sheet</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Step 3: Identify Missing Reports (5 min)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Check for orders marked "Assigned" but no delivery confirmation</li>
                    <li>Flag DAs with same opening/closing stock despite assigned orders</li>
                    <li>Document in "Corrections Log" if needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 2 */}
          <Card className={cn(
            "border-l-4 transition-all",
            getPhaseStatus('phase2') === 'complete' && "border-green-500 bg-green-50",
            getPhaseStatus('phase2') === 'active' && "border-orange-500 bg-orange-50",
            getPhaseStatus('phase2') === 'overdue' && "border-red-500 bg-red-50",
            getPhaseStatus('phase2') === 'pending' && "border-gray-300 bg-white"
          )}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  {getPhaseStatus('phase2') === 'complete' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {getPhaseStatus('phase2') === 'active' && <Clock className="h-5 w-5 text-orange-600" />}
                  {getPhaseStatus('phase2') === 'overdue' && <XCircle className="h-5 w-5 text-red-600" />}
                  {getPhaseStatus('phase2') === 'pending' && <Clock className="h-5 w-5 text-gray-400" />}
                  Phase 2: Check Corrections Log (6:30-7:00 AM)
                </CardTitle>
                {mode !== 'academy' && (
                  <Checkbox 
                    checked={checklist.phase2}
                    onCheckedChange={(checked) => setChecklist(prev => ({ ...prev, phase2: checked as boolean }))}
                  />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-orange-500 bg-orange-50">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle className="text-orange-900">Critical Rule</AlertTitle>
                <AlertDescription className="text-orange-800">
                  Deliveries between 12:00 AM - 7:59 AM count as YESTERDAY's sales, not today's.
                </AlertDescription>
              </Alert>

              <div className="text-sm text-foreground space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Process for Early Deliveries:</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                    <li>Monitor WhatsApp group for delivery reports between 6:30-7:59 AM</li>
                    <li>Check payment timestamp on each report</li>
                    <li>If timestamp is before 8:00 AM → This belongs to yesterday</li>
                    <li>Add to Corrections Log: Date (yesterday), DA name, Order ID, Products, Reason</li>
                    <li>Update yesterday's closing stock</li>
                    <li>DO NOT change today's opening stock</li>
                  </ol>
                </div>

                <div className="bg-[#F8F8F3] p-4 rounded">
                  <h5 className="font-medium mb-2">Example Scenario:</h5>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• 7:15 AM: DA reports delivery</p>
                    <p>• Payment timestamp shows: 7:15 AM</p>
                    <p>• Action: Log in Corrections → Update yesterday → Leave today unchanged</p>
                    <p>• Reason: "Early morning delivery - counts as previous day"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 3 */}
          <Card className={cn(
            "border-l-4 transition-all",
            getPhaseStatus('phase3') === 'complete' && "border-green-500 bg-green-50",
            getPhaseStatus('phase3') === 'active' && "border-orange-500 bg-orange-50",
            getPhaseStatus('phase3') === 'overdue' && "border-red-500 bg-red-50",
            getPhaseStatus('phase3') === 'pending' && "border-gray-300 bg-white"
          )}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  {getPhaseStatus('phase3') === 'complete' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {getPhaseStatus('phase3') === 'active' && <Clock className="h-5 w-5 text-orange-600" />}
                  {getPhaseStatus('phase3') === 'overdue' && <XCircle className="h-5 w-5 text-red-600" />}
                  {getPhaseStatus('phase3') === 'pending' && <Clock className="h-5 w-5 text-gray-400" />}
                  Phase 3: Generate Opening Stock Report (7:00-7:30 AM)
                </CardTitle>
                {mode !== 'academy' && (
                  <Checkbox 
                    checked={checklist.phase3}
                    onCheckedChange={(checked) => setChecklist(prev => ({ ...prev, phase3: checked as boolean }))}
                  />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-foreground space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Report Must Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#F8F8F3] p-3 rounded">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <Package className="h-4 w-4" />
                        Warehouse Stock
                      </h5>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Shampoo: [X] units</li>
                        <li>• Pomade: [Y] units</li>
                        <li>• Conditioner: [Z] units</li>
                        <li>• Total Value: ₦[Amount]</li>
                      </ul>
                    </div>

                    <div className="bg-[#F8F8F3] p-3 rounded">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Agent Stock Summary
                      </h5>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Total Agents: 50</li>
                        <li>• Active: [#] | Suspended: [#]</li>
                        <li>• List all 50 agents with stock</li>
                        <li>• AG-001 Tunde: XS, YP, ZC</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8F8F3] p-3 rounded">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    Critical Alerts Section
                  </h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• AG-XXX variance detected</li>
                    <li>• AG-YYY no Friday photo</li>
                    <li>• Low warehouse stock warnings</li>
                    <li>• Priority restocking needs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 4 */}
          <Card className={cn(
            "border-l-4 transition-all",
            getPhaseStatus('phase4') === 'complete' && "border-green-500 bg-green-50",
            getPhaseStatus('phase4') === 'active' && "border-orange-500 bg-orange-50",
            getPhaseStatus('phase4') === 'overdue' && "border-red-500 bg-red-50",
            getPhaseStatus('phase4') === 'pending' && "border-gray-300 bg-white"
          )}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  {getPhaseStatus('phase4') === 'complete' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {getPhaseStatus('phase4') === 'active' && <Clock className="h-5 w-5 text-orange-600" />}
                  {getPhaseStatus('phase4') === 'overdue' && <XCircle className="h-5 w-5 text-red-600" />}
                  {getPhaseStatus('phase4') === 'pending' && <Clock className="h-5 w-5 text-gray-400" />}
                  Phase 4: Submit to Management (7:30-7:45 AM)
                </CardTitle>
                {mode !== 'academy' && (
                  <Checkbox 
                    checked={checklist.phase4}
                    onCheckedChange={(checked) => setChecklist(prev => ({ ...prev, phase4: checked as boolean }))}
                  />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-foreground space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Submission Process:</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                    <li>Email full report to Operations Manager (attached as PDF/Excel)</li>
                    <li>WhatsApp brief summary to CEO (key numbers + urgent alerts only)</li>
                    <li>Post summary in Management WhatsApp group</li>
                    <li>Await approval confirmation before proceeding</li>
                  </ol>
                </div>

                <div className="bg-[#F8F8F3] p-4 rounded">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    CEO WhatsApp Message Template:
                  </h5>
                  <div className="bg-white p-3 rounded border text-sm text-muted-foreground font-mono">
                    📊 Opening Stock - Nov 23, 2025<br/>
                    Inventory: ₦45.2M<br/>
                    Active Agents: 48<br/>
                    Accuracy: 98.2%<br/>
                    <br/>
                    🚨 Urgent:<br/>
                    1. Low stock: Conditioner (28 units)<br/>
                    <br/>
                    Full report attached ✅
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 5 */}
          <Card className={cn(
            "border-l-4 transition-all",
            getPhaseStatus('phase5') === 'complete' && "border-green-500 bg-green-50",
            getPhaseStatus('phase5') === 'active' && "border-orange-500 bg-orange-50",
            getPhaseStatus('phase5') === 'overdue' && "border-red-500 bg-red-50",
            getPhaseStatus('phase5') === 'pending' && "border-gray-300 bg-white"
          )}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  {getPhaseStatus('phase5') === 'complete' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {getPhaseStatus('phase5') === 'active' && <Clock className="h-5 w-5 text-orange-600" />}
                  {getPhaseStatus('phase5') === 'overdue' && <XCircle className="h-5 w-5 text-red-600" />}
                  {getPhaseStatus('phase5') === 'pending' && <Clock className="h-5 w-5 text-gray-400" />}
                  Phase 5: Final Preparation (7:45-8:00 AM)
                </CardTitle>
                {mode !== 'academy' && (
                  <Checkbox 
                    checked={checklist.phase5}
                    onCheckedChange={(checked) => setChecklist(prev => ({ ...prev, phase5: checked as boolean }))}
                  />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-foreground space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Final Tasks:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Review priority orders for the day</li>
                    <li>Check automation scripts ran successfully</li>
                    <li>Verify all sheets are updated</li>
                    <li>Identify DAs needing immediate dispatch</li>
                    <li>Mental preparation for day ahead</li>
                    <li>Clear desk, ready for operations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8:00 AM Lock */}
          <Card className="border-l-4 border-purple-500 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Lock className="h-5 w-5 text-purple-600" />
                8:00 AM SHARP: System Locks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-foreground space-y-3">
                <Alert className="border-purple-500 bg-white">
                  <Lock className="h-4 w-4" />
                  <AlertTitle>Automatic System Protection</AlertTitle>
                  <AlertDescription>
                    At exactly 8:00 AM, the opening stock becomes read-only. No more edits allowed 
                    except by Accountant in emergency situations. This creates a clean audit trail.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-medium mb-2 text-green-700">✓ What Happens:</h5>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Opening stock freezes</li>
                      <li>• Clean audit trail begins</li>
                      <li>• Operations commence</li>
                      <li>• Morning routine complete</li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-medium mb-2 text-red-700">✗ After Lock:</h5>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• No edits to opening stock</li>
                      <li>• Can't fix yesterday's errors</li>
                      <li>• Must use Corrections Log</li>
                      <li>• Requires CEO approval</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)]">
          <CardHeader>
            <CardTitle className="text-foreground">What Comes Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Once the morning routine is complete and the system locks at 8:00 AM, you transition into 
              the operational phase of your day.
            </p>
            
            <div className="flex gap-3">
              <Button className="gap-2" asChild>
                <a href="/inventory/sops/order-assignment">
                  Order Assignment Process
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/inventory/sops/real-time-updates">
                  Real-Time Updates
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </InventoryLayout>
  );
}
