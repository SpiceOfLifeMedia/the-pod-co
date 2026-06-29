import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function Hero() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref as any}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''} max-w-3xl`}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Professional voice, <br className="hidden md:block"/> made effortless.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            The complete ecosystem for podcasting. Hardware and software designed together for schools, universities, and enterprise media teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center">
              Book a demo
            </button>
            <button className="bg-transparent border border-gray-200 text-gray-900 px-8 py-4 rounded-md text-base font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
              Explore products
            </button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="aspect-[21/9] w-full bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
            {/* Abstract product silhouette */}
            <div className="relative w-full h-full flex items-center justify-center animate-float">
              <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto text-gray-200">
                <rect x="150" y="50" width="300" height="200" rx="24" fill="currentColor"/>
                <rect x="200" y="100" width="80" height="80" rx="40" fill="white" />
                <rect x="320" y="100" width="80" height="80" rx="40" fill="white" />
                <rect x="210" y="200" width="180" height="12" rx="6" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
