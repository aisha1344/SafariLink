import React from "react";
import aboutImage from "../../assets/images/network.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCom = () => {
  return (
    <section className="bg-[#FEFEFE] mt md:mt-12 py-4">
      <motion.h3
        className="text-primary text-5xl text-center  pt-6 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h3>
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img className="hidden sm:block" src={aboutImage} alt="Network" />
        </motion.div>
        {/* text */}
        <motion.div
          className="py-0 px-4 sm:p-6 text-center sm:text-left md:mt-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-2xl mb-5 text-center sm:text-left hidden sm:block">
            WHO WE ARE
          </h2>
          <h3 className="text-4xl bg-gradient-to-r from-[#096976ea] to-[#3752a3] bg-clip-text text-transparent mb-5 text-center sm:text-left ">
            Your Trusted Partner
          </h3>
          <p className="text-gray-500 mb-12 text-[1.2rem] font-light sm:w-[26rem] lg:w-[34rem]  text-center sm:text-left">
          SafariLink ISP is dedicated to delivering a diverse range of cutting-edge ISP solutions that cater to the unique needs of our clients. We achieve this through continuous innovation, fostering strong partnerships, and providing exceptional customer service. We strive to bridge the digital divide in Africa and contribute to a more connected and empowered future
          </p>
          <Link to="/services">
          <motion.button
            className="bg-gradient-to-r from-[#3752a3] to-[#096976ea] py-3 px-16 rounded-lg mt-4 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCom;
