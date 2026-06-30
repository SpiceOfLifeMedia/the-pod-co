import logoColor from "@assets/podco-logo-color.png";

const COLS = [
  {
    heading: "Products",
    items: [
      { label: "PODgo", href: "#products" },
      { label: "PODgo MAX", href: "#products" },
      { label: "PODcart", href: "#products" },
      { label: "PODsentral", href: "#" },
      { label: "PODlink", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { label: "Schools", href: "#solutions" },
      { label: "Universities", href: "#solutions" },
      { label: "Business", href: "#solutions" },
      { label: "Enterprise", href: "#solutions" },
    ],
  },
  {
    heading: "Technology",
    items: [
      { label: "Ecosystem", href: "#technology" },
      { label: "AI Production", href: "#" },
      { label: "PODlink", href: "#" },
      { label: "Developers", href: "#" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#111118] text-[#696E7C] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top: logo + tagline */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20 pb-16 border-b border-white/6">
          <div className="max-w-xs">
            <img
              src={logoColor}
              alt="The POD Co."
              className="h-7 mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-[#696E7C] leading-relaxed font-light">
              Professional voice, made effortless. One connected ecosystem for spoken-content creation.
            </p>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm w-full">
            <p className="text-white text-sm font-medium mb-3">Stay in the loop</p>
            <p className="text-xs text-[#696E7C] mb-4">Product updates and industry insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder:text-[#696E7C] focus:outline-none focus:border-[#3262DF]/50"
              />
              <button className="bg-[#3262DF] text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-[#284FC4] transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 mb-20">
          {COLS.map(({ heading, items }) => (
            <div key={heading}>
              <h4 className="text-white font-medium mb-4 text-sm">{heading}</h4>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-[#696E7C] hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 The POD Co. All rights reserved.</p>
          <p className="font-mono text-xs text-[#696E7C]/40 uppercase tracking-widest">
            One ecosystem. Many voices.
          </p>
        </div>
      </div>
    </footer>
  );
}
