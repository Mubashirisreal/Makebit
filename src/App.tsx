import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 relative overflow-hidden">
      {/* Subtle hexagon pattern overlay */}
      <div className="fixed inset-0 hexagon-pattern opacity-10 pointer-events-none" aria-hidden="true"></div>
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF0000] z-50 origin-left glow"
        style={{ scaleX }}
        aria-hidden="true"
      />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}

export default App;