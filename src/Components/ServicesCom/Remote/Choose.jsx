import React from 'react';
import { motion } from 'framer-motion';

const Choose = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      className='my-8'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className='container m-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-7 md:px-16'
      >
        <motion.div variants={itemVariants}>
          <img
            className='h-full hidden md:block'
            src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-6.png?w=960&ssl=1" alt="" />
        </motion.div>
        <motion.div className='py-6' variants={itemVariants}>
          <h3 className='text-[#888] text-xl mb-4'>Choose SafariLink ISP</h3>
          <h4 className='text-[#353535] text-4xl font-light mb-4'>
            Remote <br /> Management
          </h4>

          <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-4 text-2xl text-[#0e0e0e]' variants={itemVariants}>
            <h3>Remote<br /> Monitoring</h3>
            <h3>Troubleshooting <br />Made Easy</h3>
            <h3>Effortless<br /> Updates</h3>
          </motion.div>
          
          {/* line */}
          <motion.div className='bg-gradient-to-r from-[#262627] to-[#096976be] h-[.1rem] mb-5' variants={itemVariants}></motion.div>
          <motion.p className='text-[#888] text-[1.2rem]' variants={itemVariants}>
            Keep an eye on your devices in real-time, ensuring optimal performance and security across your infrastructure.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Choose;
