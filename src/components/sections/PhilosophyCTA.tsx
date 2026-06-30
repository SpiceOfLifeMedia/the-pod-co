import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function PhilosophyCTA() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="py-40 md:py-56 bg-[#3262DF] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.04]">
            Simplicity beats<br />features.
          </h2>
          <p className="text-xl text-white/70 mb-14 font-light">
            Stop troubleshooting. Start recording.
          </p>
          <a
            href="mailto:hello@thepodco.com"
            className="inline-flex items-center justify-center bg-white text-[#3262DF] px-10 py-5 rounded-md text-base font-semibold hover:bg-[#F7F7F9] transition-colors hover:-translate-y-0.5 duration-300"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
