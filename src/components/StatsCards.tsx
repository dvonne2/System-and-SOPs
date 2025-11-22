import { RefreshCw, Scale, AlertTriangle, Package } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      icon: RefreshCw,
      label: "Reinforcing Loops",
      value: "3",
      color: "text-loop-reinforcing",
      bgColor: "bg-loop-reinforcing/10"
    },
    {
      icon: Scale,
      label: "Balancing Loops",
      value: "3",
      color: "text-loop-balancing",
      bgColor: "bg-loop-balancing/10"
    },
    {
      icon: AlertTriangle,
      label: "Leak Points",
      value: "6",
      color: "text-leak",
      bgColor: "bg-leak/10"
    },
    {
      icon: Package,
      label: "Core Stocks",
      value: "14",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className={`p-4 rounded-lg border ${stat.bgColor}`}>
          <div className="flex items-center gap-3">
            <div className={`${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
