import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Cpu, 
  BarChart3, 
  Users, 
  Award, 
  Globe 
} from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const PlatformFeatures = () => {
  const features = [
    { 
      title: "Multi-Tenant Management", 
      desc: "Manage multiple departments or campuses from a single, centralized dashboard with hierarchy controls.",
      icon: <LayoutDashboard className="w-6 h-6" />,
      color: "from-[var(--color-medical-accent)]/20 to-[var(--color-medical-highlight)]/10"
    },
    { 
      title: "Real-Life Modules", 
      desc: "High-fidelity simulations for specialized equipment, respiratory care, and complex clinical procedures.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-[var(--color-medical-highlight)]/20 to-[var(--color-medical-accent)]/10"
    },
    { 
      title: "Progress Tracking", 
      desc: "Comprehensive analytics reporting on individual and cohort performance over time with trend analysis.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-[var(--color-medical-highlight)]/20 to-blue-600/10"
    },
    { 
      title: "Trainer Dashboards", 
      desc: "Real-time monitoring and active assessment tools for instructors to guide students through simulations.",
      icon: <Users className="w-6 h-6" />,
      color: "from-[var(--color-medical-accent)]/20 to-[var(--color-medical-highlight)]/10"
    },
    { 
      title: "Automated Certification", 
      desc: "Instant grading and secure certificate generation upon successful module completion and validation.",
      icon: <Award className="w-6 h-6" />,
      color: "from-[var(--color-medical-highlight)]/20 to-teal-500/10"
    },
    { 
      title: "Global Cloud Access", 
      desc: "Secure, low-latency cloud-based platform accessible from anywhere, ensuring seamless training continuity.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-[var(--color-medical-accent)]/20 to-indigo-500/10"
    }
  ];

  return (
    <section id="features" className="py-32 bg-[var(--color-medical-secondary)] relative overflow-hidden">
      {/* Background Decorative Blurs - Unified with medical palette */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-medical-accent)]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-medical-highlight)]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal width="100%">
          <div className="mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-medical-accent)]/10 border border-[var(--color-medical-accent)]/20 mb-6 backdrop-blur-md">
                <span className="text-[var(--color-medical-accent)] font-bold tracking-wider uppercase text-xs">Platform Architecture</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-medical-text)] leading-tight">
              Powerful Features for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] italic">Next-Gen Simulation</span>
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white border border-[var(--color-medical-accent)]/10 hover:border-[var(--color-medical-accent)]/30 shadow-[0_4px_20px_rgba(99,102,241,0.06)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.1)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Top Glow Border */}
              <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${feature.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-[var(--color-medical-accent)] mb-8 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all duration-500 relative`}>
                {feature.icon}
                {/* Micro-sparkle Effect */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--color-medical-accent)] rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>

              <h4 className="font-display font-bold text-xl text-[var(--color-medical-text)] mb-4 group-hover:text-[var(--color-medical-accent)] transition-colors">
                {feature.title}
              </h4>
              <p className="text-[var(--color-medical-text-dim)] leading-relaxed text-justify text-sm">
                {feature.desc}
              </p>

              {/* Decorative Index Number */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-display font-black text-[var(--color-medical-accent)]/5 pointer-events-none group-hover:text-[var(--color-medical-highlight)]/10 transition-colors duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;

