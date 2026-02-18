import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

import heroBg from '../../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-100 rounded-full text-brand-700 text-sm font-semibold mb-6 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-600"></span>
            Simulation-First Learning
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            Real-Life Medical <br />
            <span className="text-brand-600">
              Simulation Training
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up animate-delay-200">
            A global simulation-first learning platform designed for doctors, medical institutions, and healthcare professionals to master critical skills in a risk-free environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animate-delay-300">
            <a 
              href="#demo" 
              className="group px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#partners" 
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Partner With SIMLAB
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-2 opacity-0 animate-fade-in-up animate-delay-300">
            <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Powered by Dräger Medical Academy content
          </p>
        </div>
        
        <div className="lg:w-1/2 relative opacity-0 animate-fade-in-up animate-delay-200">

          <div className="relative rounded-2xl shadow-2xl bg-slate-900 overflow-hidden border border-slate-200 animate-float-slow">
            <img 
              src={heroBg} 
              alt="Medical Simulation Interface" 
              className="w-full h-auto opacity-80"
            />
            

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
