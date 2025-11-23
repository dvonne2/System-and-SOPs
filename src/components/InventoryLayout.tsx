import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight, Menu, X, Package, BookOpen, Briefcase, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InventoryLayoutProps {
  children: ReactNode;
  sidebarContent: ReactNode;
  title: string;
}

export type ViewMode = 'academy' | 'operations' | 'hybrid';

export const InventoryLayout = ({ children, sidebarContent, title }: InventoryLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mode, setMode] = useState<ViewMode>('hybrid');
  const location = useLocation();

  const breadcrumbs = location.pathname.split('/').filter(Boolean);

  const getModeConfig = (m: ViewMode) => {
    switch(m) {
      case 'academy':
        return {
          icon: BookOpen,
          label: 'Academy Mode',
          description: 'Learning & Training',
          color: 'hsl(217 91% 60%)'
        };
      case 'operations':
        return {
          icon: Briefcase,
          label: 'Operations Mode',
          description: 'Live Work',
          color: 'hsl(var(--warehouse-success))'
        };
      case 'hybrid':
        return {
          icon: Layers,
          label: 'Hybrid Mode',
          description: 'Guided Work',
          color: 'hsl(var(--warehouse-primary))'
        };
    }
  };

  const currentMode = getModeConfig(mode);
  const ModeIcon = currentMode.icon;

  return (
    <div className="min-h-screen bg-[#FDFDF8]">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--warehouse-primary)/0.2)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-foreground">
              <Home className="h-5 w-5" />
              <span className="hidden sm:inline font-semibold">System Map</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-[hsl(var(--warehouse-primary))]" />
            <span className="text-foreground font-semibold">Inventory Academy</span>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 bg-[#F8F8F3] rounded-lg p-1 border border-[hsl(var(--warehouse-primary)/0.2)]">
              {(['academy', 'operations', 'hybrid'] as ViewMode[]).map((m) => {
                const config = getModeConfig(m);
                const Icon = config.icon;
                return (
                  <Button
                    key={m}
                    size="sm"
                    variant={mode === m ? "default" : "ghost"}
                    onClick={() => setMode(m)}
                    className={cn(
                      "gap-2 transition-all",
                      mode === m && "shadow-sm"
                    )}
                    style={mode === m ? { backgroundColor: config.color } : {}}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:inline text-xs">{config.label}</span>
                  </Button>
                );
              })}
            </div>
            
            {/* Current Mode Indicator (mobile) */}
            <div className="md:hidden flex items-center gap-2 px-3 py-1 rounded-md bg-[hsl(var(--warehouse-primary)/0.1)] border border-[hsl(var(--warehouse-primary)/0.3)]">
              <ModeIcon className="h-4 w-4" style={{ color: currentMode.color }} />
              <span className="text-xs font-medium" style={{ color: currentMode.color }}>
                {currentMode.description}
              </span>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="border-t border-[hsl(var(--warehouse-primary)/0.2)] bg-[#F8F8F3] px-4 py-2">
          <nav className="container flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
            <Link to="/" className="hover:text-foreground transition-colors whitespace-nowrap">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => {
              const path = `/${breadcrumbs.slice(0, index + 1).join('/')}`;
              const isLast = index === breadcrumbs.length - 1;
              const label = crumb.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ');
              
              return (
                <div key={path} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  {isLast ? (
                    <span className="text-foreground font-medium whitespace-nowrap">{label}</span>
                  ) : (
                    <Link 
                      to={path} 
                      className="hover:text-foreground transition-colors whitespace-nowrap"
                    >
                      {label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </header>

      <div className="container flex">
        {/* Sidebar Navigation */}
        <aside className={cn(
          "fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r border-[hsl(var(--warehouse-primary)/0.2)] bg-white transition-transform duration-300 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-[hsl(var(--warehouse-primary))] text-[hsl(var(--warehouse-primary))]">
              {title}
            </h2>
            {sidebarContent}
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content with Mode Context */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-[#FDFDF8]">
          <ModeProvider mode={mode}>
            {children}
          </ModeProvider>
        </main>
      </div>
    </div>
  );
};

// Mode Context for child components
import { createContext, useContext } from 'react';

const ModeContext = createContext<ViewMode>('hybrid');

export const useViewMode = () => useContext(ModeContext);

const ModeProvider = ({ mode, children }: { mode: ViewMode; children: ReactNode }) => {
  return <ModeContext.Provider value={mode}>{children}</ModeContext.Provider>;
};
