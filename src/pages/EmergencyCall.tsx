
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Phone, AlertCircle } from 'lucide-react';
import { emergencyContacts, EmergencyContact } from '@/data/emergencyData';

const EmergencyCall = () => {
  const priorityContacts = emergencyContacts.slice(0, 3); // First 3 contacts are highest priority
  const otherContacts = emergencyContacts.slice(3);

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <Link to="/emergency" className="inline-flex items-center text-legal-blue hover:text-blue-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Emergency Services
        </Link>

        <Card className="border-2 border-red-500 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-full bg-red-100 p-3 mr-4">
                  <AlertCircle className="h-6 w-6 text-legal-red" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Emergency Contacts</h1>
                  <p className="text-theme-secondary">Important numbers for immediate assistance</p>
                </div>
              </div>
              <a href="tel:112" className="bg-legal-red text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" /> Call 112
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Priority Emergency Numbers</h2>
          <div className="space-y-4">
            {priorityContacts.map(contact => (
              <EmergencyContactCard key={contact.id} contact={contact} isPriority />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Other Important Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherContacts.map(contact => (
              <EmergencyContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-theme-secondary mb-4">Need to find emergency services near you?</p>
          <Link to="/emergency/map">
            <Button>
              View Emergency Services Map
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

interface EmergencyContactCardProps {
  contact: EmergencyContact;
  isPriority?: boolean;
}

const EmergencyContactCard = ({ contact, isPriority = false }: EmergencyContactCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'police': return 'bg-blue-100 text-blue-800';
      case 'medical': return 'bg-red-100 text-red-800';
      case 'fire': return 'bg-orange-100 text-orange-800';
      case 'women': return 'bg-pink-100 text-pink-800';
      case 'children': return 'bg-green-100 text-green-800';
      case 'general': return 'bg-indigo-100 text-indigo-800';
      case 'disaster': return 'bg-yellow-100 text-yellow-800';
      case 'health': return 'bg-teal-100 text-teal-800';
      case 'accident': return 'bg-red-100 text-red-800';
      case 'elderly': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${isPriority ? 'border-2 border-red-200' : ''}`}>
      <CardContent className={`p-5 ${isPriority ? 'bg-red-50' : ''}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{contact.name}</h3>
            <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getCategoryColor(contact.category)}`}>
              {contact.category.charAt(0).toUpperCase() + contact.category.slice(1)}
            </span>
            <p className="text-sm text-theme-secondary mt-2">{contact.description}</p>
          </div>
          
          <a 
            href={`tel:${contact.number}`} 
            className="flex flex-col items-center"
          >
            <div className={`w-12 h-12 ${isPriority ? 'bg-legal-red' : 'bg-legal-blue'} text-white rounded-full flex items-center justify-center`}>
              <Phone className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold mt-1">{contact.number}</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyCall;
