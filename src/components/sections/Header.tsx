import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoTns from "@assets/podco-logo-tns.png";

const NAV = [
  { label: "Products", href: "#products", dropdown: true },
  { label: "PODsentral", href: "#software", dropdown: false },
  { label: "Solutions", href: "#solutions", dropdown: true },
  { label: "Technology", href: "#technology", dropdown: false },
  { label: "About", href: "#about", dropdown: false },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0F13]">
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img src={logoTns} alt="The POD Co." className="h-6" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(({ label, href, dropdown }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-0.5 text-sm text-[#A0A5B2] hover:text-white transition-colors"
              >
                {label}
                {dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex bg-[#3262DF] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#284FC4] transition-colors"
            >
              Book a demo
            </a>
            <button
              className="md:hidden p-1.5 text-[#A0A5B2]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0D0F13] pt-[60px] px-6" onClick={() => setOpen(false)}>
          <nav className="flex flex-col gap-1 pt-6">
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xl font-medium text-white py-3 border-b border-white/5"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-6 bg-[#3262DF] text-white px-6 py-4 rounded-md text-base font-semibold text-center"
              onClick={() => setOpen(false)}
            >
              Book a demo
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
