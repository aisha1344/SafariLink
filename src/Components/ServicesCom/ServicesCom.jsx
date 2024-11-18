import React from 'react';
import { motion } from 'framer-motion';

const ServicesCom = ({ 
  tagline = "SafariLink ISP",
  title = "Cutting-edge",
  highlightedText = "connectivity solutions",
  description = "Empower your business with cutting-edge connectivity solutions from SafariLink ISP. Our innovative services are tailored to meet the unique needs of businesses and communities across East Africa.",
  showDecorations = true,
  className = ""
}) => {
  return (
    <section className={`relative py-16 overflow-hidden ${className}`}>
      {/* Background Decorations */}
      {showDecorations && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      )}

      <motion.div 
        className='container mx-auto px-4 md:px-16 relative'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary text-xl font-medium uppercase tracking-wider"
          >
            {tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-[#01241F] mt-4 mb-6"
          >
            {title} <br /> 
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {highlightedText}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Decorative Elements */}
        {showDecorations && (
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        )}
      </motion.div>
    </section>
  );
}

export default ServicesCom;
