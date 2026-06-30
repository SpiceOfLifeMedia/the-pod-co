import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import podgoImg from "@assets/podgo.png";
import podgoMaxImg from "@assets/podgo-max.png";
import podcartImg from "@assets/podcart.png";

interface ProductProps {
  index: number;
  label: string;
  name: string;
  tagline: string;
  description: string;
  specs: string[];
  img: string;
  imgAlt: string;
  flip?: boolean;
  dark?: boolean;
}

function ProductSection({
  index,
  label,
  name,
  tagline,
  description,
  specs,
  img,
  imgAlt,
  flip,
  dark,
}: ProductProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      className={`py-32 md:py-48 ${dark ? "bg-[#111118] text-white" : "bg-white text-[#111118]"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""} flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16 md:gap-24`}
        >
          {/* Image — dominant */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={img}
              alt={imgAlt}
              className="w-full max-w-2xl object-contain drop-shadow-2xl"
              style={{
                filter: dark ? "drop-shadow(0 40px 80px rgba(0,0,0,0.6))" : "drop-shadow(0 40px 80px rgba(0,0,0,0.12))",
                animation: `float ${8 + index}s ease-in-out infinite`,
              }}
            />
          </div>

          {/* Copy */}
          <div className="flex-shrink-0 w-full md:w-[380px]">
            <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] font-medium mb-6">
              {label}
            </p>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-4 leading-[1.05]">
              {name}
            </h2>
            <p
              className="text-xl font-light mb-6 leading-snug"
              style={{ color: dark ? "#696E7C" : "#696E7C" }}
            >
              {tagline}
            </p>
            <p
              className="leading-relaxed font-light mb-10"
              style={{ color: dark ? "#696E7C" : "#696E7C" }}
            >
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {specs.map((spec) => (
                <span
                  key={spec}
                  className={`font-mono text-xs px-3 py-1.5 rounded-full ${
                    dark
                      ? "bg-white/6 text-[#A0A5B2] border border-white/10"
                      : "bg-[#F7F7F9] text-[#696E7C] border border-[#E7E8EE]"
                  }`}
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <div id="products">
      {/* Section label */}
      <div className="py-20 md:py-28 bg-white border-t border-[#E7E8EE]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-[#3262DF] uppercase tracking-[0.18em] font-medium mb-6">
            Hardware
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111118]">
            Purpose-built.<br className="hidden md:block" /> Ready in seconds.
          </h2>
        </div>
      </div>

      <ProductSection
        index={0}
        label="PODgo"
        name="PODgo"
        tagline="Portable spoken-content studio."
        description="Everything needed for a professional recording, packed into one briefcase. Unpack, connect, record."
        specs={["4 Participants", "Wireless Mics", "Battery-powered", "Auto-sync"]}
        img={podgoImg}
        imgAlt="PODgo — portable podcast studio"
        flip={false}
        dark={false}
      />

      <ProductSection
        index={1}
        label="PODgo MAX"
        name="PODgo MAX"
        tagline="Premium portable production."
        description="The full professional system. Integrated display, camera tracking, and a complete mic array in a single deployable unit."
        specs={["6 Participants", "Camera Tracking", "Integrated Display", "XLR Inputs"]}
        img={podgoMaxImg}
        imgAlt="PODgo MAX — professional production system"
        flip={true}
        dark={true}
      />

      <ProductSection
        index={2}
        label="PODcart"
        name="PODcart"
        tagline="Permanent production workstation."
        description="A studio that moves. Wheel in, deploy in seconds. Built for rooms that need to be production-ready without setup time."
        specs={["Studio-grade", "Acoustic Shielding", "Integrated Display", "Wheeled Chassis"]}
        img={podcartImg}
        imgAlt="PODcart — mobile studio workstation"
        flip={false}
        dark={false}
      />
    </div>
  );
}
