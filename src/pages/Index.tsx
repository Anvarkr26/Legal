
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Scale, Phone, Car, BookOpen } from 'lucide-react';

const Index = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-theme-primary">Welcome to LegalAssist</h1>
          <p className="text-xl text-theme-secondary mb-8">
            Your comprehensive legal assistance platform for India
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/emergency">
              <Button size="lg" variant="destructive" className="bg-legal-red hover:bg-red-700 gap-2">
                <Phone className="h-5 w-5" /> Emergency Services
              </Button>
            </Link>
            <Link to="/ipc">
              <Button size="lg" className="bg-legal-blue hover:bg-blue-700 gap-2">
                <Scale className="h-5 w-5" /> IPC Search
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          <FeatureCard 
            icon={<Scale className="h-8 w-8 text-legal-blue" />}
            title="IPC Section Search"
            description="Search and understand Indian Penal Code sections with detailed explanations"
            link="/ipc"
            color="bg-legal-lightBlue"
          />
          <FeatureCard 
            icon={<Phone className="h-8 w-8 text-legal-red" />}
            title="Emergency Services"
            description="Access emergency contacts and locate nearby emergency services"
            link="/emergency"
            color="bg-red-50 dark:bg-red-950"
          />
          <FeatureCard 
            icon={<Car className="h-8 w-8 text-legal-green" />}
            title="Traffic Fine Payments"
            description="Pay traffic fines online across major cities in India"
            link="/traffic"
            color="bg-green-50 dark:bg-green-950"
          />
          <FeatureCard 
            icon={<BookOpen className="h-8 w-8 text-legal-yellow" />}
            title="Legal Aid Services"
            description="Find free or affordable legal assistance services near you"
            link="/legal-aid"
            color="bg-yellow-50 dark:bg-yellow-950"
          />
        </div>
        
        <div className="mt-16 p-6 border rounded-lg bg-secondary">
          <h2 className="text-2xl font-bold mb-4 text-center text-theme-primary">How LegalAssist Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="rounded-full bg-legal-lightBlue dark:bg-blue-900 p-4 inline-flex mb-4">
                <Search className="h-6 w-6 text-legal-blue dark:text-blue-300" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-theme-primary">Search Information</h3>
              <p className="text-theme-secondary">Find legal resources, emergency services, and more</p>
            </div>
            <div className="text-center p-4">
              <div className="rounded-full bg-legal-lightBlue dark:bg-blue-900 p-4 inline-flex mb-4">
                <Info className="h-6 w-6 text-legal-blue dark:text-blue-300" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-theme-primary">Get Details</h3>
              <p className="text-theme-secondary">Access comprehensive information about laws and services</p>
            </div>
            <div className="text-center p-4">
              <div className="rounded-full bg-legal-lightBlue dark:bg-blue-900 p-4 inline-flex mb-4">
                <ExternalLink className="h-6 w-6 text-legal-blue dark:text-blue-300" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-theme-primary">Take Action</h3>
              <p className="text-theme-secondary">Connect to official portals to complete transactions</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, link, color }: FeatureCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="border rounded-lg p-6 h-full hover:shadow-md transition-shadow theme-transition">
        <div className={`rounded-full ${color} p-4 inline-flex mb-4`}>
          {icon}
        </div>
        <h3 className="font-semibold text-xl mb-2 text-theme-primary">{title}</h3>
        <p className="text-theme-secondary">{description}</p>
      </div>
    </Link>
  );
};

// Import these components for the Index page
import { Search, Info, ExternalLink } from 'lucide-react';

export default Index;
