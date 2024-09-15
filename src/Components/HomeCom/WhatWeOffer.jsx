import React from "react";
import { services } from "../../assets/data/data";
import { motion } from "framer-motion";
const WhatWeOffer = () => {
  return (
    <section className="overflow-hidden h-[100%] mt-5 mb-8">
      <div className=" bg-[#f5f4f4]  p-6 md:p-16  text-center ">
        <div className=" ">
          <h3 className="text-4xl text-primary mb-6 ">
            We Offer best{" "}
            <span className="text-[#000000]">digital network devices</span>{" "}
          </h3>
          <p className=" md:w-[70%] md:mx-auto flex-row items-center text-[#616161] text-[1rem] md:text-[1.3rem] mb-10">
            Our team of experts specializes in providing the latest digital
            devices for businesses, including switches and routers. We
            understand the importance of reliable and high-quality equipment,
            and we strive to deliver top-notch solutions that meet your specific
            needs.
          </p>
        </div>
      </div>
      {/* services */}
      <div className="bg-white lg:bg-secondary lg:h-72 p-8  sm:p-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* service */}
        {services.map(({icons,title,discription},index) => {
          return (
            <motion.div key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileInView={{ opacity: 1 }} 
            className="bg-white p-4 lg:mt-[-6rem] shadow-2xl">
              <span className="text-primary text-5xl">
                {icons}
              </span>
              <h2 className="mt-3 text-[#000000] text-2xl mb-3">
               {title}
              </h2>
              <p className="text-[#646464] text-[1.1rem] ">
                {discription}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOffer;
