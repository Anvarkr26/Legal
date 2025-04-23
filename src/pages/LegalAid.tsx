
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Phone, MapPin, FileText, AlertCircle, ChevronDown, ExternalLink, UserCheck, Building, InfoIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from '@/hooks/use-toast';

const LegalAid = () => {
  const handleContactLegalAid = () => {
    // Initiate phone call to NALSA helpline
    window.location.href = 'tel:15100';
    
    // Show toast notification
    toast({
      title: "Calling NALSA Helpline",
      description: "Connecting to National Legal Services Authority helpline...",
      duration: 3000,
    });
  };

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Legal Aid Services</h1>
          <p className="text-gray-600">
            Find legal assistance and learn about your rights under Indian law
          </p>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="rounded-full p-4 bg-legal-lightBlue">
                <Scale className="h-8 w-8 text-legal-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">Free Legal Aid in India</h2>
                <p className="text-gray-600 mb-4">
                  Under the Legal Services Authorities Act, free legal services are available to certain categories of citizens, including women, children, persons with disabilities, victims of human trafficking, and those below specific income thresholds.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-legal-blue hover:bg-blue-700" onClick={handleContactLegalAid}>
                    <Phone className="h-4 w-4 mr-2" /> Contact Legal Aid
                  </Button>
                  <Link to="/emergency/map">
                    <Button variant="outline">
                      <MapPin className="h-4 w-4 mr-2" /> Find Nearby Centers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Who Can Avail Legal Aid?</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Women and children</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Members of Scheduled Castes or Tribes</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Industrial workmen</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Victims of trafficking or disasters</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Persons with disabilities</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Persons in custody</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Persons with annual income below specified limit</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Types of Legal Aid Services</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Legal advice and consultation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Court fee and legal expenses</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Representation by a lawyer</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Preparation of legal documents</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Lok Adalat services for dispute resolution</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-legal-blue mr-2"></div>
                  <span>Legal literacy and awareness programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Major Organizations Providing Legal Aid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full p-3 bg-legal-lightBlue mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-legal-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">NALSA</h3>
                <p className="text-sm text-gray-600 mb-4">National Legal Services Authority</p>
                <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full p-3 bg-legal-lightBlue mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Building className="h-6 w-6 text-legal-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">State Legal Services</h3>
                <p className="text-sm text-gray-600 mb-4">State-level legal aid authorities</p>
                <a href="https://nalsa.gov.in/state-legal-services-authority" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Your State
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full p-3 bg-legal-lightBlue mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-legal-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">DLSA</h3>
                <p className="text-sm text-gray-600 mb-4">District Legal Services Authorities</p>
                <Link to="/emergency/map">
                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Nearby
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-white rounded-md shadow">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 hover:bg-gray-50">
                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2 text-legal-blue" />
                  How do I apply for free legal aid?
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                To apply for free legal aid, you can visit your nearest Legal Services Authority office at the district, state, or national level, or visit their website to download the application form. You'll need to provide details about your case and proof of eligibility (income certificate, identity proof, etc.). You can also call NALSA's toll-free number 15100 for guidance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 hover:bg-gray-50">
                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2 text-legal-blue" />
                  What is the income limit for legal aid eligibility?
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                The income limit varies by state, but generally, individuals with an annual income below Rs. 3 lakhs are eligible for legal aid services. However, this limit doesn't apply to certain categories like women, children, SC/ST members, and persons with disabilities who are eligible regardless of income.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 hover:bg-gray-50">
                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2 text-legal-blue" />
                  What are Lok Adalats?
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Lok Adalat (People's Court) is an alternative dispute resolution mechanism where pending or pre-litigation cases are settled amicably. Cases can be referred to Lok Adalat if parties agree to settle, and the decisions are binding and cannot be appealed. Lok Adalats handle various cases including motor accident claims, family disputes, and bank recovery cases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 hover:bg-gray-50">
                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2 text-legal-blue" />
                  Can legal aid help with criminal cases?
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Yes, legal aid services extend to criminal cases as well. If you're unable to afford a lawyer for your defense in a criminal case, you can apply for legal aid. The court may also appoint a legal aid lawyer if the accused doesn't have legal representation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 hover:bg-gray-50">
                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2 text-legal-blue" />
                  Are there any legal aid clinics in universities?
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Yes, many law schools and universities across India operate legal aid clinics as part of their curriculum. These clinics provide free legal assistance to underprivileged communities under the supervision of faculty members and practicing lawyers. You can reach out to nearby law schools to inquire about such services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        
      </div>
    </MainLayout>
  );
};

export default LegalAid;

