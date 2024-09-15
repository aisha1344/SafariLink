import React, { memo } from 'react';
import aboutImage from "../../assets/images/main.jpg";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <section className='bg-[#ffffff] py-4  h-[100%] px-8 md:px-16'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: {
              type: "spring",
              stiffness: 50,
            },
            opacity: { duration: 0.8 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className='flex justify-center items-center'
        >
          <img
            className='hidden md:block w-full '
            src={aboutImage}
            alt="Who We Are"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
         initial={{ x: 100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{
           delay: 0.2,
           x: {
             type: "spring",
             stiffness: 50,
           },
           opacity: { duration: 0.8 },
           ease: "easeInOut",
         }}
         viewport={{ once: true }} 
        
        className='mt-8'>
          <h3 className='text-primary text-4xl md:text-5xl mb-6'>Who We Are</h3>
          <p className=' font-roboto  text-[1rem] md:text-[1.3rem] mb-4 text-[#646464] font-normal'>
            SafariLink ISP offers a diverse array of solutions and products in collaboration with industry-leading companies worldwide, delivering cutting-edge technologies in networking and information security. We pride ourselves on crafting a comprehensive suite of solutions that directly address the pressing challenges within Africa's IT sector, empowering enterprises and businesses to enhance efficiency and reliability.
          </p>
          <Link to="/services"> 
          <button className='bg-secondary py-2 px-6 rounded-lg text-white mt-6 transition duration-300 ease-in-out hover:bg-secondary-dark'>
            Discover More
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(WhoWeAre);
