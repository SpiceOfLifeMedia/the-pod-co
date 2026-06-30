import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import podgoImg from "@assets/podgo.png";
import podgoMaxImg from "@assets/podgo-max.png";
import podcartImg from "@assets/podcart.png";

const PRODUCTS = [
  {
    name: "PODgo",
    desc: "Portable spoken-content studio.",
    img: podgoImg,
    alt: "PODgo",
  },
  {
    name: "PODgo MAX",
    desc: "Premium mobile production.",
    img: podgoMaxImg,
    alt: "PODgo MAX",
  },
  {
    name: "PODcart",
    desc: "Permanent production workstation.",
    img: podcartImg,
    alt: "PODcart",
  },
];

export function Hardware() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="products" className="bg-[#0D0F13] py-10 md:py-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-mono text-[10px] text-[#3262DF] uppercase tracking-[0.22em] font-semibold">
            Our Hardware
          </p>
          <a href="#" className="text-sm text-[#A0A5B2] hover:text-white transition-colors flex items-center gap-1.5">
            View all products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Three product cards */}
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""} grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5`}
        >
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="bg-[#111318] p-8 flex flex-col group hover:bg-[#15181F] transition-colors duration-300 relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : "translateY(12px)",
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
              }}
            >
              <div className="mb-6">
                <h3 className="text-white text-lg font-semibold mb-1.5">{p.name}</h3>
                <p className="text-[#696E7C] text-sm leading-snug font-light">{p.desc}</p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm text-[#A0A5B2] hover:text-white transition-colors mb-8"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <div className="flex-1 flex items-end justify-center min-h-[200px]">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full max-w-[260px] object-contain transition-transform duration-700 group-hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                    maxHeight: "200px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
