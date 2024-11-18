import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHandshake, FaLightbulb } from 'react-icons/fa';

const MissionCard = () => {
  const features = [
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Continuous advancement in technology solutions"
    },
    {
      icon: FaHandshake,
      title: "Partnership",
      description: "Strong relationships with industry leaders"
    },
    {
      icon: FaLightbulb,
      title: "Excellence",
      description: "Exceptional service delivery standards"
    }
  ];

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4 md:px-16'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-primary text-lg font-medium uppercase tracking-wider"
              >
                SafariLink ISP
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#01241F]"
              >
                Connect with Confidence
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                SafariLink ISP is dedicated to delivering a diverse range of cutting-edge ISP solutions that cater to the unique needs of our clients. We achieve this through continuous innovation, fostering strong partnerships, and providing exceptional customer service.
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
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                className="w-full h-auto"
                src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-3.png?w=500&ssl=1" 
                alt="Mission" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionCard;
