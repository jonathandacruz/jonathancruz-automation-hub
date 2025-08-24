import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Conteudo from "./pages/Conteudo";
import AutomacaoN8n from "./pages/AutomacaoN8n";
import Templates from "./pages/Templates";
import TemplateDetail from "./pages/TemplateDetail";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/jonathancruz-automation-hub/" element={<Home />} />
              <Route path="/jonathancruz-automation-hub/sobre" element={<Sobre />} />
              <Route path="/jonathancruz-automation-hub/conteudo" element={<Conteudo />} />
              <Route path="/jonathancruz-automation-hub/automacao-n8n" element={<AutomacaoN8n />} />
              <Route path="/jonathancruz-automation-hub/templates" element={<Templates />} />
              <Route path="/jonathancruz-automation-hub/templates/:templateSlug" element={<TemplateDetail />} />
              <Route path="/jonathancruz-automation-hub/contato" element={<Contato />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;