import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Hospital, Shield, Flame, Scale } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const { toast } = useToast();
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined' && !window.L) {
        try {
          if (!window.L) {
            const cssLink = document.createElement('link');
            cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            cssLink.rel = 'stylesheet';
            document.head.appendChild(cssLink);

            await new Promise((resolve) => {
              cssLink.onload = resolve;
              setTimeout(resolve, 1000);
            });

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.async = true;
            document.head.appendChild(script);

            await new Promise((resolve) => {
              script.onload = resolve;
              setTimeout(resolve, 1000);
            });
          }
          
          initMap();
        } catch (error) {
          console.error("Error loading Leaflet:", error);
        }
      } else if (window.L) {
        initMap();
      }
    };

    const initMap = () => {
      if (!mapContainer.current || !window.L) return;
      
      const L = window.L;
      
      if (mapRef.current) {
        mapRef.current.remove();
      }
      
      mapRef.current = L.map(mapContainer.current).setView([20.5937, 78.9629], 5);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
      
      L.control.scale().addTo(mapRef.current);

      const mockServices = [
        { 
          type: "police", 
          coordinates: [28.6139, 77.2090], 
          name: "Delhi Police HQ",
          address: "ITO, New Delhi"
        },
        { 
          type: "hospital", 
          coordinates: [28.6120, 77.2100], 
          name: "AIIMS Hospital",
          address: "Ansari Nagar, New Delhi"
        },
        { 
          type: "fire", 
          coordinates: [28.6110, 77.2080], 
          name: "Delhi Fire Service",
          address: "Connaught Place, New Delhi"
        },
        { 
          type: "legal", 
          coordinates: [28.6130, 77.2095], 
          name: "Delhi Legal Services Authority",
          address: "Patiala House Courts, New Delhi"
        },
        { 
          type: "legal", 
          coordinates: [28.6140, 77.2110], 
          name: "National Legal Aid Society",
          address: "Connaught Place, New Delhi"
        }
      ];
      
      if (markersRef.current.length) {
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];
      }
      
      mockServices.forEach(service => {
        const markerColor = 
          service.type === 'police' ? '#1a56db' : 
          service.type === 'hospital' ? '#dc2626' :
          service.type === 'fire' ? '#f59e0b' : 
          service.type === 'legal' ? '#16a34a' : '#6b7280';
          
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: ${markerColor}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center;">
                  <div style="color: white; font-size: 14px; font-weight: bold;">${
                    service.type === 'police' ? 'P' : 
                    service.type === 'hospital' ? 'H' : 
                    service.type === 'fire' ? 'F' : 
                    service.type === 'legal' ? 'L' : '?'
                  }</div>
                </div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });
        
        const marker = L.marker([service.coordinates[0], service.coordinates[1]], { icon: customIcon })
          .addTo(mapRef.current)
          .bindPopup(`
            <div class="p-2">
              <h3 class="font-bold">${service.name}</h3>
              <p class="text-sm">${service.address}</p>
              <p class="text-xs mt-1">Type: ${service.type}</p>
              <p class="text-xs mt-1">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${service.coordinates[0]},${service.coordinates[1]}" 
                   target="_blank" style="color: blue; text-decoration: underline;">
                  Get Directions on Google Maps
                </a>
              </p>
            </div>
          `);
          
        markersRef.current.push(marker);
      });
      
      setIsMapLoaded(true);
    };
    
    loadLeaflet();
    
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const handleSearchLocation = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search Error",
        description: "Please enter a location to search",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Searching Location",
      description: `Searching for emergency services near ${searchQuery}`,
    });
    
    if (mapRef.current) {
      mapRef.current.setView([28.6139, 77.2090], 12);
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    toast({
      title: "Filter Applied",
      description: `Showing ${filter === 'all' ? 'all' : filter} services on the map`,
    });
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          
          toast({
            title: "Location Found",
            description: "Your current location has been detected",
          });
          
          if (mapRef.current) {
            mapRef.current.setView([latitude, longitude], 14);
            
            if (window.L) {
              const userIcon = window.L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #4b5563; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
                iconSize: [16, 16],
                iconAnchor: [8, 8]
              });
              
              window.L.marker([latitude, longitude], { icon: userIcon })
                .addTo(mapRef.current)
                .bindPopup('Your location');
              
              window.L.circle([latitude, longitude], {
                color: '#4b5563',
                fillColor: '#4b5563',
                fillOpacity: 0.1,
                radius: 500
              }).addTo(mapRef.current);
            }
          }
        },
        () => {
          toast({
            title: "Location Error",
            description: "Unable to access your location. Please check permissions.",
            variant: "destructive"
          });
        }
      );
    } else {
      toast({
        title: "Location Not Supported",
        description: "Geolocation is not supported by your browser",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Enter address or landmark"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearchLocation()}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          <Button 
            variant="default" 
            className="bg-legal-blue hover:bg-blue-700"
            onClick={handleSearchLocation}
          >
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          
          <Button 
            variant="outline"
            onClick={handleGetCurrentLocation}
          >
            <MapPin className="mr-2 h-4 w-4 text-legal-red" /> Current Location
          </Button>
        </div>
      </div>

     
      <div 
        ref={mapContainer} 
        className="h-[500px] w-full rounded-lg border border-gray-200 overflow-hidden"
      >
        {!isMapLoaded && (
          <div className="h-full w-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-legal-blue mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Nearby Emergency Services</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 border rounded-md hover:bg-gray-50">
            <div className="rounded-full p-2 bg-legal-lightBlue">
              <Shield className="h-5 w-5 text-legal-blue" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">City Police Headquarters</h4>
                  <p className="text-sm text-gray-600">2.3 km away • Open 24/7</p>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open("https://www.google.com/maps/search/City+Police+Headquarters", "_blank")}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:100", "_blank")}
                  >
                    <span className="sr-only">Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 border rounded-md hover:bg-gray-50">
            <div className="rounded-full p-2 bg-red-100">
              <Hospital className="h-5 w-5 text-legal-red" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Government General Hospital</h4>
                  <p className="text-sm text-gray-600">3.1 km away • Emergency services available</p>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://www.google.com/maps/search/Government+General+Hospital", "_blank")}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:108", "_blank")}
                  >
                    <span className="sr-only">Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 border rounded-md hover:bg-gray-50">
            <div className="rounded-full p-2 bg-amber-100">
              <Flame className="h-5 w-5 text-legal-yellow" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">District Fire Station</h4>
                  <p className="text-sm text-gray-600">4.5 km away • Response time: 8 min</p>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://www.google.com/maps/search/District+Fire+Station", "_blank")}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:101", "_blank")}
                  >
                    <span className="sr-only">Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 border rounded-md hover:bg-gray-50">
            <div className="rounded-full p-2 bg-green-100">
              <Scale className="h-5 w-5 text-legal-green" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">District Legal Services Authority</h4>
                  <p className="text-sm text-gray-600">3.8 km away • Open 9:00 AM - 5:00 PM</p>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://www.google.com/maps/search/District+Legal+Services+Authority", "_blank")}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:15100", "_blank")}
                  >
                    <span className="sr-only">Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 border rounded-md hover:bg-gray-50">
            <div className="rounded-full p-2 bg-green-100">
              <Scale className="h-5 w-5 text-legal-green" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">National Legal Aid Society</h4>
                  <p className="text-sm text-gray-600">2.9 km away • Free legal consultation available</p>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://www.google.com/maps/search/National+Legal+Aid+Society", "_blank")}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:15100", "_blank")}
                  >
                    <span className="sr-only">Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button className="bg-legal-blue hover:bg-blue-700" asChild>
            <a href="https://www.google.com/maps/search/emergency+services" target="_blank" rel="noopener noreferrer">
              View All Emergency Services
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;

declare global {
  interface Window {
    L: any;
  }
}
