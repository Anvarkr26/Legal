import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { ThemeToggle } from '../theme/ThemeToggle';
const Navbar = () => {
  return <header className="sticky top-0 z-40 w-full border-b " style={{
    backgroundColor: '#7fbbff'
  }}>
      <div className="container flex h-16 items-center justify-between bg-sky-200">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">LegalAssist</span>
          </Link>

          <nav className="hidden md:flex ml-6 space-x-4 lg:space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/ipc" className="text-sm font-medium transition-colors hover:text-primary">
              IPC Search
            </Link>
            <Link to="/emergency" className="text-sm font-medium transition-colors hover:text-primary">
              Emergency
            </Link>
            <Link to="/traffic" className="text-sm font-medium transition-colors hover:text-primary">
              Traffic Fines
            </Link>
            <Link to="/legal-aid" className="text-sm font-medium transition-colors hover:text-primary">
              Legal Aid
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="animate-fade-in">
            <ThemeToggle />
          </div>
          <Link to="/emergency/call">
            <Button variant="destructive" className="bg-legal-red hover:bg-red-700 dark:bg-legal-darkRed dark:hover:bg-red-800">
              <Phone className="mr-2 h-4 w-4" />
              Call Emergency
            </Button>
          </Link>
        </div>
      </div>
    </header>;
};
export default Navbar;