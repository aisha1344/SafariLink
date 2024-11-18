import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-xl bg-primary/10 p-6 md:p-10 
            hover:bg-secondary/5 transition-colors duration-300 hover:shadow-md "
        >
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="max-w-lg">
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-4">
                Join Our Team
              </h3>
              <p className="text-gray-600 text-lg md:text-xl">
                Explore exciting career opportunities at SafariLink ISP and be part of our dynamic team driving digital transformation.
              </p>
            </div>
            
            <Link to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
                bg-secondary/10 hover:bg-primary/20 transition-all duration-300 group-hover:translate-x-2"
            >
              <span className="text-primary font-medium mr-2 text-lg md:text-xl">Join Now</span>
              <IoIosArrowForward className="text-xl md:text-2xl text-primary" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;
