import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const Difference = () => {
  const differentiators = [
    {
      icon: "⚖️",
      title: "Decision-Based Scenarios",
      description: "Branching clinical paths where every choice impacts the patient outcome."
    },
    {
      icon: "🩺",
      title: "Equipment Workflows",
      description: "Replica interfaces of real medical devices for authentic operational training."
    },
    {
      icon: "📈",
      title: "Outcome-Driven",
      description: "Evaluation based on latest clinical guidelines and patient safety metrics."
    },
    {
      icon: "🛡️",
      title: "Mistake-Safe",
      description: "Learn from critical errors in a risk-free virtual environment."
    }
  ];

  return (
    <section id="difference" className="py-24 bg-brand-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <ScrollReveal width="100%" direction="left">
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">What Makes SIMLAB Different?</h2>
            </ScrollReveal>
            <ScrollReveal width="100%" delay={0.1} direction="left">
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                True-to-life medical simulations that bridge the gap between theory and practice. We focus on the consequences of decisions.
              </p>
            </ScrollReveal>
            
            <ul className="space-y-6">
              {differentiators.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 text-2xl mr-5 group-hover:scale-110 group-hover:border-brand-100 group-hover:text-brand-600 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <ScrollReveal width="100%" direction="right" delay={0.2}>
              <div className="relative aspect-square p-8">

                <div className="absolute inset-0 bg-brand-100/50 rounded-3xl transform rotate-3 scale-95 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Doctor using tablet" 
                  className="relative rounded-2xl shadow-xl z-10 border border-slate-100"
                />

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500"></div>
                    <span className="font-bold text-slate-800">Student Progress</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                        <span className="font-medium">Clinical Reasoning</span>
                        <span className="font-bold text-slate-900">92%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-brand-600 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                        <span className="font-medium">Procedure Time</span>
                        <span className="font-bold text-slate-900">85%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-brand-400 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
