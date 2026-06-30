import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { TrustSection } from "./components/sections/TrustSection";
import { Products } from "./components/sections/Products";
import { Ecosystem } from "./components/sections/Ecosystem";
import { IndustrialDesign } from "./components/sections/IndustrialDesign";
import { Solutions } from "./components/sections/Solutions";
import { PhilosophyCTA } from "./components/sections/PhilosophyCTA";
import { Footer } from "./components/sections/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-[100dvh] bg-white font-sans text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <TrustSection />
        <Products />
        <Ecosystem />
        <IndustrialDesign />
        <Solutions />
        <PhilosophyCTA />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
