import React from "react";
import aboutImage from "../../assets/images/network.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCom = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-16 mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-lg font-medium uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#01241F] mt-4">
            Your Trusted Partner in Technology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
            
            {/* Image Container */}
            <div className=" overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Network" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              Who We Are
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              SafariLink ISP is dedicated to delivering a diverse range of cutting-edge ISP solutions that cater to the unique needs of our clients. We achieve this through continuous innovation, fostering strong partnerships, and providing exceptional customer service.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We strive to bridge the digital divide in Africa and contribute to a more connected and empowered future.
            </p>

            <div className="pt-6">
              <Link to="/services">
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary px-8 py-3 text-white rounded-lg
                    hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCom;
