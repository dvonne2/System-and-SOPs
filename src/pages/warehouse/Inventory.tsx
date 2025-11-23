import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { SidebarNav } from "@/components/SidebarNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Package, Search, Plus, AlertCircle, TrendingDown } from "lucide-react";

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

const warehouseStock = [
  {
    sku: "SHMP",
    name: "Shampoo",
    quantity: 5000,
    reserved: 1500,
    available: 3500,
    reorderPoint: 1000,
    cost: 5000,
    sellingPrice: 27000,
  },
  {
    sku: "POMD",
    name: "Pomade",
    quantity: 3200,
    reserved: 800,
    available: 2400,
    reorderPoint: 800,
    cost: 4500,
    sellingPrice: 18000,
  },
  {
    sku: "COND",
    name: "Conditioner",
    quantity: 2800,
    reserved: 700,
    available: 2100,
    reorderPoint: 600,
    cost: 5500,
    sellingPrice: 19000,
  },
];

const deliveryAgents = [
  {
    id: "DA_001",
    name: "John Okoro",
    state: "Lagos",
    stock: { SHMP: 50, POMD: 30, COND: 40 },
    riskScore: 15,
    lastReport: "2 hours ago",
    photoStatus: "verified",
  },
  {
    id: "DA_002",
    name: "Amina Mohammed",
    state: "Abuja",
    stock: { SHMP: 35, POMD: 25, COND: 30 },
    riskScore: 8,
    lastReport: "1 hour ago",
    photoStatus: "verified",
  },
  {
    id: "DA_045",
    name: "Chidi Eze",
    state: "Port Harcourt",
    stock: { SHMP: 30, POMD: 20, COND: 25 },
    riskScore: 45,
    lastReport: "5 hours ago",
    photoStatus: "pending",
  },
];

