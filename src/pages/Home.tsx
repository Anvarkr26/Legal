import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText, MapPin, AlertTriangle, Car, Scale, Search, Info, ExternalLink } from 'lucide-react';
const Home = () => {
  return <MainLayout>
      <div className="max-w-5xl mx-auto">
        <section className="py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Indian Legal Compass Guide</h1>
            <p className="text-xl text-gray-600">
              Your comprehensive legal reference system for Indian laws, emergency services, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Access Cards */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="rounded-full p-4 bg-blue-100 mb-4 w-16 h-16 flex items-center justify-center">
                  <BookText className="h-8 w-8 text-legal-blue" />
                </div>
                <h2 className="text-2xl font-bold mb-2">IPC Search</h2>
                <p className="mb-4 text-gray-600">
                  Search for IPC sections by number or keyword. Get complete details including punishment, fines, and more.
                </p>
                <Link to="/ipc">
                  <Button className="bg-legal-blue hover:bg-blue-700">
                    <Search className="mr-2 h-4 w-4" /> Search IPC
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="rounded-full p-4 bg-red-100 mb-4 w-16 h-16 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-legal-red" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Emergency Services</h2>
                <p className="text-gray-600 mb-4">
                  Find emergency contacts and nearby services including police stations, hospitals, and fire stations.
                </p>
                <Link to="/emergency">
                  <Button className="bg-legal-red hover:bg-red-700">
                    <MapPin className="mr-2 h-4 w-4" /> Find Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="rounded-full p-4 bg-yellow-100 mb-4 w-16 h-16 flex items-center justify-center">
                  <Car className="h-8 w-8 text-legal-yellow" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Traffic Fines</h2>
                <p className="text-gray-600 mb-4">
                  Pay traffic fines online for major cities and union territories across India. Check fine status and more.
                </p>
                <Link to="/traffic">
                  <Button className="bg-legal-yellow hover:bg-yellow-600">
                    <Car className="mr-2 h-4 w-4" /> Pay Fines
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="rounded-full p-4 bg-green-100 mb-4 w-16 h-16 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-legal-green" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Legal Aid</h2>
                <p className="text-gray-600 mb-4">
                  Access legal resources, find assistance centers, and learn about your rights under Indian law.
                </p>
                <Link to="/legal-aid">
                  <Button className="bg-legal-green hover:bg-green-700">
                    <Scale className="mr-2 h-4 w-4" /> Get Legal Help
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Updates - Expanded & Detailed View */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6">Recent Legal Updates</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="rounded-full p-3 bg-blue-100 h-14 w-14 flex items-center justify-center flex-shrink-0">
                    <Info className="h-6 w-6 text-legal-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-semibold text-xl">New Amendment to IPC 498A</h3>
                      <span className="text-sm text-gray-500">April 4, 2025</span>
                    </div>
                    <p className="mb-4 text-gray-400">
                      The Supreme Court has issued a significant judgment modifying the application of section 498A related to domestic violence. 
                      The amendment aims to prevent misuse while ensuring protection for genuine victims. Courts are now required to conduct 
                      preliminary assessments before proceeding with cases filed under this section.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="bg-blue-50 text-legal-blue text-xs font-medium px-2.5 py-0.5 rounded">Supreme Court</div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                        <a href="https://economictimes.indiatimes.com/wealth/save/another-misuse-of-domestic-violence-law-supreme-court-warns-wife-for-filling-false-fir-under-section-498a-of-ipc-and-the-dowry-act/articleshow/116678590.cms?from=mdr" target="_blank" rel="noopener noreferrer">
                          Read Full Judgment <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="rounded-full p-3 bg-yellow-100 h-14 w-14 flex items-center justify-center flex-shrink-0">
                    <Car className="h-6 w-6 text-legal-yellow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-semibold text-xl">Traffic Fine Rates Updated</h3>
                      <span className="text-sm text-gray-500">March 30, 2025</span>
                    </div>
                    <p className="mb-4 text-gray-400">
                      The Ministry of Road Transport and Highways has revised traffic violation fines across major cities in India. 
                      The new rates will take effect from May 1, 2025. Penalties for common violations such as speeding, 
                      signal jumping, and driving without a license have been increased by 20-30% to improve road safety compliance.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="bg-yellow-50 text-legal-yellow text-xs font-medium px-2.5 py-0.5 rounded">Ministry of Road Transport</div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                        <a href="https://parivahan.gov.in/" target="_blank" rel="noopener noreferrer">
                          View Updated Rates <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="rounded-full p-3 bg-green-100 h-14 w-14 flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-legal-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-semibold text-xl">New Legal Aid Centers Opened</h3>
                      <span className="text-sm text-gray-500">March 22, 2025</span>
                    </div>
                    <p className="mb-4 text-gray-400">
                      The National Legal Services Authority (NALSA) has launched 50 new legal aid centers across rural districts 
                      to improve access to justice. These centers will provide free legal assistance to marginalized communities, 
                      with focus on women's rights, land disputes, and consumer protection. Each center will be staffed with 
                      trained legal professionals and paralegals.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="bg-green-50 text-legal-green text-xs font-medium px-2.5 py-0.5 rounded">National Legal Services Authority</div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                        <a href="https://nalsa.gov.in/" target="_blank" rel="noopener noreferrer">
                          Find Centers <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8">
          <div className="bg-legal-blue text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Need Immediate Help?</h2>
            <p className="mb-6">
              In case of emergency, access quick contacts or find the nearest emergency services
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/emergency/call">
                <Button variant="outline" className="bg-white hover:bg-gray-100 text-legal-blue border-white">
                  <AlertTriangle className="mr-2 h-4 w-4" /> Emergency Contacts
                </Button>
              </Link>
              <Link to="/emergency/map">
                <Button variant="outline" className="bg-white hover:bg-gray-100 text-legal-blue border-white">
                  <MapPin className="mr-2 h-4 w-4" /> Find Nearby Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>;
};
export default Home;