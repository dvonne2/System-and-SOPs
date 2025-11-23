import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VisualSystem from "./pages/VisualSystem";
import MediaBuying from "./pages/MediaBuying";
import Dashboard from "./pages/mediabuying/Dashboard";
import AudienceTargeting from "./pages/mediabuying/strategy/AudienceTargeting";
import SOPCreatingPixel from "./pages/mediabuying/SOPCreatingPixel";
import ROAS from "./pages/mediabuying/kpis/ROAS";
import Day1 from "./pages/mediabuying/learning/Day1";
import WarehouseDashboard from "./pages/warehouse/Dashboard";
import Inventory from "./pages/warehouse/Inventory";
import Operations from "./pages/warehouse/Operations";
import Security from "./pages/warehouse/Security";
import Agents from "./pages/warehouse/Agents";
import Bundles from "./pages/warehouse/Bundles";
import Reports from "./pages/warehouse/Reports";
import InventoryDashboard from "./pages/inventory/Dashboard";
import MorningRoutine from "./pages/inventory/sops/MorningRoutine";
import InventoryOfficer from "./pages/inventory/role-overview/InventoryOfficer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visualsystem" element={<VisualSystem />} />
          <Route path="/mediabuying" element={<MediaBuying />} />
          <Route path="/mediabuying/dashboard" element={<Dashboard />} />
          <Route path="/mediabuying/strategy/audience-targeting" element={<AudienceTargeting />} />
          <Route path="/mediabuying/sops/creating-facebook-ads-pixel" element={<SOPCreatingPixel />} />
          <Route path="/mediabuying/kpis/roas" element={<ROAS />} />
          <Route path="/mediabuying/learning/day-1" element={<Day1 />} />
          
          {/* Warehouse Routes */}
          <Route path="/warehouse/dashboard" element={<WarehouseDashboard />} />
          <Route path="/warehouse/inventory/*" element={<Inventory />} />
          <Route path="/warehouse/operations/*" element={<Operations />} />
          <Route path="/warehouse/security" element={<Security />} />
          <Route path="/warehouse/agents" element={<Agents />} />
          <Route path="/warehouse/bundles" element={<Bundles />} />
          <Route path="/warehouse/reports" element={<Reports />} />
          
          {/* Inventory Academy Routes */}
          <Route path="/inventory/dashboard" element={<InventoryDashboard />} />
          <Route path="/inventory/sops/morning-routine" element={<MorningRoutine />} />
          <Route path="/inventory/role-overview/inventory-officer" element={<InventoryOfficer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
