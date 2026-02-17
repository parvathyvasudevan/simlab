import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Building2, ChevronRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const InstitutionControl = () => {
  const controls = [
    { 
      icon: <GraduationCap className="w-8 h-8" />, 
      title: "Simulation-Based Learning", 
      description: "Immersive, risk-free training scenarios that bridge the gap between theory and practice." 
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />, 
      title: "Enterprise-Grade Security", 
      description: "Advanced data protection and compliance standards for sensitive institutional records." 
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      title: "Scalable & Multi-Tenant", 
      description: "Seamlessly manage multiple departments and campuses from a single centralized dashboard." 
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Global Standards
            </h3>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Designed for Medical Institutions Worldwide
            </h2>
            <p className="text-slate-600 text-lg">
              Empower your institution with advanced tools designed for large-scale medical training management.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {controls.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center text-brand-600 font-semibold text-sm group/link cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal width="100%" delay={0.2}>
          <div className="bg-white rounded-2xl p-8 border border-brand-100 shadow-sm text-center max-w-2xl mx-auto">
            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold mb-2">
              Official Content Partner
            </p>
            <div className="text-2xl md:text-3xl font-bold text-slate-900">
              Training content powered by <span className="text-brand-600">Dräger Medical Academy</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstitutionControl;
