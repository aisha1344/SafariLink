import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Join Our Team */}
        <motion.div
          className="bg-gradient-to-r from-[#3752a386] to-[#0969768c] p-8 md:p-12 text-[#fff] h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-12 gap-6 items-center mt-14">
            <div className="col-span-9">
              <h3 className="text-4xl mb-4">Join Our Team</h3>
              <p className="text-xl ">
                Explore exciting career opportunities at SafariLink ISP and be part of our dynamic team driving digital transformation.
              </p>
            </div>
            <motion.div
              className="col-span-3 text-6xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, yoyo: Infinity }}
            >
              <Link to="/contact">
                <IoIosArrowForward />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Newsletter */}
        <motion.div
          className="bg-gradient-to-r from-[#3752a33b] to-[#09697636] py-8 px-6 md:px-24 text-[#1d1d1d] h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="grid grid-cols-12 gap-6 items-center mt-14">
            <div className="col-span-9">
              <h3 className="text-4xl mb-4">Our Newsletter</h3>
              <p className="text-xl text-[#494848] ">
                Get ahead with SafariLink ISP's newsletter! Stay updated on tech trends, industry insights, and insider tips. 
              </p>
            </div>
            <motion.div
              className="col-span-3 text-6xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, yoyo: Infinity }}
            >
              <Link to="/">
                <IoIosArrowForward />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;
