import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { Ecosystem } from "./components/sections/Ecosystem";
import { Hardware } from "./components/sections/Hardware";
import { SoftwareSection } from "./components/sections/SoftwareSection";
import { PhilosophyCTA } from "./components/sections/PhilosophyCTA";
import { Footer } from "./components/sections/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-[100dvh] bg-[#0D0F13] font-sans text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Ecosystem />
        <Hardware />
        <SoftwareSection />
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
