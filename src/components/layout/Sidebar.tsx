
import { Home, BookText, MapPin, AlertTriangle, Car, Scale, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ collapsed, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  
  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/ipc', label: 'IPC Search', icon: BookText },
    { href: '/emergency', label: 'Emergency', icon: AlertTriangle },
    { href: '/emergency/map', label: 'Map', icon: MapPin },
    { href: '/traffic', label: 'Traffic Fines', icon: Car },
    { href: '/legal-aid', label: 'Legal Aid', icon: Scale },
  ];

  return (
    <div 
      className={cn(
        "flex flex-col items-center border-r border-border bg-background/80 backdrop-blur-sm h-screen fixed inset-y-0 left-0 z-30 transition-all duration-300",
        collapsed ? "w-[60px]" : "w-[200px]"
      )}
    >
      <div className="py-4 flex items-center justify-center w-full">
        <Link to="/" className="flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            LA
          </div>
        </Link>
        <Button 
          onClick={toggleSidebar}
          variant="ghost" 
          size="icon"
          className={cn(
            "absolute right-[-12px] top-6 h-6 w-6 rounded-full border border-border bg-background hover:bg-accent shadow-md transition-transform",
            collapsed ? "rotate-180" : ""
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8 w-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href || 
                         (item.href !== '/' && location.pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center justify-center rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors w-full px-3",
                isActive && "bg-accent text-accent-foreground",
                collapsed ? "h-12" : "h-10"
              )}
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && (
                <span className={cn("ml-3 text-sm transition-opacity duration-200")}>{item.label}</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
