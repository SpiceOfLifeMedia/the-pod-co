import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const points = [
  {
    label: "Hardware",
    text: "Precision-engineered recording devices designed around real-world use.",
  },
  {
    label: "Software",
    text: "PODsentral — the production platform built for the entire workflow.",
  },
  {
    label: "Connectivity",
    text: "PODlink — instant, automatic sync across every device and every team.",
  },
  {
    label: "Artificial Intelligence",
    text: "Automatic enhancement, transcription and publishing — built in from day one.",
  },
];

export function TrustSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 md:py-48 bg-[#111118] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          {/* Statement */}
          <div className="max-w-4xl mb-24 md:mb-32">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-8 font-medium">
              Why The POD Co.
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.08]">
              Designed together.<br />
              Built as one system.
            </h2>
            <p className="mt-8 text-xl text-[#696E7C] font-light leading-relaxed max-w-2xl">
              Not assembled from third-party tools. Engineered from the ground up — hardware, software, connectivity and AI working as a single product.
            </p>
          </div>

          {/* Four pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            {points.map((point, i) => (
              <div key={point.label} className="group">
                <div className="h-px bg-white/10 mb-6 group-hover:bg-[#3262DF]/60 transition-colors duration-700" />
                <p className="font-mono text-xs text-[#3262DF] uppercase tracking-wider font-medium mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-medium text-white mb-3">{point.label}</h3>
                <p className="text-[#696E7C] leading-relaxed font-light">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
