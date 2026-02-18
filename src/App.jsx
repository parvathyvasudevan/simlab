import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Partners from './components/sections/Partners';
import About from './components/sections/About';
import PlatformFeatures from './components/sections/PlatformFeatures';
import ValueProps from './components/sections/ValueProps';
import VRLearning from './components/sections/VRLearning';
import HowItWorks from './components/sections/HowItWorks';
import Training from './components/sections/Training';
import Programs from './components/sections/Programs';
import Audience from './components/sections/Audience';
import InstitutionControl from './components/sections/InstitutionControl';
import Difference from './components/sections/Difference';

import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-[#00B3B3] selection:text-white bg-slate-50">
      <Navbar />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Hero />
        <About />
        <PlatformFeatures />
        <ValueProps />
        <VRLearning />
        <HowItWorks />
        <Training />
        <Partners />
        <Programs />
        <Audience />
        <InstitutionControl />
        <Difference />
        <Pricing />
        <CTA />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
