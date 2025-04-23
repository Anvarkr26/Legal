
import { useEffect, useState } from 'react';
import { getRecentSearches, clearRecentSearches } from '@/utils/storageUtils';
import { IPCSectionCard } from '@/components/ipc';
import { getIPCSectionByNumber, IPCSection } from '@/data/ipcData';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const RecentSearches = () => {
  const [recentSections, setRecentSections] = useState<IPCSection[]>([]);

  useEffect(() => {
    const recentSearches = getRecentSearches();
    const sections = recentSearches
      .map(sectionNum => getIPCSectionByNumber(sectionNum))
      .filter((section): section is IPCSection => section !== undefined);
    
    setRecentSections(sections);
  }, []);

  const handleClearRecent = () => {
    clearRecentSearches();
    setRecentSections([]);
  };

  if (recentSections.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recently Searched</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleClearRecent}
          className="text-theme-muted hover:text-theme-primary"
        >
          <X className="h-4 w-4 mr-1" /> Clear
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentSections.map(section => (
          <IPCSectionCard key={section.id} section={section} compact />
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
