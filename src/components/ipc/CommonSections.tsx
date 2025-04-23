
import { IPCSection } from '@/data/ipcData';
import IPCSectionCard from './IPCSectionCard';

interface CommonSectionsProps {
  sections: IPCSection[];
  title?: string;
}

const CommonSections = ({ sections, title = "Common IPC Sections" }: CommonSectionsProps) => {
  if (sections.length === 0) {
    return null;
  }

  return (
    <div className="my-8 animate-fade-in">
      <h2 className="text-lg font-semibold mb-4 theme-transition">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <IPCSectionCard section={section} compact />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonSections;
