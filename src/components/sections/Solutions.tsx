import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const AUDIENCES = [
  { name: "Schools", desc: "Student-ready. Classroom-proven." },
  { name: "Universities", desc: "Research, radio, and media departments." },
  { name: "Businesses", desc: "Internal comms, training, and podcasting." },
  { name: "Enterprise", desc: "Large-scale voice content infrastructure." },
  { name: "Media Teams", desc: "Professional broadcast and digital studios." },
  { name: "Creators", desc: "Independent voice, elevated production." },
  { name: "Government", desc: "Public communications and official record." },
  { name: "Training", desc: "Scalable learning content at any volume." },
];

export function Solutions() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="solutions" className="py-32 md:py-48 bg-[#F7F7F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <div className="mb-20">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-6 font-medium">
              Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111118]">
              Built for every organisation.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#E7E8EE]">
            {AUDIENCES.map(({ name, desc }, i) => (
              <div
                key={name}
                className="bg-[#F7F7F9] p-10 hover:bg-white transition-colors duration-300 cursor-default"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "none" : "translateY(12px)",
                  transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s ease ${i * 60}ms`,
                }}
              >
                <h3 className="text-lg font-medium text-[#111118] mb-2">{name}</h3>
                <p className="text-sm text-[#A0A5B2] font-light leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
