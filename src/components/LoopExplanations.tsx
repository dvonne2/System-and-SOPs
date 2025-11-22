const LoopExplanations = () => {
  const reinforcingLoops = [
    {
      id: "R1",
      name: "Cash Engine",
      description: "More ads → more leads → more sales → more cash → more ads"
    },
    {
      id: "R2",
      name: "Trust",
      description: "Better delivery → stronger trust → higher conversion → more happy customers → more referrals"
    },
    {
      id: "R3",
      name: "Systems",
      description: "Better data → smarter decisions → fewer errors → higher profit → better tools"
    }
  ];

  const balancingLoops = [
    {
      id: "B1",
      name: "Capacity",
      description: "More orders hit limits → delays increase → growth slows"
    },
    {
      id: "B2",
      name: "Inventory",
      description: "More orders drain stock → stockouts → sales pause"
    },
    {
      id: "B3",
      name: "Complexity",
      description: "More growth → more complexity → stretched management → errors increase"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border mb-8">
      <h2 className="text-lg font-bold text-foreground mb-6">Loop Explanations</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-loop-reinforcing mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full border-2 border-loop-reinforcing flex items-center justify-center text-xs font-bold">R</span>
            Reinforcing Loops (Drive Growth)
          </h3>
          <div className="space-y-3">
            {reinforcingLoops.map((loop) => (
              <div key={loop.id} className="bg-loop-reinforcing/5 p-3 rounded-lg border border-loop-reinforcing/20">
                <div className="font-semibold text-sm text-foreground mb-1">
                  {loop.id}: {loop.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {loop.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-loop-balancing mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full border-2 border-loop-balancing flex items-center justify-center text-xs font-bold">B</span>
            Balancing Loops (Create Limits)
          </h3>
          <div className="space-y-3">
            {balancingLoops.map((loop) => (
              <div key={loop.id} className="bg-loop-balancing/5 p-3 rounded-lg border border-loop-balancing/20">
                <div className="font-semibold text-sm text-foreground mb-1">
                  {loop.id}: {loop.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {loop.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoopExplanations;
