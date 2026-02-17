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
      title: "Access Modules",
      description: "Browse the extensive simulation-based training library."
    },
    {
      id: 3,
      title: "Simulate",
      description: "Perform real-life medical scenarios in the browser."
    },
    {
      id: 4,
      title: "Certify",
      description: "Get evaluated, graded & certified automatically."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            
            <h2 className="font-display text-3xl mt-2 font-bold text-white">How SIMLAB Works</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative p-6 bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-800 h-full">
                <div className="text-5xl font-bold text-slate-800 mb-4 group-hover:text-brand-500 transition-colors">{step.id}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
