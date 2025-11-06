
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Breakfast from "./pages/Breakfast";
import Poehali from "./pages/Poehali";
import ShowEpisode from "./pages/ShowEpisode";
import ShowEpisodeNewYear from "./pages/ShowEpisodeNewYear";
import FortBoyard from "./pages/FortBoyard";
import BigFootballFinal from "./pages/BigFootballFinal";
import UtroNovieDruzia from "./pages/UtroNovieDruzia";
import UtroEpisodes from "./pages/UtroEpisodes";
import EtoNadoVidet from "./pages/EtoNadoVidet";
import LiveTV from "./pages/LiveTV";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/poehali" element={<Poehali />} />
          <Route path="/show-episode" element={<ShowEpisode />} />
          <Route path="/show-episode-newyear" element={<ShowEpisodeNewYear />} />
          <Route path="/fort-boyard" element={<FortBoyard />} />
          <Route path="/big-football-final" element={<BigFootballFinal />} />
          <Route path="/utro-novie-druzia" element={<UtroNovieDruzia />} />
          <Route path="/utro-episodes" element={<UtroEpisodes />} />
          <Route path="/eto-nado-videt" element={<EtoNadoVidet />} />
          <Route path="/live-tv" element={<LiveTV />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;