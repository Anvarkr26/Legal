
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center p-8 text-center">
        <div className="rounded-full bg-red-100 p-4 mb-6">
          <AlertCircle className="h-12 w-12 text-legal-red" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-theme-secondary mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button className="bg-legal-blue hover:bg-blue-700">
            Return to Home
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
