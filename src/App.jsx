import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ValueProps from './components/sections/ValueProps';
import HowItWorks from './components/sections/HowItWorks';
import Difference from './components/sections/Difference';
import InstitutionControl from './components/sections/InstitutionControl';
import Audience from './components/sections/Audience';
import PlatformFeatures from './components/sections/PlatformFeatures';
import Partners from './components/sections/Partners';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';

function App() {
  return (
    <div className="font-sans text-slate-800 antialiased bg-slate-50 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <Difference />
        <InstitutionControl />
        <Audience />
        <PlatformFeatures />
        <Partners />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
