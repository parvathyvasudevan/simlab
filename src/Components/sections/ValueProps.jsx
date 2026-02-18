import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const ValueProps = () => {
  const features = [
    {
      icon: "🎮",
      color: "blue",
      title: "Simulation-First",
      description: "Go beyond video lectures with interactive, hands-on scenarios that mimic real-world medical situations."
    },
    {
      icon: "🌍",
      color: "indigo",
      title: "Real-World Scenarios",
      description: "Train on authentic clinical cases designed by top medical experts and accredited institutions."
    },
    {
      icon: "📊",
      color: "teal",
      title: "Performance-Based",
      description: "Detailed analytics and feedback to track progress, identify gaps, and ensure clinical competency."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--color-medical-primary)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-medical-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-display text-3xl font-bold text-[var(--color-medical-highlight)]">What is SIMLAB?</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto text-justify">
              A next-generation platform delivering real-life simulation experiences for equipment training, clinical decision-making, and upskilling.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl hover:border-[var(--color-medical-accent)]/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 bg-[var(--color-medical-accent)]/10 text-[var(--color-medical-accent)] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[var(--color-medical-accent)] group-hover:text-white transition-all duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-medical-highlight)] mb-3 group-hover:text-[var(--color-medical-accent)] transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-justify">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
