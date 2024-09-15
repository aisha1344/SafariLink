import React from 'react';
import { motion } from 'framer-motion';

const UserExperience = () => {
  return (
    <motion.section 
      className='bg-[#141414] text-white py-8 px-1 md:p-8'
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
      }}
    >
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            className=''
            src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/customer-support-01.png?w=960&ssl=1" 
            alt="" 
          />
        </motion.div>
        
        <motion.div 
          className="p-6 md:p-16 flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl mb-4">USER-FRIENDLY</h3>
          <h5 className="text-5xl md:w-48 mb-4">Expert Customer Support</h5>
          <p className='text-[1.2rem] text-[#f0efef] md:w-96'>
            Gain access to our dedicated support team, ready to assist you with any inquiries or challenges you encounter along the way.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default UserExperience;
