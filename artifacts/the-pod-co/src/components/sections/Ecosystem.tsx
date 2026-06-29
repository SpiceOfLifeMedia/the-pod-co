import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import { ArrowRight } from "lucide-react";

export function Ecosystem() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="products" className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref as any}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
              A connected workflow
            </h2>
            <p className="text-lg text-gray-600">
              The only complete ecosystem where purpose-built hardware meets cloud-native software.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative">
            
            {/* Stage 1 */}
            <div className="w-full md:w-1/4 flex flex-col items-center p-8 bg-gray-50 rounded-xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <span className="font-mono text-xs text-primary mb-4 uppercase tracking-wider font-semibold">Step 01</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Hardware</h3>
              <p className="text-sm text-gray-500 text-center mb-6">Capture flawless audio</p>
              <div className="font-mono text-xs text-gray-600 space-y-2 text-center bg-white w-full py-4 rounded-md border border-gray-100">
                <div>PODgo</div>
                <div className="text-gray-300">•</div>
                <div>PODgo MAX</div>
                <div className="text-gray-300">•</div>
                <div>PODcart</div>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center px-2">
              <span className="font-mono text-[10px] text-gray-400 mb-2 uppercase tracking-widest whitespace-nowrap">Auto-sync</span>
              <ArrowRight className="text-gray-300 w-6 h-6" />
            </div>
            
            <div className="md:hidden flex flex-col items-center py-2">
              <ArrowRight className="text-gray-300 w-6 h-6 rotate-90" />
            </div>

            {/* Stage 2 */}
            <div className="w-full md:w-1/4 flex flex-col items-center p-8 bg-gray-50 rounded-xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <span className="font-mono text-xs text-primary mb-4 uppercase tracking-wider font-semibold">Step 02</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Software</h3>
              <p className="text-sm text-gray-500 text-center mb-6">Record & review</p>
              <div className="font-mono text-xs text-gray-600 text-center bg-white w-full py-4 rounded-md border border-gray-100 flex items-center justify-center h-[98px]">
                PODsentral
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center px-2">
              <span className="font-mono text-[10px] text-gray-400 mb-2 uppercase tracking-widest whitespace-nowrap">Cloud transfer</span>
              <ArrowRight className="text-gray-300 w-6 h-6" />
            </div>

            <div className="md:hidden flex flex-col items-center py-2">
              <ArrowRight className="text-gray-300 w-6 h-6 rotate-90" />
            </div>

            {/* Stage 3 */}
            <div className="w-full md:w-1/4 flex flex-col items-center p-8 bg-gray-50 rounded-xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <span className="font-mono text-xs text-primary mb-4 uppercase tracking-wider font-semibold">Step 03</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Connectivity</h3>
              <p className="text-sm text-gray-500 text-center mb-6">Share with teams</p>
              <div className="font-mono text-xs text-gray-600 text-center bg-white w-full py-4 rounded-md border border-gray-100 flex items-center justify-center h-[98px]">
                Drive / AWS / Direct
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center px-2">
              <span className="font-mono text-[10px] text-gray-400 mb-2 uppercase tracking-widest whitespace-nowrap">Process</span>
              <ArrowRight className="text-gray-300 w-6 h-6" />
            </div>

            <div className="md:hidden flex flex-col items-center py-2">
              <ArrowRight className="text-gray-300 w-6 h-6 rotate-90" />
            </div>

            {/* Stage 4 */}
            <div className="w-full md:w-1/4 flex flex-col items-center p-8 bg-primary/5 rounded-xl border border-primary/20 hover:-translate-y-1 transition-transform duration-300">
              <span className="font-mono text-xs text-primary mb-4 uppercase tracking-wider font-semibold">Step 04</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">AI Production</h3>
              <p className="text-sm text-gray-600 text-center mb-6">Enhance & publish</p>
              <div className="font-mono text-xs text-primary text-center bg-white w-full py-4 rounded-md border border-primary/10 flex items-center justify-center h-[98px]">
                Smart Drafts
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
