import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaServer, FaCogs } from 'react-icons/fa';

const RemoteCards = () => {
  const features = [
    {
      icon: FaServer,
      title: "Infrastructure Management",
      description: "Comprehensive control over your network infrastructure"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Platform",
      description: "Enterprise-grade security for your remote operations"
    },
    {
      icon: FaCogs,
      title: "Expert Support",
      description: "24/7 professional assistance and monitoring"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section - Original */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              className="w-[90%] mx-auto"
              src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/Cloud-Computing-Technology-Illustrations-1.png?w=960&ssl=1" 
              alt="Infrastructure Management" 
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-primary text-lg font-medium uppercase tracking-wider"
              >
                WE ARE HERE
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#01241F]"
              >
                Confidence in Your Infrastructure Management
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Rely on our robust platforms and expert support for secure, reliable management.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="text-2xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#01241F] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RemoteCards;