export default function Inventory() {
  const getRiskColor = (score: number) => {
    if (score < 20) return "hsl(var(--warehouse-success))";
    if (score < 50) return "hsl(38 92% 50%)";
    return "hsl(var(--warehouse-alert))";
  };

  return (
    <WarehouseLayout
      title="Warehouse System"
      sidebarContent={<SidebarNav items={navItems} />}
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Stock Management Hub
            </h1>
            <p className="text-muted-foreground">
              Real-time inventory tracking and distribution management
            </p>
          </div>
          <Button className="bg-[hsl(var(--warehouse-primary))] hover:bg-[hsl(var(--warehouse-primary)/0.9)]">
            <Plus className="h-4 w-4 mr-2" />
            Stock Adjustment
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="warehouse" className="space-y-6">
          <TabsList className="bg-white border border-[hsl(var(--warehouse-primary)/0.2)]">
            <TabsTrigger value="warehouse" className="data-[state=active]:bg-[hsl(var(--warehouse-primary))] data-[state=active]:text-white">
              Warehouse Stock
            </TabsTrigger>
            <TabsTrigger value="da-positions" className="data-[state=active]:bg-[hsl(var(--warehouse-primary))] data-[state=active]:text-white">
              DA Stock Positions
            </TabsTrigger>
            <TabsTrigger value="movement" className="data-[state=active]:bg-[hsl(var(--warehouse-primary))] data-[state=active]:text-white">
              Stock Movement Log
            </TabsTrigger>
          </TabsList>

          {/* Warehouse Stock Tab */}
          <TabsContent value="warehouse" className="space-y-4">
            <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)] shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">Current Inventory</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search SKU..."
                      className="pl-9 bg-[#F8F8F3] border-[hsl(var(--warehouse-primary)/0.3)] text-foreground w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-[hsl(var(--warehouse-primary)/0.2)]">
                      <TableHead className="text-muted-foreground">SKU</TableHead>
                      <TableHead className="text-muted-foreground">Product</TableHead>
                      <TableHead className="text-muted-foreground">Current Qty</TableHead>
                      <TableHead className="text-muted-foreground">Reserved</TableHead>
                      <TableHead className="text-muted-foreground">Available</TableHead>
                      <TableHead className="text-muted-foreground">Reorder Point</TableHead>
                      <TableHead className="text-muted-foreground">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {warehouseStock.map((item) => {
                      const needsReorder = item.available <= item.reorderPoint;
                      return (
                        <TableRow
                          key={item.sku}
                          className="border-[hsl(var(--warehouse-primary)/0.2)]"
                        >
                          <TableCell className="font-medium text-foreground">
                            {item.sku}
                          </TableCell>
                          <TableCell className="text-foreground">{item.name}</TableCell>
                          <TableCell className="text-foreground font-semibold">
                            {item.quantity.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {item.reserved.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-[hsl(var(--warehouse-success))] font-semibold">
                            {item.available.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {item.reorderPoint.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            {needsReorder ? (
                              <Badge className="bg-[hsl(var(--warehouse-alert)/0.2)] text-[hsl(var(--warehouse-alert))] border-[hsl(var(--warehouse-alert))]">
                                <TrendingDown className="h-3 w-3 mr-1" />
                                Low Stock
                              </Badge>
                            ) : (
                              <Badge className="bg-[hsl(var(--warehouse-success)/0.2)] text-[hsl(var(--warehouse-success))] border-[hsl(var(--warehouse-success))]">
                                Healthy
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* DA Positions Tab */}
          <TabsContent value="da-positions" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliveryAgents.map((agent) => (
                <Card
                  key={agent.id}
                  className="bg-white border-[hsl(var(--warehouse-primary)/0.2)] shadow-sm"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-foreground text-lg">
                          {agent.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {agent.id} • {agent.state}
                        </p>
                      </div>
                      <Badge
                        style={{
                          backgroundColor: `${getRiskColor(agent.riskScore)}20`,
                          color: getRiskColor(agent.riskScore),
                          borderColor: getRiskColor(agent.riskScore),
                        }}
                      >
                        Risk: {agent.riskScore}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(agent.stock).map(([sku, qty]) => (
                          <div
                            key={sku}
                            className="p-2 rounded bg-[#F8F8F3] text-center"
                          >
                            <p className="text-xs text-muted-foreground">{sku}</p>
                            <p className="text-lg font-bold text-foreground">{qty}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-[hsl(var(--warehouse-primary)/0.2)]">
                        <span className="text-muted-foreground">Last report:</span>
                        <span className="text-foreground">{agent.lastReport}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Friday Photo:
                        </span>
                        <Badge
                          className={
                            agent.photoStatus === "verified"
                              ? "bg-[hsl(var(--warehouse-success)/0.2)] text-[hsl(var(--warehouse-success))] border-[hsl(var(--warehouse-success))]"
                              : "bg-[hsl(38_92%_50%/0.2)] text-[hsl(38_92%_50%)] border-[hsl(38_92%_50%)]"
                          }
                        >
                          {agent.photoStatus}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Movement Log Tab */}
          <TabsContent value="movement" className="space-y-4">
            <Card className="bg-white border-[hsl(var(--warehouse-primary)/0.2)] shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Stock Movements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      time: "10:45 AM",
                      type: "Allocation",
                      da: "DA_001 - John Okoro",
                      sku: "SHMP",
                      qty: 50,
                    },
                    {
                      time: "09:30 AM",
                      type: "Delivery",
                      da: "DA_002 - Amina Mohammed",
                      sku: "POMD",
                      qty: -3,
                    },
                    {
                      time: "08:15 AM",
                      type: "Restock",
                      da: "Warehouse",
                      sku: "COND",
                      qty: 500,
                    },
                  ].map((log, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-lg bg-[#F8F8F3]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-xs text-muted-foreground">{log.time}</div>
                        <Badge className="bg-[hsl(var(--warehouse-primary)/0.2)] text-[hsl(var(--warehouse-primary))] border-[hsl(var(--warehouse-primary))]">
                          {log.type}
                        </Badge>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {log.sku}
                          </p>
                          <p className="text-xs text-muted-foreground">{log.da}</p>
                        </div>
                      </div>
                      <div
                        className={`text-lg font-bold ${
                          log.qty > 0
                            ? "text-[hsl(var(--warehouse-success))]"
                            : "text-[hsl(var(--warehouse-alert))]"
                        }`}
                      >
                        {log.qty > 0 ? "+" : ""}
                        {log.qty}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </WarehouseLayout>
  );
}
