import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const pillars = [
  {
    title: "Minimal setup",
    description: "Plug in and record. No complex routing, no driver installations."
  },
  {
    title: "Built for education",
    description: "Durable components designed to withstand daily student use."
  },
  {
    title: "Professional audio",
    description: "Studio-grade preamps and converters in every device."
  },
  {
    title: "Cloud-native",
    description: "Files sync directly to PODsentral the moment you stop recording."
  },
  {
    title: "AI-assisted",
    description: "Automated leveling, noise reduction, and smart transcription."
  },
  {
    title: "Team-ready",
    description: "Granular permissions and seamless handoffs between creators and editors."
  }
];

export function IndustrialDesign() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 md:py-32 bg-[#0A0C10] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref as any}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 md:mb-24 max-w-2xl text-white">
            Hardware and software, designed together.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title} 
                className="group fade-in-section is-visible"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-px w-full bg-white/10 mb-6 group-hover:bg-primary/50 transition-colors duration-500" />
                <h3 className="text-xl font-medium mb-3 text-white">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
