import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import podgoImg from "@assets/podgo.png";

export function Hero() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="relative pt-36 pb-0 md:pt-56 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""} max-w-4xl`}
        >
          <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-6 font-medium">
            Spoken-content technology
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111118] mb-8 leading-[1.06]">
            Professional voice,<br className="hidden md:block" /> made effortless.
          </h1>
          <p className="text-xl text-[#696E7C] mb-12 max-w-2xl leading-relaxed font-light">
            Hardware, software, connectivity and AI — designed as one connected system. Built for schools, universities, and enterprise teams.
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
              className="bg-transparent border border-[#E7E8EE] text-[#111118] px-8 py-4 rounded-md text-base font-semibold hover:border-[#A0A5B2] transition-colors inline-flex items-center justify-center"
            >
              Explore products
            </a>
          </div>
        </div>
      </div>

      {/* Full-width product hero — PODgo as the centrepiece */}
      <div className="mt-20 md:mt-28 relative w-full bg-[#F7F7F9] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-0 flex items-end justify-center">
          <img
            src={podgoImg}
            alt="PODgo — the portable podcast studio"
            className="w-full max-w-2xl object-contain drop-shadow-2xl animate-float"
            style={{ maxHeight: "560px" }}
          />
        </div>
        {/* Fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #F7F7F9)",
          }}
        />
        <p className="relative z-10 pb-4 text-center font-mono text-xs text-[#A0A5B2] uppercase tracking-widest">
          The PODgo
        </p>
      </div>
    </section>
  );
}
