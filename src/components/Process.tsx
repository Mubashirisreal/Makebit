import React from 'react';
import { Search, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'We start by understanding your goals and challenges.',
      icon: <Search className="text-[#FF0000]" size={56} />,
      number: '01'
    },
    {
      title: 'Strategy',
      description: 'We craft a tailored plan to achieve your objectives.',
      icon: <Lightbulb className="text-[#FF0000]" size={56} />,
      number: '02'
    },
    {
      title: 'Execution',
      description: 'We bring the plan to life with precision and care.',
      icon: <CheckCircle className="text-[#FF0000]" size={56} />,
      number: '03'
    },
    {
      title: 'Launch & Grow',
      description: 'We support your growth and help you scale.',
      icon: <TrendingUp className="text-[#FF0000]" size={56} />,
      number: '04'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="process" className="bg-[#000000] py-16 md:py-24 relative" aria-labelledby="process-heading">
      {/* Subtle hexagon pattern */}
      <div className="absolute inset-0 hexagon-pattern opacity-5" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="process-heading" className="text-4xl md:text-5xl font-semibold mb-6 text-glow font-montserrat">How We Work</h2>
          <motion.div 
            className="w-24 h-1 bg-[#FF0000] mx-auto glow"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-hidden="true"
          ></motion.div>
        </motion.div>

        <motion.div 
          className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.article 
              key={index} 
              className="bg-dark-700 px-6 py-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative border border-gray-800 flex flex-col items-start text-left"
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(255, 0, 0, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute top-6 right-6 text-gray-700 font-bold text-6xl opacity-50 font-montserrat"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                aria-hidden="true"
              >
                {step.number}
              </motion.div>
              <motion.div 
                className="mb-8 self-start"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                aria-hidden="true"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white font-montserrat pl-0">{step.title}</h3>
              <p className="text-xl md:text-2xl text-gray-400 font-lato">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;