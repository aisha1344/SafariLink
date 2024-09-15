import React from 'react';
import { motion } from 'framer-motion';
import { FaSlideshare } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';

const Features = () => {
  return (
    <section className='my-10 md:p-6 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8'>
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className='text-primary text-5xl'>
            <MdOutlineSupportAgent />
          </span>
          <h3 className='mt-3 text-secondary text-[1.5rem]'>
            Quick support
          </h3>
          <p className='text-[1.1rem] text-[#929292] mt-3 text-center w-72 md:w-80'>
            We provide both remote and onsite quick support for users.
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className='text-primary text-5xl'>
            <GiTeamIdea />
          </span>
          <h3 className='mt-3 text-secondary text-[1.5rem]'>
            Reliable team
          </h3>
          <p className='text-[1.1rem] text-[#929292] mt-3 w-72 text-center md:w-80'>
            We have a great team of experienced network engineers.
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className='text-primary text-5xl'>
            <FaSlideshare />
          </span>
          <h3 className='mt-3 text-secondary text-[1.5rem]'>
            Your Partner
          </h3>
          <p className='text-[1.1rem] text-[#929292] mt-3 w-72 text-center md:w-80'>
            SafariLink ISP is the authorized Seller and Re-seller products in africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
