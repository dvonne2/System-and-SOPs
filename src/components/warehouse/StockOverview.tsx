import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Users, TruckIcon, AlertTriangle } from "lucide-react";

const stockData = [
  {
    title: "Warehouse Stock",
    value: "8,500",
    subtitle: "Total SKUs",
    icon: Package,
    color: "hsl(var(--warehouse-primary))",
  },
  {
    title: "With Delivery Agents",
    value: "1,500",
    subtitle: "Allocated SKUs",
    icon: Users,
    color: "hsl(var(--warehouse-success))",
  },
  {
    title: "In Transit",
    value: "200",
    subtitle: "Moving SKUs",
    icon: TruckIcon,
    color: "hsl(217 91% 60%)",
  },
  {
    title: "Available",
    value: "6,800",
    subtitle: "Ready to allocate",
    icon: Package,
    color: "hsl(var(--warehouse-success))",
  },
];

export const StockOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stockData.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="bg-[#1E293B] border-[hsl(var(--warehouse-primary)/0.2)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {item.title}
              </CardTitle>
              <Icon className="h-4 w-4" style={{ color: item.color }} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{item.value}</div>
              <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
