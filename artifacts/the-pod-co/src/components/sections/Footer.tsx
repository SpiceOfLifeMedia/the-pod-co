export function Footer() {
  return (
    <footer className="bg-[#0A0C10] text-gray-400 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <img 
              src="/podco-logo-white.png" 
              alt="The POD Co." 
              className="h-8 mb-6 opacity-90"
            />
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">PODgo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PODgo MAX</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PODcart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PODsentral</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Schools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Universities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 The POD Co.</p>
          <div className="font-mono text-xs opacity-50">Designed for clarity</div>
        </div>
      </div>
    </footer>
  );
}
