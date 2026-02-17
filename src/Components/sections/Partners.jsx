import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="font-display text-2xl font-bold mb-6 text-slate-300">Partnership Model</h2>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors duration-500">
            <p className="text-xl mb-6 font-light italic text-slate-200">
              "We dictate the technology, they provide the clinical expertise."
            </p>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold tracking-widest text-brand-400 mb-2">Dräger</div>
              <div className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Medical Academy</div>
              <div className="text-xl text-white font-medium mb-4">Advanced Medical Equipment Training</div>
              <p className="text-slate-400 max-w-lg mx-auto text-sm">
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
