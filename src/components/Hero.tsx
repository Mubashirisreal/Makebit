import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleGetStartedClick = () => {
    // Track the click event with Google Analytics
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'hero_get_started_button',
        'value': 1
      });
    }
  };

  return (
    <section id="hero" className="bg-[#000000] text-white py-24 md:py-36 relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 hexagon-pattern opacity-10" aria-hidden="true"></div>
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-700/50 to-transparent opacity-70" aria-hidden="true"></div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="h-full">
              <div className="h-full bg-gray-500 w-px mx-auto"></div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full grid grid-rows-12 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-full">
              <div className="w-full bg-gray-500 h-px my-auto"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              id="hero-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight text-glow font-montserrat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             We Build Websites, Automate Workflows, and Drive Growth
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 font-lato font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             From sleek, responsive web design to robust full-stack applications and seamless business automations, we’ve got you covered.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a 
                href="https://forms.gle/V6Sh4JsbbHZSkAXeA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] text-white px-10 py-5 rounded-md hover:bg-red-600 transition-colors flex items-center space-x-3 text-xl glow font-montserrat"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get started with our services"
                onClick={handleGetStartedClick}
              >
                <span>Get started</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  aria-hidden="true"
                >
                  <ArrowRight size={24} />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            className="mt-20 relative w-full max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            aria-hidden="true"
          >
            {/* Hexagon grid */}
            <div className="absolute inset-0 flex justify-center items-center">
              <svg width="800" height="150" viewBox="0 0 800 150" className="opacity-20" aria-hidden="true">
                <defs>
                  <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                    <polygon points="25,0 50,14.4 50,37.7 25,52.1 0,37.7 0,14.4" fill="none" stroke="#FF0000" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)" />
              </svg>
            </div>
            
            {/* Glowing accents */}
            <div className="flex justify-center items-center space-x-32 relative h-32">
              <motion.div 
                className="w-32 h-32 rounded-full bg-[#FF0000]/10 filter blur-xl absolute"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className="w-24 h-24 rounded-full bg-[#FF0000]/5 filter blur-lg absolute -right-8"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              ></motion.div>
            </div>
            
            {/* Tech lines */}
            <div className="flex justify-center">
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-[#FF0000]/50 to-transparent w-full max-w-3xl"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;