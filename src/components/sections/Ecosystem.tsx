import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import { ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    layer: "Hardware",
    tagline: "Capture flawless audio",
    items: ["PODgo", "PODgo MAX", "PODcart"],
    accent: false,
  },
  {
    step: "02",
    layer: "Software",
    tagline: "Record and review",
    items: ["PODsentral"],
    accent: false,
  },
  {
    step: "03",
    layer: "Connectivity",
    tagline: "Sync across your team",
    items: ["PODlink"],
    accent: false,
  },
  {
    step: "04",
    layer: "AI Production",
    tagline: "Enhance and publish",
    items: ["Record", "Enhance", "Publish", "Transcribe"],
    accent: true,
  },
];

export function Ecosystem() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="technology" className="py-28 md:py-40 bg-white border-y border-[#E7E8EE]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <div className="max-w-2xl mb-20">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-6 font-medium">
              One connected ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111118]">
              Hardware to publish,<br className="hidden md:block" /> in a single system.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 relative">
            {STAGES.map((stage, i) => (
              <>
                <div
                  key={stage.step}
                  className={`w-full md:w-1/4 flex flex-col p-8 rounded-xl border transition-transform duration-300 hover:-translate-y-1 ${
                    stage.accent
                      ? "bg-[#E7F2FF] border-[#3262DF]/20"
                      : "bg-[#F7F7F9] border-[#E7E8EE]"
                  }`}
                >
                  <span className="font-mono text-xs text-[#3262DF] mb-4 uppercase tracking-wider font-semibold">
                    Step {stage.step}
                  </span>
                  <h3 className="text-xl font-medium text-[#111118] mb-1">{stage.layer}</h3>
                  <p className="text-sm text-[#A0A5B2] mb-6">{stage.tagline}</p>
                  <div
                    className={`font-mono text-xs space-y-2 py-4 px-4 rounded-lg border ${
                      stage.accent
                        ? "bg-white border-[#3262DF]/10 text-[#3262DF]"
                        : "bg-white border-[#E7E8EE] text-[#696E7C]"
                    }`}
                  >
                    {stage.items.map((item, idx) => (
                      <div key={item}>
                        <div>{item}</div>
                        {idx < stage.items.length - 1 && (
                          <div className="text-[#E7E8EE] my-1.5">·</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {i < STAGES.length - 1 && (
                  <div key={`arrow-${i}`} className="hidden md:flex flex-col items-center justify-center px-1 shrink-0">
                    <ArrowRight className="text-[#E7E8EE] w-5 h-5" />
                  </div>
                )}
                {i < STAGES.length - 1 && (
                  <div key={`arrow-m-${i}`} className="md:hidden flex items-center justify-center py-2">
                    <ArrowRight className="text-[#E7E8EE] w-5 h-5 rotate-90" />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
