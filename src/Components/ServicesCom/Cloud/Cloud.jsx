import React from 'react';
import { motion } from 'framer-motion';

const CloudCard = () => {
  return (
    <section className='py-16 bg-[#1b1b1b]'>
      <motion.h1
        className='text-[#fff] text-4xl text-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Cloud Solutions Powered by AWS
      </motion.h1>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
        <motion.div
          className='p-4'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            className='w-[100%] md:w-[80%]'
            src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-6.png?w=960&ssl=1" alt="" />
        </motion.div>
        <motion.div
          className="p-8 md:py-16 md:px-20 text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className='text-[#fff] text-4xl mb-4'>Cloud Infrastructure <br/>Services</h3>
          <p className='text-[1.2rem] text-gray-100 line-clamp-6 md:line-clamp-none md:w-80'>
            Build a scalable and resilient cloud infrastructure with SafariLink ISP's Cloud Infrastructure Services. Our experts will help you design, deploy, and manage cloud environments tailored to your organization's unique requirements. From virtual servers to storage solutions, we've got you covered.
          </p>
        </motion.div>
      </div>

      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="p-8 md:py-16 md:px-20 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className='text-[#fff] text-3xl mb-4'>Data Analytics and Business<br/> Intelligence</h3>
          <p className='text-[1.2rem] text-gray-100 md:w-96 line-clamp-6 md:line-clamp-none'>
            Harness the power of data with SafariLink ISP's Data Analytics and Business Intelligence solutions. Utilize AWS's advanced analytics tools to gain valuable insights from your data, drive informed decision-making, and uncover new business opportunities. From data warehousing to machine learning, we'll help you extract maximum value from your data assets.
          </p>
        </motion.div>
        <motion.div
          className='m-auto'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img
            className='w-[80%]'
            src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-4.png?w=960&ssl=1" alt="" />
        </motion.div>
      </div>

      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5 mt-7">
        <motion.div
          className='p-4'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <img 
            className='w-[100%] md:w-[80%]'
            src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-2.png?w=960&ssl=1" alt="" />
        </motion.div>
        <motion.div
          className="p-8 md:py-16 md:px-20 text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className='text-[#fff] text-4xl mb-4'>Disaster Recovery<br/> Solutions</h3>
          <p className='text-[1.2rem] text-gray-100 md:w-80 line-clamp-6 md:line-clamp-none'>
            Ensure business continuity and data protection with SafariLink ISP’s Disaster Recovery Solutions. Leverage AWS’s robust infrastructure to replicate and back up critical data, applications, and workloads. Our disaster recovery plans are designed to minimize downtime and keep your business running smoothly, even in unexpected disruptions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudCard;
