import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const PRINCIPLES = [
  { title: "Ready in seconds.", body: "Plug in and record. No drivers, no routing, no configuration." },
  { title: "Built to last.", body: "Engineered for daily use in classrooms, studios, and boardrooms." },
  { title: "Professional grade.", body: "Studio-quality preamps and converters inside every device." },
  { title: "Always connected.", body: "Files sync to PODsentral the moment recording stops." },
  { title: "AI-assisted.", body: "Automatic levelling, noise reduction, and smart transcription." },
  { title: "Team-native.", body: "Permissions, handoffs, and review workflows built in from day one." },
];

export function IndustrialDesign() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 md:py-48 bg-[#111118] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          {/* Large statement */}
          <div className="mb-28 md:mb-40 max-w-3xl">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-8 font-medium">
              Hardware philosophy
            </p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">
              Built like<br />instruments.
            </h2>
          </div>

          {/* Two rows of three — generous spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "none" : "translateY(20px)",
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${200 + i * 100}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${200 + i * 100}ms`,
                }}
              >
                <div className="h-px w-full bg-white/8 mb-8 hover:bg-[#3262DF]/50 transition-colors duration-700" />
                <h3 className="text-2xl font-medium text-white mb-4">{p.title}</h3>
                <p className="text-[#696E7C] leading-relaxed font-light">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
