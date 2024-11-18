import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ number, title, description, image, imagePosition = "right" }) => {
  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
        imagePosition === "left" ? "md:flex-row-reverse" : ""
      }`}>
        {/* Image Section */}
        <div className={`relative overflow-hidden rounded-2xl ${imagePosition === "right" ? "md:order-1" : "md:order-2"}`}>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className={`space-y-8 ${imagePosition === "right" ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"}`}>
          {/* Number */}
          <div className="relative">
            <span className="text-[120px] md:text-[180px] font-bold text-primary/10 leading-none">
              {number.padStart(2, '0')}
            </span>
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-primary absolute bottom-8 left-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
          </div>

          {/* Description */}
          <motion.p 
            className="text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          {/* Decorative Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary/50"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard; 