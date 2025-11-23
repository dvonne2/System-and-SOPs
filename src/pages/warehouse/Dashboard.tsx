import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { StockOverview } from "@/components/warehouse/StockOverview";
import { MetricsCards } from "@/components/warehouse/MetricsCards";
import { CutoffTimer } from "@/components/warehouse/CutoffTimer";
import { AlertsBanner } from "@/components/warehouse/AlertsBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

const navItems = [
  { title: "Dashboard", href: "/warehouse/dashboard" },
  {
    title: "Inventory",
    items: [
      { title: "Warehouse Stock", href: "/warehouse/inventory/warehouse" },
      { title: "DA Positions", href: "/warehouse/inventory/da-positions" },
      { title: "Movement Log", href: "/warehouse/inventory/movement" },
    ],
  },
  {
    title: "Operations",
    items: [
      { title: "Morning Routine", href: "/warehouse/operations/morning" },
      { title: "Real-Time Ops", href: "/warehouse/operations/realtime" },
      { title: "Evening Recon", href: "/warehouse/operations/evening" },
    ],
  },
  {
    title: "Security",
    items: [
      { title: "Risk Monitor", href: "/warehouse/security/risk" },
      { title: "Friday Photos", href: "/warehouse/security/photos" },
      { title: "Investigations", href: "/warehouse/security/investigations" },
    ],
  },
  { title: "Agents", href: "/warehouse/agents" },
  { title: "Bundles", href: "/warehouse/bundles" },
  { title: "Reports", href: "/warehouse/reports" },
];

export default function WarehouseDashboard() {
  return (
    <WarehouseLayout
      title="Warehouse System"
      sidebarContent={<SidebarNav items={navItems} />}
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Command Center</h1>
          <p className="text-muted-foreground">
            Real-time overview of VitalVida warehouse operations
          </p>
        </div>

        {/* Critical Alerts */}
        <AlertsBanner />

        {/* Cutoff Timer */}
        <CutoffTimer />

        {/* Stock Overview */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Live National Stock Position
          </h2>
          <StockOverview />
        </div>

        {/* Today's Metrics */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Today's Performance
          </h2>
          <MetricsCards />
        </div>

        {/* Quick Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BarChart3 className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
                Top Performing States
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { state: "Lagos", deliveries: 45, trend: "+15%" },
                  { state: "Abuja", deliveries: 28, trend: "+8%" },
                  { state: "Port Harcourt", deliveries: 18, trend: "+12%" },
                ].map((item) => (
                  <div
                    key={item.state}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#F8F8F3]"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.state}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.deliveries} deliveries
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[hsl(var(--warehouse-success))]">
                      {item.trend}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { metric: "Stock Accuracy", value: 99.2, target: 99 },
                  { metric: "Update Speed", value: 3.5, target: 5, unit: "min" },
                  { metric: "Friday Photo Compliance", value: 96, target: 100 },
                ].map((item) => (
                  <div key={item.metric}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{item.metric}</span>
                      <span className="text-sm font-medium text-foreground">
                        {item.value}
                        {item.unit || "%"}
                      </span>
                    </div>
                    <div className="w-full bg-[#F8F8F3] rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{
                          width: `${(item.value / item.target) * 100}%`,
                          backgroundColor:
                            item.value >= item.target
                              ? "hsl(var(--warehouse-success))"
                              : "hsl(38 92% 50%)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </WarehouseLayout>
  );
}
