
import { useState } from 'react';
import { IPCSection } from '@/data/ipcData';
import IPCSectionCard from './IPCSectionCard';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CategorySectionsProps {
  category: string;
  sections: IPCSection[];
}

const CategorySections = ({
  category,
  sections
}: CategorySectionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen} 
      className="w-full border rounded-lg mb-4 overflow-hidden hover-lift theme-transition"
    >
      <CollapsibleContent className="animate-accordion-down">
        <div className="bg-gray-50 dark:bg-secondary p-4 theme-transition">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {sections.map((section, index) => (
              <div 
                key={section.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <IPCSectionCard section={section} compact />
              </div>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CategorySections;
