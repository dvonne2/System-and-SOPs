import { Stock } from "@/data/systemsData";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DetailPanelProps {
  stock: Stock | null;
  onClose: () => void;
}

const categoryLabels = {
  money: 'Money Stock',
  inventory: 'Inventory Stock',
  people: 'People Stock',
  reputation: 'Reputation Stock',
  operations: 'Operations Stock',
};

const categoryColors = {
  money: 'bg-stock-money',
  inventory: 'bg-stock-inventory',
  people: 'bg-stock-people',
  reputation: 'bg-stock-reputation',
  operations: 'bg-stock-operations',
};

const DetailPanel = ({ stock, onClose }: DetailPanelProps) => {
  if (!stock) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-card shadow-2xl z-50 overflow-y-auto animate-slide-in-right">
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{stock.icon}</div>
            <div>
              <h2 className="text-xl font-bold text-foreground">{stock.title}</h2>
              <div className={cn(
                "inline-block px-2 py-1 rounded text-xs font-semibold text-white mt-1",
                categoryColors[stock.category]
              )}>
                {categoryLabels[stock.category]}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {stock.kpi && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">KEY METRIC</h3>
              <p className="text-base font-medium text-foreground">{stock.kpi}</p>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">DESCRIPTION</h3>
            <p className="text-sm text-foreground leading-relaxed">{stock.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">SYSTEM IMPACT</h3>
            <p className="text-sm text-foreground leading-relaxed">{stock.impact}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">LEVERAGE POINT</h3>
            <p className="text-sm text-foreground leading-relaxed">{stock.leverage}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">KEY CONNECTIONS</h3>
            <p className="text-sm text-foreground leading-relaxed">{stock.connections}</p>
          </div>

          {stock.isEnergyInput && (
            <div className="bg-stock-energy/10 border-2 border-stock-energy rounded-lg p-4">
              <h3 className="text-sm font-bold text-stock-energy mb-2">⚡ ENERGY INPUT</h3>
              <p className="text-xs text-foreground leading-relaxed">
                This is the system's forcing function. Following Donella Meadows' principle, 
                the system begins where external energy first enters. Without this initial input, 
                no other flows activate.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function for cn utility
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default DetailPanel;
