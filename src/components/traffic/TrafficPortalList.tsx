
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ExternalLink, CreditCard, QrCode, FileText, Clock, ShieldCheck, Receipt } from 'lucide-react';
import { trafficPortals, CityTrafficPortal } from '@/data/trafficData';

const TrafficPortalList = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'city' | 'union_territory'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPortals = trafficPortals
    .filter(portal => 
      activeFilter === 'all' || portal.type === activeFilter
    )
    .filter(portal =>
      portal.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.state.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const majorCities = filteredPortals.filter(portal => portal.type === 'city').slice(0, 8);
  const unionTerritories = filteredPortals.filter(portal => portal.type === 'union_territory');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search city or state..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-theme-muted" />
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' ? 'bg-legal-blue hover:bg-blue-700' : ''}
          >
            All
          </Button>
          <Button 
            variant={activeFilter === 'city' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('city')}
            className={activeFilter === 'city' ? 'bg-legal-blue hover:bg-blue-700' : ''}
          >
            Major Cities
          </Button>
          <Button 
            variant={activeFilter === 'union_territory' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('union_territory')}
            className={activeFilter === 'union_territory' ? 'bg-legal-blue hover:bg-blue-700' : ''}
          >
            Union Territories
          </Button>
        </div>
      </div>

      {(activeFilter === 'all' || activeFilter === 'city') && searchQuery === '' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Major Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {majorCities.map(city => (
              <CityButton key={city.id} city={city} />
            ))}
          </div>
        </div>
      )}

      {(activeFilter === 'all' || activeFilter === 'union_territory') && searchQuery === '' && (
        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">Union Territories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {unionTerritories.map(city => (
              <CityButton key={city.id} city={city} />
            ))}
          </div>
        </div>
      )}

      {searchQuery && (
        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">Search Results</h2>
          {filteredPortals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPortals.map(portal => (
                <PortalCard key={portal.id} portal={portal} />
              ))}
            </div>
          ) : (
            <p className="text-theme-muted">No cities found matching your search.</p>
          )}
        </div>
      )}
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="rounded-full p-3 bg-legal-lightBlue">
              <FileText className="h-6 w-6 text-legal-blue" />
            </div>
            <div>
              <h3 className="font-semibold">1. Enter Vehicle Details</h3>
              <p className="text-theme-secondary">Provide registration number and other required information</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="rounded-full p-3 bg-legal-lightBlue">
              <Search className="h-6 w-6 text-legal-blue" />
            </div>
            <div>
              <h3 className="font-semibold">2. View Fine Details</h3>
              <p className="text-theme-secondary">Check violation type, date, and amount due</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="rounded-full p-3 bg-legal-lightBlue">
              <CreditCard className="h-6 w-6 text-legal-blue" />
            </div>
            <div>
              <h3 className="font-semibold">3. Make Payment</h3>
              <p className="text-theme-secondary">Pay securely using various payment methods</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="rounded-full p-3 bg-legal-lightBlue">
              <Receipt className="h-6 w-6 text-legal-blue" />
            </div>
            <div>
              <h3 className="font-semibold">4. Download Receipt</h3>
              <p className="text-theme-secondary">Get digital proof of payment for your records</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CityButtonProps {
  city: CityTrafficPortal;
}

const CityButton = ({ city }: CityButtonProps) => {
  return (
    <a 
      href={city.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white hover:bg-legal-lightBlue border border-gray-100 rounded-lg p-4 text-center shadow-sm hover:shadow transition-all"
    >
      <span className="font-medium">{city.city}</span>
    </a>
  );
};

interface PortalCardProps {
  portal: CityTrafficPortal;
}

const PortalCard = ({ portal }: PortalCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg">{portal.city}</h3>
            <p className="text-sm text-theme-secondary">{portal.state}</p>
            
            <div className="mt-3 flex flex-wrap gap-1">
              {portal.paymentMethods.map((method, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-theme-primary">
                  {method === 'UPI' && <QrCode className="h-3 w-3 mr-1" />}
                  {method === 'Credit Card' && <CreditCard className="h-3 w-3 mr-1" />}
                  {method}
                </span>
              ))}
            </div>
          </div>
          
          <a 
            href={portal.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Button variant="default" size="sm" className="bg-legal-blue hover:bg-blue-700">
              <ExternalLink className="h-4 w-4 mr-1" /> Visit
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficPortalList;
