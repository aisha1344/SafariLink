import React from 'react';
import { motion } from 'framer-motion';
import { indusry } from '../../assets/data/data';

const Industries = () => {
  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4 md:px-16'>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary text-lg font-medium uppercase tracking-wider"
          >
            Industries
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#01241F] mt-4 mb-6"
          >
            Industries We Serve
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Take control of your devices from anywhere in the world with our intuitive platforms designed to streamline monitoring, troubleshooting, and updates.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {indusry.map(({ title, icons, discription }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-xl shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="relative w-16 h-16">
                    <span className="text-4xl md:text-5xl text-primary transform transition-transform duration-300 group-hover:scale-110">
                      {icons}
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#01241F] group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {discription}
                </p>

                {/* Bottom Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
