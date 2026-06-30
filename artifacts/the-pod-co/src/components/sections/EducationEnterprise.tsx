const VERTICALS = [
  { label: "Schools & universities", description: "Podcast programmes, audio storytelling and media curricula." },
  { label: "Councils & government", description: "Public communications, community radio and civic engagement content." },
  { label: "Businesses & agencies", description: "Internal comms, brand podcasts and content marketing production." },
  { label: "Churches & charities", description: "Sermon series, community broadcasts and fundraising campaigns." },
  { label: "Sports clubs & associations", description: "Match previews, press conferences and fan-engagement shows." },
  { label: "Enterprise teams", description: "Large-scale production workflows with admin controls and reporting." },
];

export function EducationEnterprise() {
  return (
    <section id="education" className="bg-[#080A0D] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="sticky top-28">
            <p className="font-mono text-[10px] text-[#3262DF] uppercase tracking-[0.22em] font-semibold mb-5">
              Education &amp; Enterprise
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Built for your organisation.
            </h2>
            <p className="text-[#A0A5B2] text-base leading-relaxed mb-8 max-w-sm">
              Purchasing for a school, university, council or enterprise team? We'll tailor a licence
              that fits your team size, budget and workflow — no per-seat pricing surprises.
            </p>

            <div className="space-y-3 mb-10">
              {["Bulk licences for any team size", "Admin controls & usage reporting", "Dedicated onboarding support", "Priority technical support", "Custom integrations available"].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-[#C8CDD8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3262DF] shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3262DF] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#284FC4] transition-colors"
              >
                Contact our team
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/6 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 border border-white/8 transition-colors"
              >
                View pricing
              </a>
            </div>

            <p className="mt-5 text-xs text-[#696E7C]">
              We typically respond within one business day.
            </p>
          </div>

          {/* Right: vertical grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VERTICALS.map(({ label, description }) => (
              <div
                key={label}
                className="bg-[#13151A] border border-white/5 rounded-xl p-5"
              >
                <p className="text-white text-sm font-semibold mb-1.5">{label}</p>
                <p className="text-[#696E7C] text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
