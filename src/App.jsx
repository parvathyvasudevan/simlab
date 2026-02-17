import React from 'react';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Hero from './Components/sections/Hero';
import ValueProps from './Components/sections/ValueProps';
import HowItWorks from './Components/sections/HowItWorks';
import Difference from './Components/sections/Difference';
import InstitutionControl from './Components/sections/InstitutionControl';
import Audience from './Components/sections/Audience';
import PlatformFeatures from './Components/sections/PlatformFeatures';
import Partners from './Components/sections/Partners';
import Pricing from './Components/sections/Pricing';
import CTA from './Components/sections/CTA';

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
