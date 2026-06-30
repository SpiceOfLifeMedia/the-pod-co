import logoColor from "@assets/podco-logo-color.png";

const LINKS = [
  {
    heading: "Products",
    items: [
      { label: "PODgo", href: "#" },
      { label: "PODgo MAX", href: "#" },
      { label: "PODcart", href: "#" },
      { label: "PODsentral", href: "#" },
      { label: "PODlink", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { label: "Schools", href: "#" },
      { label: "Universities", href: "#" },
      { label: "Business", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
  },
  {
    heading: "Technology",
    items: [
      { label: "Ecosystem", href: "#technology" },
      { label: "AI Production", href: "#" },
      { label: "Connectivity", href: "#" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#111118] text-[#696E7C] py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <img
              src={logoColor}
              alt="The POD Co."
              className="h-7 mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {LINKS.map(({ heading, items }) => (
            <div key={heading}>
              <h4 className="text-white font-medium mb-4 text-sm">{heading}</h4>
              <ul className="space-y-3 text-sm">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 The POD Co.</p>
          <p className="font-mono text-xs text-[#696E7C]/50 uppercase tracking-widest">
            One ecosystem. Many voices.
          </p>
        </div>
      </div>
    </footer>
  );
}
