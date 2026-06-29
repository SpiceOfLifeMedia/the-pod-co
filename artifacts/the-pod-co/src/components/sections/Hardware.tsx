import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const products = [
  {
    name: "PODgo",
    tagline: "The portable studio",
    specs: ["2 Mics", "USB-C", "Battery-powered"],
    illustration: (
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/5">
        <rect x="75" y="100" width="150" height="100" rx="16" fill="currentColor" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
        <circle cx="110" cy="150" r="20" fill="rgba(255,255,255,0.1)"/>
        <circle cx="190" cy="150" r="20" fill="rgba(255,255,255,0.1)"/>
      </svg>
    )
  },
  {
    name: "PODgo MAX",
    tagline: "Uncompromising capability",
    specs: ["4 Mics", "XLR Inputs", "Phantom Power"],
    illustration: (
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/5">
        <rect x="60" y="80" width="180" height="140" rx="20" fill="currentColor" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
        <circle cx="95" cy="120" r="16" fill="rgba(255,255,255,0.1)"/>
        <circle cx="150" cy="120" r="16" fill="rgba(255,255,255,0.1)"/>
        <circle cx="205" cy="120" r="16" fill="rgba(255,255,255,0.1)"/>
        <rect x="95" y="170" width="110" height="10" rx="5" fill="rgba(255,255,255,0.1)"/>
      </svg>
    )
  },
  {
    name: "PODcart",
    tagline: "The mobile media room",
    specs: ["Integrated Display", "Acoustic Shielding", "Wheeled Chassis"],
    illustration: (
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/5">
        <rect x="80" y="40" width="140" height="220" rx="12" fill="currentColor" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
        <rect x="100" y="60" width="100" height="80" rx="8" fill="rgba(255,255,255,0.1)"/>
        <circle cx="100" cy="250" r="15" fill="rgba(255,255,255,0.1)"/>
        <circle cx="200" cy="250" r="15" fill="rgba(255,255,255,0.1)"/>
        <path d="M 60 160 L 240 160" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    )
  }
];

export function Hardware() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref as any}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900">
              Purpose-built hardware.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="group flex flex-col bg-[#0A0C10] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-[300px] w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#11141A] to-[#0A0C10]">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    {product.illustration}
                  </div>
                </div>
                
                <div className="p-8 border-t border-white/5">
                  <h3 className="text-2xl font-medium text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-6">{product.tagline}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.specs.map(spec => (
                      <span key={spec} className="font-mono text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
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
