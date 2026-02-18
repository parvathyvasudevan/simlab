import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-[var(--color-midnight-purple)] relative overflow-hidden text-center border-t border-[var(--color-neon-purple)]/10">
      {/* Background Mix Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[var(--color-neon-purple)]/10 to-[var(--color-deep-indigo)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal width="100%" scale={1.05}>
          <h2 className="font-display text-2xl font-bold mb-8 text-[var(--color-neon-purple)] uppercase tracking-[0.3em] text-sm drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">Partnership Model</h2>
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-[var(--color-neon-purple)]/20 hover:border-[var(--color-neon-purple)]/40 transition-all duration-700 shadow-2xl relative overflow-hidden group">
             {/* Dynamic Glow */}
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/5 via-transparent to-[var(--color-deep-indigo)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
 
            <p className="text-2xl mb-10 font-light italic text-slate-200 relative z-10 leading-relaxed">
              "We dictate the technology, they provide the clinical expertise."
            </p>
            <div className="flex flex-col items-center relative z-10">
              <div className="text-4xl font-display font-bold tracking-[0.4em] text-white mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">DRÄGER</div>
              <div className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--color-neon-purple)] mb-8 opacity-80">Medical Academy</div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-neon-purple)] to-transparent mb-8"></div>
              <div className="text-xl text-[var(--color-medical-highlight)] font-display font-bold mb-4 tracking-wide">Advanced Medical Equipment Training</div>
              <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed text-justify group-hover:text-slate-300 transition-colors">
                SIMLAB licenses and integrates premium simulation content from Dräger Medical Academy under strict platform governance and quality standards.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Partners;
