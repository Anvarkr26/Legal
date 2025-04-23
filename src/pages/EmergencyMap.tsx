
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { MapComponent } from '@/components/emergency';
import { ChevronLeft } from 'lucide-react';

const EmergencyMap = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <Link to="/emergency" className="inline-flex items-center text-legal-blue hover:text-blue-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Emergency Services
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Emergency Services Map</h1>
          <p className="text-theme-secondary">
            Find nearby emergency services across India
          </p>
          <p className="text-sm text-theme-muted mt-2">
            Map data © OpenStreetMap contributors | All location buttons redirect to Google Maps for directions
          </p>
        </div>

        <MapComponent />
      </div>
    </MainLayout>
  );
};

export default EmergencyMap;
