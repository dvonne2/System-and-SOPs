import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sunrise, Clock, Moon } from "lucide-react";

const Operations = () => {
  const sidebarContent = (
    <nav className="space-y-2">
      <a href="/warehouse/operations?tab=morning" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Morning Routine
      </a>
      <a href="/warehouse/operations?tab=realtime" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Real-Time Operations
      </a>
      <a href="/warehouse/operations?tab=evening" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Evening Reconciliation
      </a>
    </nav>
  );

  return (
    <WarehouseLayout sidebarContent={sidebarContent} title="Operations Center">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Operations Center</h1>
          <p className="text-muted-foreground">Manage daily warehouse operations from morning routine to evening reconciliation</p>
        </div>

        <Tabs defaultValue="morning" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="morning" className="data-[state=active]:bg-[hsl(var(--warehouse-primary))] data-[state=active]:text-white">
              <Sunrise className="h-4 w-4 mr-2" />
              Morning Routine
            </TabsTrigger>
            <TabsTrigger value="realtime" className="data-[state=active]:bg-[hsl(var(--warehouse-primary))] data-[state=active]:text-white">
              <Clock className="h-4 w-4 mr-2" />
              Real-Time Ops
            </TabsTrigger>
            <TabsTrigger value="evening" className="data-[state=active]:bg-[hsl(var(--warehouse-primary))] data-[state=active]:text-white">
              <Moon className="h-4 w-4 mr-2" />
              Evening Recon
            </TabsTrigger>
          </TabsList>

          <TabsContent value="morning" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-foreground">Morning Routine (6:00-8:00 AM)</CardTitle>
                <CardDescription className="text-muted-foreground">Complete pre-operations checklist before 8:00 AM cutoff</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Morning routine workflow coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="realtime" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-foreground">Real-Time Operations (8:00 AM-6:00 PM)</CardTitle>
                <CardDescription className="text-muted-foreground">Process deliveries and manage order assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Real-time operations panel coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evening" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-foreground">Evening Reconciliation (6:00-8:00 PM)</CardTitle>
                <CardDescription className="text-muted-foreground">Daily reconciliation and report generation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Evening reconciliation workflow coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </WarehouseLayout>
  );
};

export default Operations;
