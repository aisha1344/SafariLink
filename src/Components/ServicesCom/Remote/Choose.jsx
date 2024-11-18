import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaTools, FaCloudUploadAlt } from 'react-icons/fa';
import deviceM from "../../../assets/images/deviceM.jpg";

const Choose = () => {
  const features = [
    {
      title: "Remote Monitoring",
      description: "Real-time device monitoring and performance tracking with advanced analytics and reporting capabilities.",
      icon: FaDesktop
    },
    {
      title: "Troubleshooting Made Easy",
      description: "Quick problem identification and resolution with remote diagnostic tools and expert support.",
      icon: FaTools
    },
    {
      title: "Effortless Updates",
      description: "Automated system maintenance and updates ensuring your devices are always up-to-date and secure.",
      icon: FaCloudUploadAlt
    }
  ];

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 md:px-16'>
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary text-lg font-medium uppercase tracking-wider"
          >
            Choose SafariLink ISP
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#01241F] mt-4 mb-6"
          >
            Remote Management Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Keep an eye on your devices in real-time, ensuring optimal performance and security across your infrastructure.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
          {/* Features Section */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 group p-4 rounded-xl hover:bg-white transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center
                   group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="text-2xl text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#01241F] group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={deviceM}
                alt="Remote Management"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01241F]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-4"></div>
                <p className="text-white text-lg font-medium">
                  Advanced Remote Management Solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
