import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom X.com logo component
const XLogo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const socialIcons = [
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/makebit-tech/about/?viewAsMember=true", label: "LinkedIn" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/makebit.tech?igsh=M2plYWwyYm94czE0", label: "Instagram" },
    { icon: <XLogo size={24} />, href: "#", label: "X (Twitter)" }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "FAQs", href: "#faqs" }
  ];

  const contactInfo = [
    { 
      icon: <Mail className="text-[#FF0000] mr-3 mt-1 flex-shrink-0" size={20} />, 
      content: "mubashirahmed1598@gmail.com",
      href: "mailto:mubashirahmed1598@gmail.com",
      label: "Email"
    },
    { 
      icon: <Phone className="text-[#FF0000] mr-3 mt-1 flex-shrink-0" size={20} />, 
      content: "+91 80197 23052",
      href: "tel:+918019723052",
      label: "Phone"
    },
    { 
      icon: <MapPin className="text-[#FF0000] mr-3 mt-1 flex-shrink-0" size={20} />, 
      content: "Suncity, Hyderabad, Telengana",
      href: null,
      label: "Address"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer id="contact" className="bg-[#000000] text-white py-16 md:py-20 relative">
      {/* Subtle hexagon pattern */}
      <div className="absolute inset-0 hexagon-pattern opacity-5" aria-hidden="true"></div>
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-700/30 to-transparent opacity-70" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a 
              href="#" 
              className="text-3xl font-semibold mb-6 inline-block text-glow font-montserrat logo-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="Back to top"
            >
              makebit<span className="text-[#FF0000] text-4xl glow">.</span>tech
            </motion.a>
            <p className="text-gray-400 mt-6 mb-8 font-lato text-lg">
              Transforming businesses with smart design, automation, and growth strategies.
            </p>
            <motion.div 
              className="flex space-x-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {socialIcons.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  variants={item}
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-8 font-montserrat">Quick Links</h3>
            <motion.ul 
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={item}>
                  <motion.a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors font-lato text-lg"
                    whileHover={{ x: 5, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-8 font-montserrat">Contact Info</h3>
            <motion.ul 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  {info.icon}
                  {info.href ? (
                    <motion.a 
                      href={info.href} 
                      className="text-gray-400 hover:text-white transition-colors font-lato text-lg"
                      whileHover={{ color: "#ffffff" }}
                      aria-label={info.label}
                    >
                      {info.content}
                    </motion.a>
                  ) : (
                    <span className="text-gray-400 font-lato text-lg">
                      {info.content}
                    </span>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-16 pt-10 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="font-lato text-lg">© 2025 makebit.tech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;