import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const Audience = () => {
  const audiences = [
    {
      icon: "🏥",
      color: "brand",
      title: "Medical Colleges",
      description: "Enhance curriculum with virtual labs and standardized patient scenarios to improve student readiness."
    },
    {
      icon: "🏨",
      color: "indigo",
      title: "Hospitals",
      description: "Continuous professional development and complex equipment training for staff."
    },
    {
      icon: "👨‍⚕️",
      color: "teal",
      title: "Professionals",
      description: "Upskill and maintain certification with convenient, anytime online simulations."
    },
    {
      icon: "🎓",
      color: "purple",
      title: "Students",
      description: "Practice clinical skills safely in a risk-free environment before meeting real patients."
    }
  ];


  const borderColors = {
    brand: "border-brand-500",
    indigo: "border-indigo-500",
    teal: "border-medical-teal",
    purple: "border-purple-500"
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900">Who is SIMLAB For?</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-t-4 ${borderColors[item.color] || 'border-brand-500'}`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
