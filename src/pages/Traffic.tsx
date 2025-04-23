
import MainLayout from '@/components/layout/MainLayout';
import { TrafficPortalList } from '@/components/traffic';
import { Car } from 'lucide-react';

const Traffic = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-full p-4 bg-legal-lightBlue">
              <Car className="h-8 w-8 text-legal-blue" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Vehicle Fine Payment Portal</h1>
          <p className="text-theme-secondary">
            Pay your vehicle fines online across major cities and union territories in India
          </p>
        </div>
        
        <TrafficPortalList />
      </div>
    </MainLayout>
  );
};

export default Traffic;
