import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const NODES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Hardware",
    desc: "Purpose-built.\nPowerful. Portable.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 23h10M14 19v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Software",
    desc: "PODsentral.\nEverything in one place.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" fill="currentColor" opacity="0.6"/>
        <path d="M8 14c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 14c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Connectivity",
    desc: "PODlink.\nAlways connected.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v22M3 14h22M5.5 5.5l17 17M22.5 5.5l-17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Artificial Intelligence",
    desc: "enhancing every\npart of the workflow.",
  },
];

export function Ecosystem() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="technology" className="bg-[#0D0F13] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          {/* Section label */}
          <p className="font-mono text-[10px] text-[#3262DF] uppercase tracking-[0.22em] font-semibold mb-12 md:mb-16">
            The POD Co. Ecosystem
          </p>

          {/* Horizontal flow */}
          <div className="flex items-start">
            {NODES.map((node, i) => (
              <div key={node.label} className="flex items-start flex-1">
                {/* Node */}
                <div className="flex flex-col items-center flex-1">
                  {/* Icon + connecting lines row */}
                  <div className="flex items-center w-full mb-6">
                    {/* Left line */}
                    {i > 0 && (
                      <div
                        className="flex-1 flex items-center"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transition: `opacity 0.6s ease ${i * 200}ms`,
                        }}
                      >
                        <div className="flex-1 h-px bg-[#3262DF]/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3262DF] mx-1 shrink-0" />
                        <div className="flex-1 h-px bg-[#3262DF]/40" />
                      </div>
                    )}
                    {/* Icon box */}
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-lg border border-white/10 bg-white/4 flex items-center justify-center text-[#A0A5B2] shrink-0"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "none" : "scale(0.85)",
                        transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
                      }}
                    >
                      {node.icon}
                    </div>
                    {/* Right line */}
                    {i < NODES.length - 1 && (
                      <div
                        className="flex-1 flex items-center"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transition: `opacity 0.6s ease ${i * 200 + 100}ms`,
                        }}
                      >
                        <div className="flex-1 h-px bg-[#3262DF]/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3262DF] mx-1 shrink-0" />
                        <div className="flex-1 h-px bg-[#3262DF]/40" />
                      </div>
                    )}
                  </div>

                  {/* Label + desc */}
                  <div
                    className="text-center px-2"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "none" : "translateY(8px)",
                      transition: `opacity 0.7s ease ${i * 150 + 200}ms, transform 0.7s ease ${i * 150 + 200}ms`,
                    }}
                  >
                    <p className="text-white font-medium text-sm mb-1.5">{node.label}</p>
                    <p className="text-[#696E7C] text-xs leading-relaxed whitespace-pre-line font-light">
                      {node.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
