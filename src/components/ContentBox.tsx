import { ReactNode } from "react";
import { AlertTriangle, Lightbulb, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentBoxProps {
  children: ReactNode;
  type: "warning" | "best-practice" | "critical" | "info";
  title?: string;
}

export const ContentBox = ({ children, type, title }: ContentBoxProps) => {
  const styles = {
    warning: {
      bg: "bg-red-50 dark:bg-red-950/20",
      border: "border-l-4 border-red-600",
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      titleColor: "text-red-900 dark:text-red-300"
    },
    "best-practice": {
      bg: "bg-green-50 dark:bg-green-950/20",
      border: "border-l-4 border-green-600",
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      titleColor: "text-green-900 dark:text-green-300"
    },
    critical: {
      bg: "bg-red-50 dark:bg-red-950/20",
      border: "border-l-4 border-red-600",
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      titleColor: "text-red-900 dark:text-red-300"
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-l-4 border-blue-600",
      icon: <Info className="h-5 w-5 text-blue-600" />,
      titleColor: "text-blue-900 dark:text-blue-300"
    }
  };

  const style = styles[type];

  return (
    <div className={cn("rounded-r-lg p-4", style.bg, style.border)}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && (
            <div className={cn("font-semibold mb-2", style.titleColor)}>
              {title}
            </div>
          )}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

interface StepBoxProps {
  number: number;
  title: string;
  children: ReactNode;
  timeEstimate?: string;
}

export const StepBox = ({ number, title, children, timeEstimate }: StepBoxProps) => {
  return (
    <div className="border rounded-lg p-6 mb-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          {timeEstimate && (
            <p className="text-sm text-muted-foreground">
              ⏱ Estimated time: {timeEstimate}
            </p>
          )}
        </div>
      </div>
      <div className="ml-14 space-y-3">{children}</div>
    </div>
  );
};

interface ScreenshotPlaceholderProps {
  description: string;
  alt: string;
}

export const ScreenshotPlaceholder = ({ description, alt }: ScreenshotPlaceholderProps) => {
  return (
    <div className="border-2 border-dashed rounded-lg p-8 bg-muted/30 my-4">
      <div className="text-center space-y-2">
        <div className="text-4xl">📸</div>
        <p className="font-medium">[Screenshot Placeholder]</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground italic">Alt text: {alt}</p>
      </div>
    </div>
  );
};

interface MetadataProps {
  lastUpdated: string;
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  prerequisites?: string[];
}

export const PageMetadata = ({ lastUpdated, estimatedTime, difficulty, prerequisites }: MetadataProps) => {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"
  };

  return (
    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-b pb-4 mb-6">
      <div>📅 Last Updated: {lastUpdated}</div>
      <div>⏱ {estimatedTime}</div>
      <div>
        <span className={cn("px-2 py-1 rounded text-xs font-medium", difficultyColors[difficulty])}>
          {difficulty}
        </span>
      </div>
      {prerequisites && prerequisites.length > 0 && (
        <div className="w-full mt-2">
          <span className="font-medium text-foreground">Prerequisites: </span>
          {prerequisites.join(", ")}
        </div>
      )}
    </div>
  );
};
