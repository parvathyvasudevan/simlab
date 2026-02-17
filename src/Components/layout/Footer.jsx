import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-950 border-t border-transparent text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-900/50">
                S
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">SIMLAB</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering healthcare professionals with next-generation simulation training. Master critical skills in a risk-free environment.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>


          <div>
            <h3 className="text-white font-bold text-lg mb-6">Platform</h3>
            <ul className="space-y-4">
              {['Virtual Simulations', 'Skill Assessment', 'Institutional Dashboard', 'Certified Authors', 'Integration API'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-brand-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About SIMLAB', 'Careers', 'Blog', 'Press Kit', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-brand-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm text-slate-500 mb-4">
              Subscribe to our newsletter for the latest simulation scenarios and medical updates.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-brand-900/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>


        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            &copy; 2026 SIMLAB. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-brand-400 transition-colors">
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
