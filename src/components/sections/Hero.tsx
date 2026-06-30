import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import podgoImg from "@assets/podgo.png";

export function Hero() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Text block */}
      <div className="max-w-7xl mx-auto px-6 pt-44 md:pt-64 pb-20 md:pb-28">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""} max-w-3xl`}
        >
          <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.2em] mb-8 font-medium">
            Spoken-content technology
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#111118] leading-[0.98] mb-10">
            Professional<br />voice, made<br />effortless.
          </h1>
          <p className="text-lg md:text-xl text-[#696E7C] mb-12 max-w-xl leading-relaxed font-light">
            Hardware, software, connectivity and AI — one connected system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#3262DF] text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-[#284FC4] transition-colors inline-flex items-center justify-center"
            >
              Book a demo
            </a>
            <a
              href="#products"
              className="text-[#111118] px-8 py-4 rounded-md text-base font-semibold hover:text-[#3262DF] transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore products
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Full-width product — PODgo overlaps into next section */}
      <div className="relative w-full bg-[#F7F7F9] pb-0">
        <div className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 flex items-end justify-center">
          <img
            src={podgoImg}
            alt="PODgo — portable spoken-content studio"
            className="w-full object-contain"
            style={{
              maxHeight: "680px",
              filter: "drop-shadow(0 60px 120px rgba(0,0,0,0.14))",
              animation: "float-slow 12s ease-in-out infinite",
              marginBottom: "-80px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
