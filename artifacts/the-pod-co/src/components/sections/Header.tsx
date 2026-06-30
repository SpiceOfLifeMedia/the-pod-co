import { Link } from "wouter";
import logoColor from "@assets/podco-logo-color.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src={logoColor}
            alt="The POD Co." 
            className="h-8"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Products</a>
          <a href="#solutions" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Log in
          </button>
          <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
}
