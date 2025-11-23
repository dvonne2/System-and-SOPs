import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Calculator, TrendingUp } from "lucide-react";

const Bundles = () => {
  const sidebarContent = (
    <nav className="space-y-2">
      <a href="/warehouse/bundles#calculator" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Calculator
      </a>
      <a href="/warehouse/bundles#performance" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Performance
      </a>
    </nav>
  );

  return (
    <WarehouseLayout sidebarContent={sidebarContent} title="Bundle Economics">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Bundle Economics Calculator</h1>
          <p className="text-muted-foreground">Configure and analyze bundle profitability</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Package className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
                Bundle Builder
              </CardTitle>
              <CardDescription className="text-muted-foreground">Create custom bundles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Calculator className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                Profit Calculator
              </CardTitle>
              <CardDescription className="text-muted-foreground">Margin analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon...</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--warehouse-success))]" />
                Performance
              </CardTitle>
              <CardDescription className="text-muted-foreground">Bundle analytics</CardDescription>
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

export default Bundles;
