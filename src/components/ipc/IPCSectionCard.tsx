
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, ChevronDown, ChevronUp } from 'lucide-react';
import { IPCSection } from '@/data/ipcData';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

interface IPCSectionCardProps {
  section: IPCSection;
  compact?: boolean;
}

const IPCSectionCard = ({ section, compact = false }: IPCSectionCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow hover-lift theme-transition">
      <CardContent className={`${compact ? 'p-4' : 'p-6'}`}>
        <div className="flex items-start">
          <div className="rounded-full p-2 bg-legal-lightBlue mr-4 hover-scale">
            <Scale className="h-5 w-5 text-legal-blue" />
          </div>
          <div>
            <h3 className="font-bold text-lg">IPC {section.section}</h3>
            <p className="text-theme-secondary theme-transition">{section.title}</p>
          </div>
        </div>
        
        {!compact && (
          <div className="mt-4 animate-fade-in">
            <p className="text-sm text-theme-secondary line-clamp-2 theme-transition">{section.description}</p>
            
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-gray-50 p-2 rounded theme-transition hover-scale">
                <span className="font-semibold block">Punishment:</span>
                <span className="text-theme-secondary theme-transition">{section.punishment}</span>
              </div>
              <div className="bg-gray-50 p-2 rounded theme-transition hover-scale">
                <span className="font-semibold block">Fine:</span>
                <span className="text-theme-secondary font-medium text-legal-red theme-transition">{section.fine || 'N/A'}</span>
              </div>
              <div className="bg-gray-50 p-2 rounded theme-transition hover-scale">
                <span className="font-semibold block">Bailable:</span>
                <span className={`${section.bailable ? 'text-legal-green' : 'text-legal-red'} theme-transition`}>
                  {section.bailable ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="bg-gray-50 p-2 rounded theme-transition hover-scale">
                <span className="font-semibold block">Cognizable:</span>
                <span className={`${section.cognizable ? 'text-legal-red' : 'text-legal-green'} theme-transition`}>
                  {section.cognizable ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
            
            {section.keywords && section.keywords.length > 0 && (
              <div className="mt-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <p className="text-xs text-theme-muted mb-1 theme-transition">Keywords:</p>
                <div className="flex flex-wrap gap-1">
                  {section.keywords.map((keyword, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 text-theme-secondary px-2 py-1 rounded-full hover-scale theme-transition"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className={`${compact ? 'p-4 pt-0' : 'p-6 pt-0'} flex-col`}>
        <Collapsible 
          open={isExpanded} 
          onOpenChange={setIsExpanded}
          className="w-full"
        >
          <CollapsibleContent className="mt-4 border-t pt-4">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Legal Interpretation</h4>
                <p className="text-theme-primary text-sm">
                  This section addresses {section.title.toLowerCase()} under Indian criminal law. The Supreme Court has interpreted this section in various landmark cases.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Case Law References</h4>
                <div className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                  <h5 className="font-semibold">State of Maharashtra v. John Doe</h5>
                  <p className="text-xs text-theme-muted">Supreme Court, 2022</p>
                  <p className="text-theme-primary text-sm mt-1">The Court held that for conviction under this section, prosecution must establish all essential elements beyond reasonable doubt.</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Triable By</h4>
                <p className="text-theme-primary text-sm">{section.court}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <Link to={`/ipc/${section.section}`} className="text-legal-blue hover:underline text-sm">
              </Link>
            </div>
          </CollapsibleContent>
          
          <CollapsibleTrigger asChild>
            <Button 
              variant="default" 
              className={`w-full ${compact ? 'text-sm py-1' : ''} bg-legal-blue hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center`}
              onClick={toggleExpand}
            >
              {isExpanded ? (
                <>
                  Hide Details <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-200" />
                </>
              ) : (
                <>
                  View Details <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardFooter>
    </Card>
  );
};

export default IPCSectionCard;
