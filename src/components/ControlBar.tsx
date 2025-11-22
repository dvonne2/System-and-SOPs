import { Button } from "@/components/ui/button";
import { Play, Pause, RefreshCw, Scale, AlertTriangle, Target } from "lucide-react";

interface ControlBarProps {
  showRLoops: boolean;
  setShowRLoops: (value: boolean) => void;
  showBLoops: boolean;
  setShowBLoops: (value: boolean) => void;
  showLeaks: boolean;
  setShowLeaks: (value: boolean) => void;
  animateFlows: boolean;
  setAnimateFlows: (value: boolean) => void;
}

const ControlBar = ({
  showRLoops,
  setShowRLoops,
  showBLoops,
  setShowBLoops,
  showLeaks,
  setShowLeaks,
  animateFlows,
  setAnimateFlows,
}: ControlBarProps) => {
  const handleShowAll = () => {
    setShowRLoops(true);
    setShowBLoops(true);
    setShowLeaks(true);
    setAnimateFlows(true);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-6 p-4 bg-card rounded-lg shadow-sm">
      <Button
        variant={animateFlows ? "default" : "outline"}
        size="sm"
        onClick={() => setAnimateFlows(!animateFlows)}
        className="gap-2"
      >
        {animateFlows ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        Animate Flows
      </Button>
      
      <Button
        variant={showRLoops ? "default" : "outline"}
        size="sm"
        onClick={() => setShowRLoops(!showRLoops)}
        className="gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        R Loops
      </Button>
      
      <Button
        variant={showBLoops ? "default" : "outline"}
        size="sm"
        onClick={() => setShowBLoops(!showBLoops)}
        className="gap-2"
      >
        <Scale className="w-4 h-4" />
        B Loops
      </Button>
      
      <Button
        variant={showLeaks ? "default" : "outline"}
        size="sm"
        onClick={() => setShowLeaks(!showLeaks)}
        className="gap-2"
      >
        <AlertTriangle className="w-4 h-4" />
        Leaks
      </Button>
      
      <Button
        variant="secondary"
        size="sm"
        onClick={handleShowAll}
        className="gap-2"
      >
        <Target className="w-4 h-4" />
        Highlight All
      </Button>
    </div>
  );
};

export default ControlBar;
