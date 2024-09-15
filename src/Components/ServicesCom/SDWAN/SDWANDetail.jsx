import React from "react";
import { motion } from "framer-motion";
import NavBar from "../../HomeCom/NavBar";
import Products from "../Products";
import SDWANCards from "./SDWANCards";
import Join from "../../HomeCom/Join";
import Footer from "../../HomeCom/Footer";

const SDWANDetail = () => {
  return (
    <>
      <NavBar />
      <section className="mt-8 md:mt-32">
        <div className="container m-auto p-4 text-center my-16">
          <motion.h4
            className="text-[#313131] text-3xl md:text-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            SafariLink ISP
          </motion.h4>
          <motion.h2
            className="bg-gradient-to-r from-[#096976] to-[#3752a3] text-transparent bg-clip-text text-5xl md:text-7xl font-roboto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Unbreakable <br /> Partnership
          </motion.h2>
          <motion.p
            className="text-[#918f8f] text-[1.1rem] md:text-[1.3rem] md:w-[70%] md:m-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            SafariLink ISP leverages Peplink devices to provide robust and scalable Enterprise-Level SD-WAN Solutions tailored to the needs of businesses across East Africa.
          </motion.p>
        </div>
        <Products />
        <SDWANCards />
        <Join />
        <Footer />
      </section>
    </>
  );
};

export default SDWANDetail;
