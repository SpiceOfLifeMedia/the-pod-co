import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function WhyWeExist() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div 
          ref={ref as any}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-8">
            Everyone has a voice worth hearing.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            We believe that technical complexity shouldn't stand in the way of great storytelling. 
            The POD Co. was founded on a simple conviction: if we remove the friction from professional audio, 
            creators can focus entirely on what they have to say. Our job is to get out of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
