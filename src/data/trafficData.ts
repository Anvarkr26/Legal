
export interface CityTrafficPortal {
  id: string;
  city: string;
  state: string;
  type: 'city' | 'union_territory';
  url: string;
  paymentMethods: string[];
}

export interface TrafficViolation {
  id: string;
  code: string;
  violation: string;
  description: string;
  fineAmount: string;
  points?: number;
}

// Traffic fine payment portals for major cities
export const trafficPortals: CityTrafficPortal[] = [
  {
    id: "1",
    city: "Delhi",
    state: "Delhi",
    type: "union_territory",
    url: "https://delhitrafficpolice.nic.in/pay-fine/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI", "Net Banking"]
  },
  {
    id: "2",
    city: "Mumbai",
    state: "Maharashtra",
    type: "city",
    url: "https://mumtraffic.mahapolice.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI"]
  },
  {
    id: "3",
    city: "Bangalore",
    state: "Karnataka",
    type: "city",
    url: "https://btp.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI", "Net Banking"]
  },
  {
    id: "4",
    city: "Tamil Nadu",
    state: "Tamil Nadu",
    type: "city",
    url: "https://echallan.parivahan.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI"]
  },
  {
    id: "5",
    city: "Kolkata",
    state: "West Bengal",
    type: "city",
    url: "https://www.kolkatatrafficpolice.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI"]
  },
  {
    id: "6",
    city: "Hyderabad",
    state: "Telangana",
    type: "city",
    url: "https://www.htp.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI", "Net Banking"]
  },
  {
    id: "7",
    city: "Pune",
    state: "Maharashtra",
    type: "city",
    url: "https://punetrafficpolice.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI"]
  },
  {
    id: "8",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "city",
    url: "https://www.ahmedabadcity.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI"]
  },
  {
    id: "9",
    city: "Chandigarh",
    state: "Chandigarh",
    type: "union_territory",
    url: "https://chandigarhtrafficpolice.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI"]
  },
  {
    id: "10",
    city: "Puducherry Main ",
    state: "Puducherry Main",
    type: "union_territory",
    url: "https://police.py.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card"]
  },
  {
    id: "11",
    city: "Ladakh",
    state: "Ladakh",
    type: "union_territory",
    url: "https://ladakh.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card"]
  },
  {
    id: "12",
    city: "Jammu and Kashmir",
    state: "Jammu and Kashmir",
    type: "union_territory",
    url: "https://jkpolice.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card", "UPI"]
  },
  {
    id: "13",
    city: "Puducherry",
    state: "Puducherry",
    type: "union_territory",
    url: "https://echallan.parivahan.gov.in/",
    paymentMethods: ["Credit Card", "Debit Card"]
  }
];

// Common traffic violations and their fines
export const trafficViolations: TrafficViolation[] = [
  {
    id: "1",
    code: "MV-01",
    violation: "Driving without license",
    description: "Driving a motor vehicle without a valid driving license",
    fineAmount: "₹5,000",
    points: 3
  },
  {
    id: "2",
    code: "MV-02",
    violation: "Over speeding",
    description: "Driving above the maximum speed limit",
    fineAmount: "₹1,000 - ₹2,000",
    points: 3
  },
  {
    id: "3",
    code: "MV-03",
    violation: "Red light jumping",
    description: "Crossing an intersection when the traffic light is red",
    fineAmount: "₹1,000 - ₹5,000",
    points: 4
  },
  {
    id: "4",
    code: "MV-04",
    violation: "Drunk driving",
    description: "Driving under the influence of alcohol or drugs",
    fineAmount: "₹10,000",
    points: 6
  },
  {
    id: "5",
    code: "MV-05",
    violation: "Using mobile while driving",
    description: "Using a handheld mobile device while operating a vehicle",
    fineAmount: "₹1,000 - ₹5,000",
    points: 4
  },
  {
    id: "6",
    code: "MV-06",
    violation: "Without seat belt",
    description: "Driving without wearing a seat belt",
    fineAmount: "₹1,000",
    points: 3
  },
  {
    id: "7",
    code: "MV-07",
    violation: "Without helmet",
    description: "Riding a two-wheeler without wearing a helmet",
    fineAmount: "₹1,000",
    points: 3
  },
  {
    id: "8",
    code: "MV-08",
    violation: "Dangerous driving",
    description: "Driving in a manner dangerous to public safety",
    fineAmount: "₹5,000",
    points: 6
  }
];

// Get traffic portals by type
export const getTrafficPortalsByType = (type: 'city' | 'union_territory') => {
  return trafficPortals.filter(portal => portal.type === type);
};

// Search traffic portals by city name
export const searchTrafficPortalsByCity = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  
  return trafficPortals.filter(portal => 
    portal.city.toLowerCase().includes(lowercaseQuery) || 
    portal.state.toLowerCase().includes(lowercaseQuery)
  );
};
