import React from "react";
import { motion } from "framer-motion";
import p2 from "../../assets/images/MultiWANSupport.jpg";
import p3 from "../../assets/images/Secure VPNConnectivity.jpg";
import p4 from "../../assets/images/Intelligent Routing.jpg";
import p5 from "../../assets/images/ScalabilityandRedundancy.jpg";
import p6 from "../../assets/images/advance.jpg";

const Products = () => {
  const images = [
    {
      title: "Advanced Technology Integration",
      image: p2,
      description:
        "Seamlessly combine cutting-edge technologies into your existing infrastructure, ensuring compatibility and top-tier performance. Our integration services allow you to stay ahead of the curve, utilizing the latest advancements in IoT, AI, and more.",
    },
    {
      title: "Multi-WAN Support",
      image: p3,
      description:
        "With Multi-WAN support, you never have to worry about network downtime again. Our solutions ensure continuous internet access by automatically switching between multiple connections, providing both redundancy and load balancing for maximum performance.",
    },
    {
      title: "Secure VPN Connectivity",
      image: p4,
      description:
        "Ensure your data is always safe with our secure VPN connectivity solutions. We provide encryption that protects sensitive information, enabling safe communication between remote locations and central offices without compromising on speed or security.",
    },
    {
      title: "Intelligent Traffic Routing",
      image: p5,
      description:
        "Optimize your network traffic with intelligent routing that reduces latency and increases speed. Our routing solutions are designed to automatically select the best path for your data, improving user experience and overall network efficiency.",
    },
    {
      title: "Scalability and Redundancy",
      image: p6,
      description:
        "Our scalable and redundant infrastructure solutions allow your network to grow seamlessly. Whether you’re expanding locally or globally, our systems ensure you have the capacity and availability to support any scale, while maintaining uptime.",
    },
  ];
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-lg text-gray-500 mb-4">Our Expertise</h3>
          <p className="text-4xl font-bold text-gray-800 leading-snug">
            Innovative Products & Services
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {images.map(({ image, title, description }, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden shadow-lg rounded-lg bg-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Front (Image + Overlay) */}
              <div className="relative h-80">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-sm mt-1">Click to Learn More</p>
                </div>
              </div>

              {/* Card Back (Flip for Details) */}
              <motion.div className="absolute inset-0 bg-white text-gray-900 px-6 pt-10 md:pt-16 py-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:rotate-y-180 transform transition-all duration-500 ease-in-out flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-md text-gray-600 mt-2 line-clamp-5 md:line-clamp-none">{description}</p>
              
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
