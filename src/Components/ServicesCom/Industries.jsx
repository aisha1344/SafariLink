import React from 'react';
import { motion } from 'framer-motion';
import { indusry } from '../../assets/data/data';

const Industries = () => {
  return (
    <section className='bg-gray-100 py-8 h-[100%]'>
      <div className='p-4 text-center'>
        <h3 className='bg-gradient-to-tl from-primary to-secondary text-transparent bg-clip-text mt-6 text-7xl mb-6 font-sans font-light'>
          Industries we serve
        </h3>
        <p className='text-[1.1rem] text-[#797979] md:w-[50%] md:mx-auto'>
          Take control of your devices from anywhere in the world with our intuitive platforms designed to streamline monitoring, troubleshooting, and updates.
        </p>
      </div>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left mt-10 px-6 md:px-0'>
        {indusry.map(({ title, icons, discription }, index) => (
          <motion.div
            className='bg-white mt-6 flex justify-evenly items-center p-3 text-left md:p-5 rounded-md md:rounded-lg shadow-md'
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05}}
          >
            <span className='text-5xl text-primary'>
              {icons}
            </span>
            <div className='md:ml-1 ml-3'>
              <h3 className='text-3xl md:text-3xl text-secondary mb-4'>
                {title}
              </h3>
              <p className='text-[1.1rem] text-[#797979] line-clamp-3 sm:line-clamp-none w-56'>
                {discription}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
