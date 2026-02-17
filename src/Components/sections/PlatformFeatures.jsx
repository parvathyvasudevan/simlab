import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const PlatformFeatures = () => {
  const features = [
    { title: "Multi-Tenant Management", desc: "Manage multiple departments or campuses from a single, centralized dashboard." },
    { title: "Real-Life Modules", desc: "High-fidelity simulations for specialized equipment and clinical procedures." },
    { title: "Progress Tracking", desc: "Comprehensive reporting on individual and cohort performance over time." },
    { title: "Trainer Dashboards", desc: "Real-time monitoring and assessment tools for instructors to guide students." },
    { title: "Certification", desc: "Automated grading and instant certificate generation upon module completion." },
    { title: "Global Access", desc: "Secure cloud-based platform accessible from anywhere, anytime." }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-12">Platform Features</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-y-10 gap-x-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-4 group"
            >
              <div className="w-10 h-10 rounded bg-brand-50 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                {index + 1}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{feature.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
