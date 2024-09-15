import React from 'react';
import { motion } from 'framer-motion';
import networkImage from '../../assets/images/network-devices.jpg';

const OurVission = () => {
  return (
    <section className='my-8'>
      <div className='container m-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 px-8'>
        
        <motion.div 
          className='py-6'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-primary text-2xl mb-4'>OUR VISION</h3>
          <h4 className='text-[#353535] text-4xl font-light mb-4'>
            SafariLink ISP Digital <br /> Evolution
          </h4>
          <div className='bg-gradient-to-r from-[#3752a3d5] to-[#096976be] h-[.2rem] mb-6'></div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 text-xl text-[#383838]'>
            <h3>Bridging Technological Gaps</h3>
            <h3>Elevating Connectivity Standards</h3>
            <h3>Leading Africa's Digital Revolution</h3>
          </div>

          {/* line */}
          <p className='text-[#888] text-[1.2rem]'>
            We strive to elevate connectivity standards by leveraging cutting-edge technologies and strategic partnerships, setting new benchmarks for reliability, efficiency, and accessibility.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className='w-full h-full hidden md:block'
            src={networkImage} alt="Network devices"
          />
        </motion.div>
        
      </div>
    </section>
  );
}

export default OurVission;
