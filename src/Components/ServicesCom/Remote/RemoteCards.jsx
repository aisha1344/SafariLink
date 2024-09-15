import React from "react";
import { motion } from "framer-motion";

const RemoteCards = () => {
  return (
    <motion.section 
      className="bg-[#2e2e2e] text-white  p-2 md:p-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
      }}
    >
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            className="w-[90%] mx-auto"
            src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/Cloud-Computing-Technology-Illustrations-1.png?w=960&ssl=1" 
            alt="" 
          />
        </motion.div>

        <motion.div 
          className="p-8 md:p-16 flex-col items-center md:mt-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl mb-4">WE ARE HERE</h3>
          <h5 className="text-4xl sm:text-5xl md:w-48 mb-4">Confidence in Your Infrastructure Management</h5>
          <p className="text-xl md:text-2xl font-sans font-light md:w-[30rem] text-[#e4e4e4]">
            Rely on our robust platforms and expert support for secure, reliable
            management.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RemoteCards;
