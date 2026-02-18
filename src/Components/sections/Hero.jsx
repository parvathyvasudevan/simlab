import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Activity, Zap, Shield } from 'lucide-react';
import { useScroll, useTransform } from 'framer-motion';
import heroBg from '../../assets/hero_bg.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 20]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[var(--color-medical-primary)]">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-medical-accent)] opacity-10 rounded-full blur-[150px] animate-pulse-glow"
        ></motion.div>
        <motion.div 
            style={{ y: y2, animationDelay: '2s' }}
            className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-[var(--color-medical-highlight)] opacity-10 rounded-full blur-[150px] animate-pulse-glow" 
        ></motion.div>
        
        {/* Floating Shapes */}
        <motion.div 
            animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-[var(--color-medical-accent)]/10 rounded-full blur-sm"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-medical-secondary)] border border-[var(--color-medical-accent)]/20 backdrop-blur-md mb-8">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-medical-accent)] animate-pulse"></span>
                    <span className="text-[var(--color-medical-accent)] text-sm font-semibold tracking-wide uppercase">Next-Gen Medical Training</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-medical-text)] leading-tight mb-8">
                    Master Clinical <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)]">Perfection</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[var(--color-medical-text-dim)] mb-10 leading-relaxed max-w-xl text-justify">
                    Experience the world's most advanced simulation platform. 
                    Risk-free, high-fidelity environments for critical care, anaesthesia, and surgical training.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] text-white rounded-full font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            Start Training
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "white" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[var(--color-medical-secondary)] border border-[var(--color-medical-accent)]/20 text-[var(--color-medical-text)] rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-md group"
                    >
                        <div className="w-8 h-8 rounded-full bg-[var(--color-medical-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-medical-accent)] group-hover:text-white transition-all duration-300">
                            <Play className="w-4 h-4 fill-current" />
                        </div>
                        Partner with Simlab
                    </motion.button>
                </div>

                {/* Stats */}
                
                   
                  
            </motion.div>

            {/* Visuals */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
            >
                <div className="relative z-10 animate-float-slow">
                    <img 
                        src={heroBg}
                        alt="Medical VR Simulation" 
                        className="w-full h-auto rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                    />
                    
                    {/* Floating Cards with Magnetic Shift */}
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-12 top-20 p-4 bg-white/90 backdrop-blur-xl border border-[var(--color-medical-accent)]/20 rounded-2xl shadow-2xl z-20"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-[var(--color-medical-text-dim)] font-bold">Live Vitals</div>
                                <div className="text-sm font-bold text-[var(--color-medical-text)]">Patient Stable</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -right-8 bottom-32 p-4 bg-white/90 backdrop-blur-xl border border-[var(--color-medical-accent)]/20 rounded-2xl shadow-2xl z-20"
                    >
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-medical-accent)]/10 flex items-center justify-center text-[var(--color-medical-accent)]">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-[var(--color-medical-text-dim)] font-bold">Accuracy</div>
                                <div className="text-sm font-bold text-[var(--color-medical-text)]">99.8% Precision</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
