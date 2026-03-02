import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import simlabLogo from '../../assets/simlab-logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Training', href: '#training' },
    { name: 'VR Learning', href: '#vr-learning' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[var(--color-midnight-purple)]/80 backdrop-blur-xl border-[var(--color-neon-purple)]/20 py-3 shadow-2xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-deep-indigo)] origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={simlabLogo} 
              alt="Simlab Logo" 
              className="h-14 w-14 object-contain drop-shadow-[0_0_10px_rgba(27,117,188,0.3)] transition-transform duration-300 hover:scale-105" 
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center lg:gap-8 md:gap-4 ml-auto">
            <div className={`flex items-center gap-1 ${isScrolled ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} rounded-full px-2 py-1 border backdrop-blur-sm transition-colors`}>
              {navLinks.map((item) => (
                <motion.a 
                  key={item.name}
                  href={item.href} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`relative lg:px-5 md:px-3 py-2 text-sm font-bold ${isScrolled ? 'text-slate-300' : 'text-[var(--color-medical-text)]'} hover:text-[var(--color-neon-purple)] transition-all rounded-full hover:bg-[var(--color-neon-purple)]/5 flex items-center gap-1 group`}
                >
                  {item.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div 
                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-neon-purple)]"
                     whileHover={{ width: '40%' }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-4">
              <a 
                href="#demo" 
                className="px-6 py-2.5 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-deep-indigo)] text-white rounded-full font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-0.5 border border-white/10"
              >
                Book Demo
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-white' : 'text-[var(--color-medical-text)]'} hover:text-[var(--color-neon-purple)] focus:outline-none p-2 ${isScrolled ? 'bg-white/10 border-white/10' : 'bg-black/5 border-black/10'} rounded-lg border transition-all`}
            >
              {isScrolled && isMobileMenuOpen ? <X className="h-6 w-6" /> : isScrolled ? <Menu className="h-6 w-6" /> : isMobileMenuOpen ? <X className="h-6 w-6 text-[var(--color-medical-text)]" /> : <Menu className="h-6 w-6 text-[var(--color-medical-text)]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-midnight-purple)] border-b border-[var(--color-neon-purple)]/20 shadow-2xl py-6 px-4 flex flex-col space-y-4 animate-fade-in-up">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-[var(--color-neon-purple)] font-medium text-lg block border-b border-white/5 pb-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="#demo" className="bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-deep-indigo)] text-white font-bold py-3 px-4 rounded-xl text-center block shadow-lg mt-4">
            Book Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
