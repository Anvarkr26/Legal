
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { emergencyContacts, EmergencyContact, getEmergencyContactsByCategory } from '@/data/emergencyData';
import { Phone, AlertCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const EmergencyContacts = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'police', name: 'Police' },
    { id: 'medical', name: 'Medical' },
    { id: 'fire', name: 'Fire' },
    { id: 'women', name: 'Women' },
    { id: 'children', name: 'Children' },
    { id: 'general', name: 'General' }
  ];

  const filteredContacts = getEmergencyContactsByCategory(activeCategory).filter(
    contact => 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      contact.number.includes(searchQuery) ||
      contact.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Input
          placeholder="Search emergency contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={activeCategory === category.id ? "bg-legal-blue hover:bg-blue-700" : ""}
          >
            {category.name}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredContacts.map((contact) => (
          <EmergencyContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      
      <div className="p-4 border border-amber-200 bg-amber-50 rounded-md">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-800">Important Note</h3>
            <p className="text-sm text-amber-700">
              In case of emergency, always dial 112 as the national emergency response number, accessible from any phone without credit or network signal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface EmergencyContactCardProps {
  contact: EmergencyContact;
}

const EmergencyContactCard = ({ contact }: EmergencyContactCardProps) => {
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
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{contact.name}</h3>
            <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getCategoryColor(contact.category)}`}>
              {contact.category.charAt(0).toUpperCase() + contact.category.slice(1)}
            </span>
            <p className="text-sm text-gray-600 mt-2">{contact.description}</p>
          </div>
          
          <a 
            href={`tel:${contact.number}`} 
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-legal-blue text-white rounded-full flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold mt-1">{contact.number}</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContacts;
