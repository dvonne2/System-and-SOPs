import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight, Menu, X, DollarSign, BookOpen, Briefcase, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CashLayoutProps {
  children: ReactNode;
  sidebarContent: ReactNode;
  title: string;
}

export type ViewMode = 'academy' | 'operations' | 'hybrid';

export const CashLayout = ({ children, sidebarContent, title }: CashLayoutProps) => {
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
          description: 'Learn cash management',
          color: 'hsl(217 91% 60%)'
        };
      case 'operations':
        return {
          icon: Briefcase,
          label: 'Operations Mode',
          description: 'Manage real money',
          color: 'hsl(142 71% 45%)'
        };
      case 'hybrid':
        return {
          icon: Layers,
          label: 'Hybrid Mode',
          description: 'Guided operations',
          color: 'hsl(262 83% 58%)'
        };
    }
  };

  const currentMode = getModeConfig(mode);
  const ModeIcon = currentMode.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Home className="h-5 w-5" />
              <span className="hidden sm:inline font-semibold">System Map</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-primary" />
            <span className="font-semibold">Cash & Working Capital</span>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 bg-muted rounded-lg p-1 border">
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
                    style={mode === m ? { backgroundColor: config.color, color: 'white' } : {}}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:inline text-xs">{config.label}</span>
                  </Button>
                );
              })}
            </div>
            
            {/* Current Mode Indicator (mobile) */}
            <div className="md:hidden flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/30">
              <ModeIcon className="h-4 w-4" style={{ color: currentMode.color }} />
              <span className="text-xs font-medium" style={{ color: currentMode.color }}>
                {currentMode.description}
              </span>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="border-t bg-muted px-4 py-2">
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

      <div className="flex w-full">
        {/* Sidebar Navigation */}
        <aside className={cn(
          "fixed lg:relative top-16 lg:top-0 left-0 z-40 h-[calc(100vh-4rem)] lg:h-auto w-64 border-r bg-card transition-transform duration-300 overflow-y-auto flex-shrink-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-primary text-primary">
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
        <main className="flex-1 p-4 md:p-6 lg:p-8 min-w-0">
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
