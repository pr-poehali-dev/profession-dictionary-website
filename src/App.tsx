import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChemistryPage from "./pages/profession/ChemistryPage";
import ITPage from "./pages/profession/ITPage";
import SysAdminPage from "./pages/profession/SysAdminPage";
import SecurityPage from "./pages/profession/SecurityPage";
import OperatorPage from "./pages/profession/OperatorPage";
import BankingPage from "./pages/profession/BankingPage";
import MechatronicsPage from "./pages/profession/MechatronicsPage";
import DispatchPage from "./pages/profession/DispatchPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profession/chemistry" element={<ChemistryPage />} />
          <Route path="/profession/it" element={<ITPage />} />
          <Route path="/profession/sysadmin" element={<SysAdminPage />} />
          <Route path="/profession/security" element={<SecurityPage />} />
          <Route path="/profession/operator" element={<OperatorPage />} />
          <Route path="/profession/banking" element={<BankingPage />} />
          <Route
            path="/profession/mechatronics"
            element={<MechatronicsPage />}
          />
          <Route path="/profession/dispatch" element={<DispatchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
