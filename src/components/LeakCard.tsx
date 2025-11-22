import { LeakPoint } from "@/data/systemsData";

interface LeakCardProps {
  leak: LeakPoint;
}

const LeakCard = ({ leak }: LeakCardProps) => {
  return (
    <div className="p-3 rounded-lg border-2 border-dashed border-leak bg-leak/5 hover:bg-leak/10 transition-all duration-300">
      <div className="flex items-start gap-2">
        <div className="text-2xl flex-shrink-0">{leak.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xs mb-1 text-leak">
            {leak.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {leak.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeakCard;
