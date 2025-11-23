import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AcademyLayoutProps {
  children: ReactNode;
  sidebarContent: ReactNode;
  title: string;
  category: 'money' | 'operations' | 'people';
}

const categoryColors = {
  money: 'text-stock-money border-stock-money',
  operations: 'text-stock-operations border-stock-operations',
  people: 'text-stock-people border-stock-people',
};

export const AcademyLayout = ({ children, sidebarContent, title, category }: AcademyLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const breadcrumbs = location.pathname.split('/').filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search academy..." 
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:inline">Progress:</span>
            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-stock-money w-[60%]"></div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="border-t bg-muted/30 px-4 py-2">
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
          "fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform duration-300 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <div className="p-6">
            <h2 className={cn("text-xl font-bold mb-6 pb-3 border-b-2", categoryColors[category])}>
              {title}
            </h2>
            {sidebarContent}
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
