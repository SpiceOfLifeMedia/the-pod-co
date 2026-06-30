import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const pillars = [
  {
    title: "Ready in seconds.",
    description: "Plug in and record. No drivers, no routing, no configuration.",
  },
  {
    title: "Built to last.",
    description: "Engineered for daily use in classrooms, studios, and boardrooms.",
  },
  {
    title: "Professional grade.",
    description: "Studio-quality preamps and converters inside every device.",
  },
  {
    title: "Always connected.",
    description: "Files sync to PODsentral the moment recording stops.",
  },
  {
    title: "AI-assisted.",
    description: "Automatic levelling, noise reduction, and smart transcription.",
  },
  {
    title: "Team-native.",
    description: "Permissions, handoffs, and review workflows built in from day one.",
  },
];

export function IndustrialDesign() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="products" className="py-28 md:py-40 bg-[#111118] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <div className="max-w-2xl mb-20 md:mb-28">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-6 font-medium">
              Hardware philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              Built like instruments.<br className="hidden md:block" /> Engineered for simplicity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="h-px w-full bg-white/8 mb-6 group-hover:bg-[#3262DF]/50 transition-colors duration-500" />
                <h3 className="text-xl font-medium mb-3 text-white">{pillar.title}</h3>
                <p className="text-[#696E7C] leading-relaxed font-light">
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
