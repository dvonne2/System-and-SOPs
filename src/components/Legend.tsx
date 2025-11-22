const Legend = () => {
  const items = [
    { label: "Energy Input", color: "border-stock-energy ring-2 ring-stock-energy", icon: "💰" },
    { label: "Money Stock", color: "border-stock-money bg-stock-money/5", icon: "💵" },
    { label: "Inventory Stock", color: "border-stock-inventory bg-stock-inventory/5", icon: "🏭" },
    { label: "People Stock", color: "border-stock-people bg-stock-people/5", icon: "👥" },
    { label: "Reputation Stock", color: "border-stock-reputation bg-stock-reputation/5", icon: "🌟" },
    { label: "Operations Stock", color: "border-stock-operations bg-stock-operations/5", icon: "📋" },
    { label: "Leak Point", color: "border-leak border-dashed bg-leak/5", icon: "⚠️" },
  ];

  const loops = [
    { label: "Reinforcing Loop (R)", color: "text-loop-reinforcing", description: "Drives growth" },
    { label: "Balancing Loop (B)", color: "text-loop-balancing", description: "Creates limits" },
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border mb-8">
      <h2 className="text-lg font-bold text-foreground mb-4">Legend</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-12 h-12 rounded border-2 ${item.color} flex items-center justify-center text-xl`}>
              {item.icon}
            </div>
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t">
        <h3 className="text-sm font-semibold text-foreground mb-3">Feedback Loops</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {loops.map((loop) => (
            <div key={loop.label} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full border-2 border-dashed ${loop.color.replace('text-', 'border-')} flex items-center justify-center`}>
                <span className={`text-xs font-bold ${loop.color}`}>{loop.label[0]}</span>
              </div>
              <div>
                <div className="text-xs font-medium text-foreground">{loop.label}</div>
                <div className="text-xs text-muted-foreground">{loop.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legend;
