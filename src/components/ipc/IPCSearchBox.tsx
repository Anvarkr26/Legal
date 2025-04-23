
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen } from 'lucide-react';
import { IPCSection, searchIPCSections } from '@/data/ipcData';
import { toast } from '@/components/ui/use-toast';

interface IPCSearchBoxProps {
  onSearchResults: (results: IPCSection[]) => void;
}

const IPCSearchBox = ({ onSearchResults }: IPCSearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = searchIPCSections(searchQuery);
      onSearchResults(results);
      
      if (results.length === 0) {
        toast({
          title: "No results found",
          description: "Try a different search term or browse by category",
          variant: "destructive",
        });
      } else {
        toast({
          title: `Found ${results.length} results`,
          description: "Showing relevant IPC sections",
        });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full max-w-3xl mx-auto space-x-2">
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <BookOpen className="h-4 w-4" />
        </div>
        <Input
          className="pl-10 pr-10"
          placeholder="Search by section number, offense name, keywords."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={() => setSearchQuery('')}
        >
          {searchQuery && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>
      <Button onClick={handleSearch} className="bg-legal-blue hover:bg-blue-700">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </div>
  );
};

export default IPCSearchBox;
