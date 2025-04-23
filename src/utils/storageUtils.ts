
// Function to save recently searched IPC sections to local storage
export const saveRecentSearch = (sectionNumber: string) => {
  const recentSearches = getRecentSearches();
  
  // Check if section already exists, if so remove it (to move it to the top)
  const filteredSearches = recentSearches.filter(section => section !== sectionNumber);
  
  // Add the new section to the beginning of the array
  const updatedSearches = [sectionNumber, ...filteredSearches].slice(0, 5);
  
  // Save to local storage
  localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
};

// Function to get recently searched IPC sections from local storage
export const getRecentSearches = (): string[] => {
  const searches = localStorage.getItem('recentSearches');
  return searches ? JSON.parse(searches) : [];
};

// Function to clear all recently searched IPC sections from local storage
export const clearRecentSearches = () => {
  localStorage.removeItem('recentSearches');
};
