import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

interface SidebarNavProps {
  items: NavItem[];
}

const NavItem = ({ item, level = 0 }: { item: NavItem; level?: number }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(
    item.items?.some(child => location.pathname.startsWith(child.href || '')) || false
  );
  const isActive = item.href === location.pathname;
  const hasChildren = item.items && item.items.length > 0;

  return (
    <div>
      {item.href ? (
        <Link
          to={item.href}
          className={cn(
            "flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors",
            level > 0 && "ml-4",
            isActive 
              ? "bg-primary text-primary-foreground font-medium" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          <span>{item.title}</span>
          {hasChildren && (
            isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
          )}
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
            level > 0 && "ml-4",
            "text-foreground hover:bg-muted"
          )}
        >
          <span>{item.title}</span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      )}
      
      {hasChildren && isOpen && (
        <div className="mt-1 space-y-1">
          {item.items!.map((child, index) => (
            <NavItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const SidebarNav = ({ items }: SidebarNavProps) => {
  return (
    <nav className="space-y-1">
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </nav>
  );
};
