import { WarehouseLayout } from "@/components/warehouse/WarehouseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Calculator, TrendingUp, Plus, Minus, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  cost: number;
  price: number;
  icon: string;
}

interface BundleItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 'SHMP', name: 'Shampoo', cost: 5000, price: 27000, icon: '🧴' },
  { id: 'POMD', name: 'Pomade', cost: 8000, price: 27000, icon: '💈' },
  { id: 'COND', name: 'Conditioner', cost: 5000, price: 25000, icon: '✨' },
];

const Bundles = () => {
  const [bundleItems, setBundleItems] = useState<BundleItem[]>([]);
  const [bundleName, setBundleName] = useState('');
  const [bundlePrice, setBundlePrice] = useState<number>(0);
  const [selectedBundle, setSelectedBundle] = useState('Self Love Plus');
  const [quantity, setQuantity] = useState(100);

  const addToBundle = (product: Product) => {
    const existing = bundleItems.find(item => item.id === product.id);
    if (existing) {
      setBundleItems(bundleItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setBundleItems([...bundleItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromBundle = (index: number) => {
    setBundleItems(bundleItems.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, delta: number) => {
    setBundleItems(bundleItems.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const calculateTotalCost = () => {
    return bundleItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);
  };

  const calculateIndividualTotal = () => {
    return bundleItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateSuggestedPrice = () => {
    const individualTotal = calculateIndividualTotal();
    return Math.round(individualTotal * 0.85); // 15% bundle discount
  };

  const currentBundlePrice = bundlePrice || calculateSuggestedPrice();
  const totalCost = calculateTotalCost();
  const profit = currentBundlePrice - totalCost;
  const margin = totalCost > 0 ? ((profit / totalCost) * 100).toFixed(1) : 0;
  const customerSavings = calculateIndividualTotal() - currentBundlePrice;
  const savingsPercentage = calculateIndividualTotal() > 0 
    ? ((customerSavings / calculateIndividualTotal()) * 100).toFixed(1) 
    : 0;

  // Calculator tab calculations
  const bundleData: { [key: string]: { cost: number, price: number, products: string } } = {
    'Self Love Plus': { cost: 18000, price: 65000, products: '1S+1P+1C' },
    'B2GOF': { cost: 39000, price: 135000, products: '3S+3P' },
    'Plus B2GOF': { cost: 54000, price: 185000, products: '3S+3P+3C' },
    'Self Love Return': { cost: 24000, price: 75000, products: '3P' },
    'Family Saves': { cost: 180000, price: 550000, products: '10S+10P+10C' },
  };

  const selectedData = bundleData[selectedBundle];
  const revenue = selectedData.price * quantity;
  const costs = selectedData.cost * quantity;
  const grossProfit = revenue - costs;
  const grossMargin = costs > 0 ? ((grossProfit / costs) * 100).toFixed(1) : 0;

  const sidebarContent = (
    <nav className="space-y-2">
      <a href="#builder" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Bundle Builder
      </a>
      <a href="#calculator" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Profit Calculator
      </a>
      <a href="#performance" className="block px-4 py-2 rounded-md hover:bg-[hsl(var(--warehouse-primary)/0.1)] text-foreground hover:text-[hsl(var(--warehouse-primary))] transition-colors">
        Performance
      </a>
    </nav>
  );

  return (
    <WarehouseLayout sidebarContent={sidebarContent} title="Bundle Economics">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Bundle Economics Calculator</h1>
          <p className="text-muted-foreground">Configure and analyze bundle profitability</p>
        </div>

        <Tabs defaultValue="builder" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="builder">
              <Package className="h-4 w-4 mr-2" />
              Bundle Builder
            </TabsTrigger>
            <TabsTrigger value="calculator">
              <Calculator className="h-4 w-4 mr-2" />
              Profit Calculator
            </TabsTrigger>
            <TabsTrigger value="performance">
              <TrendingUp className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="builder" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Available Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Products</CardTitle>
                  <CardDescription>Click to add to bundle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {products.map(product => (
                    <div key={product.id} className="p-4 border rounded-lg hover:border-[hsl(var(--warehouse-primary))] transition-colors cursor-pointer" onClick={() => addToBundle(product)}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{product.icon}</span>
                        <Button size="sm" variant="outline">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">Cost: ₦{product.cost.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Sells: ₦{product.price.toLocaleString()}</p>
                      <p className="text-sm font-medium text-[hsl(var(--warehouse-success))]">
                        {((product.price - product.cost) / product.cost * 100).toFixed(0)}% margin
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Bundle Workspace */}
              <Card>
                <CardHeader>
                  <CardTitle>Bundle Composition</CardTitle>
                  <CardDescription>
                    <Input 
                      placeholder="Bundle Name (e.g., Self Love Plus)"
                      value={bundleName}
                      onChange={(e) => setBundleName(e.target.value)}
                      className="mt-2"
                    />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {bundleItems.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Package className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Click products to add to bundle</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {bundleItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline" onClick={() => updateQuantity(idx, -1)}>
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}x</span>
                            <Button size="sm" variant="outline" onClick={() => updateQuantity(idx, 1)}>
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="flex-1">
                            <span className="text-lg mr-2">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="text-sm">₦{(item.cost * item.quantity).toLocaleString()}</span>
                          <Button size="sm" variant="ghost" onClick={() => removeFromBundle(idx)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      
                      <div className="pt-4 space-y-2 border-t">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Cost:</span>
                          <span className="font-medium">₦{totalCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <Label>Bundle Price:</Label>
                          <div className="flex items-center gap-2">
                            <span>₦</span>
                            <Input 
                              type="number"
                              value={bundlePrice || calculateSuggestedPrice()}
                              onChange={(e) => setBundlePrice(Number(e.target.value))}
                              className="w-32"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-[hsl(var(--warehouse-success))]">
                          <span>Profit:</span>
                          <span>₦{profit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Margin:</span>
                          <span className="font-medium">{margin}%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle>Bundle Analysis</CardTitle>
                  <CardDescription>vs. Individual Sales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bundleItems.length > 0 ? (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">If sold separately:</span>
                          <span className="font-medium">₦{calculateIndividualTotal().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Bundle price:</span>
                          <span className="font-medium">₦{currentBundlePrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm pt-2 border-t">
                          <span className="text-[hsl(var(--warehouse-success))]">Customer saves:</span>
                          <span className="font-bold text-[hsl(var(--warehouse-success))]">
                            ₦{customerSavings.toLocaleString()} ({savingsPercentage}%)
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t space-y-3">
                        <h4 className="font-medium">Market Positioning</h4>
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="text-sm">🎯 <strong>Value Seekers</strong></p>
                          <p className="text-xs text-muted-foreground">Complete solution buyers</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="text-sm">💰 <strong>Premium Pricing</strong></p>
                          <p className="text-xs text-muted-foreground">30% above market average</p>
                        </div>
                      </div>

                      <div className="pt-4 flex gap-2">
                        <Button variant="outline" className="flex-1">Save Draft</Button>
                        <Button className="flex-1 bg-[hsl(var(--warehouse-primary))] hover:bg-[hsl(var(--warehouse-primary)/0.9)]">
                          Publish Bundle
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-8">
                      Add products to see analysis
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Input Panel */}
              <Card>
                <CardHeader>
                  <CardTitle>Bundle Selection</CardTitle>
                  <CardDescription>Configure your analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Bundle Type</Label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={selectedBundle}
                      onChange={(e) => setSelectedBundle(e.target.value)}
                    >
                      <option>Self Love Plus</option>
                      <option>B2GOF</option>
                      <option>Plus B2GOF</option>
                      <option>Self Love Return</option>
                      <option>Family Saves</option>
                    </select>
                    <p className="text-xs text-muted-foreground">{selectedData.products}</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Units to Sell</Label>
                    <Input 
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Timeframe</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Daily</Button>
                      <Button variant="outline" size="sm">Weekly</Button>
                      <Button variant="default" size="sm" className="bg-[hsl(var(--warehouse-primary))]">Monthly</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Panel */}
              <Card>
                <CardHeader>
                  <CardTitle>Profitability Analysis</CardTitle>
                  <CardDescription>Real-time calculations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span>Revenue:</span>
                    <span className="font-bold">₦{revenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span>Total Costs:</span>
                    <span className="font-bold">₦{costs.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-[hsl(var(--warehouse-success)/0.1)] rounded-lg">
                    <span>Gross Profit:</span>
                    <span className="font-bold text-[hsl(var(--warehouse-success))]">₦{grossProfit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-[hsl(var(--warehouse-success)/0.1)] rounded-lg">
                    <span>Margin:</span>
                    <span className="font-bold text-[hsl(var(--warehouse-success))]">{grossMargin}%</span>
                  </div>

                  <div className="pt-4 border-t grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <p className="text-2xl font-bold">{grossMargin}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Break-even</p>
                      <p className="text-2xl font-bold">{Math.ceil(costs / selectedData.price)} units</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Total Revenue</CardDescription>
                  <CardTitle className="text-2xl">₦12.4M</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-[hsl(var(--warehouse-success))]">+23% vs last period</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Avg Margin</CardDescription>
                  <CardTitle className="text-2xl">42%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-[hsl(var(--warehouse-success))]">+2.3% improvement</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Conversion Rate</CardDescription>
                  <CardTitle className="text-2xl">18.5%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-destructive">-1.2% decrease</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Top Bundle</CardDescription>
                  <CardTitle className="text-lg">Self Love Plus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">43% of revenue</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Bundle Performance</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(bundleData).map(([name, data]) => (
                    <div key={name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-muted-foreground">{data.products}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₦{data.price.toLocaleString()}</p>
                        <p className="text-sm text-[hsl(var(--warehouse-success))]">
                          {((data.price - data.cost) / data.cost * 100).toFixed(0)}% margin
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </WarehouseLayout>
  );
};

export default Bundles;
