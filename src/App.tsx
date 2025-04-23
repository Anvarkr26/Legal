
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import IPCSearch from "./pages/IPCSearch";
import IPCDetail from "./pages/IPCDetail";
import Emergency from "./pages/Emergency";
import EmergencyCall from "./pages/EmergencyCall";
import EmergencyMap from "./pages/EmergencyMap";
import Traffic from "./pages/Traffic";
import LegalAid from "./pages/LegalAid";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipc" element={<IPCSearch />} />
          <Route path="/ipc/:section" element={<IPCDetail />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/emergency/call" element={<EmergencyCall />} />
          <Route path="/emergency/map" element={<EmergencyMap />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/legal-aid" element={<LegalAid />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
