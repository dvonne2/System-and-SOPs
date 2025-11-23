import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Camera, AlertTriangle } from "lucide-react";

const Security = () => {
  const sidebarContent = (
    <nav className="space-y-2">
      <a href="/warehouse/security#risk" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Risk Monitor
      </a>
      <a href="/warehouse/security#photos" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Friday Photos
      </a>
      <a href="/warehouse/security#investigations" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Investigations
      </a>
    </nav>
  );

  return (
    <WarehouseLayout sidebarContent={sidebarContent} title="Security & Fraud Prevention">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Security & Fraud Prevention</h1>
          <p className="text-muted-foreground">Monitor delivery agent compliance and detect fraudulent activities</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Shield className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
                Risk Dashboard
              </CardTitle>
              <CardDescription className="text-muted-foreground">DA risk scores and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Camera className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                Friday Photos
              </CardTitle>
              <CardDescription className="text-muted-foreground">Weekly stock verification</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-[hsl(var(--warehouse-alert))]" />
                Investigations
              </CardTitle>
              <CardDescription className="text-muted-foreground">Active fraud cases</CardDescription>
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

export default Security;
