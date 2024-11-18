import React from "react";
import { services } from "../../assets/data/data";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  return (
    <section className="bg-gray-50 py-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-16 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-primary text-lg font-medium uppercase tracking-wider"
        >
          Our Services
        </motion.span>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#01241F] mt-4 mb-6"
        >
          We Offer Best Digital Network Devices
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
        >
          Our team of experts specializes in providing the latest digital
          devices for businesses, including switches and routers. We
          understand the importance of reliable and high-quality equipment,
          and we strive to deliver top-notch solutions that meet your specific
          needs.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icons, title, discription }, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 shadow-md shadow-primary/35 rounded-2xl hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top Corner Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>

              {/* Icon Container */}
              <div className="relative">
                <div className="text-secondary mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-5xl">
                    {icons}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[#01241F] text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {discription}
                </p>
              </div>

              {/* Bottom Corner Line */}
              <div className="absolute bottom-0 left-0 w-full h-1">
                <div className="h-full bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Hover Indicator Dot */}
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
