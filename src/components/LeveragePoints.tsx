import { Zap } from "lucide-react";

const LeveragePoints = () => {
  const points = [
    "Information Flows: Real-time dashboards for DA inventory, payment matching, fraud alerts",
    "Rules & Incentives: Bonus structures that reward delivery rate, honesty, accuracy",
    "Mindset & Culture: \"We don't bend rules here\" — training, penalties, KYC",
    "Quality Filters: Strong DA & telesales recruitment with KYC + guarantors",
    "Product Education: Clear instructions, follow-ups, before/after documentation",
    "Leak Prevention: Systems to catch shrinkage, fraud, lead decay early"
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Zap className="w-6 h-6 text-amber-600" />
        <h2 className="text-xl font-bold text-amber-900">
          High Leverage Points (Meadows-Style Intervention Points)
        </h2>
      </div>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-sm text-amber-900 flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeveragePoints;
