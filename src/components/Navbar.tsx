import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="bg-[#000000] backdrop-blur-md text-white py-1 px-6 md:px-12 sticky top-0 z-50 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <a href="#" className="flex items-center" aria-label="makebit.tech home">
            <img 
              src="/Logo/makebit transparent.png"
              alt="makebit.tech logo" 
              className="h-[60px] w-[250px]"
            />
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10" role="navigation" aria-label="Main navigation">
          {['Home', 'Services', 'Process', 'FAQs'].map((item, index) => (
            <motion.a 
              key={item}
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-colors font-lato text-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 17,
                duration: 0.3, 
                delay: index * 0.1 
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          id="mobile-menu"
          className="md:hidden mt-4 bg-[#000000]"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col space-y-4 px-4 py-2">
            {['Home', 'Services', 'Process', 'FAQs'].map((item, index) => (
              <motion.a 
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors py-2 font-lato text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;