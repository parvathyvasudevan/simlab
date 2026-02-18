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
    <section className="py-20 bg-white border-y border-[var(--color-medical-accent)]/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-medical-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h3 className="text-[var(--color-medical-accent)] font-semibold uppercase tracking-wider text-sm mb-3">
              Global Standards
            </h3>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-medical-text)] mb-6">
              Designed for Medical Institutions Worldwide
            </h2>
            <p className="text-[var(--color-medical-text-dim)] text-lg text-justify">
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
              className="glass-panel rounded-3xl p-8 bg-white border border-[var(--color-medical-accent)]/10 hover:border-[var(--color-medical-accent)]/30 transition-all duration-300 shadow-sm hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-[var(--color-medical-accent)]/10 rounded-xl flex items-center justify-center text-[var(--color-medical-accent)] mb-6 group-hover:bg-[var(--color-medical-accent)] group-hover:text-white transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl text-[var(--color-medical-text)] mb-3 group-hover:text-[var(--color-medical-accent)] transition-colors">
                {item.title}
              </h4>
              <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed mb-6 text-justify">
                {item.description}
              </p>
              <div className="flex items-center text-[var(--color-medical-accent)] font-semibold text-sm group/link cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal width="100%" delay={0.2}>
          <div className="glass-panel rounded-3xl p-8 bg-white border border-[var(--color-medical-accent)]/10 relative z-10 text-center max-w-2xl mx-auto overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-medical-accent)]/5 to-transparent"></div>
            <p className="text-[var(--color-medical-text-dim)] text-sm uppercase tracking-wider font-semibold mb-2 relative z-10">
              Official Content Partner
            </p>
            <div className="text-2xl md:text-3xl font-bold text-[var(--color-medical-text)] relative z-10">
              Training content powered by <span className="text-[var(--color-medical-accent)]">Dräger Medical Academy</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstitutionControl;
