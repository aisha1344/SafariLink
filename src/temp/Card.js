import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ title, discription, image, link }) => {
  return (
    <section className="mb-4 overflow-hidden">
      <motion.div 
        className="flex flex-col lg:flex-row lg:gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full sm:pt-16  px-2 sm:px-2 mb-14 md:px-16 flex flex-col  text-left md:text-left  lg:items-left">
        <h4 className="text-primary text-2xl mt-10 mb-4 text-center md:text-left">SafariLink ISP</h4>
          <motion.h2
            className="text-4xl font-light text-center  md:text-left mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-[#161616] text-[1rem] md:text-[1.3rem] px-2 md:px-0 text-center md:text-left "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {discription}
          </motion.p>
          <Link to={link}>
            <motion.button
              className="bg-gradient-to-r from-[#3752a3] to-[#096976] py-3 px-16 rounded-lg mt-12 text-white w-full md:w-56"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </Link>
        </div>
        <motion.img
          className="w-[100%] h-[100%] lg:w-[50rem] lg:h-[35rem]"
          src={image}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
};

export default Card;
