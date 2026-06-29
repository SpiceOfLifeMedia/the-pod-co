import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function PhilosophyCTA() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="bg-primary text-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div 
          ref={ref as any}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">
            Simplicity beats features.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Stop troubleshooting. Start recording.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-md text-base font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center hover:-translate-y-0.5 duration-300">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}
