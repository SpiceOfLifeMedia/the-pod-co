import logoTns from "@assets/podco-logo-tns.png";

const COLS = [
  {
    heading: "Products",
    items: ["PODgo", "PODgo MAX", "PODcart", "PODlink", "PODsentral"],
  },
  {
    heading: "Solutions",
    items: ["Podcasts", "Broadcast", "Business", "Education", "Government"],
  },
  {
    heading: "Technology",
    items: ["Hardware", "Software", "Connectivity", "AI"],
  },
  {
    heading: "Company",
    items: ["About us", "Careers", "News", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0D0F13] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_280px] gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <img src={logoTns} alt="The POD Co." className="h-8 mb-5" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-[#696E7C] text-sm leading-relaxed font-light">
              The spoken-content technology company.<br />
              Hardware, software and AI engineered<br />
              as one connected ecosystem.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLS.map(({ heading, items }) => (
              <div key={heading}>
                <h4 className="text-white font-semibold text-[11px] uppercase tracking-wider mb-4">{heading}</h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#696E7C] text-sm hover:text-white transition-colors font-light">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stay connected */}
          <div>
            <h4 className="text-white font-semibold text-[11px] uppercase tracking-wider mb-4">Stay connected</h4>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-[#696E7C] focus:outline-none focus:border-[#3262DF]/60 min-w-0"
              />
              <button className="px-3 py-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M10 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#696E7C] hover:text-white hover:border-white/30 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#696E7C] hover:text-white hover:border-white/30 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#696E7C] hover:text-white hover:border-white/30 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-[#696E7C]">
          <p>© 2025 The POD Co. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
