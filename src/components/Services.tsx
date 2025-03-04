import React from 'react';
import { Monitor, Cog, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceCards = [
    {
      icon: <Monitor size={64} />,
      title: 'Web Design',
      description: 'Sleek, responsive, and conversion-focused websites.',
      badge: null
    },
    {
      icon: <Cog size={64} />,
      title: 'Business Automation',
      description: 'Streamline workflows and boost efficiency.',
      badge: null
    },
    {
      icon: <BarChart size={64} />,
      title: 'SEO/Performance',
      subtitle: 'Marketing',
      description: 'Data-driven strategies to scale your business.',
      badge: 'Coming Soon'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="bg-white py-16 md:py-24 relative" aria-labelledby="services-heading">
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
          <h2 id="services-heading" className="text-4xl md:text-5xl font-semibold mb-6 text-gray-800 font-montserrat">What We Do Best</h2>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceCards.map((card, index) => (
            <motion.article 
              key={index} 
              className="bg-gray-50 p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative border border-gray-200"
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)",
                borderColor: "rgba(0, 0, 0, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              {card.badge && (
                <motion.div 
                  className="absolute top-4 right-4 bg-[#FF0000] text-white text-sm px-3 py-1 rounded-full glow font-montserrat"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.5 + index * 0.2 }}
                >
                  {card.badge}
                </motion.div>
              )}
              <motion.div 
                className="text-[#FF0000] mb-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                aria-hidden="true"
              >
                {card.icon}
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-gray-800 font-montserrat whitespace-normal">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <h4 className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800 font-montserrat whitespace-normal">
                    {card.subtitle}
                  </h4>
                )}
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-10 font-lato">
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a 
            href="#" 
            className="bg-[#FF0000] text-white px-10 py-5 rounded-md hover:bg-red-600 transition-colors flex items-center space-x-3 mx-auto text-xl glow font-montserrat inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Learn more about our services"
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              aria-hidden="true"
            >
              <ArrowRight size={24} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;