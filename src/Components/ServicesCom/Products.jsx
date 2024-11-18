import React from "react";
import { motion } from "framer-motion";
import { MdRouter, MdSecurity, MdSpeed, MdSwapHoriz, MdDeviceHub } from "react-icons/md";

const Products = () => {
  const products = [
    {
      title: "Advanced Technology Integration",
      description: "Seamlessly combine cutting-edge technologies into your existing infrastructure, ensuring compatibility and top-tier performance. Our integration services allow you to stay ahead of the curve, utilizing the latest advancements in IoT, AI, and more.",
      icon: MdDeviceHub
    },
    {
      title: "Multi-WAN Support",
      description: "With Multi-WAN support, you never have to worry about network downtime again. Our solutions ensure continuous internet access by automatically switching between multiple connections, providing both redundancy and load balancing for maximum performance.",
      icon: MdRouter
    },
    {
      title: "Secure VPN Connectivity",
      description: "Ensure your data is always safe with our secure VPN connectivity solutions. We provide encryption that protects sensitive information, enabling safe communication between remote locations and central offices without compromising on speed or security.",
      icon: MdSecurity
    },
    {
      title: "Intelligent Traffic Routing",
      description: "Optimize your network traffic with intelligent routing that reduces latency and increases speed. Our routing solutions are designed to automatically select the best path for your data, improving user experience and overall network efficiency.",
      icon: MdSwapHoriz
    },
    {
      title: "Scalability and Redundancy",
      description: "Our scalable and redundant infrastructure solutions allow your network to grow seamlessly. Whether you're expanding locally or globally, our systems ensure you have the capacity and availability to support any scale, while maintaining uptime.",
      icon: MdSpeed
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary text-lg font-medium uppercase tracking-wider"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-[#01241F] mt-4"
          >
            Innovative Products & Services
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 
                rounded-bl-[100px] transform translate-x-8 -translate-y-8 
                group-hover:translate-x-6 group-hover:-translate-y-6 
                transition-transform duration-500"></div>

              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform 
                    rotate-6 scale-110 transition-transform duration-300 
                    group-hover:rotate-0 group-hover:scale-105"></div>
                  <div className="relative flex items-center justify-center w-full h-full 
                    bg-white rounded-2xl shadow-sm group-hover:shadow-md 
                    transition-all duration-300">
                    <Icon className="text-5xl text-primary transform transition-transform 
                      duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#01241F] mb-4 
                  group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {description}
                </p>

                {/* Bottom Line */}
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary 
                  transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-500 origin-left"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/5 
                rounded-tl-[80px] transform translate-x-12 translate-y-12 
                group-hover:translate-x-8 group-hover:translate-y-8 
                transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
