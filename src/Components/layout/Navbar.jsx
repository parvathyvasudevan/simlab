import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Partners', href: '#partners' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-100 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-display font-bold text-2xl tracking-tight text-brand-600">SIMLAB</span>
          </div>


          <div className="hidden md:flex items-center gap-8 ml-auto">

            <div className="flex items-center gap-8">
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="group relative text-slate-600 hover:text-brand-600 font-medium transition-colors py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Separator */}
           


            <div className="flex items-center gap-4">
              <a href="#contact" className="text-slate-900 font-semibold hover:text-brand-600 transition-colors">
              
              </a>
              <a 
                href="#demo" 
                className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 hover:shadow-brand-500/40"
              >
                Request Demo
              </a>
            </div>
          </div>


          <div className="md:hidden flex items-center ml-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 hover:text-brand-600 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-slate-800 hover:text-brand-600 font-medium text-lg block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <hr className="border-slate-100 my-2" />
          <a href="#contact" className="text-slate-900 font-semibold text-lg block">
            Log In
          </a>
          <a href="#demo" className="bg-brand-600 text-white font-bold py-3 px-4 rounded-xl text-center block shadow-brand-500/30 shadow-lg">
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
