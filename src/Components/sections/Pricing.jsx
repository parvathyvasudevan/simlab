import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <ScrollReveal direction="left" width="100%">
            <div className="rounded-3xl p-8 border border-slate-200 bg-white shadow-lg hover:border-brand-300 transition-all relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">For Institutions (B2B)</h3>
              <p className="text-slate-500 mb-6 text-sm">Universities, Hospitals, & Training Centers</p>
              <ul className="space-y-4 mb-8">
                {[
                  "Admin dashboard", 
                  "Student monitoring & analytics",
                  "Full institutional control",
                  "Referral & onboarding support"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full text-center py-3 px-6 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
                Contact Sales
              </a>
            </div>
          </ScrollReveal>


          <ScrollReveal direction="right" width="100%" delay={0.2}>
            <div className="rounded-3xl p-8 border border-slate-200 bg-brand-50 relative overflow-hidden hover:shadow-lg transition-all h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">For Individuals (B2C)</h3>
              <p className="text-slate-500 mb-6 text-sm">Doctors, Nurses, & Students</p>
              <ul className="space-y-4 mb-8">
                {[
                  "Direct registration",
                  "Standard pricing per module",
                  "Professional certification",
                  "Self-paced learning"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <Check className="w-5 h-5 text-slate-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="block w-full text-center py-3 px-6 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                Sign Up Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
