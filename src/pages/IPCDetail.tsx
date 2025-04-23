
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Scale, Bookmark, Share2, AlertCircle } from 'lucide-react';
import { getIPCSectionByNumber } from '@/data/ipcData';
import { saveRecentSearch } from '@/utils/storageUtils';
import { CommonSections } from '@/components/ipc';

const IPCDetail = () => {
  const { section } = useParams<{ section: string }>();
  const ipcSection = section ? getIPCSectionByNumber(section) : null;
  
  useEffect(() => {
    if (section) {
      saveRecentSearch(section);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [section]);
  
  // Get related sections (for demo, just getting first 3 IPC sections that aren't this one)
  const relatedSections = ipcSection
    ? getIPCSectionByNumber('302') && getIPCSectionByNumber('376') && getIPCSectionByNumber('420')
      ? [getIPCSectionByNumber('302')!, getIPCSectionByNumber('376')!, getIPCSectionByNumber('420')!]
        .filter(s => s.section !== ipcSection.section)
      : []
    : [];

  if (!ipcSection) {
    return (
      <MainLayout>
        <div className="max-w-5xl mx-auto">
          <Link to="/ipc" className="inline-flex items-center text-legal-blue hover:text-blue-700 mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to IPC Search
          </Link>
          
          <Card>
            <CardContent className="p-8 text-center">
              <AlertCircle className="mx-auto h-10 w-10 text-amber-500 mb-4" />
              <h1 className="text-2xl font-bold mb-2">Section Not Found</h1>
              <p className="text-theme-secondary mb-4">
                The IPC section you requested could not be found. Please check the section number and try again.
              </p>
              <Link to="/ipc">
                <Button>Return to Search</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <Link to="/ipc" className="inline-flex items-center text-legal-blue hover:text-blue-700 mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to IPC Search
        </Link>
        
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-legal-lightBlue mr-4">
                  <Scale className="h-6 w-6 text-legal-blue" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Section {ipcSection.section}</h1>
                  <h2 className="text-xl text-theme-secondary">{ipcSection.title}</h2>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-1" /> Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" /> Share
                </Button>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-theme-primary">{ipcSection.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Punishment</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-theme-primary">{ipcSection.punishment}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Fine</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-theme-primary">{ipcSection.fine || "Not specified"}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Bailable</h3>
                <div className={`p-4 rounded-md ${ipcSection.bailable ? 'bg-green-50' : 'bg-red-50'}`}>
                  <p className={`font-medium ${ipcSection.bailable ? 'text-legal-green' : 'text-legal-red'}`}>
                    {ipcSection.bailable ? "Yes" : "No"}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Cognizable</h3>
                <div className={`p-4 rounded-md ${!ipcSection.cognizable ? 'bg-green-50' : 'bg-red-50'}`}>
                  <p className={`font-medium ${!ipcSection.cognizable ? 'text-legal-green' : 'text-legal-red'}`}>
                    {ipcSection.cognizable ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Triable By</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-theme-primary">{ipcSection.court}</p>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <div className="bg-legal-lightBlue text-legal-blue inline-block px-3 py-1 rounded-full text-sm font-medium">
                {ipcSection.category}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Legal Interpretation */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4">Legal Interpretation</h2>
            <p className="text-theme-primary mb-4">
              This section addresses {ipcSection.title.toLowerCase()} under Indian criminal law. The Supreme Court has interpreted this section in various landmark cases including:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-theme-primary ml-4">
              <li>State v. Defendant (2018) - Established key elements required for conviction</li>
              <li>Appellant v. State (2020) - Clarified burden of proof requirements</li>
              <li>Petitioner v. Union of India (2019) - Constitutional validity upheld with safeguards</li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Related Sections */}
        {relatedSections.length > 0 && (
          <CommonSections sections={relatedSections} title="Related IPC Sections" />
        )}
        
        {/* Case Law References */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4">Case Law References</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold">State of Maharashtra v. John Doe</h3>
                <p className="text-sm text-theme-muted">Supreme Court, 2022</p>
                <p className="text-theme-primary mt-2">The Court held that for conviction under this section, prosecution must establish all essential elements beyond reasonable doubt.</p>
              </div>
              
              <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold">Jane Doe v. State of Karnataka</h3>
                <p className="text-sm text-theme-muted">High Court of Karnataka, 2021</p>
                <p className="text-theme-primary mt-2">The Court established important precedent regarding the admissibility of evidence in cases under this section.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default IPCDetail;
