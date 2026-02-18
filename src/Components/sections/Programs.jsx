import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const Programs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const programs = [
    { 
        name: "Anaesthesia Workstations", 
        icon: "💨",
        category: "Critical Care",
        description: "Master the operation of modern anaesthesia delivery systems and gas monitoring with hands-on simulations."
    },
    { 
        name: "Medical Ventilators", 
        icon: "🫁",
        category: "Respiratory",
        description: "Advanced modes, weaning strategies, and troubleshooting for critical respiratory care scenarios."
    },
    { 
        name: "Neonatal Care", 
        icon: "👶",
        category: "Pediatrics",
        description: "Specialized thermoregulation and gentle respiratory support protocols for fragile newborns."
    },
    { 
        name: "Patient Monitoring", 
        icon: "🖥️",
        category: "Diagnostics",
        description: "Real-time interpretation of vital signs, arrhythmia detection, and comprehensive alarm management."
    },
    { 
        name: "High-Frequency Ventilation", 
        icon: "⚡",
        category: "Advanced Respiratory",
        description: "Expertise in HFOV strategies to protect delicate lungs in critical cases and reduce injury."
    },
    { 
        name: "Lung Protective Strategies", 
        icon: "🛡️",
        category: "Safety Protocols",
        description: "Evidence-based ventilation protocols designed to prevent Ventilator-Induced Lung Injury (VILI)."
    },
    { 
        name: "Device Application", 
        icon: "⚙️",
        category: "Technical Skills",
        description: "Hands-on configuration, regular maintenance, and rigorous safety checks for medical devices."
    },
    { 
        name: "Workplace Design", 
        icon: "🏗️",
        category: "Ergonomics",
        description: "Optimizing clinical workspaces for maximum ergonomics, workflow efficiency, and infection control."
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-medical-accent)] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-medical-highlight)] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
             <div className="text-center max-w-3xl mx-auto mb-20">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-medical-accent)]/10 border border-[var(--color-medical-accent)]/20 mb-6 backdrop-blur-md">
                    <span className="text-[var(--color-medical-accent)] font-bold tracking-wide uppercase text-xs">Certification & Skills</span>
                 </div>
                 <h3 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-medical-text)] mb-6">Comprehensive Programs</h3>
                 <p className="text-[var(--color-medical-text-dim)] text-lg leading-relaxed text-justify">
                    Designed for specialists. Our curriculum covers the entire spectrum of critical care technology and clinical application.
                 </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
                <ScrollReveal key={i} delay={i * 0.05} width="100%">
                    <motion.div 
                        onHoverStart={() => setHoveredIndex(i)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        whileHover={{ y: -8 }}
                        className="group relative h-full bg-white border border-[var(--color-medical-accent)]/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--color-medical-accent)]/30 hover:shadow-[0_15px_40px_rgba(99,102,241,0.08)]"
                    >
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-medical-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="p-8 relative z-10 flex flex-col h-full">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-medical-accent)]/10 to-[var(--color-medical-highlight)]/5 border border-[var(--color-medical-accent)]/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                                    {prog.icon}
                                </div>
                                <span className="text-xs font-semibold text-[var(--color-medical-text-dim)] bg-[var(--color-medical-secondary)] px-3 py-1 rounded-full border border-[var(--color-medical-accent)]/10">
                                    {prog.category}
                                </span>
                            </div>

                            {/* Content */}
                            <h4 className="font-display font-bold text-xl text-[var(--color-medical-text)] mb-4 group-hover:text-[var(--color-medical-accent)] transition-colors duration-300">
                                {prog.name}
                            </h4>
                            
                            <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed mb-8 flex-grow text-justify">
                                {prog.description}
                            </p>

                            {/* Interactive Footer */}
                            <div className="flex items-center text-[var(--color-medical-accent)] text-sm font-bold group/link">
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transform group-hover:translate-y-[-100%] transition-transform duration-300">View Curriculum</span>
                                    <span className="absolute top-0 left-0 inline-block transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300">Start Learning</span>
                                </span>
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Decorative Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </motion.div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
