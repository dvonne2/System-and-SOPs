import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertItem {
  id: string;
  type: "critical" | "warning";
  title: string;
  description: string;
}

const sampleAlerts: AlertItem[] = [
  {
    id: "1",
    type: "critical",
    title: "Stock Discrepancy Detected",
    description: "DA_045 reported 30 Shampoo units but system shows 35 allocated",
  },
  {
    id: "2",
    type: "warning",
    title: "Unverified Friday Photos",
    description: "12 delivery agents have not submitted Friday stock photos",
  },
];

export const AlertsBanner = () => {
  if (sampleAlerts.length === 0) return null;

  return (
    <div className="space-y-3">
      {sampleAlerts.map((alert) => (
        <Alert
          key={alert.id}
          className={`${
            alert.type === "critical"
              ? "bg-[hsl(var(--warehouse-alert)/0.1)] border-[hsl(var(--warehouse-alert))]"
              : "bg-[hsl(38_92%_50%/0.1)] border-[hsl(38_92%_50%)]"
          }`}
        >
          <AlertTriangle 
            className="h-4 w-4" 
            style={{ 
              color: alert.type === "critical" 
                ? "hsl(var(--warehouse-alert))" 
                : "hsl(38 92% 50%)" 
            }} 
          />
          <AlertTitle className="text-foreground font-semibold">{alert.title}</AlertTitle>
          <AlertDescription className="text-foreground/80 flex items-center justify-between">
            <span>{alert.description}</span>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-foreground hover:text-foreground/80"
            >
              Investigate
            </Button>
          </AlertDescription>
        </Alert>
      ))}
    </div>
  );
};
