import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const CTA = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-white text-center">

      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-medical-primary)] to-[var(--color-medical-secondary)] opacity-90"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--color-medical-accent)] opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--color-medical-highlight)] opacity-10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight text-[var(--color-medical-text)]">
            Build the Future of Medical Training <br/> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)]">SIMLAB</span>
          </h2>
          <p className="text-[var(--color-medical-text-dim)] text-lg mb-10 max-w-2xl mx-auto text-justify">
            Join leading institutions worldwide in transforming healthcare education through immersive, risk-free simulation technology.
          </p>
        </ScrollReveal>

        <div className="border-y border-[var(--color-medical-accent)]/10 py-10 my-10 relative">
          <h3 className="text-2xl font-bold mb-8 font-display text-[var(--color-medical-text)]">Why Choose SIMLAB?</h3>
          <div className="grid md:grid-cols-3 gap-y-4 gap-x-8 text-left max-w-4xl mx-auto">
            {[
              "Simulation-first methodology",
              "Built for medical accuracy",
              "Scales for institutions",
              "Long-term platform support",
              "Enterprise-grade security"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-[var(--color-medical-accent)] flex-shrink-0" />
                <span className="text-[var(--color-medical-text-dim)] font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#demo" 
            className="group px-8 py-4 bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] text-white rounded-3xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white border border-[var(--color-medical-accent)]/20 text-[var(--color-medical-text)] rounded-3xl font-bold text-lg hover:bg-[var(--color-medical-secondary)] hover:border-[var(--color-medical-accent)]/40 transition-all duration-300 shadow-sm"
          >
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
