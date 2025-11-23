import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Lock } from "lucide-react";
import { useEffect, useState } from "react";

export const CutoffTimer = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [status, setStatus] = useState<"open" | "warning" | "locked">("open");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(8, 0, 0, 0);

      // If it's past 8 AM, show locked status
      if (now.getHours() >= 8) {
        setStatus("locked");
        setTimeLeft("System Locked");
        return;
      }

      const diff = cutoff.getTime() - now.getTime();
      const minutes = Math.floor(diff / 1000 / 60);

      if (minutes <= 15) {
        setStatus("warning");
      } else {
        setStatus("open");
      }

      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      setTimeLeft(`${hours}h ${mins}m until cutoff`);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case "open":
        return "hsl(var(--warehouse-success))";
      case "warning":
        return "hsl(38 92% 50%)"; // Warning yellow
      case "locked":
        return "hsl(var(--warehouse-alert))";
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case "open":
        return "bg-[hsl(var(--warehouse-success)/0.1)] border-[hsl(var(--warehouse-success)/0.3)]";
      case "warning":
        return "bg-[hsl(38_92%_50%/0.1)] border-[hsl(38_92%_50%/0.3)]";
      case "locked":
        return "bg-[hsl(var(--warehouse-alert)/0.1)] border-[hsl(var(--warehouse-alert)/0.3)]";
    }
  };

  return (
    <Card className={`bg-[#1E293B] border-2 ${getStatusBg()}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          {status === "locked" ? (
            <Lock className="h-5 w-5" style={{ color: getStatusColor() }} />
          ) : (
            <Clock className="h-5 w-5" style={{ color: getStatusColor() }} />
          )}
          8:00 AM Cutoff Timer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div 
            className="text-4xl font-bold mb-2" 
            style={{ color: getStatusColor() }}
          >
            {timeLeft}
          </div>
          <p className="text-sm text-gray-400">
            {status === "locked" 
              ? "No stock changes allowed until tomorrow" 
              : status === "warning"
              ? "⚠️ Cutoff approaching - finalize changes now"
              : "Stock changes allowed"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
