import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-[var(--color-medical-primary)] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-medical-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-[var(--color-medical-accent)] font-bold tracking-wide uppercase text-sm mb-3">Flexible Plans</h2>
            <h3 className="font-display text-4xl font-bold text-[var(--color-medical-text)] mb-6">Choose Your Pathway</h3>
            <p className="text-[var(--color-medical-text-dim)] text-lg text-justify">Scalable solutions for individual professionals and large healthcare institutions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <ScrollReveal direction="left" width="100%">
            <div className="glass-panel rounded-3xl p-10 h-full relative group bg-white border border-[var(--color-medical-accent)]/10 hover:border-[var(--color-medical-accent)]/30 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-medical-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                  <div className="w-14 h-14 bg-[var(--color-medical-accent)]/10 rounded-2xl flex items-center justify-center mb-6 text-[var(--color-medical-accent)] border border-[var(--color-medical-accent)]/10 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[var(--color-medical-text)] mb-2">Institutional Access</h3>
                  <p className="text-[var(--color-medical-text-dim)] mb-8 text-sm h-10 text-justify">For Hospitals, Universities & Training Centers requiring full administrative control.</p>
                  
                  <div className="space-y-4 mb-10">
                    {[
                      "Dedicated Admin Dashboard", 
                      "Student Performance Analytics",
                      "Custom Scenario Builder",
                      "API Integration Support",
                      "Priority 24/7 Support"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-[var(--color-medical-text-dim)]">
                        <div className="w-6 h-6 rounded-full bg-[var(--color-medical-accent)]/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-[var(--color-medical-accent)]" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="block w-full text-center py-4 rounded-3xl bg-white border border-[var(--color-medical-accent)]/20 text-[var(--color-medical-text)] font-bold hover:bg-[var(--color-medical-accent)] hover:text-white hover:border-[var(--color-medical-accent)] transition-all duration-300 shadow-sm">
                    Contact Sales
                  </a>
              </div>
            </div>
          </ScrollReveal>


          <ScrollReveal direction="right" width="100%" delay={0.2}>
            <div className="rounded-3xl p-10 h-full relative overflow-hidden group border border-[var(--color-medical-accent)]/20 bg-gradient-to-br from-white via-white to-[var(--color-medical-secondary)] shadow-sm hover:shadow-2xl transition-all duration-500">
              {/* Highlight Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-medical-accent)] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-[var(--color-medical-accent)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[var(--color-medical-accent)]/30 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold">P</span>
                      </div>
                      <span className="px-3 py-1 bg-[var(--color-medical-accent)]/20 text-[var(--color-medical-accent)] text-xs font-bold uppercase rounded-full border border-[var(--color-medical-accent)]/30">Most Popular</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[var(--color-medical-text)] mb-2">Pro Individual</h3>
                  <p className="text-[var(--color-medical-text-dim)] mb-8 text-sm h-10 text-justify">For Doctors, Nurses & Specialists seeking advanced certification.</p>
                  
                  <div className="space-y-4 mb-10">
                    {[
                      "Unlimited VR Module Access",
                      "Global Certification",
                      "Offline Mode",
                      "Peer-to-Peer Feedback",
                      "Monthly Skill Assessment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-[var(--color-medical-text)]">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                            <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <a href="#signup" className="block w-full text-center py-4 rounded-3xl bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    Get Started Now
                  </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
