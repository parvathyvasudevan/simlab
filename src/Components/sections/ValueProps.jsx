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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900">What is SIMLAB?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-14 h-14 bg-${feature.color}-100 text-${feature.color}-600 rounded-xl flex items-center justify-center text-3xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
