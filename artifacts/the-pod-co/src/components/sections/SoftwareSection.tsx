import { useIntersectionObserver } from "@/lib/use-intersection-observer";
import podsentral from "@assets/podsentral-logo.png";

function AppMockup() {
  const projects = [
    { name: "The Mindset Coach", ep: "Ep. 12", color: "#3262DF" },
    { name: "Business Talks", ep: "Ep. 07", color: "#22C55E" },
    { name: "Product Launch", ep: "Ep. 03", color: "#F59E0B" },
    { name: "The Daily Brief", ep: "Ep. 24", color: "#EC4899" },
  ];
  const recordings = [
    { name: "Kiran Mahadeshwar", guest: "The Mindset Coach", dur: "48:24", date: "2d ago" },
    { name: "Paul-Ernst Soucis Downl...", guest: "Business Talks", dur: "34:08", date: "5d ago" },
    { name: "Rebecca Tomkins", guest: "Product Launch", dur: "52:41", date: "1w ago" },
  ];

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#111318] border border-white/10 shadow-2xl" style={{ aspectRatio: "16/10" }}>
      {/* Window chrome */}
      <div className="h-8 bg-[#0D0F13] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="flex-1 mx-4">
          <div className="mx-auto w-40 h-4 rounded-sm bg-white/5 flex items-center justify-center">
            <span className="text-[9px] text-[#696E7C]">podsentral.app</span>
          </div>
        </div>
      </div>

      {/* App layout */}
      <div className="flex h-[calc(100%-32px)]">
        {/* Sidebar */}
        <div className="w-[140px] bg-[#0D0F13] border-r border-white/5 p-3 shrink-0">
          <div className="flex items-center gap-1.5 mb-5 px-1">
            <img src={podsentral} alt="PODsentral" style={{ height: "18px", filter: "brightness(0) invert(1)" }} />
          </div>
          {["Dashboard", "Projects", "Recordings", "AI Enhance", "Publishing", "Calendar", "Analytics", "Settings"].map((item, i) => (
            <div
              key={item}
              className={`text-[10px] px-2 py-1.5 rounded mb-0.5 ${i === 1 ? "bg-white/8 text-white font-medium" : "text-[#696E7C] hover:text-white"}`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          {/* Top bar */}
          <div className="h-8 border-b border-white/5 flex items-center justify-between px-4">
            <span className="text-white text-[11px] font-medium">Projects</span>
            <div className="flex items-center gap-2">
              <div className="text-[10px] text-[#696E7C]">New Project</div>
              <div className="w-16 h-5 bg-[#3262DF] rounded text-[9px] text-white flex items-center justify-center">+ New</div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Project cards */}
            <div className="grid grid-cols-4 gap-2">
              {projects.map((p) => (
                <div key={p.name} className="bg-[#0D0F13] rounded-lg p-3 border border-white/5">
                  <div className="w-full h-10 rounded mb-2 flex items-center justify-center" style={{ background: `${p.color}20` }}>
                    <div className="flex gap-0.5">
                      {[4,6,3,7,5,4,6].map((h, j) => (
                        <div key={j} className="w-0.5 rounded-full" style={{ height: `${h * 2}px`, background: p.color, opacity: 0.7 }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-[9px] text-white font-medium truncate">{p.name}</p>
                  <p className="text-[8px] text-[#696E7C]">{p.ep}</p>
                </div>
              ))}
            </div>

            {/* Recent recordings */}
            <div>
              <p className="text-[10px] text-[#A0A5B2] mb-2">Recent Recordings</p>
              <div className="space-y-1">
                {recordings.map((r) => (
                  <div key={r.name} className="flex items-center justify-between py-1.5 border-b border-white/4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#3262DF]/30 flex items-center justify-center">
                        <span className="text-[7px] text-[#3262DF] font-bold">{r.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-white">{r.name}</p>
                        <p className="text-[8px] text-[#696E7C]">{r.guest}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-[#A0A5B2]">{r.dur}</p>
                      <p className="text-[8px] text-[#696E7C]">{r.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-[160px] bg-[#0D0F13] border-l border-white/5 p-3 shrink-0 hidden lg:block">
          <div className="mb-4">
            <p className="text-[10px] text-white font-semibold mb-1.5">AI Enhance</p>
            {["Noise Reduction", "Level Balance", "EQ Optimize"].map((f) => (
              <div key={f} className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] text-[#696E7C]">{f}</span>
                <div className="w-6 h-3 bg-[#3262DF] rounded-full" />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <p className="text-[10px] text-white font-semibold mb-1.5">Transcription</p>
            <div className="space-y-1">
              {["00:00 Hello everyone...", "00:12 Today we're...", "00:28 The key insight..."].map((line) => (
                <div key={line} className="text-[8px] text-[#696E7C] leading-relaxed">{line}</div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] text-white font-semibold mb-1.5">Publishing</p>
            <div className="flex flex-wrap gap-1">
              {["Spotify", "Apple", "YouTube", "RSS"].map((p) => (
                <div key={p} className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-[6px] text-[#A0A5B2] font-bold">{p[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SoftwareSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="software" className="bg-white py-16 md:py-24 border-t border-[#E7E8EE]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref as any}
          className={`fade-in-section ${isVisible ? "is-visible" : ""} flex flex-col md:flex-row items-center gap-12 md:gap-16`}
        >
          {/* Left: copy */}
          <div className="md:w-[340px] shrink-0">
            <p className="font-mono text-[10px] text-[#3262DF] uppercase tracking-[0.22em] font-semibold mb-6">
              Our Software
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0D0F13] mb-5 leading-[1.02]">
              PODsentral
            </h2>
            <p className="text-[#4A5064] text-base leading-relaxed mb-4 font-light">
              The operating system for professional spoken-content production.
            </p>
            <p className="text-[#A0A5B2] text-sm leading-relaxed mb-8 font-light">
              Record. Enhance. Transcribe. Publish. Manage.<br />
              Everything you need. All in one place.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0D0F13] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#1E2330] transition-colors"
            >
              Explore PODsentral
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: app mockup */}
          <div className="flex-1 w-full">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
