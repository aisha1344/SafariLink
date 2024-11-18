import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../../assets/images/her-img.jpg"

const Hero = () => {
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative px-4 py-16 mt-8 sm:mt-5 md:mt-8 lg:mt-16 md:py-8 md:px-16 h-[100%] overflow-hidden"
    >
      {/* Corner Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#01241F]/10 to-transparent -translate-x-32 -translate-y-32 transform rotate-45"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#023028]/10 to-transparent translate-x-32 -translate-y-32 transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01241F]/10 to-transparent -translate-x-32 translate-y-32 transform rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#023028]/10 to-transparent translate-x-32 translate-y-32 transform rotate-45"></div>

      <div className="container mx-auto grid px-2 grid-cols-1 lg:grid-cols-2 gap-10 pt-8 md:pt-10 relative">
        {/* Text Hero */}
        <div className="sm:mt-10 relative">
          {/* Subtle accent line */}
          <div className="absolute left-0 top-0 w-20 h-1 bg-gradient-to-r from-[#01241F] to-emerald-400"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl mt-5 md:mt-8 font-light mb-8 text-[#01241F] md:w-[35rem]"
          >
            Your Trusted Digital Partner
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[1.3rem] text-[#474747] font-poppins font-light text-left line-clamp-6 sm:line-clamp-none"
          >
            SafariLink ISP is dedicated to delivering a diverse range of cutting-edge ISP solutions that cater to the unique needs of our clients. We achieve this through continuous innovation, fostering strong partnerships, and providing exceptional customer service. We strive to bridge the digital divide in Africa and contribute to a more connected and empowered future.
          </motion.p>

          {/* Updated Buttons Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16 mt-14 sm:mt-10 md:mt-6"
          >
            {/* Contact Button */}
            <Link 
              to='/contact' 
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#01241F] via-[#023028] to-[#01241F] transition-transform duration-500 group-hover:translate-y-full"></span>
              <span className="relative flex items-center justify-center w-full py-3 px-6 text-[1.1rem] text-white transition duration-300 ease-in-out">
                <span className="mr-2">Contact Us</span>
                <svg 
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            
            {/* Learn More Button */}
            <Link 
              to='/about' 
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50"></span>
              <span className="absolute inset-0 bg-white transition-transform duration-500 group-hover:translate-y-full"></span>
              <span className="relative flex items-center justify-center w-full py-3 px-6 text-[1.1rem] text-[#01241F] border-2 border-[#01241F] transition duration-300 ease-in-out group-hover:text-emerald-700">
                <span className="mr-2">Learn More</span>
                <svg 
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-[45rem] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#01241F]/10 to-transparent rounded-3xl transform -rotate-6"></div>
          <img
            className="hidden lg:block transform hover:scale-[1.02] transition-transform duration-500"
            src={hero}
            alt="Hero"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(Hero);
