import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function Manifesto() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="bg-[#0D0F13] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""} flex flex-col md:flex-row md:items-center gap-10 md:gap-20`}
        >
          {/* Left: big quote */}
          <div className="flex-[3]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
              Everyone has a voice worth hearing.
            </h2>
          </div>
          {/* Right: body */}
          <div className="flex-[2]">
            <p className="text-[#696E7C] text-base leading-relaxed font-light">
              We exist to remove the barriers between you and your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
