import React from 'react';
import { motion } from 'framer-motion';

const ServicesCom = () => {
  return (
    <section className='mt-32'>
      <motion.div 
        className='container m-auto text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className='text-[#969696] text-xl md:text-3xl mb-6'>
          SafariLink ISP
        </h3>
        <h4 className='bg-gradient-to-r from-[#096976] to-[#3752a3fb] text-transparent bg-clip-text text-3xl md:text-6xl font-light mb-6'>
          Cutting-edge <br /> connectivity solutions
        </h4>
        <p className='lg:w-[50%] lg:ml-[25%] text-[1.2rem] md:text-[1.3rem] text-gray-500 px-4 md:px-0 '>
          Empower your business with cutting-edge connectivity solutions from SafariLink ISP. Our innovative services are tailored to meet the unique needs of businesses and communities across East Africa. Explore how we can elevate your connectivity experience.
        </p>
      </motion.div>
    </section>
  );
}

export default ServicesCom;
