
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, CreditCard, FileText, Receipt, Info, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const services = [
  {
    id: 'check',
    title: 'Check Fines',
    description: 'View your pending traffic violations and fine details',
    icon: <Info className="h-12 w-12 text-legal-blue" />,
    action: () => {
      toast({
        title: "Service Not Available",
        description: "This service will be available soon",
        duration: 3000,
      });
    }
  },
  {
    id: 'pay',
    title: 'Pay Fines',
    description: 'Make online payment for your pending traffic violations',
    icon: <CreditCard className="h-12 w-12 text-green-600" />,
    action: () => {
      window.open('https://vahan.parivahan.gov.in/vahan/vahan/ui/statevalidation/homepage.xhtml', '_blank');
    }
  },
  {
    id: 'history',
    title: 'Payment History',
    description: 'View your past payments and download receipts',
    icon: <Receipt className="h-12 w-12 text-amber-500" />,
    action: () => {
      toast({
        title: "Service Not Available",
        description: "This service will be available soon",
        duration: 3000,
      });
    }
  },
  {
    id: 'rules',
    title: 'Traffic Rules',
    description: 'Learn about traffic rules and regulations',
    icon: <AlertCircle className="h-12 w-12 text-red-600" />,
    action: () => {
      window.open('https://parivahan.gov.in/parivahan/en/content/acts-and-rules-0', '_blank');
    }
  }
];

const TrafficServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('check');

  return (
    <div className="mt-10 mb-6">
      <h2 className="text-xl font-semibold mb-4">Traffic Services</h2>
      
      <Tabs defaultValue="check" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent">
          {services.map(service => (
            <TabsTrigger 
              key={service.id} 
              value={service.id} 
              className={`
                flex flex-col items-center py-4 px-2 data-[state=active]:bg-legal-lightBlue 
                data-[state=active]:text-legal-blue data-[state=active]:shadow-sm
                hover:bg-gray-100 transition-colors
              `}
            >
              <div className={`rounded-full p-2 mb-2 ${activeTab === service.id ? 'bg-white' : 'bg-gray-50'}`}>
                {service.icon}
              </div>
              <span>{service.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {services.map(service => (
          <TabsContent key={service.id} value={service.id} className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="rounded-full p-4 bg-legal-lightBlue shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button 
                      onClick={service.action} 
                      className={`
                        ${service.id === 'pay' ? 'bg-green-600 hover:bg-green-700' : 
                          service.id === 'rules' ? 'bg-red-600 hover:bg-red-700' : 
                          'bg-legal-blue hover:bg-blue-700'}
                      `}
                    >
                      Access Service
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TrafficServicesTabs;
