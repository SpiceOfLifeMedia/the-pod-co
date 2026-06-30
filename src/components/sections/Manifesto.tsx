import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function Manifesto() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-40 md:py-56 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#111118] leading-[1.06]">
            Everyone has a voice<br /> worth hearing.
          </h2>
          <p className="mt-10 text-xl md:text-2xl text-[#696E7C] font-light max-w-2xl mx-auto leading-relaxed">
            We build the world's simplest spoken-content ecosystem —<br className="hidden md:block" /> removing every barrier between people and their voice.
          </p>
        </div>
      </div>
    </section>
  );
}
