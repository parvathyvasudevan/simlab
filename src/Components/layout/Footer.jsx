import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[var(--color-medical-accent)]/10 text-[var(--color-medical-text-dim)] pt-24 pb-12 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[var(--color-medical-accent)]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                S
              </div>
              <span className="font-display font-bold text-2xl text-[var(--color-medical-text)] tracking-tight">SIM<span className="text-[var(--color-medical-accent)]">LAB</span></span>
            </div>
            <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed max-w-xs">
              Empowering healthcare professionals with next-generation simulation training. Master critical skills in a risk-free environment.
            </p>
            <div className="flex gap-4 pt-2">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-[var(--color-medical-accent)]/5 border border-[var(--color-medical-accent)]/10 flex items-center justify-center text-[var(--color-medical-text-dim)] hover:bg-[var(--color-medical-accent)] hover:text-white hover:border-[var(--color-medical-accent)] transition-all duration-300 group">
                  <Icon size={18} className="transform group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-[var(--color-medical-text)] font-display font-bold text-lg mb-6 flex items-center gap-2">
                Platform
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-medical-accent)]"></span>
            </h3>
            <ul className="space-y-4">
              {['Virtual Simulations', 'Skill Assessment', 'Institutional Dashboard', 'Certified Authors', 'Integration API'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[var(--color-medical-accent)] transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[var(--color-medical-accent)]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[var(--color-medical-text)] font-display font-bold text-lg mb-6 flex items-center gap-2">
                Company
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-medical-highlight)]"></span>
            </h3>
            <ul className="space-y-4">
              {['About SIMLAB', 'Careers', 'Blog', 'Press Kit', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[var(--color-medical-accent)] transition-colors flex items-center gap-2 group">
                     <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-[var(--color-medical-text)] font-display font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm text-[var(--color-medical-text-dim)] mb-6">
              Subscribe to our newsletter for the latest simulation scenarios and medical updates.
            </p>
            <div className="space-y-3">
              <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-[var(--color-medical-text-dim)]" size={18} />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-[var(--color-medical-secondary)] border border-[var(--color-medical-accent)]/10 rounded-3xl pl-12 pr-4 py-3 text-sm text-[var(--color-medical-text)] focus:outline-none focus:border-[var(--color-medical-accent)] transition-all placeholder:text-[var(--color-medical-text-dim)]/50"
                  />
              </div>
               <button className="w-full bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] text-white px-4 py-3 rounded-3xl text-sm font-bold transition-all shadow-md hover:shadow-xl cursor-pointer">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-medical-accent)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            &copy; 2026 SIMLAB. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-[var(--color-medical-accent)] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
