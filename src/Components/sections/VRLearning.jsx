import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const VRLearning = () => {
    const features = [
        {
            title: "3D Anatomy Exploration",
            desc: "Visualize complex anatomical structures in high definition.",
            img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Emergency Scenarios",
            desc: "Manage critical patients in realistic virtual ER settings.",
            img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Virtual ICU Training",
            desc: "Master ventilator settings and patient monitoring protocols.",
            img: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

  return (
    <section id="vr-learning" className="py-24 bg-[var(--color-midnight-purple)] overflow-hidden relative">
        {/* Background Accents (Neon Purple Immersion) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-neon-purple)]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-deep-indigo)]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal scale={1.1}>
             <h2 className="text-[var(--color-neon-purple)] font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Immersive VR Immersion</h2>
             <h3 className="font-display text-4xl md:text-5xl font-bold mb-8 text-white">Next-Gen SimLabsXR</h3>
             <p className="text-slate-400 text-lg leading-relaxed text-justify">
                Step into the future of surgery. Our virtual reality modules provide high-fidelity, risk-free immersion that pushes the boundaries of clinical training.
             </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-[var(--color-neon-purple)]/20 backdrop-blur-xl hover:border-[var(--color-neon-purple)]/60 transition-all duration-500 shadow-2xl"
                >
                    <div className="h-56 overflow-hidden relative">
                        <img 
                            src={feature.img} 
                            alt={feature.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight-purple)] to-transparent opacity-60"></div>
                    </div>
                    <div className="p-8 relative">
                        <h4 className="font-display font-bold text-2xl mb-3 text-white group-hover:text-[var(--color-neon-purple)] transition-colors duration-300">{feature.title}</h4>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed text-justify group-hover:text-slate-200 transition-colors">{feature.desc}</p>
                        <a href="#" className="inline-flex items-center text-sm font-bold text-[var(--color-neon-purple)] group-hover:gap-4 transition-all duration-300">
                           <span className="relative">
                             START IMMERSION
                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-neon-purple)] group-hover:w-full transition-all duration-300"></span>
                           </span>
                           <span className="ml-2">→</span>
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VRLearning;
