import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function Hero() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="relative pt-36 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-white">
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

        <div className="mt-24 md:mt-32 relative">
          <div className="aspect-[21/9] w-full bg-[#F7F7F9] rounded-2xl border border-[#E7E8EE] flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center animate-float">
              <svg
                width="640"
                height="320"
                viewBox="0 0 640 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto"
              >
                {/* PODcart silhouette */}
                <rect x="260" y="20" width="120" height="180" rx="14" fill="#E7E8EE" />
                <rect x="276" y="36" width="88" height="68" rx="8" fill="#D0D2DB" />
                <circle cx="285" cy="222" r="14" fill="#E7E8EE" />
                <circle cx="355" cy="222" r="14" fill="#E7E8EE" />
                {/* PODgo silhouette */}
                <rect x="80" y="100" width="140" height="90" rx="14" fill="#E7E8EE" />
                <circle cx="118" cy="145" r="18" fill="#D0D2DB" />
                <circle cx="182" cy="145" r="18" fill="#D0D2DB" />
                {/* PODgo MAX silhouette */}
                <rect x="420" y="80" width="160" height="120" rx="16" fill="#E7E8EE" />
                <circle cx="454" cy="125" r="15" fill="#D0D2DB" />
                <circle cx="500" cy="125" r="15" fill="#D0D2DB" />
                <circle cx="546" cy="125" r="15" fill="#D0D2DB" />
                <rect x="450" y="162" width="100" height="8" rx="4" fill="#D0D2DB" />
                {/* connecting line */}
                <path d="M 220 145 Q 260 145 260 145" stroke="#D0D2DB" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M 380 145 Q 420 145 420 140" stroke="#D0D2DB" strokeWidth="2" strokeDasharray="6 4" />
              </svg>
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-xs text-[#A0A5B2] uppercase tracking-widest">
            PODcart · PODgo · PODgo MAX
          </p>
        </div>
      </div>
    </section>
  );
}
