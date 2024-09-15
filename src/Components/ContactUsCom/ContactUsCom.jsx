import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const ContactUsCom = () => {
  return (
    <section className=' py-16  sm:mt-28 md:py-4 md:px-16'>
      <motion.div 
        className='container m-auto grid grid-cols-1 lg:grid-cols-2 gap-8'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        {/* Contact text */}
        <motion.div 
          className='p-10'
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <h3 className='text-primary text-4xl mb-4'>Contact Us</h3>
          <p className='text-[#1b1b1b] text-[1.2rem] md:text-[1.4rem] font-light mb-8 '>
          SafariLink ISP is your trusted partner in technological innovation and connectivity solutions across East Africa, committed to empowering businesses and fostering a collaborative ecosystem that drives progress and innovation across the continent.
          </p>
          <div>
            <h4 className='mb-4 sm:mb-8 text-[#bebebe] flex flex-row gap-4 text-[1rem] sm:text-[1.4rem]'>
              <span className='text-primary text-3xl'>
                <MdEmail />
              </span>
              info@safarilink.so
            </h4>
            <h4 className='mb-4 text-[#bebebe] flex flex-row gap-4 text-[1rem] sm:text-[1.4rem]'>
              <span className='text-primary text-3xl'>
                <BiPhone />
              </span>
              +252 61 100 6835
            </h4>
          </div>
        </motion.div>

        <ContactForm/>
      </motion.div>
    </section>
  );
}

export default ContactUsCom;
