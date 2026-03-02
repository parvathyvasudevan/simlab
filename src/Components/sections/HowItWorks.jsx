import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Register",
      description: "Institution or Individual creates a secure account."
    },
    {
      id: 2,
      title: "Select Module",
      description: "Browse the extensive simulation-based training library."
    },
    {
      id: 3,
      title: "Simulate",
      description: "Perform real-life medical scenarios in VR or browser."
    },
    {
      id: 4,
      title: "Certify",
      description: "Get evaluated, graded & certified automatically."
    }
  ];

  return (
    <section className="py-32 bg-[var(--color-medical-primary)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(var(--color-medical-accent) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-medical-highlight)]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-[var(--color-medical-accent)] font-bold tracking-wide uppercase text-sm mb-3">Process</h2>
            <h3 className="font-display text-4xl font-bold text-[var(--color-medical-highlight)]">How SIMLAB Works</h3>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connector */}
              {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-medical-accent)]/10 to-transparent z-0 transform -translate-x-8"></div>
              )}

              <div className="glass-panel p-8 rounded-3xl h-full relative z-10 border border-[var(--color-medical-accent)]/10 bg-white hover:border-[var(--color-medical-accent)]/30 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="text-4xl font-bold text-[var(--color-medical-accent)]/10 absolute top-4 left-6">{step.id}</div>
                
                <h4 className="text-xl font-display font-bold mb-3 mt-10 text-[var(--color-medical-highlight)] group-hover:text-[var(--color-medical-accent)] transition-colors">{step.title}</h4>
                <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed text-justify">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
