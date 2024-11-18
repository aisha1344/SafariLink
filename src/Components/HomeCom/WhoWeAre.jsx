import React, { memo } from 'react';
import aboutImage from "../../assets/images/main.jpg";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <section className='bg-white py-16 lg:py-24 px-4 md:px-16'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className='relative group'
        >
          {/* Image container */}
          <div className='relative overflow-hidden'>
            <img
              className='w-full h-auto object-cover '
              src={aboutImage}
              alt="Who We Are"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className='relative'
        >
          {/* Section Title */}
          <div className='mb-8'>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className='text-primary text-lg font-medium uppercase tracking-wider'
            >
              About Us
            </motion.span>
            <h3 className='text-[#01241F] text-4xl md:text-5xl font-bold mt-4'>Who We Are</h3>
            <div className='w-20 h-1 bg-gradient-to-r from-[#01241F] to-emerald-400 mt-4'></div>
          </div>

          {/* Description */}
          <p className='text-gray-600 text-lg leading-relaxed mb-8'>
            SafariLink ISP offers a diverse array of solutions and products in collaboration with industry-leading companies worldwide, delivering cutting-edge technologies in networking and information security. We pride ourselves on crafting a comprehensive suite of solutions that directly address the pressing challenges within Africa's IT sector, empowering enterprises and businesses to enhance efficiency and reliability.
          </p>

          {/* CTA Button */}
          <Link to="/services" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl">
            <span className="absolute inset-0 bg-gradient-to-r from-[#01241F] via-[#023028] to-[#01241F] transition-transform duration-500"></span>
            <span className="relative flex items-center justify-center w-full py-3 px-8 text-white text-lg font-medium transition duration-300 ease-in-out group-hover:tracking-wider">
              <span className="mr-2">Discover More</span>
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
        </motion.div>
      </div>
    </section>
  );
}

export default memo(WhoWeAre);
