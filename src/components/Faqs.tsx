import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Faqs = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in web design, business automation, and performance marketing which will be coming soon."
    },
    {
      question: "How long does a project take?",
      answer: "Timelines vary based on scope, but we always deliver on time."
    },
    {
      question: "What's your pricing model?",
      answer: "We offer custom quotes based on your needs."
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    // Track the click event with Google Analytics
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'faq_contact_button',
        'value': 1
      });
    }
    
    // Scroll to the hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faqs" className="bg-white py-16 md:py-20 relative" aria-labelledby="faqs-heading">
      {/* Subtle hexagon pattern */}
      <div className="absolute inset-0 hexagon-pattern opacity-5" aria-hidden="true"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="faqs-heading" className="text-4xl md:text-5xl font-semibold mb-6 text-gray-800 font-montserrat">Got Questions? We've Got Answers.</h2>
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
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          role="region"
          aria-label="Frequently Asked Questions"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ borderColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <motion.button
                className="w-full flex justify-between items-center p-8 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(index)}
                whileHover={{ backgroundColor: "rgba(240, 240, 240, 1)" }}
                whileTap={{ scale: 0.99 }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-2xl text-gray-800 font-montserrat">{faq.question}</span>
                {openIndex === index ? (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    <ChevronUp className="text-[#FF0000]" size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    <ChevronDown className="text-[#FF0000]" size={28} />
                  </motion.div>
                )}
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.04, 0.62, 0.23, 0.98] 
                    }}
                    id={`faq-answer-${index}`}
                  >
                    <div className="p-8 bg-white">
                      <motion.p 
                        className="text-xl text-gray-700 font-lato"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a 
            href="#hero"
            onClick={handleContactClick}
            className="bg-[#FF0000] text-white px-8 py-4 rounded-md hover:bg-red-600 transition-colors flex items-center space-x-3 mx-auto text-lg glow font-montserrat inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact us with more questions"
          >
            <span>Still Have Questions? Contact Us</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              aria-hidden="true"
            >
              <ArrowRight size={22} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;