import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaUserClock, FaTools } from 'react-icons/fa';

const UserExperience = () => {
  const features = [
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs"
    },
    {
      icon: FaUserClock,
      title: "Quick Response",
      description: "Fast and efficient problem resolution"
    },
    {
      icon: FaTools,
      title: "Expert Team",
      description: "Skilled professionals at your service"
    }
  ];

  return (
    <section className='py-24 bg-[#01241F]'>
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                className="w-full h-auto"
                src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/customer-support-01.png?w=960&ssl=1" 
                alt="Customer Support" 
              />
            </div>
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
                className="text-secondary text-lg font-medium uppercase tracking-wider"
              >
                USER-FRIENDLY
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Expert Customer Support
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Gain access to our dedicated support team, ready to assist you with any inquiries or challenges you encounter along the way.
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
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                      <feature.icon className="text-2xl text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
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

export default UserExperience;
