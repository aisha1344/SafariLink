import React from 'react';
import { motion } from 'framer-motion';
import { FaSlideshare } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';

const Features = () => {
  const features = [
    {
      icon: <MdOutlineSupportAgent />,
      title: "Quick Support",
      description: "We provide both remote and onsite quick support for users."
    },
    {
      icon: <GiTeamIdea />,
      title: "Reliable Team",
      description: "We have a great team of experienced network engineers."
    },
    {
      icon: <FaSlideshare />,
      title: "Your Partner",
      description: "SafariLink ISP is the authorized Seller and Re-seller products in africa."
    }
  ];

  return (
    <section className='bg-white py-20'>
      <div className='container mx-auto px-4 md:px-16'>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary text-xl font-medium uppercase tracking-wider"
          >
            Our Features
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#01241F] mt-4 mb-6"
          >
            We Offer Best Digital Network Devices
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/*  */}
                  <div className="relative bg-primary/5 p-4 rounded-full text-secondary text-5xl transform 
                    transition-all duration-300 group-hover:text-primary 
                    group-hover:scale-110"
                  >
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#01241F] mb-2 
                  group-hover:text-primary transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r 
                from-transparent via-secondary to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
