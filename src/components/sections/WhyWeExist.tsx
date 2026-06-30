import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function WhyWeExist() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-28 md:py-40 bg-[#F7F7F9]">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-8 font-medium">
            Our mission
          </p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111118] mb-10 leading-[1.1]">
            Everyone has a voice<br className="hidden md:block" /> worth hearing.
          </h2>
          <p className="text-lg md:text-xl text-[#696E7C] leading-relaxed font-light max-w-3xl">
            We build the world's simplest spoken-content ecosystem — removing every technical barrier between people and their voice. Our job is to get out of the way.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-[#E7E8EE]">
            {[
              {
                label: "Philosophy",
                text: "Simplicity beats features. Every decision starts with removing complexity.",
              },
              {
                label: "Technology",
                text: "Hardware and software designed as one product, not assembled from parts.",
              },
              {
                label: "Promise",
                text: "Professional recording should never require technical knowledge.",
              },
            ].map(({ label, text }) => (
              <div key={label}>
                <p className="font-mono text-xs text-[#3262DF] uppercase tracking-wider font-medium mb-3">
                  {label}
                </p>
                <p className="text-[#696E7C] leading-relaxed font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
