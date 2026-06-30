import podgoImg from "@assets/podgo.png";
import podgoMaxImg from "@assets/podgo-max.png";
import podcartImg from "@assets/podcart.png";

export function Hero() {
  return (
    <section className="bg-[#F0F1F3] pt-[60px] min-h-[520px] md:min-h-[600px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center min-h-[calc(520px)] md:min-h-[calc(600px)]">
        {/* Left: copy */}
        <div className="flex-1 pt-14 pb-16 md:py-20 max-w-[48%] z-10 relative">
          <p className="font-mono text-[10px] text-[#3262DF] uppercase tracking-[0.22em] font-semibold mb-6">
            The Spoken-Content Technology Company
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight text-[#0D0F13] leading-[1.04] mb-6">
            Professional voice.<br />
            Made effortless.
          </h1>
          <p className="text-[15px] text-[#4A5064] leading-relaxed mb-10 max-w-[300px]">
            Hardware, software and AI engineered<br className="hidden md:block"/>
            as one connected ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#technology"
              className="inline-flex items-center gap-2 bg-[#3262DF] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#284FC4] transition-colors"
            >
              Explore the ecosystem
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-[#4A5064] hover:text-[#0D0F13] transition-colors"
            >
              <span className="w-7 h-7 rounded-full border border-[#C8CDD8] flex items-center justify-center hover:border-[#3262DF] transition-colors">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M2 2l6 4-6 4" fill="currentColor"/>
                </svg>
              </span>
              Watch the film
            </a>
          </div>
        </div>

        {/* Right: product cluster */}
        <div className="hidden md:flex flex-1 relative items-end justify-center" style={{ height: "520px" }}>
          {/* PODgo MAX — upper right */}
          <img
            src={podgoMaxImg}
            alt="PODgo MAX"
            className="absolute"
            style={{
              width: "260px",
              right: "0px",
              top: "30px",
              objectFit: "contain",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.18))",
              animation: "float 10s ease-in-out infinite",
            }}
          />
          {/* PODcart — right side */}
          <img
            src={podcartImg}
            alt="PODcart"
            className="absolute"
            style={{
              width: "180px",
              right: "-20px",
              bottom: "40px",
              objectFit: "contain",
              filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.15))",
              animation: "float 12s ease-in-out infinite 1.5s",
            }}
          />
          {/* PODgo — center/bottom, largest */}
          <img
            src={podgoImg}
            alt="PODgo"
            className="absolute"
            style={{
              width: "420px",
              left: "20px",
              bottom: "-10px",
              objectFit: "contain",
              filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.16))",
              animation: "float 9s ease-in-out infinite 0.5s",
            }}
          />
        </div>
      </div>
    </section>
  );
}
