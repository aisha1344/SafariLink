import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../../assets/images/her-img.jpg"
const Hero = () => {
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="px-4 py-16 mt-8 sm:mt-5 md:mt-8 lg:mt-12 md:py-8 md:px-16 h-[100%]"
    >
      <div className="container mx-auto grid px-2 grid-cols-1 lg:grid-cols-2 gap-10 pt-8 md:pt-10">
        {/* Text Hero */}
        <div className=" sm:mt-10 ">
          <h2 className="text-4xl md:text-6xl mt-5 md:mt-8 font-light mb-8 text-primary  md:w-[35rem] ">
            Your Trusted Digital Partner
          </h2>
          <p className="text-[1.3rem] text-[#474747] font-poppins font-light  text-left line-clamp-6 sm:line-clamp-none">
          SafariLink ISP is dedicated to delivering a diverse range of cutting-edge ISP solutions that cater to the unique needs of our clients. We achieve this through continuous innovation, fostering strong partnerships, and providing exceptional customer service. We strive to bridge the digital divide in Africa and contribute to a more connected and empowered future.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16 mt-14 sm:mt-10 md:mt-6 text-center">
            <Link to='/contact' className="bg-primary text-[1.2rem]  py-2 text-white rounded-xl hover:bg-white hover:border-2 hover:border-primary hover:text-primary transition duration-300 ease-in-out">
            <button>
              Contact
            </button>
            </Link>
            <Link to='/about' className="bg-white text-[1.2rem] py-2  text-primary rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            <button >
              Learn More
            </button>
            </Link>
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-[45rem]">
          <img
            className="  hidden lg:block"
            src={hero}
            alt="Hero"
          />
          
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Hero);
