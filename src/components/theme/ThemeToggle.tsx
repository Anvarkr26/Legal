
// This component is kept for backward compatibility but no longer functions as a toggle
import { Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <div className="flex items-center space-x-2 bg-secondary rounded-full px-3 py-1.5 border border-border transition-all duration-300 hover:shadow-md animate-fade-in">
      <Sun className="h-4 w-4 text-amber-500 transition-all duration-300" />
      <span className="text-xs text-theme-secondary">Light</span>
    </div>
  );
}
