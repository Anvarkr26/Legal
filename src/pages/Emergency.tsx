
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmergencyContacts, MapComponent } from '@/components/emergency';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Emergency = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Emergency Services</h1>
          <p className="text-theme-secondary">
            Access emergency contacts and find nearby services across India
          </p>
        </div>

        <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6 flex items-start">
          <AlertTriangle className="h-6 w-6 text-legal-red mr-4 flex-shrink-0" />
          <div>
            <h2 className="font-semibold text-lg text-legal-red mb-1">Emergency Helpline</h2>
            <p className="text-theme-primary mb-4">
              For immediate assistance in any emergency situation, dial the national emergency helpline number.
            </p>
            <Link to="/emergency/call">
              <Button className="bg-legal-red hover:bg-red-700">
                <Phone className="mr-2 h-4 w-4" /> Call 112
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="contacts" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts">Emergency Contacts</TabsTrigger>
            <TabsTrigger value="map">Emergency Map</TabsTrigger>
          </TabsList>
          
          <TabsContent value="contacts" className="p-4 bg-white rounded-md shadow">
            <EmergencyContacts />
          </TabsContent>
          
          <TabsContent value="map">
            <MapComponent />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-xl mb-4">Emergency Preparedness</h2>
              <ul className="space-y-2 text-theme-primary">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep emergency numbers saved in your phone</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Share your location with family during emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Learn basic first aid techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Know evacuation routes from your home and workplace</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-xl mb-4">Safety Tips</h2>
              <ul className="space-y-2 text-theme-primary">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use SOS features available on smartphones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Always keep emergency contacts updated</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Install emergency alert apps</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Report suspicious activities to local authorities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Emergency;
