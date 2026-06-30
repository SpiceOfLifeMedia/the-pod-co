import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoColor from "@assets/podco-logo-color.png";

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
  { label: "Company", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E7E8EE]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <img src={logoColor} alt="The POD Co." className="h-7" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[#696E7C] hover:text-[#111118] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex bg-[#3262DF] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#284FC4] transition-colors"
            >
              Book a Demo
            </a>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#696E7C] hover:text-[#111118] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6" onClick={() => setOpen(false)}>
          <nav className="flex flex-col gap-2 pt-8">
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-2xl font-medium text-[#111118] py-3 border-b border-[#F7F7F9]"
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
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
