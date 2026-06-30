import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function PhilosophyCTA() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0F13 60%, #1a2a5e 100%)",
      }}
    >
      {/* Blue radial glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(50,98,223,0.35) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""} flex flex-col md:flex-row items-center md:items-end justify-between gap-10`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.06] max-w-xl">
            Your voice. Our technology.<br />
            Limitless possibilities.
          </h2>
          <div className="shrink-0">
            <a
              href="mailto:hello@thepodco.com"
              className="inline-flex items-center gap-2 bg-[#3262DF] text-white px-6 py-3.5 rounded-md text-sm font-semibold hover:bg-[#284FC4] transition-colors whitespace-nowrap"
            >
              Book a demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
