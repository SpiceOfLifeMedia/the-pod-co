import { useIntersectionObserver } from "@/lib/use-intersection-observer";

const audiences = [
  "Schools", "Universities", "Businesses", "Creators", 
  "Government", "Training", "Corporate", "Media teams"
];

export function Solutions() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref as any}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-16 text-center">
            Built for every organisation.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={audience}
                className="bg-gray-50 border border-gray-100 rounded-xl p-8 flex items-center justify-center text-center hover:-translate-y-1 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-lg font-medium text-gray-900">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
