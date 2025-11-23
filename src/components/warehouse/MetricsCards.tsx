import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, TruckIcon, Target, ShieldAlert } from "lucide-react";

const metricsData = [
  {
    title: "Orders Assigned",
    value: "142",
    subtitle: "Today",
    icon: ClipboardCheck,
    trend: "+12%",
    trendUp: true,
  },
  {
    title: "Deliveries Completed",
    value: "98",
    subtitle: "Success rate: 96%",
    icon: TruckIcon,
    trend: "+8%",
    trendUp: true,
  },
  {
    title: "Stock Accuracy",
    value: "99.2%",
    subtitle: "Target: 99%+",
    icon: Target,
    trend: "+0.5%",
    trendUp: true,
  },
  {
    title: "Fraud Alerts",
    value: "3",
    subtitle: "Requires attention",
    icon: ShieldAlert,
    trend: "-2",
    trendUp: false,
  },
];

export const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metricsData.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.title} className="bg-[#1E293B] border-[hsl(var(--warehouse-primary)/0.2)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {metric.title}
              </CardTitle>
              <Icon 
                className="h-4 w-4" 
                style={{ 
                  color: metric.title === "Fraud Alerts" 
                    ? "hsl(var(--warehouse-alert))" 
                    : "hsl(var(--warehouse-success))" 
                }} 
              />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{metric.value}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500">{metric.subtitle}</p>
                <span 
                  className={`text-xs font-medium ${
                    metric.trendUp ? "text-[hsl(var(--warehouse-success))]" : "text-[hsl(var(--warehouse-alert))]"
                  }`}
                >
                  {metric.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
