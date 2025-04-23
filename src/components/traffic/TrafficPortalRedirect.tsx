
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

interface TrafficPortalRedirectProps {
  name: string;
  city: string;
  state: string;
  portalUrl: string;
}

const TrafficPortalRedirect = ({ name, city, state, portalUrl }: TrafficPortalRedirectProps) => {
  const openGoogleMaps = () => {
    // Create a Google Maps search URL for the city
    const googleMapsUrl = `https://www.google.com/maps/search/traffic+police+${city}+${state}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-theme-muted">{city}, {state}</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={openGoogleMaps}>
          <Navigation className="h-4 w-4 mr-2" />
          Directions
        </Button>
        <Button size="sm" className="bg-legal-blue hover:bg-blue-700" asChild>
          <a href={portalUrl} target="_blank" rel="noopener noreferrer">
            Pay Fine
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TrafficPortalRedirect;
