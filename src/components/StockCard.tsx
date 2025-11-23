import { Stock } from "@/data/systemsData";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface StockCardProps {
  stock: Stock;
  onClick: () => void;
}

const categoryColors = {
  money: 'border-stock-money bg-stock-money/5 hover:bg-stock-money/10',
  inventory: 'border-stock-inventory bg-stock-inventory/5 hover:bg-stock-inventory/10',
  people: 'border-stock-people bg-stock-people/5 hover:bg-stock-people/10',
  reputation: 'border-stock-reputation bg-stock-reputation/5 hover:bg-stock-reputation/10',
  operations: 'border-stock-operations bg-stock-operations/5 hover:bg-stock-operations/10',
};

const StockCard = ({ stock, onClick }: StockCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Map specific stocks to academy pages
    if (stock.id === 'ad-spend') {
      navigate('/mediabuying');
    } else if (stock.id === 'cash') {
      navigate('/cash/dashboard');
    } else {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        categoryColors[stock.category],
        stock.isEnergyInput && "ring-2 ring-stock-energy animate-pulse"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl flex-shrink-0">{stock.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-sm mb-1 text-foreground">
            {stock.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {stock.description}
          </p>
        </div>
      </div>
      
      {stock.isEnergyInput && (
        <div className="absolute -top-2 -right-2 bg-stock-energy text-white text-xs font-bold px-2 py-1 rounded-full">
          ENERGY INPUT
        </div>
      )}
    </div>
  );
};

export default StockCard;
