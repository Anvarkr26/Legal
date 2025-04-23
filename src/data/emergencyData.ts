
export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  description: string;
  category: string;
}

export interface EmergencyService {
  id: string;
  name: string;
  type: 'police' | 'hospital' | 'fire' | 'legal';
  address: string;
  distance?: string;
  status?: string;
  operatingHours?: string;
  contactNumber?: string;
}

// National Emergency Contacts
export const emergencyContacts: EmergencyContact[] = [
  {
    id: "1",
    name: "Police Control Room",
    number: "100",
    description: "For reporting crimes, emergencies, and law enforcement assistance",
    category: "police"
  },
  {
    id: "2",
    name: "Ambulance",
    number: "108",
    description: "Emergency medical services and ambulance",
    category: "medical"
  },
  {
    id: "3",
    name: "Fire Service",
    number: "101",
    description: "For reporting fires and fire-related emergencies",
    category: "fire"
  },
  {
    id: "4",
    name: "Women Helpline",
    number: "1091",
    description: "24/7 helpline for women in distress",
    category: "women"
  },
  {
    id: "5",
    name: "Child Helpline",
    number: "1098",
    description: "24/7 emergency phone service for children in need",
    category: "children"
  },
  {
    id: "6",
    name: "National Emergency Number",
    number: "112",
    description: "Unified emergency helpline number (works across India)",
    category: "general"
  },
  {
    id: "7",
    name: "Disaster Management",
    number: "1070",
    description: "National Disaster Management Authority",
    category: "disaster"
  },
  {
    id: "8",
    name: "COVID-19 Helpline",
    number: "1075",
    description: "For COVID-19 related information and assistance",
    category: "health"
  },
  {
    id: "9",
    name: "Road Accident Emergency",
    number: "1073",
    description: "For reporting road accidents and seeking assistance",
    category: "accident"
  },
  {
    id: "10",
    name: "Senior Citizen Helpline",
    number: "14567",
    description: "For elderly people in need of assistance",
    category: "elderly"
  },
  {
    id: "11",
    name: "Highway HelpLine",
    number: "1033",
    description: "For Highway Assistant",
    category: "highway"
  },
  {
    id: "12",
    name: "Railway HelpLine",
    number: "139",
    description: "For Railway Assistant",
    category: "railway"
  },
  {
    id: "13",
    name: "Cyber Crime",
    number: "1930",
    description: "For cyber crimes",
    category: "cyber"
  },
  {
    id: "14",
    name: "Blood Bank",
    number: "1097",
    description: "For Blood Bank",
    category: "blood"
  }
];

// Mock emergency services data (for map display)
export const mockEmergencyServices: EmergencyService[] = [
  {
    id: "1",
    name: "City Police Headquarters",
    type: "police",
    address: "Civil Lines, New Delhi",
    distance: "2.3 km",
    status: "Open 24/7",
    contactNumber: "+91-11-23746100"
  },
  {
    id: "2",
    name: "Government General Hospital",
    type: "hospital",
    address: "Anna Salai, Chennai",
    distance: "3.1 km",
    status: "Emergency services available",
    contactNumber: "+91-44-25305000"
  },
  {
    id: "3",
    name: "District Fire Station",
    type: "fire",
    address: "MG Road, Bangalore",
    distance: "4.5 km",
    status: "Response time: 8 min",
    contactNumber: "+91-80-22971500"
  },
  {
    id: "4",
    name: "Legal Aid Center",
    type: "legal",
    address: "High Court Complex, Mumbai",
    distance: "5.2 km",
    operatingHours: "9 AM - 6 PM",
    contactNumber: "+91-22-22617317"
  },
  {
    id: "5",
    name: "Sector 14 Police Station",
    type: "police",
    address: "Sector 14, Gurgaon",
    distance: "3.5 km",
    status: "Open 24/7",
    contactNumber: "+91-124-2309580"
  },
  {
    id: "6",
    name: "Apollo Hospital",
    type: "hospital",
    address: "Sarita Vihar, Delhi",
    distance: "2.3 km",
    status: "Open 24/7",
    contactNumber: "+91-11-26925858"
  },
  {
    id: "7",
    name: "Central Fire Station",
    type: "fire",
    address: "Connaught Place, Delhi",
    distance: "4.1 km",
    status: "Open 24/7",
    contactNumber: "+91-11-23413950"
  }
];

// Categories of emergency services
export const emergencyServiceCategories = [
  "police",
  "hospital",
  "fire",
  "legal"
];

// Get emergency contacts by category
export const getEmergencyContactsByCategory = (category: string) => {
  if (category === 'all') return emergencyContacts;
  return emergencyContacts.filter(contact => contact.category === category);
};
