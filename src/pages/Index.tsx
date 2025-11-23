import { useState } from "react";
import SystemPurpose from "@/components/SystemPurpose";
import ControlBar from "@/components/ControlBar";
import StockCard from "@/components/StockCard";
import DetailPanel from "@/components/DetailPanel";
import LeakCard from "@/components/LeakCard";
import StatsCards from "@/components/StatsCards";
import LeveragePoints from "@/components/LeveragePoints";
import Legend from "@/components/Legend";
import LoopExplanations from "@/components/LoopExplanations";
import SystemStartingPoint from "@/components/SystemStartingPoint";
import { stocks, leakPoints, Stock } from "@/data/systemsData";

const Index = () => {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [showRLoops, setShowRLoops] = useState(false);
  const [showBLoops, setShowBLoops] = useState(false);
  const [showLeaks, setShowLeaks] = useState(false);
  const [animateFlows, setAnimateFlows] = useState(false);

  const stocksByCategory = {
    money: stocks.filter(s => s.category === 'money'),
    inventory: stocks.filter(s => s.category === 'inventory'),
    people: stocks.filter(s => s.category === 'people'),
    reputation: stocks.filter(s => s.category === 'reputation'),
    operations: stocks.filter(s => s.category === 'operations'),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Vitalvida System</h1>
            <div className="text-sm text-muted-foreground">Donella Meadows-Style Systems Map</div>
          </div>
          <p className="text-sm text-muted-foreground">
            Interactive visualization of business operations as an interconnected system
          </p>
        </div>

        {/* Purpose Statement */}
        <SystemPurpose />

        {/* Controls */}
        <ControlBar
          showRLoops={showRLoops}
          setShowRLoops={setShowRLoops}
          showBLoops={showBLoops}
          setShowBLoops={setShowBLoops}
          showLeaks={showLeaks}
          setShowLeaks={setShowLeaks}
          animateFlows={animateFlows}
          setAnimateFlows={setAnimateFlows}
        />

        {/* Stats Dashboard */}
        <StatsCards />

        {/* Main System Diagram */}
        <div className="bg-card rounded-xl p-6 shadow-lg border mb-8">
          <div className="space-y-8">
            
            {/* Money Flow Layer (Top) */}
            <div>
              <h3 className="text-xs font-semibold text-stock-money mb-3 uppercase tracking-wider">
                Money Stocks • Value Flow
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stocksByCategory.money.map(stock => (
                  <StockCard
                    key={stock.id}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                  />
                ))}
              </div>
            </div>

            {/* Operations Layer */}
            <div>
              <h3 className="text-xs font-semibold text-stock-operations mb-3 uppercase tracking-wider">
                Operations Stocks • Pipeline
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stocksByCategory.operations.map(stock => (
                  <StockCard
                    key={stock.id}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                  />
                ))}
              </div>
            </div>

            {/* Inventory Layer */}
            <div>
              <h3 className="text-xs font-semibold text-stock-inventory mb-3 uppercase tracking-wider">
                Inventory Stocks • Supply Chain
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stocksByCategory.inventory.map(stock => (
                  <StockCard
                    key={stock.id}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                  />
                ))}
              </div>
            </div>

            {/* People Layer */}
            <div>
              <h3 className="text-xs font-semibold text-stock-people mb-3 uppercase tracking-wider">
                People Stocks • Capacity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stocksByCategory.people.map(stock => (
                  <StockCard
                    key={stock.id}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                  />
                ))}
              </div>
            </div>

            {/* Reputation Layer */}
            <div>
              <h3 className="text-xs font-semibold text-stock-reputation mb-3 uppercase tracking-wider">
                Reputation Stocks • Customer Assets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stocksByCategory.reputation.map(stock => (
                  <StockCard
                    key={stock.id}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                  />
                ))}
              </div>
            </div>

            {/* Leak Points */}
            {showLeaks && (
              <div className="animate-fade-in">
                <h3 className="text-xs font-semibold text-leak mb-3 uppercase tracking-wider">
                  ⚠️ System Leak Points • Value Losses
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {leakPoints.map(leak => (
                    <LeakCard key={leak.id} leak={leak} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Leverage Points */}
        <LeveragePoints />

        {/* System Starting Point */}
        <SystemStartingPoint />

        {/* Operations Management Tools */}
        <div className="bg-card rounded-xl p-6 shadow-lg border mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Operations Management</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Access specialized tools and systems for day-to-day operations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/warehouse/dashboard"
              className="group block p-6 rounded-lg border-2 border-[hsl(var(--warehouse-primary)/0.3)] bg-gradient-to-br from-[hsl(var(--warehouse-primary)/0.05)] to-transparent hover:border-[hsl(var(--warehouse-primary))] transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏢</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-[hsl(var(--warehouse-primary))] transition-colors">
                    Warehouse Inventory
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Centralized stock ready to distribute to delivery agents
                  </p>
                </div>
              </div>
            </a>
            
            <a
              href="/mediabuying/dashboard"
              className="group block p-6 rounded-lg border-2 border-stock-money/30 bg-gradient-to-br from-stock-money/5 to-transparent hover:border-stock-money transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📱</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-stock-money transition-colors">
                    Media Buying Academy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Training and SOPs for advertising operations
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Loop Explanations */}
        <div className="mt-8">
          <LoopExplanations />
        </div>

        {/* Legend */}
        <Legend />

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground mt-12 pb-8">
          <p>
            Built with systems thinking principles • Inspired by Donella Meadows
          </p>
        </div>

      </div>

      {/* Detail Panel (Slides in from right) */}
      <DetailPanel
        stock={selectedStock}
        onClose={() => setSelectedStock(null)}
      />

      {/* Overlay when panel is open */}
      {selectedStock && (
        <div
          className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
          onClick={() => setSelectedStock(null)}
        />
      )}
    </div>
  );
};

export default Index;
