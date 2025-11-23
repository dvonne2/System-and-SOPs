import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BarChart3, Calendar } from "lucide-react";

const Reports = () => {
  const sidebarContent = (
    <nav className="space-y-2">
      <a href="/warehouse/reports#daily" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Daily
      </a>
      <a href="/warehouse/reports#weekly" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Weekly
      </a>
      <a href="/warehouse/reports#monthly" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Monthly
      </a>
    </nav>
  );

  return (
    <WarehouseLayout sidebarContent={sidebarContent} title="Reports & Analytics">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate and export operational reports</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
                Daily Reports
              </CardTitle>
              <CardDescription className="text-muted-foreground">Operations summary</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                Weekly Reports
              </CardTitle>
              <CardDescription className="text-muted-foreground">Performance review</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                Monthly Reports
              </CardTitle>
              <CardDescription className="text-muted-foreground">Financial reconciliation</CardDescription>
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

export default Reports;
