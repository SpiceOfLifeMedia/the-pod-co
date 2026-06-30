import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoClear from "@assets/podco-logo-clear.png";

const NAV = [
  { label: "Features", href: "#software", dropdown: false },
  { label: "Pricing", href: "#pricing", dropdown: false },
  { label: "Education", href: "#education", dropdown: false },
  { label: "Enterprise", href: "#education", dropdown: false },
  { label: "About", href: "#about", dropdown: false },
];

const APP_URL = "https://podsentral.vercel.app";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0F13]">
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src={logoClear}
              alt="The POD Co."
              className="h-10"
              style={{ filter: "brightness(0) invert(1)" }}
            />
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

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/sign-in`}
              className="hidden md:inline-flex items-center text-sm text-[#A0A5B2] hover:text-white transition-colors font-medium px-3 py-2"
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/sign-up`}
              className="hidden md:inline-flex bg-[#3262DF] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#284FC4] transition-colors"
            >
              Get Started
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
        <div
          className="fixed inset-0 z-40 bg-[#0D0F13] pt-[60px] px-6"
          onClick={() => setOpen(false)}
        >
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
              href={`${APP_URL}/sign-in`}
              className="mt-6 text-[#A0A5B2] py-3 text-base font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/sign-up`}
              className="mt-2 bg-[#3262DF] text-white px-6 py-4 rounded-md text-base font-semibold text-center"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
