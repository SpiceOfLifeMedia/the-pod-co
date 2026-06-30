import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import podgoImg from "@assets/podgo.png";
import podgoMaxImg from "@assets/podgo-max.png";
import podcartImg from "@assets/podcart.png";

const products = [
  {
    name: "PODgo",
    tagline: "The portable studio.",
    description: "Everything you need to record a professional episode — packed and ready to go.",
    specs: ["4 Participants", "Wireless Mics", "Battery-powered", "Auto-sync"],
    img: podgoImg,
    imgAlt: "PODgo — portable podcast studio kit",
    imgPosition: "object-center",
  },
  {
    name: "PODgo MAX",
    tagline: "Uncompromising capability.",
    description: "The full professional system. Camera tracking, multi-mic, and integrated display in one unit.",
    specs: ["6 Participants", "Camera Tracking", "Integrated Display", "XLR Inputs"],
    img: podgoMaxImg,
    imgAlt: "PODgo MAX — professional podcast production system",
    imgPosition: "object-center",
  },
  {
    name: "PODcart",
    tagline: "The mobile media room.",
    description: "A permanent studio that moves. Wheeled in, deployed in seconds, production-ready.",
    specs: ["Studio-grade", "Acoustic Shielding", "Integrated Display", "Wheeled Chassis"],
    img: podcartImg,
    imgAlt: "PODcart — mobile podcast studio on wheels",
    imgPosition: "object-center",
  },
];

export function Hardware() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-28 md:py-40 bg-[#F7F7F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <div className="mb-16 md:mb-20">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] mb-6 font-medium">
              Hardware
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111118]">
              Purpose-built.<br className="hidden md:block" /> Ready in seconds.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group flex flex-col bg-[#111118] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-black/25"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Product image */}
                <div className="relative h-[340px] w-full overflow-hidden bg-[#0D0F13] flex items-center justify-center p-8">
                  <img
                    src={product.img}
                    alt={product.imgAlt}
                    className={`w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 ${product.imgPosition}`}
                  />
                </div>

                {/* Info */}
                <div className="p-8 border-t border-white/5 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-medium text-white mb-1">{product.name}</h3>
                    <p className="text-[#3262DF] text-sm font-medium">{product.tagline}</p>
                  </div>
                  <p className="text-[#696E7C] text-sm leading-relaxed mb-6 font-light">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="font-mono text-xs px-3 py-1.5 bg-white/5 text-[#A0A5B2] rounded-full border border-white/8"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
