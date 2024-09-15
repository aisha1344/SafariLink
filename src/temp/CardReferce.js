import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CardReferce = ({ title, discription, image, link }) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row overflow-hidden md:gap-8">
        <motion.img
          className="w-[100%] h-[100%] md:w-[60rem] md:h-[35rem]"
          src={image}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="py-8 md:w-[39%]  flex flex-col items-center w-[100%] px-4 sm:px-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-primary text-2xl mt-10 mb-4">SafariLink ISP</h4>
          <h2 className="text-4xl font-light mb-4 md:w-[30rem] text-center">
            {title}
          </h2>
          <p className="text-gray-700 text-[1rem] md:text-xl  text-center ">
            {discription}
          </p>
          <Link to={link}>
          <motion.button
              className="bg-gradient-to-r from-[#3752a3] to-[#096976] py-3 px-16 rounded-lg mt-12 text-white w-full md:w-56"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CardReferce;
