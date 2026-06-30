import { Link } from "wouter";
import logoColor from "@assets/podco-logo-color.png";

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E7E8EE]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src={logoColor}
            alt="The POD Co."
            className="h-7"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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

        <div className="flex items-center">
          <a
            href="#contact"
            className="bg-[#3262DF] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#284FC4] transition-colors"
          >
            Book Demo
          </a>
        </div>
      </div>
    </header>
  );
}
