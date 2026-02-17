import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-900 text-white text-center">

      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-brand-950 opacity-90"></div>
      

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build the Future of Medical Training <br/> with SIMLAB
          </h2>
          <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
            Join leading institutions worldwide in transforming healthcare education through immersive, risk-free simulation technology.
          </p>
        </ScrollReveal>

        <div className="border-y border-white/10 py-10 my-10 relative">
          <h3 className="text-2xl font-bold mb-8">Why Choose SIMLAB?</h3>
          <div className="grid md:grid-cols-3 gap-y-4 gap-x-8 text-left max-w-4xl mx-auto">
            {[
              "Simulation-first, not content-first",
              "Built for medical accuracy",
              "Scales from individuals to institutions",
              "Designed as a long-term platform",
              "Enterprise-grade security & reliability"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-brand-50 font-medium">{item}</span>
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
            className="group px-8 py-4 bg-white text-brand-900 rounded-xl font-bold text-lg shadow-lg hover:bg-slate-50 transition-colors duration-300 flex items-center gap-2"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
