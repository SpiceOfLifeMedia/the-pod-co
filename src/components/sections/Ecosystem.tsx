import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const LAYERS = [
  {
    name: "The POD Co.",
    sublabel: "The ecosystem",
    items: null,
    accent: true,
  },
  {
    name: "Hardware",
    sublabel: "Capture",
    items: ["PODgo", "PODgo MAX", "PODcart"],
    accent: false,
  },
  {
    name: "Software",
    sublabel: "Produce",
    items: ["PODsentral"],
    accent: false,
  },
  {
    name: "Connectivity",
    sublabel: "Sync",
    items: ["PODlink"],
    accent: false,
  },
  {
    name: "Artificial Intelligence",
    sublabel: "Enhance & Publish",
    items: ["Record", "Enhance", "Publish", "Transcribe"],
    accent: false,
  },
];

export function Ecosystem() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="technology" className="py-32 md:py-48 bg-white border-t border-[#E7E8EE]">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          {/* Header */}
          <div className="mb-20 md:mb-28">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-6 font-medium">
              One connected ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111118]">
              Hardware to publish,<br className="hidden md:block" /> in a single system.
            </h2>
          </div>

          {/* Vertical flow */}
          <div className="relative">
            {LAYERS.map((layer, i) => (
              <div key={layer.name}>
                {/* Layer row */}
                <div
                  className="flex items-start gap-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "none" : "translateY(16px)",
                    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 130}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 130}ms`,
                  }}
                >
                  {/* Left: step indicator */}
                  <div className="flex flex-col items-center shrink-0 pt-1">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-semibold shrink-0"
                      style={{
                        background: layer.accent ? "#3262DF" : "#F7F7F9",
                        color: layer.accent ? "#fff" : "#3262DF",
                        border: layer.accent ? "none" : "1px solid #E7E8EE",
                      }}
                    >
                      {layer.accent ? "◻" : String(i).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="flex-1 pb-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="text-xl md:text-2xl font-medium text-[#111118]">{layer.name}</h3>
                      <span className="font-mono text-xs text-[#A0A5B2] uppercase tracking-wider">{layer.sublabel}</span>
                    </div>
                    {layer.items && (
                      <div className="flex flex-wrap gap-2 mt-3 mb-2">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#F7F7F9] text-[#696E7C] border border-[#E7E8EE]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector line between layers */}
                {i < LAYERS.length - 1 && (
                  <div
                    className="ml-4 w-px bg-[#E7E8EE]"
                    style={{
                      height: "52px",
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.5s ease ${i * 130 + 300}ms`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
