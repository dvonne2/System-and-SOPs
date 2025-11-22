import { Sprout } from "lucide-react";

const SystemStartingPoint = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <Sprout className="w-6 h-6 text-green-600" />
        <h2 className="text-xl font-bold text-green-900">
          System Starting Point
        </h2>
      </div>
      <p className="text-sm text-green-900 leading-relaxed">
        Following Donella Meadows' principle: The system begins where external energy first enters. 
        For Vitalvida, this is <strong>Ad Spend → Attention → Leads</strong>. Without this initial 
        input, no other flows activate. This is your forcing function — the spark that ignites every 
        subsequent stock and loop.
      </p>
    </div>
  );
};

export default SystemStartingPoint;
