
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { IPCSearchBox, RecentSearches, CommonSections } from '@/components/ipc';
import { IPCSection, ipcSections, ipcCategories, getIPCSectionsByCategory } from '@/data/ipcData';
import { Card, CardContent } from '@/components/ui/card';
import IPCSectionCard from '@/components/ipc/IPCSectionCard';
import CategorySections from '@/components/ipc/CategorySections';

const IPCSearch = () => {
  const [searchResults, setSearchResults] = useState<IPCSection[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // Get common IPC sections for display (when no search performed)
  const commonSections = ipcSections.slice(0, 4); // Just get first few for example

  const handleSearchResults = (results: IPCSection[]) => {
    setSearchResults(results);
    setHasSearched(true);
  };
  
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">IPC Section Search</h1>
          <p className="text-theme-secondary">
            Search for any Indian Penal Code section by number or keywords
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <IPCSearchBox onSearchResults={handleSearchResults} />
          </CardContent>
        </Card>

        {hasSearched && (
          <div className="my-8">
            <h2 className="text-xl font-semibold mb-4">
              Search Results {searchResults.length > 0 && `(${searchResults.length})`}
            </h2>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {searchResults.map(section => (
                  <IPCSectionCard key={section.id} section={section} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-theme-muted">No results found. Please try a different search term.</p>
              </div>
            )}
          </div>
        )}

        {!hasSearched && (
          <>
            <RecentSearches />
            <CommonSections sections={commonSections} />

            <div className="mt-12">
              
              
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default IPCSearch;
