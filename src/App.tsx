import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import SmartGarden from "./pages/SmartGarden.tsx";
import SmartVilla from "./pages/SmartVilla.tsx";
import SmartGreenhouse from "./pages/SmartGreenhouse.tsx";
import EcoVillages from "./pages/EcoVillages.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/smart-garden" element={<SmartGarden />} />
          <Route path="/smart-villa" element={<SmartVilla />} />
          <Route path="/smart-greenhouse" element={<SmartGreenhouse />} />
          <Route path="/eco-villages" element={<EcoVillages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
