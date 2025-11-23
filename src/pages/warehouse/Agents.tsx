import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, CheckCircle } from "lucide-react";

const Agents = () => {
  const sidebarContent = (
    <nav className="space-y-2">
      <a href="/warehouse/agents#all" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        All Agents
      </a>
      <a href="/warehouse/agents#performance" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Performance
      </a>
      <a href="/warehouse/agents#kyc" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        KYC Status
      </a>
    </nav>
  );

  return (
    <WarehouseLayout sidebarContent={sidebarContent} title="DA Management">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Delivery Agent Management</h1>
          <p className="text-muted-foreground">Manage 50+ delivery agents across 36 Nigerian states</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
                All Agents
              </CardTitle>
              <CardDescription className="text-muted-foreground">View and manage all DAs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Trophy className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                Performance
              </CardTitle>
              <CardDescription className="text-muted-foreground">Leaderboard and rankings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                KYC Status
              </CardTitle>
              <CardDescription className="text-muted-foreground">Verification status</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </WarehouseLayout>
  );
};

export default Agents;
